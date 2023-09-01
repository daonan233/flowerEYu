<template>
  <div class="dan-container">
    <img
      src="/src/assets/flyDanDan.png"
      alt="Dandan"
      :class="{ 'moving-image': true }"
      :style="imageStyle"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageStyle: {
        left: Math.abs(Math.random()*1000),
        top:  Math.abs(Math.random()*1000),
        speedX: 2,
        speedY: 2,
        containerWidth: 0,
        containerHeight: 0,
      },
    };
  },
  mounted() {
    const container = document.querySelector('.dan-container');
    this.imageStyle.containerWidth = container.clientWidth;
    this.imageStyle.containerHeight = container.clientHeight;
    this.moveImage();
  },
  methods: {
    moveImage() {
      setInterval(() => {
        const { left, top, scaleX, speedX, speedY, containerWidth, containerHeight } = this.imageStyle;
        let nextLeft = parseFloat(left) + speedX;
        let nextTop = parseFloat(top) + speedY;

        if (nextLeft < 0) {
          nextLeft = 0; // 防止图片超出左边界
          this.imageStyle.speedX *= -1;
        } else if (nextLeft + 100 > containerWidth) {
          nextLeft = containerWidth - 100; // 防止图片超出右边界
          this.imageStyle.speedX *= -1;
        }

        if (nextTop < 0 || nextTop + 100 > containerHeight) {
          this.imageStyle.speedY *= -1;
        }

        if (nextTop < 0) {
          nextTop = 0; // 防止图片超出上边界
        } else if (nextTop + 100 > containerHeight) {
          nextTop = containerHeight - 100; // 防止图片超出下边界
        }

        this.imageStyle.left = nextLeft + 'px';
        this.imageStyle.top = nextTop + 'px';
      }, 16);
    },
  },
};
</script>

<style scoped>
.dan-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

/* 基本样式 */
.moving-image {
  position: absolute;
  width: 100px;
  animation: rotateImage 5s linear infinite; /* 应用旋转动画，持续时间为5秒，线性运动，无限循环 */
}

@keyframes rotateImage {
  from {
    transform: rotate(0deg); /* 开始时不旋转 */
  }
  to {
    transform: rotate(1800deg); /* 结束时旋转一圈（360度） */
  }
}
</style>
