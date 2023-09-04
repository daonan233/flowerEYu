<template>
  <div class="modal" v-if="is_show">
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <div class="modal-close" @click="closeModal">×</div>
      <div class="search-container">
		  
        <img class="search-icon" src="/src/assets/search.png" alt="Search Icon">
        <input
          class="search-input"
          v-model="searchQuery"
          @keydown.enter="performSearch"
          placeholder="想要搜什么博客喵~"
        />
        <button class="search-button" @click="performSearch">GO</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
	  is_show:true,
      searchQuery: '',
    };
  },
  methods: {
    closeModal() {
       this.is_show = false; 
    },
    performSearch() {
      // 搜索的方法
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
}


.modal-content {
  position: relative;
  width: 600px;
  max-width: 90%;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.5); /* 使用 rgba 设置白色背景颜色和50%透明度 */
  border-radius: 50px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-image: url('/src/assets/back.png'); /* 背景图片路径 */
  background-repeat: no-repeat;
  background-size: cover; /* 使背景图片充满整个元素 */
  user-select: none;
}

.modal-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* 使用 rgba 设置白色背景颜色和50%透明度 */
  z-index: -1; /* 确保这个伪元素在内容之后 */
}



.modal-close {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 40px;
  cursor: pointer;
}

.search-container {
  display: flex;
  align-items: center;
  margin-top: 40%;
}

.search-icon {
  width: 36px;
  height:36px;
}

.search-input {
  flex: 1;
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 0 10px;
  font-size: 16px;
}

.search-button {
  height: 36px;
  padding: 0 16px;
  border-radius: 10px;
  background-color: #42b983; /* 按钮背景色 */
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.search-button:hover {
  background-color: #3ca876; /* 鼠标悬停时的背景色 */
}

.search-button:active {
  background-color: #297451; /* 按下时的背景色 */
}
</style>