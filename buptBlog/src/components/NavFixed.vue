<script setup>
import SideBar from '../views/Home/components/SideBar.vue';
import Search from './Search.vue'
import { ref } from 'vue';
import { useMenuStore } from '../stores/menu.js'

// 用户信息
const userInfo = ref({
	name: 'gene',
    id: 112233,
})

const menuStore = useMenuStore()

// 控制是否显示侧边栏的布尔值
const showSideBar = ref(false)
// logo点击后的回调函数
const logoClicked = () => {
    // 展示侧边框
    showSideBar.value = !showSideBar.value
}

// 控制搜索组件是否弹出的布尔值
const searchClicked = ref(false)
// “搜索”点击后的回调函数
const gotoSearch = () => {
    searchClicked.value = !searchClicked.value
}


// 判断用户菜单是否为展开状态的布尔值
const isMenuVisible = ref(false)
// “用户”icon点击后展开menu
const showMenu = () => {
    // 获取用户菜单元素
    const menuElement = document.querySelector('.header-user-menu');

    // 切换用户菜单的显示状态
    // 使用 setTimeout 延迟切换显示状态
    setTimeout(function () {
        if (isMenuVisible.value) {
            menuElement.style.display = 'none';
        } else {
            menuElement.style.display = 'block';
        }
        isMenuVisible.value = !isMenuVisible.value; // 切换状态
    }, 100); // 100 毫秒延迟
}

// "个人信息"点击后的回调函数
const gotoSelfPage = () => {

}

// "退出登录"点击后的回调函数
const quit = () => {
    // console.log("quit");
}

</script>

<template>
    <!-- 侧边栏只有在logo被点击时才显示 -->
    <SideBar v-if="showSideBar" :userInfo="userInfo" />

    <!-- 搜索框只有在搜索icon点击时才显示 -->
    <Search v-if="searchClicked" />

    <!-- nav部分 -->
    <header class="site-header no-select" role="banner">
        <div class="site-top">
            <div class="site-branding">
                <span class="site-title logolink moe-mashiro" @click="logoClicked"><a style="width: 330px;">
                        <span class="rotate-element">#</span>&nbsp;<span class="logoStyle">bupterBlog</span>
                    </a></span>
            </div>
            <div class="lower-cantiner">
                <div class="lower">
                    <nav>
                        <!-- <ul id="menu-new" class="menu"> -->
                        <ul id="menu-new" class="navMenu">
                            <li @click="menuStore.mainPageClicked"><a @click="$router.push('/')"><span :class="{ active: menuStore.isMainPageActive }"><i class="iconfont icon-shouye-zhihui"
                                            aria-hidden="true"></i> 首页</span></a></li>
                            <li @click="menuStore.friendsLinkClicked"><a @click="$router.push('/friendslink')"><span :class="{ active: menuStore.isFriendsActive }"><i class="iconfont icon-at"
                                            aria-hidden="true"></i> 友链</span></a></li>
                            <li @click="menuStore.editClicked"><a @click="$router.push('/edit')"><span :class="{ active: menuStore.isEditActive }"><i
                                            class="iconfont icon-icon1" aria-hidden="true"></i> 编辑</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="rightHelp">
                <!-- 搜索icon -->
                <div class="header-searchbox" @click="gotoSearch">
                    <span class="searchIcon"><img src="src/assets/search.png" width="30" height="30"></span>
                </div>

                <div class="header-user-avatar" @click="showMenu">
                    <!-- 用户icon -->
                    <span class="userIcon"><img src="src/assets/user.png" width="30" height="30"></span>
                    <div class="header-user-menu">
                        <div class="header-user-menu-item" @click="gotoSelfPage">
                            个人信息
                        </div>
                        <div class="header-user-menu-item" @click="quit">
                            退出登录
                        </div>
                    </div>
                </div>
            </div>

            <!-- <span class="header-searchbox" @click="gotoSearch"><img src="src/assets/search.png" width="30" height="30"></span> -->


            <!-- <div >
                <img src="src/assets/user.png" width="30" height="30">
                <i class="iconfont icon-sousuo"></i>
            </div> -->
        </div>
    </header>
