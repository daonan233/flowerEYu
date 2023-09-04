<script setup>
import { ref } from 'vue';

// 用户信息是否可以存入pinia里？？？
// 获取用户姓名
const userInfo = ref({
	name: 'gene',
	id: 112233,
})

// 定位到文章展示区域
const scrollToElement = () => {
    // 获取目标元素
    var targetElement = document.getElementById("scroll-element");
      
    // 使用 scrollIntoView 方法将目标元素滚动到视图
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });   
}


</script>

<template>
    <div class="headertop filter-dot headertop-bar" style="height: auto;">
        <!-- 波浪样式 -->
        <div id="banner_wave_1" class="float-element">
        </div>
        <div id="banner_wave_2" class="float-element">
        </div>

        <figure id="centerbg" class="centerbg">
            <div class="focusinfo no-select">
                <!-- <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="nickname">nickname</h1> -->
                <h1 class="center-text glitch" data-text="Blog">Blog</h1>
                <div class="header-info">
                    <p>
                        <i class="iconfont icon-shuangyinhaozuo"></i> 欢迎你，{{ userInfo.name }} ！ <i
                            class="iconfont icon-shuangyinhaoyou"></i>
                    </p>
                </div>
            </div>
        </figure>
        <div class="headertop-down animated" @click="scrollToElement()">
            <span><i class="iconfont icon-bubble_arrow_down" aria-hidden="true"></i></span>
        </div>
    </div>
</template>

<style scoped>
.headertop {
	position: relative;
	overflow: hidden;
    height: 0;   /* 可以考虑删除 */
}

.headertop:before {
	content: '';
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 3;
	background-attachment: fixed;  /* 固定背景图片的位置，使其不随着页面的滚动而滚动 */ 
}


/* 背景图样式 */
/* 大屏幕下 */
.headertop.filter-dot:before {
	background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif)
    /* background-image: url(src/assets/bgimg.jpeg) */
}

/* 小屏幕下 */
@media (max-width:860px) {
	.headertop.filter-dot:before {
		background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/grid.png)
		/* background-image: url(src/assets/bgimg.jpeg) */
	}
}

/* 两层波浪下面有一个白白的底 */
.headertop-bar:after {
	content: '';
	width: 150%;
	/* height: 4.375rem; */
    height: 4.375rem;
	background: #fff;
    /* background: burlywood; */
	left: -25%;
	bottom: -2.875rem;
	border-radius: 100%;
	position: absolute;
	z-index: 4;
}

.headertop-down {
	position: absolute;
	bottom: 50px;
	left: 50%;
	cursor: pointer;
	z-index: 5
}

.headertop-down i {
	font-size: 28px;
	color: #fff;
	-ms-transform: scale(1.5,1);
	-webkit-transform: scale(1.5,1);
	transform: scale(1.5,1)
}

/* banner部分 */
#centerbg {
    width: 100%;
    height: 550px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
}

/* 媒体查询 banner部分自适应 */
@media (max-width:860px) {
    #centerbg {
        height: 300px;
        background-attachment: scroll
    }

    .focusinfo,
    #video-container {
        display: none
    }
}

/* banner的大字部分 */
.center-text {
	margin: auto;
	font-family: 'Ubuntu', sans-serif;
	font-size: 80px;
	text-transform: uppercase
}

/* banner的文字和框框部分 */
.focusinfo {
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    text-align: center;
    z-index: 99;
    -webkit-transition: .4s ease all;
    -moz-transition: .4s ease all;
    -o-transition: .4s ease all;
    transition: .4s ease all
}

/* banner框内信息 */
.header-info {
	width: 63%;
	margin: auto;
	font-size: 16px;
	color: #eaeadf;
	background: rgba(0,0,0,.5);
	padding: 15px;
	margin-top: 22px;
	letter-spacing: 0;
	line-height: 30px;
	border-radius: 10px;
	box-sizing: initial;
	white-space: nowrap;   /* 防止文本换行 */
	overflow: scroll;   /* 如果用户名字过长，溢出部分提供滚动条 */
}

/* 在框框上方创建一个三角形形状的装饰元素 */
.header-info:before {
	content: "";
	position: absolute;
	/* top: 112px; */
    top: 104px;  /* 伪元素顶部边缘距离 .header-info 元素顶部的距离 */
	left: 30%;
	margin-left: -15px;
	border-width: 15px;
	border-style: solid;
	border-color: transparent transparent rgba(0,0,0,.5) transparent
}

.header-info p {
	margin: 0;
	font-family: 'Ubuntu', sans-serif;
	font-weight: 700
}

