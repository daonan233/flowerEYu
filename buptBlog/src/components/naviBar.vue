<template>
 <div class="navbar">
    <div class="navbar-logo" @mouseover="rotateLogo" @mouseleave="resetLogo" >
      <span class="logo-text">
        <span class="rotate-animation" :class="{ hovered: hovered }">
          <span class="rotate-placeholder"></span>
          #<span class="rotate-text">Dao&nbsp;&nbsp;Nan</span>
        </span>
      </span>
      <!--transition name="fade">
        <div class="bottom-text" v-if="hovered">
          我是55
        </div>
      </transition-->
    </div>
    <div class="navbar-menu" :class="{ 'no-hover': hovered }">
      <li class="navbar-item" v-for="item in menuItems" :key="item.id" @mouseover="expandUnderline(item.id)" @mouseleave="resetUnderline(item.id)">
        {{ item.name }}
        <div class="underline" :class="{ expanded: item.expanded }"></div>
      </li>
    </div>
    <div class="navbar-actions">
      <div class="search-button">
        <i class="icon-search">
			<img src = "/src/assets/search.png" />
		</i>
      </div>
      <div class="user-avatar">
        <i class="icon-avatar">
			<img src = "/src/assets/user.png" />
		</i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
export default {
  data() {
    return {
		hovered:false,
      menuItems: [
        { id: 1, name: '🏠主页', expanded: false },
        { id: 2, name: '📝编辑', expanded: false },
        { id: 3, name: '🎈友链', expanded: false },
      ],
    };
  },
  methods: {
    expandUnderline(id) {
      this.menuItems.forEach((item) => {
        item.expanded = item.id === id;
      });
    },
	highlightMenuItem(id) {
	      const menuItem = this.menuItems.find(item => item.id === id);
	      if (menuItem) {
	        menuItem.highlighted = true;
	      }
	    },
    resetUnderline(id) {
      this.menuItems.forEach((item) => {
        item.expanded = false;
      });
    },
	 rotateLogo() {
	      const rotateText = document.querySelector('.rotate-text');
	      rotateText.style.color = '#ffa11d';
	      rotateText.style.transform = 'rotate(360deg)';
	      this.hovered = true;
	    },
	resetLogo() {
	      const rotateText = document.querySelector('.rotate-text');
	      rotateText.style.color = '#8a8a8a';
	      rotateText.style.transform = 'rotate(0deg)';
	      this.hovered = false;
	},
  },
};
</script>

<style>


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index:999999;

}

.navbar-item {
  position: relative;
  padding: 0 15px; /* 调整左右内边距，增加距离 */
  cursor: pointer;
  
}
.navbar-item:hover {
  color: #ffa11d; /* 悬停时的颜色 */
}

.navbar-item:not(:last-child) {
  margin-right: 30px; /* 添加右侧边距，增加距离 */
}

.navbar-logo {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}



.logo-text{
  transition: color 0.15s ease-in-out;
  font-family: Helvetica;
  margin-left: 20px;
  font-size: 26px;
  color: #8a8a8a;
  user-select: none;
}

.rotate {
  display: inline-block;
  transition: transform 0.5s ease-in-out;
}

.rotate-animation {
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  z-index:2;/*把#DaoNan放在最上层*/
}

.rotate-placeholder {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
  opacity: 0;
  pointer-events: none;
}

.rotate-animation.hovered {
  color: #ffa11d;
  transform: rotate(360deg);
}


@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.navbar-menu {
  display: flex;
  position:center;
  justify-content: flex-start; /* 左对齐 */
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  color:#8a8a8a;
  z-index:1;
  cursor: pointer;
  user-select: none;
  
}

.navbar-item {
  position: relative;
  padding: 0 10px;
  cursor: pointer;
  margin-top:20px;
  margin-right: 10px;
  cursor: pointer;
}


.underline {
  position: absolute;
  left: 3px;
  bottom: -20px;
  width: 0;
  height: 5px;
  background-color: #ffa11d;
  transition: width 0.3s ease-in-out;
}

.underline.expanded {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.search-button,
.user-avatar {
  cursor: pointer;
  margin-left: 10px;
  margin-top: 5px;
  margin-right: 20px;
  transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
}

.search-button:hover,
.user-avatar:hover {
  transform: rotate(180deg); /* 鼠标悬停时旋转 */
}

.icon-search,
.icon-avatar {
  font-size: 10px; 
  width: 20px;    
  height: 20px;   

}

.icon-search img,
.user-avatar img {
  width: 30px;    
  height: 30px;   
  margin-top: 8px;
  z-index:999;
}

.bottom-text {
  font-size: 12px;
  color: #8a8a8a;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  user-select: none;
  z-index: 2;
}

.hovered .bottom-text {
  opacity: 0;
}
/*淡入淡出*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/*动#DaoNan的时候其他组件不会动*/
.no-hover.navbar-menu {
  pointer-events: none; /* 阻止交互 */
}
</style>