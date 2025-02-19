/**
 * 用户服务
 */

const { User } = require("../models/users.model.js");
const { Blog } = require("../models/blogs.model.js");
const { userFavorites } = require("../models/userFavorites.model.js");
const { UserFavorite } = require("../models/userFavorites.model.js");
const { Landscape } = require("../models/landscapes.model.js");
const handle = require("../handles/global.handle.js");

/* 用户注册服务 */
exports.usersRegister = async (user) => {
  try {
    // 查找是否存在重复注册数据
    const existuser = await User.findOne({
      username: user.username,
      email: user.email,
    });
    if (existuser) {
      throw new handle.AppError(
        handle.ERROR_MESSAGE.USER.USERNAME_OR_EMAIL_EXIST,
        400
      );
    }
    //注册成功，保存新用户信息
    const registeduser = await User.create(user);
    return registeduser;
  } catch (err) {
    throw new handle.AppError(
      handle.ERROR_MESSAGE.USER.REGISTRATION_FAILED,
      500
    );
  }
};

/* 用户登录服务 */
exports.usersLogin = async (user) => {
  try {
    // 查找用户是否存在
    const loginuser = await User.findOne({
      username: user.username,
    });
    if (!loginuser) {
      throw new handle.AppError(handle.ERROR_MESSAGE.USER.USER_NOT_EXIST, 400);
    }
    if (loginuser.password !== user.password) {
      throw new handle.AppError(handle.ERROR_MESSAGE.USER.PASSWORD_WRONG, 401);
    }
    return loginuser;
  } catch (err) {
    throw new handle.AppError(handle.ERROR_MESSAGE.USER.LOGIN_FAILED, 500);
  }
};

/* 用户详细信息获取 */
exports.userInfo = async (userinfo) => {
  try {
    const user = await User.findOne({
      username: userinfo.username,
      email: userinfo.email,
    });
    if (!user) {
      throw new handle.AppError(handle.ERROR_MESSAGE.USER.USER_NOT_EXIST, 400);
    }
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      bio: user.bio,
    };
  } catch (err) {
    throw new handle.AppError(
      handle.ERROR_MESSAGE.USER.USER_INFO_GET_FAILED,
      500
    );
  }
};

/* 更新用户信息 */
exports.userInfoUpdate = async (updateinfo) => {
  try {
    const query = {
      username: updateinfo.oldname,
      email: updateinfo.oldemail,
    };
    const update = {
      username: updateinfo.username,
      email: updateinfo.email,
      avatar: updateinfo.avatar,
      bio: updateinfo.bio,
    };
    const udpateduser = await User.findOneAndUpdate(query, update, {
      new: true,
      upsert: true,
    });
    if (udpateduser) {
      return {
        username: udpateduser.username,
        email: udpateduser.email,
        avatar: udpateduser.avatar,
        bio: udpateduser.bio,
      };
    }
  } catch (err) {
    throw new handle.AppError(
      handle.ERROR_MESSAGE.USER.USER_INFO_UPDATE_FAILED,
      500
    );
  }
};

/* 修改用户密码 */
exports.userUpdatePassword = async (updatepassword, updateuser) => {
  try {
    const user = await User.findOne(updateuser);
    if (user && updatepassword.old_password === user.password) {
      user.password = updatepassword.new_password;
    } else {
      return false;
    }
    const updatepwuser = await user.save();
    if (updatepwuser) {
      return updatepwuser;
    }
  } catch (err) {
    throw new handle.AppError(
      handle.ERROR_MESSAGE.USER.PASSWORD_UPDATE_FAILED,
      500
    );
  }
};

/* 获取用户收藏列表 */
exports.userFavorites = async (currentuser) => {
  try {
    const user = await User.findOne({
      username: currentuser.username,
      email: currentuser.email,
    });
    if (!user) {
      throw new handle.AppError(handle.ERROR_MESSAGE.USER.USER_NOT_EXIST, 400);
    }

    const favorites = await UserFavorite.find({ user_id: user._id });
    const favorites_list = await Promise.all(
      favorites.map(async (fav) => {
        const landscapeDoc = await Landscape.findById(fav.landscape_id);
        return {
          user_id: fav.user_id,
          landscape: landscapeDoc,
          created_time: fav.created_time,
        };
      })
    );
    return favorites_list;
  } catch (err) {
    throw new handle.AppError(
      handle.ERROR_MESSAGE.USER.FAVORITES_GET_FAILED,
      500
    );
  }
};

/* 获取用户游记列表 */
exports.userBlogs = async (currentuser) => {
  try {
    // 首先查找用户
    const user = await User.findOne({
      username: currentuser.username,
      email: currentuser.email,
    });

    if (!user) {
      throw new handle.AppError(handle.ERROR_MESSAGE.USER.USER_NOT_EXIST, 400);
    }

    // 直接查询该用户的所有博客
    const blogs = await Blog.find({ user_id: user._id })
      .sort({ created_time: -1 })
      .populate("landscape_id", "name description images") // 关联查询景点信息
      .lean(); // 转换为普通JS对象

    return blogs;
  } catch (err) {
    throw new handle.AppError(handle.ERROR_MESSAGE.USER.BLOGS_GET_FAIELD, 500);
  }
};
