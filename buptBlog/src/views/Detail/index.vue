<template>
  <div class ="all">
    <NavFixed></NavFixed>
	<videos></videos>
	<RightSideBar></RightSideBar>
    <div class="background">
      <div class="background-image">
		 <p class = "title">{{this.title}}</p>
		 <div>
		    <p class = "short-cut">点赞量： {{this.likes}}</p>
		    <p class = "short-cut1">浏览量： {{this.views}}</p>
		    <p class = "short-cut2">发布时间：{{formattedTime}}</p>
		 </div>
        <img class="backgroundStyle" :src="this.image" />
      </div>
    </div>
	<!--以下为文章内容-->
	<!--文章简介-->
	
	<div class="like-button-container">
	    <button
	           @click="toggleLike"
	           class="like-button"
	           :class="{ 'orange-button': liked }"
	         >
	      <img src="/src/assets/zan.png" alt="点赞按钮" />
	    </button>
		<div class = "afterZan">
	    <transition name="image-transition" mode="out-in">
	      <img v-if="likeShow" 
		  :src="this.liked?'/src/assets/flowerDan.png':''" 
		  class="reaction-image"/>
	    </transition>
		<transition>
		<img v-if="likeShow"
		:src="!this.liked?'/src/assets/cryDan.png':''" 
		class="reaction-image"/>
		</transition>
		</div>
	  </div>
	  
	  <div class ="textContainer">
	  	<p class = "descriptionStyle">{{this.description}}</p>
	  	<p class ="divider">______________________________________________________________________________________________________________________________________________</p>
		<p class="contentStyle">{{this.content}}</p>
		<p class ="divider">______________________________________________________________________________________________________________________________________________</p>
	  </div> 
	  <Footer/>
  </div>
</template>

<script>
import {ref,computed} from 'vue';
import NavFixed from "/src/components/NavFixed.vue";
import {getArticle,likeArticle} from "/src/services/detail.js";
//npm install dayjs --save
import dayjs from 'dayjs';
import Element from "element-plus";
import Footer from '/src/components/Footer.vue';
import videos from '/src/components/video.vue';
import RightSideBar from "/src//components/RightSideFixed.vue";


export default {
	data(){
		return {
			title:'嘉然小姐的狗',
			description:'我好想做嘉然小姐的狗啊。',
			likes:0,
			views:0,
			content:"我好想做嘉然小姐的狗啊.\n  可是嘉然小姐说她喜欢的是猫，我哭了。\n我知道既不是狗也不是猫的我为什么要哭的。\n因为我其实是一只老鼠。\n我从没奢望嘉然小姐能喜欢自己。\n我明白的，所有人都喜欢理解余裕上手天才打钱的萌萌的狗狗或者猫猫，没有人会喜欢阴湿带病的老鼠。 \n但我还是问了嘉然小姐:“我能不能做你的狗？” \n我知道我是注定做不了狗的。但如果她喜欢狗，我就可以一直在身边看着她了，哪怕她怀里抱着的永远都是狗。 \n可是她说喜欢的是猫。 \n她现在还在看着我，还在逗我开心，是因为猫还没有出现，只有我这老鼠每天蹑手蹑脚地从洞里爬出来，远远地和她对视。 \n等她喜欢的猫来了的时候，我就该重新滚回我的洞了吧。\n但我还是好喜欢她，她能在我还在她身边的时候多看我几眼吗？ \n嘉然小姐说接下来的每个圣诞夜都要和大家一起过。\n我不知道大家指哪些人。\n好希望这个集合能够对我做一次胞吞。 \n猫猫还在害怕嘉然小姐。 \n我会去把她爱的猫猫引来的。 \n我知道稍有不慎，我就会葬身猫口。 \n那时候嘉然小姐大概会把我的身体好好地装起来扔到门外吧。 \n那我就成了一包鼠条，嘻嘻。 \n我希望她能把我扔得近一点，因为我还是好喜欢她。\n会一直喜欢下去的。 \n我的灵魂透过窗户向里面看去，挂着的铃铛在轻轻鸣响，嘉然小姐慵懒地靠在沙发上，表演得非常温顺的橘猫坐在她的肩膀。壁炉的火光照在她的脸庞，我冻僵的心脏在风里微微发烫。",
			publishTime:'2007-8-31T00:00:39',
			image:'https://pic.imgdb.cn/item/64eee3c0661c6c8e54a4ed42.png',
			liked:false,
			id:0,
			//以下为页面的数据
			likeShow: false,
		}
	},
  components: {
	videos,
    NavFixed,
	Footer,
	RightSideBar,
  },
  
  computed:{
	  formattedTime() {
	        return dayjs(this.publishTime).format('YYYY年MM月DD日 HH:mm:ss');
	      },
  },
  
  beforeRouteEnter(to, from, next) {
    document.querySelector('body').setAttribute('style', 'margin:0;padding:0');
    next();
  },
  mounted(){  
	  this.likeAction();
  },
  
	
  methods:{
	 //点赞效果
	 likeAction(){
		 if(this.liked){
			 likeArticle(true,this.id);
			 }
		 else 
		     likeArticle(false,this.id);
		 
	 },
	toggleLike() {
	      this.likeShow = !this.likeShow;
	 		  if(this.liked){
	 			  this.liked = false;
	 		  }else{
	 			  this.liked = true;
	 		  }
	 		  setTimeout(() => {
	        this.likeShow = !this.likeShow;
	 		}, 1000);
	    },
	 
	  /**
	   * 获取文章细节
	   * @param id 文章id
	   * @returns {Promise<void>}
	   */
	  async getArticle(id) {
	    const res = await getArticle(id);
        this.title = res.title;
		this.description = res.description;
		this.likes = res.likes;
		this.content = res.content;
		this.publishTime = res.publishTime;
		this.image = res.image;
		this.liked = res.liked;
		this.id = res.id;
	  },
  },
};
</script>

