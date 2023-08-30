<script setup>
//import '../../styles/js/common'
import '../../styles/js/main'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import PreArticle from './components/PreArticle.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <!-- 这是banner部分！！！ -->
  <Header />


  <!-- 这是侧边的拉绳猫猫！！ -->
  <a href="#" class="cd-top faa-float animated" style="top: -250px;"></a>


  <!-- <div id="page" class="site wrapper"> -->
    <!-- 导航nav部分 -->
    <Nav/>
    
    <div id="content" class="site-content">
      <div id="primary" class="content-area">

        <!-- 文章部分 -->
        <h1 class="main-title" style="font-family: 'Ubuntu', sans-serif;"><i class="iconfont icon-shujia"
            aria-hidden="true"></i> 文章</h1>
        <PreArticle />
        <PreArticle />
        <PreArticle />
        <PreArticle />
        <PreArticle />
        <PreArticle />


        <!-- 页码部分 -->
        <div style="text-align: center;">
          <div class="fn__clear">
            <nav class="pagination fn__right">
              <span class="pagination__item pagination__item--current">1</span>
              <a class="pagination__item" href="https://demo.stackoverflow.wiki?p=2">2</a>
              <a class="pagination__item" href="https://demo.stackoverflow.wiki?p=3">3</a>
              <a class="pagination__item" href="https://demo.stackoverflow.wiki?p=4">4</a>
            </nav>
          </div>
        </div>



      </div>
    </div>
  <!-- </div> -->

<!-- footer部分！ -->
<Footer />

</template>

<style>



</style>