</template>

<style scoped>
/* .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
} */

/* 导航栏样式 */
.site-header {
    width: 100%;
    height: 75px;
    background: 0 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
}

/* 鼠标悬停在导航栏上后，nav背景变白 */
.site-header:hover {
    background-color: #fff;
    opacity: .9;
}

/* 当 .site-header 元素触发 hover 时，显示 .site-top .lower 下的 nav 元素 */
.site-header:hover .site-top .lower nav {
    display: block;
    /* display: inline-flex; */
    /* position: relative; */
    float: right;
    animation: slowlyInFromRight .2s;

    position: fixed;
    /* nav右上角定位改这里！！！！！ */
    top: 30px;
    left: 500px;
}


.site-header:before {
    content: "";
    display: table;
    table-layout: fixed
}

/* 鼠标移开后，不展示导航的菜单 */
/* .site-header:after {
    clear: both
} */

/* 左上角logo样式 */
.logoStyle {
    color: #5a3746c4;
    transition: color 0.3s ease-in-out;
    /* 添加过渡效果 */

    /* 鼠标悬停后变色，提示用户可点击 */
    &:hover {
        color: rgb(66, 185, 131);
    }
}

/* 设置logo从左渐入动画样式 */
.site-branding {
    animation: slowlyInFromLeft 1.3s ease-in-out;
    cursor: pointer;
}

/* 左上角title */
.site-title {
    /* display: inline-flex; */
    font-size: 20px;
    margin-right: 10px
}

/* .site-title {
    margin: 0;
} */

/* .site-title a {
    color: #464646;
    font-weight: 400;
} */

/* .site-title a:hover {
    color: #5a3746c4
    color: rgb(16, 146, 16);
} */

.logolink {
    /* background-color: rgba(255,255,255,.5); */
    border-radius: 5px;
    color: #464646;
    height: auto;
    line-height: 25px;
    margin-right: 0;
    padding-bottom: 0;
    padding-top: 1px;
    text-size-adjust: 100%;
    width: auto;
}

.logolink a {
    color: #464646;
    float: left;
    font-size: 20px;
    font-weight: 800;
    height: 56px;
    line-height: 56px;
    padding-left: 35px;
    padding-right: 15px;
    padding-top: 11px;
    text-decoration-line: none
}

.logolink.moe-mashiro a {
    color: #464646;
    float: left;
    font-size: 25px;
    font-weight: 800;
    height: 56px;
    line-height: 56px;
    padding-left: 6px;
    padding-right: 15px;
    padding-top: 11px;
    text-decoration-line: none
}

.logolink.moe-mashiro,
.logolink.moe-mashiro {
    font-size: 25px;
    border-radius: 9px;
    padding-bottom: 2px;
    padding-top: 5px
}

.logolink.moe-mashiro {
    display: inline-block;
    margin-left: 5px
}

/* 菜单栏 */
.site-top {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0 20px;

    animation: slowlyInFromRight 1s
}

/* .lower-cantiner {
    display: block;
} */

.site-top .lower-cantiner {
    position: absolute;
    left: 50%;
    min-width: 758.4px;
    pointer-events: none;
}

.site-top .lower {
    display: inline-block;
    /* display: inline-flex; */
    margin: 15px 0 0 10px;
    font-size: 16px;
    position: relative;
    left: -50%;
    pointer-events: auto !important
        /* 元素将响应鼠标事件 */
}

.site-top .lower nav { 
    position: relative;
	float: right;
    display: none;  /* 初始不显示，hover后显示 */
    animation: slowlyInFromRight .2s;
    padding-left: 85px;
    padding-top: 6px;
}

.site-top .lower nav.navbar {
    display: block;
}

.site-top ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
}

.site-top ul li {
    float: left;
    margin: 0 13px;
    position: relative;
    -webkit-transition: all 1s ease;
}

