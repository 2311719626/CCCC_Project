/**
 * 配置picgo方法
 */
const {PicGo} = require('picgo')
const path = require('node:path')
const PICBED_CONFIG=path.join(__dirname,"picbed.github.json")

const picgo = new PicGo(PICBED_CONFIG)

module.exports = {
    picgo
}

