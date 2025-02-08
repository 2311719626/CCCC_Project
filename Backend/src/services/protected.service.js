/**
 * 内部服务
 */

const fs = require('node:fs')
const path = require('node:path')
const {picgo} = require('../config/picgo.config.js')
const { Landscape } = require("../models/landscapes.model");

//内部主页服务
const getmainpage = async ()=>{
    const pagefile = path.join(__dirname,"..","..","public/index.html")
    if(!fs.existsSync(pagefile)){
        let error = new Error("主页不存在")
        error.status=404
        throw error;
    }else{
        return pagefile
    }
}

//内部上传页面
const getuploadpage = async ()=>{
    const pagefile = path.join(__dirname,"..","..","public/upload.html")
    if(!fs.existsSync(pagefile)){
        let error = new Error("上传页不存在")
        error.status = 404
        throw error
    }else{
        return pagefile
    }
}

//picgo上传
const upload = async (item)=>{
    //上传图片
    const remoteImages = await picgo.upload(item.image)
    const images = remoteImages.map(img=>img.imgUrl)

    //查询数据库是否存在当前信息的山水
    const curview = await Landscape.findOne({
        name: item.tag,
        category: item.category
    })
    if(curview){
        curview.image.push(...images)
        const view = await curview.save()
        return {
           name: view.name,
           category: view.category,
           images: view.image
        }
    }
    else{
        const view = await Landscape.create({
            name: item.tag,
            category: item.category,
            image: images
        })
        return view;
    }
}

module.exports = {
    getmainpage,
    getuploadpage,
    upload,
}