<script setup>

// 接收props
defineProps({
    article:{
        type: Object,
        // 给它个默认值
        default:() => {}
    },
})

</script>

<template>
	<main id="main" class="site-main" role="main">
		<div class="site-content">
			<article class="post post-list-thumb post-list-show" itemscope="" itemtype="http://schema.org/BlogPosting">
				<div class="post-thumb">
					<a href="这里是文章正文的超链接">
						<!-- 图片区域，采用懒加载 -->
						<img class="lazyload" referrerpolicy="origin"
							src="https://b3logfile.com/bing/20210711.jpg?imageView2/1/w/960/h/540/interlace/1/q/100"
							onerror="imgError(this,3)"
							data-src="https://b3logfile.com/bing/20210711.jpg?imageView2/1/w/960/h/540/interlace/1/q/100">
					</a>
				</div>
				<div class="post-content-wrap">
					<div class="">
						<div class="post-date no-select">
							我的帖子&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<!-- 时间 -->
							<i class="iconfont icon-shizhong no-select"></i>2023年07月13日 20:25:48
						</div>
						<a href="这里是文章正文的超链接" class="post-title">
							<!-- 标题 -->
							<h3>{{ article.title }}</h3>
						</a>
						<div class="post-meta">
							<!-- 浏览量 -->
							<span class="no-select"><i class="iconfont icon-liulan"></i>{{ article.views }} 浏览</span>
							<!-- 点赞量 -->
							<span class="likes-number no-select"><i class="iconfont icon-icon"></i>{{ article.likes }}
								个点赞</span>
						</div>
						<div class="float-content">
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

<style>
.site-main {
	padding: 40px 0 0; /* 顶部留白 */
}

.site-content {
	max-width: 800px;
	padding: 0 10px;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(255,255,255,.8)
}

.post-content {
	font-size: 14px;
}

@media (max-width:860px) {
	.site-main {
		padding: 15px 0 0
	}
}

.post-list-thumb .post-list {
	animation: mainAnimation .6s;
}

/* .post-list-thumb,.post-list {
    animation: mainAnimation .6s;
} */

.post-list {
	margin: 0 0 8%;
	position: relative
}

.post-list-thumb i {
	margin-right: 5px;
	color: #989898;
	font-size: 14px
}

.post-list-thumb a {
	color: #504e4e
}

.post-list-thumb .post-title h3 {
	text-overflow: ellipsis;
	/* 如果文本溢出，将使用省略号来表示 */
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	word-wrap: break-word
}

/* 悬停在文章标题上时显示绿色 */
.post-title a:hover {
	color: rgb(66, 185, 131);
}

.post-date,
.post-meta,
.post-meta a {
	color: #888;
	font-size: 12px
}

.post-list p {
	min-height: 60px;
	margin: 0 0 0 17%;
	font-size: 15px;
	color: rgba(0, 0, 0, .66);
	letter-spacing: 0;
	line-height: 30px
}

.post-list-thumb {
	float: left;
	width: 100%;
	height: 300px;
	position: relative;
	margin: 20px 0 20px;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0 1px 20px -6px rgba(0, 0, 0, .5);
	opacity: 0;
	transition: box-shadow .3s ease
}

/* 创建不同的分割线效果。在这个示例中，该伪元素的高度为 100px，但其背景颜色是透明的，
因此它在页面上不可见，但仍然可以占据空间并影响布局。 */
.post-list-thumb:before {
	content: '';
	width: 1px;
	height: 100px;
	background-color: rgba(0, 0, 0, 0);
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	bottom: -101px;
	z-index: 0
}

/* 这里好像可以注释掉 */
.post-thumb {
	float: right;
	width: 55%;
}

.post-thumb a {
	height: 300px;
	position: relative;
	display: block;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	border-radius: 0 10px 10px 0
}

.post-thumb a img {
	/* width: 100%; */
	float: right;
	width: 55%;
	height: 100%;
	object-fit: cover;
	pointer-events: none;
	transition: all .6s
}

/* 悬停在图片上，图片有轻微放大效果 */
.post-list-thumb:hover img {
	transform: scale(1.1)
}

.post-content-wrap {
	position: relative;
	display: inline-block;
	/* float: right; */
	float: left;
	padding-right: 30px;
	padding-left: 0;
	width: 40%;
	margin: 20px 10px 0;
}

.float-content {
	position: relative;
	width: 100%;
	right: 0;
	margin: 0;
	padding: 0;
	z-index: 50;
	color: rgba(0, 0, 0, .66)
}

.post-thumb,
.post-content-wrap,
.float-content {
	width: 100%;
	left: 0
}

.post-date,
.post-meta,
.post-meta a {
	color: #888;
	font-size: 12px
}

.float-content {
	position: relative;
	width: 100%;
	right: 0;
	margin: 0;
	padding: 0;
	z-index: 50;
	color: rgba(0, 0, 0, .66)
}

.float-content .post-text {
	display: inline-block;
	text-align: justify;
	font-size: 14px
}

.float-content p {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	/* 文本行数限制为 3 行 */
	height: 67.5px;
	overflow: hidden;
}

/* 点赞数样式 */
.likes-number {
	margin: 0 10px;
}

.post-list-show {
	animation: post-list-show 1s;
	-webkit-animation: post-list-show 1s;
	opacity: 1;
}

/* 禁止用户选中部分文本内容 */
.no-select {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

/* 文章展示图片懒加载 */
.lazyload {
	-webkit-filter: blur(0px);
	-moz-filter: blur(0px);
	-ms-filter: blur(0px);
	filter: blur(0px);
	-webkit-transition: .3s -webkit-filter linear;
	-moz-transition: .3s -moz-filter linear;
	-moz-transition: .3s filter linear;
	-ms-transition: .3s -ms-filter linear;
	-o-transition: .3s -o-filter linear;
	transition: .3s filter linear, .3s -webkit-filter linear
}

/* main区域动画---从下渐入 */
@keyframes mainAnimation {
	0% {
		opacity: 0;
		transform: translateY(50px)
	}

	100% {
		opacity: 1;
		transform: translateY(0)
	}
}

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
}</style>