const { Poem } = require("../models/poems.model");

/**
 * 古诗词服务类
 * 处理与古诗词相关的业务逻辑
 */
class PoemService {
  /**
   * 获取所有古诗词列表
   * @returns {Promise<Array>} 返回古诗词数组，包含id、标题、内容、作者和朝代信息
   */
  async getPoems() {
    const poems = await Poem.find({}); // 不指定第二个参数，返回所有字段
    return poems;
  }
}

module.exports = new PoemService();