<style>
.all{
  user-select: none;
}

.background {
  position: relative;
  margin-top:75px;
  width: 100vw;  
  height: 400px; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
}

.background-image {
  width: 100%;
  height: 100%;
}
/*标题文字*/
.title {
  font-size: 40px;
  letter-spacing: 10px;
  margin-left: 10vw;
  margin-top: 20vh;
  font-weight: bold;
  display: inline-block;
  padding: 10px 20px;
  position: absolute;
  color: transparent;
  text-transform: uppercase;
  animation: textAnimation 5s infinite;
  background-image: linear-gradient(45deg, #ff00ff, #00ffff);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

@keyframes textAnimation {
  0% {
    transform: translateY(0) scale(1);
  }
  25% {
    transform: translateY(-5px) scale(1.1);
  }
  50% {
    transform: translateY(0) scale(1);
    background-image: linear-gradient(45deg, #00ffff, #ff00ff);
  }
  75% {
    transform: translateY(5px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
    background-image: linear-gradient(45deg, #ff00ff, #00ffff);
  }
}
/*文章的一些数据，我是菜比*/
.short-cut{
	background-color: transparent; /* 背景颜色 */
	border-radius: 5px; /* 圆角 */
	box-shadow: 0px 0px 10px 5px rgba(240, 171, 202, 0.3) ; /* 模糊阴影 */
	position:absolute;
	z-index:233;
	font-size:16px;
	color:#646464;
	margin-top: 35vh;
	margin-left: 12vw;
	font-family: "新细明体";
	letter-spacing: 3px;	
}
.short-cut1{
	background-color: transparent; /* 背景颜色 */
	border-radius: 5px; /* 圆角 */
	box-shadow: 0px 0px 10px 5px rgba(240, 171, 202, 0.3); /* 模糊阴影 */
	position:absolute;
	z-index:233;
	font-size:16px;
	color:#646464;
	margin-top: 40vh;
	margin-left: 12vw;
	font-family: "新细明体";
	letter-spacing: 3px;
	
}
.short-cut2{
	position:absolute;
	background-color: transparent; /* 背景颜色 */
	border-radius: 5px; /* 圆角 */
	box-shadow: 0px 0px 10px 5px rgba(240, 171, 202, 0.3); /* 模糊阴影 */
	z-index:233;
	font-size:16px;
	color:#646464;
	margin-top: 45vh;
	margin-left: 12vw;
	font-family: "新细明体";
	letter-spacing: 3px;
	
}



.backgroundStyle {
  position: absolute;
  width: 100%;
  height: auto; 
  object-fit: cover; 
  object-position: center 40%;
  z-index : -233;
}

/*点赞效果css*/
.like-button {
  z-index:999;
  position: fixed;
  right: 2vw; /* 页面右侧 80% ��*/
  bottom: 15%; /* 页面底部 85% ��*/
  background-color: rgb(66, 185, 131);
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;
  
}
.like-button img{
	width:3vw;
	height:20%;
}

.like-button:hover {
  transform: scale(1.2);
  background-color: rgb(66, 185, 131);
  transition: 0.3s;
}

/* 点赞效果样式 */
.like-button-container {
  position: absolute;
  right: 20%;
  top: 80%;
  z-index:999;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
}

.like-button img {
  width: 50px; /* 调整图像大小 */
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%); /* 初始位置：下��*/
    opacity: 0; /* 初始透明度为0，完全不可见 */
  }
  100% {
    transform: translateY(0); /* ��终位置：原始位置 */
    opacity: 1; /* ��终��明度为1，完全可��*/
  }
}

/* 应用动画��.reaction-image 元素 */
.reaction-image {
  position: fixed;
  right: 50%;
  bottom: -50%; 
  transform: translateX(50%);
  z-index: 99999;
  user-select: none;
  animation: slideInFromBottom 0.5s ease forwards; /* 应用动画 */
}

.image-transition-enter-active,
.image-transition-leave-active {
  transition: opacity 0.3s;
}

.image-transition-enter, .image-transition-leave-to {
  opacity: 0;
}

/*点赞后按钮的样式*/
/* 橙色按钮样式 */
.orange-button {
  background-color: rgb(66, 185, 131);
  /* 其他样式属��，根据��要添��*/
}

.orange-button:hover {
  background-color: rgb(56, 157, 110);
  /* 其他样式属��，根据��要添��*/
}

/*简介的样式*/
.textContainer{
  width: 70%; /* 控制主体内容的宽度 */
  margin-top: 0px;
  margin-left:15%;
  padding: 20px; /* 可选，添加内边距 */
  box-sizing: border-box; /* 可选，确保宽度包括内边距和边框 */
  
}
.descriptionStyle{
  margin-top: 414px;/*400+14*/	
  width: 70%; /* 控制主体内容的宽度 */
  margin: 0 auto; /* 水平居中 */
  padding: 20px; /* 可选，添加内边距 */
  box-sizing: border-box; /* 可选，确保宽度包括内边距和边框 */
  letter-spacing: 2px;
  color:#636363;
  
}

/* 示例样式：文章内容 */
.contentStyle{
  white-space: pre-line;
  font-size: 20px; /* 增大文章内容字体大小 */
  line-height: 2.5; /* 增加行高，提高可读性 */
  color: #444; /* 修改文章内容文字颜色 */
  text-align: justify; /* 文本两端对齐 */
  margin-left: 8%;
  margin-bottom: 30px; /* 添加底部边距 */
  letter-spacing: 2px;
  color:#636363;
}

.divider{
	color: #c1c1c1;
}

.afterZan{
	position: absolute;
	
	z-index: 9999;
}

</style>
