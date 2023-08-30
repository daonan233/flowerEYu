<script setup>

// 定位到文章展示区域
const gotoArticleArea = () => {
    console.log("click!!");
}


</script>

<template>
    <div class="headertop filter-dot headertop-bar" style="height: auto;">
        <div id="banner_wave_1" style="left: -1233px;">
        </div>
        <div id="banner_wave_2" style="left: -1008.98px;">
        </div>
        <figure id="centerbg" class="centerbg">
            <div class="focusinfo no-select">
                <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="nickname">nickname</h1>
                <div class="header-info">
                    <p>
                        <i class="iconfont icon-shuangyinhaozuo"></i> 这里放个人介绍（目前静态版） <i
                            class="iconfont icon-shuangyinhaoyou"></i>
                    </p>
                </div>
            </div>
        </figure>
        <div id="video-container" style="">
            <video id="bgvideo" class="video" video-name="" src="" width="auto" preload="auto"></video>
            <div id="video-add">
            </div>
            <div class="video-stu">
            </div>
        </div>
        <div class="headertop-down animated" @click="gotoArticleArea()">
            <span><i class="iconfont icon-bubble_arrow_down" aria-hidden="true"></i></span>
        </div>
    </div>
</template>

<style>
    /* 箭头动画 */
    @keyframes arrowFloat {
        0%, 100% {
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