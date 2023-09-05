import request from "/src//services/request.js";
/**
 * 获取文章信息
 * @param id 文章id
 */
export async function getArticle(id) {
  try {
    return await request.get(`/articles/${id}`);
  } catch (e) {
    return {};
  }
}

/**
 * 点赞文章
 * @param id 文章id
 * */
export async function likeArticle(action,id){
	return request.post(`/article/${id}`,action);
}