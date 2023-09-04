<script setup>

</script>

<template>
    <span><a href="#" class="sideFixed drop-and-fix" style="top: -250px;"></a></span>
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

  background-size: contain;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  opacity: 1
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
</style>