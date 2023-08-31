import request from "/src/services/request.js";

/**
 * AT0101 创建文章
 * @param article{{title:string,description:string,content:string,image:string}} 文章内容
 * @returns {Promise<unknown>}
 */
export async function createArticle(title,description,image,content) {
  return request.post('/article', {title,description,image,content});
}
