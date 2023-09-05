<script setup>
import PreBlog from './PreBlog.vue';
import { ref, onMounted } from 'vue';

// 在omMounted里向接口发送请求得到用户的所有文章，然后将文章数据通过prop发送给组件，
const articleInfo = ref([
    {
        id: 1, //文章id
        title: '文章标题',  // 文章标题
        description: '这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1这是文章1', // 简短介绍
        likes: 66,  // 点赞数
        views: 666,  // 浏览数
        publishTime: '2023-11-23', //发布时间
        image: '',  // 图片
    },
    {
        id: 2, //文章id
        title: '文章标题',  // 文章标题
        description: '这是文章2', // 简短介绍
        likes: 66,  // 点赞数
        views: 666,  // 浏览数
        publishTime: '2023-01-01', //发布时间
        image: '',  // 图片
    },
    {
        id: 3, //文章id
        title: '文章标题',  // 文章标题
        description: '这是文章3', // 简短介绍
        likes: 66,  // 点赞数
        views: 666,  // 浏览数
        publishTime: '2023-01-24', //发布时间
        image: '',  // 图片
    },
    {
        id: 4, //文章id
        title: '文章标题',  // 文章标题
        description: '这是文章4', // 简短介绍
        likes: 66,  // 点赞数
        views: 666,  // 浏览数
        publishTime: '2023-11-23', //发布时间
        image: '',  // 图片
    },
    {
        id: 5, //文章id
        title: '文章标题',  // 文章标题
        description: '这是文章5', // 简短介绍
        likes: 66,  // 点赞数
        views: 666,  // 浏览数
        publishTime: '2023-11-23', //发布时间
        image: '',  // 图片
    },
    {
        id: 6, //文章id
        title: '文章标题',  // 文章标题
        description: '这是文章6', // 简短介绍
        likes: 66,  // 点赞数
        views: 666,  // 浏览数
        publishTime: '2023-11-23', //发布时间
        image: '',  // 图片
    },
])

const totalPage = ref([]) // 所有分页的数据，每一个分页的数据为数组中的一项
const pageSize = 5 // 每页显示文章数量
const pageNum = ref(1)  // 共几页 = 所有数据/每页现实数量     
const articleShow = ref([]) // 当前显示的数据  
const currentPageNum = ref(0) // 默认当前显示第一页


// 方法
// “下一页”回调函数
const nextPage = () => {
    // 处于最后一页则不跳转
    if (currentPageNum.value === pageNum.value - 1) return;
    articleShow.value = totalPage.value[++currentPageNum.value];

}

// “上一页”回调函数
const prePage = () => {
    // 处于第一页则不跳转
    if (currentPageNum.value === 0) return;
    articleShow.value = totalPage.value[--currentPageNum.value];
}

// “点击页码”回调函数
const page = (index) => {
    // currentPageNum.value = index
    // articleShow.value = totalPage.value[index - 1];
    currentPageNum.value = index - 1
    articleShow.value = totalPage.value[index - 1];
}


onMounted(() => {
    // 计算有多少页数据，默认为1
    pageNum.value = Math.ceil(articleInfo.value.length / pageSize) || 1

    // 循环页面
    for (let i = 0; i < pageNum.value; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
        totalPage.value[i] = articleInfo.value.slice(pageSize * i, pageSize * (i + 1))
    }

    // 获取到数据后默认显示第一页内容
    articleShow.value = totalPage.value[currentPageNum.value];
})
</script>

<template>
    <div id="content" class="site-content">
        <div id="primary" class="content-area">
            <!-- 文章部分 -->
            <h1 id="scroll-element" class="main-title no-select" style="font-family: 'Ubuntu', sans-serif;"><i
                    class="iconfont icon-shujia" aria-hidden="true"></i> 我的帖子</h1>

            <!-- 展示的数据 -->
            <!-- v-if 和 v-else 多模版渲染（是否发布过文章） -->
            <template v-if="articleInfo.length == 0">
                <el-empty description="你还没有发布文章哦" />
            </template>
            <template v-else>
                <div>
                    <PreBlog v-for="article in articleShow" :article="article" :key="article.id" />
                </div>

                <div style="color: #fff;">
                    占位符(没有这个的话下面的页码导航栏无法定位)
                </div>

                <!-- 页码导航栏 -->
                <div class="pagination">
                    <input class="prev" type="button" value="上一页" @click="prePage">
                    <span v-for="index in pageNum" @click="page(index)" class="page"
                        :class="{ current: currentPageNum == index - 1 }">{{ index
                        }}</span>
                    <input class="next" type="button" value="下一页" @click="nextPage">
                </div>
            </template>


        </div>
    </div>
</template>

<style scoped>
.site-content {
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, .8)
}

/* 处理浮动元素引起的布局问题 */
/* .site-content:before {
    content: "";
    display: table;
    table-layout: fixed
}

.site-content:after {
    clear: both;
} */


/* “我的帖子“导航栏区域样式 */
h1.fes-title,
h1.main-title {
    color: #666;
    font-size: 16px;
    font-weight: 400;
    padding-left: 20px;
    padding-right: 150px;
    padding-bottom: 5px;
    margin-bottom: 30px;
    border-bottom: 1px dashed #ececec
}


/* 整体页码导航栏样式 */
.pagination {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

/* 上一页和下一页按钮样式 */
.pagination .prev,
.pagination .next {
    margin: 0 10px;
    padding: 5px 10px;
    background-color: rgb(66, 185, 131);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pagination .prev:hover,
.pagination .next:hover {
    background-color: rgb(66, 185, 131);
}

/* 页码按钮样式 */
.pagination .page {
    margin: 0 6px;
    padding: 5px 10px;
    background-color: #ecf0f1;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pagination .page:hover {
    background-color: #d5dbdb;
}

/* 当前页码样式 */
.pagination .current {
    background-color: rgb(66, 185, 131);
    color: #fff;
}
</style>