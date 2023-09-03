import request from "/src/services/request.js";
import { message } from 'ant-design-vue';
/**
 * WS0201 上传文件
 * @param file
 */
export async function uploadFile (file) {
  let ans = ''
  const formData = new FormData()
  formData.append('file', file)
  await request.post('/website/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    message.success('成功上传文件')
    ans = res.url
  })
  return ans
}

/**
 * WS0202 删除文件
 */
export function deleteFile (url) {
  return request.del('/website/files', { url }).then(() => {
    message.success('成功删除文件')
  })
}