.site-top ul li a:hover {
    color: rgb(66, 185, 131);
}

/* nav的菜单栏 */
.navMenu {
    display: block;
    position: relative;
    z-index: 11;
}

.navMenu li {
    padding-right: 15px;
}

.navMenu a {
    color: #5a3746c4;
}

.active {
    color: rgb(66, 185, 131);
}

/* 去除菜单的超链接上的下划线样式 */
/* a {
	text-decoration: none;
} */

/* 移除a元素在活动状态（a:active）和悬停状态（a:hover）时的默认轮廓效果 */
/* a:active,a:hover {
	outline: none
} */

/* .navMenu {} */

/* nav右上角的搜索和用户布局 */
.rightHelp {
    /* position: fixed; */
    position: fixed;
    display: inline-flex;
    float: right;
    /* nav右上角定位改这里！！！！！ */
    top: 10px;
    right: 40px;
}

.header-searchbox {
    display: block;
    position: relative;
    float: right;
    margin-left: 10px;
    /* margin-top: 22px; */
    margin-top: 20px;
    cursor: pointer;
}

.header-user-avatar {
    position: relative;
    float: right;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
}

/* nav右上角搜索icon */
.searchIcon {
    /* float: right;
    height: 75px;
    line-height: 75px;
    margin-left: 20px; */
    /* display: flex; */
    display: inline-flex;
    /* margin-block: 10px; */
    margin: auto;

}

.userIcon {
    /* float: right;
    height: 75px;
    line-height: 75px;
    margin-left: 20px; 
    display: flex; */

    display: inline-flex;

    margin-block: 10px;

    margin: auto;
   
}

/* 当鼠标悬停在搜索、用户icon上时，有左右晃动的动画效果，提示用户可点击 */
.userIcon img:hover, .searchIcon img:hover{
    animation: shakeAnimation .8s ease-in-out;
}

/* nav右上角的用户栏 */
.header-user-menu {
    position: absolute;
    width: 110px;
    right: -11px;
    text-align: left;
    background: 0 0;
    top: 44px;
    display: none;
    /* 初始为不可见 */
    overflow: hidden;
    animation: header-user-menu .4s;
    box-shadow: 0 1px 40px -8px rgba(0, 0, 0, .5);
    border-radius: 5px;
    text-align: center
}

/* 用户菜单栏上面的三角形 */
/* .header-user-menu:before {
    content: "";
    position: fixed;
    top: 46px;
    right: 25px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff
} */

.header-user-menu-item {
    font-size: 13px;
    background: #fff;
    padding: 20px;
    border-radius: 8px 8px 8px 8px;

    &:hover {
        color: rgb(66, 185, 131);
    }

}

/* '#'标志旋转动画 */
@keyframes rotateAnimation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.rotate-element {
    /* color: #eb5895c4; 粉色*/
    /* color: rgb(16, 146, 16); 比下面的绿深一点的绿*/
    color: rgb(66, 185, 131);
    display: inline-block;
    /* 保证 span 元素占据实际空间 */
    animation: rotateAnimation 4s linear infinite;
}

/* 从右渐入的动画 */
@keyframes slowlyInFromRight {
    0% {
        opacity: 0;
        transform: translateX(30px)
    }

    100% {
        opacity: 1;
        transform: translateX(0)
    }
}

/* 从左渐入的动画 */
@keyframes slowlyInFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-30px)
    }

    100% {
        opacity: 1;
        transform: translateX(0)
    }
}

/* 左右晃动的动画效果 */
@keyframes shakeAnimation {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-3px);
    }

    50% {
        transform: translateX(3px);
    }

    75% {
        transform: translateX(-3px);
    }

    100% {
        transform: translateX(0);
    }

}

html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    overflow-x: hidden
}

body {
    margin: 0;
    font: 300 17px;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, .1)
}

textarea {
    padding-left: 3px;
    width: 100%;
    color: #a5a5a5
}
</style>