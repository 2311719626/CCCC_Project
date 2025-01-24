module.exports = {
  // JWT密钥
  secret: process.env.JWT_SECRET || "your-secret-key",

  // token过期时间
  jwtExpiration: 3600, // 1小时

  // token刷新时间
  jwtRefreshExpiration: 86400, // 24小时
};