/* 鼠标靠近后文字的动画效果 */
.glitch {
    position: relative;
    color: #fff;
    mix-blend-mode: lighten;
}

.glitch:before,.glitch:after {
	content: attr(data-text);
	position: absolute;
	top: 0;
	width: 100%;
	background: rgba(0,0,0,0);
	clip: rect(0,0,0,0)
}

/* .glitch:before {
     left: -1px;
    text-shadow: 1px 0 #ff3f1a
}

.glitch:after {
    left: 1px;
    text-shadow: -1px 0 #00a7e0
}  */

/* 粉色：#c62065c4 */

.glitch:before {
    left: -1px;
    /* text-shadow: 1px 0 #eb5895c4  粉色版*/
    text-shadow: 1px 0 rgb(66, 185, 131);
}

.glitch:after {
    left: 1px;
    text-shadow: -1px 0 #5a3746c4
}

.glitch:hover:before {
	/* text-shadow: 4px 0 #eb5895c4; */
	text-shadow: 4px 0 rgb(66, 185, 131);
	animation: glitch-loop-1 .8s infinite ease-in-out alternate-reverse
}

.glitch:hover:after {
	text-shadow: -5px 0 #5a3746c4;
	animation: glitch-loop-2 .8s infinite ease-in-out alternate-reverse
}

/* 针对使用 WebKit 内核的浏览器：Safari 和 Chrome */
@-webkit-keyframes glitch-loop-1 {
	0% {
		clip: rect(36px,9999px,9px,0)
	}

	25% {
		clip: rect(25px,9999px,99px,0)
	}

	50% {
		clip: rect(50px,9999px,102px,0)
	}

	75% {
		clip: rect(30px,9999px,92px,0)
	}

	100% {
		clip: rect(91px,9999px,98px,0)
	}
}

/* 适用于大多数现代浏览器 */
@keyframes glitch-loop-1 {
	0% {
		clip: rect(36px,9999px,9px,0)
	}

	25% {
		clip: rect(25px,9999px,99px,0)
	}

	50% {
		clip: rect(50px,9999px,102px,0)
	}

	75% {
		clip: rect(30px,9999px,92px,0)
	}

	100% {
		clip: rect(91px,9999px,98px,0)
	}
}

@-webkit-keyframes glitch-loop-2 {
	0% {
		top: -1px;
		left: 1px;
		clip: rect(65px,9999px,119px,0)
	}

	25% {
		top: -6px;
		left: 4px;
		clip: rect(79px,9999px,19px,0)
	}

	50% {
		top: -3px;
		left: 2px;
		clip: rect(68px,9999px,11px,0)
	}

	75% {
		top: 0;
		left: -4px;
		clip: rect(95px,9999px,53px,0)
	}

	100% {
		top: -1px;
		left: -1px;
		clip: rect(31px,9999px,149px,0)
	}
}

@keyframes glitch-loop-2 {
	0% {
		top: -1px;
		left: 1px;
		clip: rect(65px,9999px,119px,0)
	}

	25% {
		top: -6px;
		left: 4px;
		clip: rect(79px,9999px,19px,0)
	}

	50% {
		top: -3px;
		left: 2px;
		clip: rect(68px,9999px,11px,0)
	}

	75% {
		top: 0;
		left: -4px;
		clip: rect(95px,9999px,53px,0)
	}

	100% {
		top: -1px;
		left: -1px;
		clip: rect(31px,9999px,149px,0)
	}
}

.video-container {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden
}

.video-container embed,.video-container iframe,.video-container object {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%
}


/* 禁止用户选中 banner 中的文本内容 */
.no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

/* 波浪样式 */
#banner_wave_1 {
    width: auto;
    height: 90px;
    background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png") repeat-x;
    _filter: alpha(opacity=80);
    /*针对 IE浏览器，设置不透明度*/
    position: absolute;
    bottom: 0;
    width: 400%;
    left: -236px;
    z-index: 5;
    opacity: 1;
    transiton-property: opacity, bottom;
    transition-duration: .4s, .4s
}

#banner_wave_2 {
    width: auto;
    height: 115px;
    background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave2.png") repeat-x;
    _filter: alpha(opacity=80);
    position: absolute;
    bottom: 0;
    width: 400%;
    left: 0;
    z-index: 4;
    opacity: 1;
    transiton-property: opacity, bottom;
    transition-duration: .4s, .4s
}

/* 波浪的动画效果 */
@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.float-element {
  animation: floatAnimation 2s ease-in-out infinite;
}


/* 定位到文章部分的箭头动画 */
@keyframes arrowFloat {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3px);
    }
}

.animated {
    animation: arrowFloat 1s infinite;
}




</style>