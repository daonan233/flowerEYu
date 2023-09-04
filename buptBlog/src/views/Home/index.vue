<script setup>
import NavFixed from './components/NavFixed.vue'
import Banner from './components/Banner.vue'
import ShowArticles from './components/ShowArticles.vue'
import Footer from './components/Footer.vue'
import RightSideFixed from './components/RightSideFixed.vue'
</script>

<template>
  <!-- 侧边拉绳部分 -->
  <RightSideFixed />

  <!-- 导航nav部分 -->
  <NavFixed />

  <!-- banner部分 -->
  <Banner />

  <!-- 展示文章区域 -->
  <ShowArticles />

  <!-- footer部分！ -->
  <Footer />
</template>

<style>


.site-content {
  max-width: 800px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, .8)
}

/* 处理浮动元素引起的布局问题 */
.site-content:before {
  content: "";
  display: table;
  table-layout: fixed
}

.site-content:after {
  clear: both;
}

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

/* 侧边挂饰掉落动画 */
/* @keyframes dropAndFixAnimation {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.drop-and-fix {
  animation: dropAndFixAnimation 2s ease-in-out forwards;
} */
</style>