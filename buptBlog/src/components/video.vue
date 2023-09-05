<template>
  <div id="app">
    <div id="aplayer"></div>
  </div>
</template>

<script>
import APlayer from "APlayer"; // 引入音乐插件
import "/node_modules/APlayer/dist/APlayer.min.css"; // 引入音乐插件的样式
export default {
  data() {
    return {
      audio: [ // 歌曲列表
        {
          name: "Beautiful World", 
          artist: "宇多田ヒカル", 
          url: 
            "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVFpmYkgxNUt0VHdZQ2VSP2U9ZG9EVUd0.mp3",
          cover: "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVVo0WVJfQldJbGQ0M3VZP2U9NDUyZXVG.jpg", 
          lrc: "", 
          theme: "rgb(239, 239, 239)", 
        },
        {
          name: "雪之泪 雨之音",
          artist: "东京塔子",
          url:"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVFBlZXVOSEVsVFZrNEcxP2U9RFFtMWoy.mp3",
          cover: "https://pic.imgdb.cn/item/64f6a21d661c6c8e54937879.png",
          lrc: "",
          theme: "rgb(212, 127, 100)",
        },
        {
          name: "アスノヨゾラ哨戒班",
          artist: "Orangestar / IA",
          url:
            "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnUzlDR3AxX3dNdHFrMDNzP2U9Y3RKQmtL.mp3",
          cover: "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVDIyX25INlZFODhzVHRrP2U9YVR0d2J4.png",
          lrc: "",
          theme: "#1300a6",
        },
		{
		  name: "Grand Escape",
		  artist: "Radwinps、三浦透子",
		  url:
		    "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVEs2RXR1bTlfZWF0a0x6P2U9aXdsT3k0.mp3",
		  cover: "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVVQ2QjFwMllVZXFPWlRoP2U9TVRZN0tJ.jpg",
		  lrc: "",
		  theme: "#73d3ff",
		},
		{
		  name: "夕日坂",
		  artist: "初音ミク/doriko",
		  url:
		    "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVFYxcjh4TkhXcEdVbG4xP2U9WUczUHJI.mp3",
		  cover: "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaEJzbFI3bFlkOTVnVDVyRFM3QTRUblpkNTEwP2U9aXBMODNt.jpg",
		  lrc: "",
		  theme: "#ffc821",
		},
      ],
      info: {
		  
		autoplay:false,//关闭自动播放
        fixed: true, // 不开启吸底模式
        listFolded: true, // 折叠歌曲列表
		mode:"random",
        preload: "auto", // 自动预加载歌曲
        loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: "list", //  播放模式，list列表播放, random随机播放
      },
    };
  },
  mounted() {
    // 初始化播放器
    this.initAudio();
  },
  methods: {
    initAudio() {
      // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        audio: this.audio, // 音乐信息
        ...this.info, // 其他配置信息
      });
    },
  },
};
</script>

<style lang="less" scoped>
/*npm install less -D*/
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0px;
  left:0px;
  z-index: 0;

  #aplayer {
    width: 300px; // 定个宽度
	background-color: #39c5bb;
 }
}
</style>