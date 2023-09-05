<script setup>
import { useScroll } from "@vueuse/core";
import { ref } from 'vue'

// 获取滚轮位置
const { y } = useScroll(window)

// 控制拉绳上升和下降的布尔值
const isShown = ref(false)
const isUnshown = ref(false)

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  // 显示或隐藏返回顶部按钮
  window.addEventListener("scroll", function() {
    // 滚轮下滑20时展示
    if (y.value > 20) {
      scrollToTopButton.style.display = "block";
      isShown.value = true
      isUnshown.value = false
    } else {
      // scrollToTopButton.style.display = "none";
      isUnshown.value = true
      isShown.value = false
    }
  });

  // 点击按钮时触发平滑滚动
  scrollToTopButton.addEventListener("click", function () {
    scrollToTop(0, 1000); // 调用 scrollToTop 函数，参数是滚动到的位置和动画持续时间（毫秒）
  });

  // 自定义滚动函数，实现平滑滚动
  function scrollToTop(to, duration) {
    if (duration <= 0) return;
    const difference = to - window.scrollY;
    const perTick = (difference / duration) * 10;

    setTimeout(function () {
      window.scroll(0, window.scrollY + perTick);
      if (window.scrollY === to) return;
      scrollToTop(to, duration - 10);
    }, 10);
  }
});

</script>

<template>
  <!-- <span><a href="#" class="sideFixed drop-and-fix" style="top: -250px;"></a></span> -->
  <span id="scrollToTopButton" class="sideFixed" :class="{'drop-and-fix': isShown, 'rise-and-unshown': isUnshown}" style="top: -250px;"></span>
</template>

<style scoped>
/* 侧边挂饰样式 */
.sideFixed {
  position: fixed;
  right: 25px;
  top: -900px;
  z-index: 99;
  width: 90px;
  height: 890px;
  background: url(src/assets/scroll.png) no-repeat center;

  display: none;  /* 刚开始时不展示 */
  background-size: contain;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  opacity: 1;
}

.sideFixed:hover {
  cursor: pointer;
}

/* 侧边挂饰掉落动画 */
@keyframes dropAndFixAnimation {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.drop-and-fix {
  animation: dropAndFixAnimation 2s ease-in-out forwards;
}

/* 侧边挂饰回收动画 */
@keyframes riseAnimation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

.rise-and-unshown {
  animation: riseAnimation 1s ease-in-out forwards;
}


</style>