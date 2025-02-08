/**
 * 内部控制器
 */

const protectedService = require('../services/protected.service.js')
const {logger} = require('../utils/log.util.js')
const path = require('node:path')

//获取内部主页
exports.getmainpage = async (req,res,next)=>{
    try {
        logger.info("Protected: GET main page")
        let result =await protectedService.getmainpage()
        if(result){
            res.status(200).sendFile(result)
        }
    } catch (err) {
        next(err)
    }
}

//picgo上传页面
exports.getuploadpage = async (req,res,next)=>{
    try {
        logger.info("Protected: GET upload page")
        let result =await protectedService.getuploadpage()
        if(result){
            res.status(200).sendFile(path.resolve(result))
        }
    } catch (err) {
        next(err)
    }
}

//picgo上传处理
exports.upload = async (req,res,next)=>{
    try {
        const item = {
            category: req.body.category,
            tag: req.body.tag,
            image: req.files.map(img => img.path) //获取所有本地上传图片
        }
        logger.info("上传信息: "+JSON.stringify(item))
        let result =await protectedService.upload(item)
        if(result){
            res.status(200).json({
                code: 0,
                msg: "上传成功",
                data: {...result}
            })
        }
    } catch (err) {
        res.status(500).json({
            code: 1,
            msg: "上传失败",
            data: {}
        })
    }
}