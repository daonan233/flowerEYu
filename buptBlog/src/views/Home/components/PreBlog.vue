<script setup>
import { dayjs } from 'element-plus';
import { computed } from 'vue'
// 接收props
const props = defineProps({
    article: {
        type: Object,
        // 给它个默认值
        default: () => { }
    },
})

// 日期的计算属性
let publishTime = computed(()=>{
    return dayjs(props.article.publishTime).format('YYYY年MM月DD日')
})

</script>

<template>
    <main id="main" class="site-main" role="main">
        <div class="site-content">
            <article class="post post-list post-list-show" itemscope="" itemtype="http://schema.org/BlogPosting">
                <!-- <article class="post post-list-thumb post-list-show" itemscope="" itemtype="http://schema.org/BlogPosting"> -->
                <div class="post-img">
                    <!-- <div class="post-thumb"> -->
                    <a href="这里是文章正文的超链接">
                        <!-- 图片区域，采用懒加载 -->
                        <img src="https://b3logfile.com/bing/20210711.jpg?imageView2/1/w/960/h/540/interlace/1/q/100">
                    </a>
                </div>
                <!-- <div class="post-content-wrap"> -->
                <div class="post-left-content">
                    <div class="post-content">
                        <div class="post-date no-select">
							我的帖子&nbsp;&nbsp;&nbsp;&nbsp;
							<!-- 帖子发布时间 -->
							<i class="iconfont icon-shizhong"></i>{{ publishTime }}
						</div>
                        <a href="这里是文章正文的超链接" class="post-title">
							<!-- 标题 -->
							<h3>{{ article.title }}</h3>
						</a>
                        <div class="post-meta">
							<!-- 浏览量 -->
							<span class="no-select"><i class="iconfont icon-liulan"></i>{{ article.views }} 浏览</span>
							&nbsp;&nbsp;&nbsp;&nbsp;
                            <!-- 点赞量 -->
							<span class="likes-number no-select"><i class="iconfont icon-icon"></i>{{ article.likes }}
								个点赞</span>
						</div>
                        <!-- <div class="float-content"> -->
                        <div class="description-content">
							<p>
								{{ article.description }}
							</p>
							<!-- 这里的post-bottom可以改为more -->
							<div class="post-bottom">
								<a href="这里是文章正文的超链接" class="button-normal"><i
										class="iconfont icon-a-gengduohengxiang"></i></a>
							</div>
						</div>
                    </div>
                </div>
            </article>

        </div>
    </main>
</template>

<style scoped>
/* 不允许被选中 */
.no-select {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.site-main {
    padding: 40px 0 0 0;
}

.site-content {
    max-width: 800px;
    width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, .8);
}

/* "我的帖子" 区域进入动画 */
.post-list-show {
    animation: post-list-show 1s;
    /* opacity: 1; */
}

/* 单个帖子整体布局 */
.post-list {
    float: left;
    width: 100%;
    height: 300px;
    position: relative;
    margin: 20px 0 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0 1px 20px -6px rgba(0, 0, 0, .5);
    /* opacity: 0; */
    transition: box-shadow .3s ease
}

.post-list i {
    margin-right: 5px;
    color: #989898;
    font-size: 14px
}

.post-list a {
    color: #504e4e
}

.post-list .post-title h3 {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-wrap: break-word
}

/* 帖子的图片部分样式 */
.post-img {
    float: right;
    width: 55%;
}

/* 帖子图片的缩放动效 */
.post-list:hover img {
    transform: scale(1.1)
}

.post-img a {
    height: 300px;
    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: 0 10px 10px 0
}

.post-img a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    transition: all .6s;
}

.post-left-content {
	position: relative;
	/* display: inline-block; */
	padding-right: 30px;
	padding-left: 0;
	width: 40%;
	/* margin: 20px 10px 0; */
	margin: 5px 5px 0

}

.post-content {
    position: relative;
    float: left;
	padding-left: 30px;
	padding-right: 0;
	margin: 20px 10px 10px 0
}

.post-date,.post-meta,.post-meta a {
	color: #888;
	font-size: 12px
}

/* 帖子的简介格式 */
.post p {
    min-height: 60px;
    margin: 0 0 0 17%;
    font-size: 15px;
    color: rgba(0, 0, 0, .66);
    letter-spacing: 0;
    line-height: 30px
}

.description-content {
	position: relative;
	width: 100%;
	right: 0;
	margin: 0;
	padding: 0;
	z-index: 50;
	color: rgba(0,0,0,.66)
}

.description-content i {
	font-size: 30px;
	color: #666
}

.description-content p {
    font: "Noto Serif SC";
    font-size: 14px;
    margin: 15px 0 0 5px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	height: 93px;
	overflow: hidden;
}

/* main区域动画---从下渐入 */
@keyframes post-list-show {
    0% {
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px)
    }

    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}
</style>