<template>
  <div>
    <naviBar />
	  <FlyDan />
    <div class="write-article">
      <transition name="fade" mode="out-in">
        <div v-if="showForm" key="form">
          <div class="write-title">
            <img src="/src/assets/writeArticle1.png"/>
          </div>

          <form @submit.prevent="submitArticle" class="article-form">
            <label for="title">📑文章标题:</label>
            <input v-model="this.title" type="text" id="title" placeholder="写入你的文章标题吧🥰" required>

            <label for="image">📷文章图片:</label>
            <input type="file" ref="imageInput" @change = "handleImageUpload" accept="image/*">
            <img v-if="this.imagePreview" :src="imagePreview" alt="文章图片预览" class="image-preview">

            <label for="description">🏷文章简介:</label>
            <textarea v-model="this.description" id="intro" rows="4" required placeholder="写入你的文章简介吧🥳"></textarea>

            <label for="content">📝文章内容:</label>
            <textarea v-model="this.content" id="content" rows="10" required placeholder="写入你的文章内容吧🤗"></textarea>

            <button type="submit" @click="submitArticle()">发布文章</button>
          </form>
        </div>
        <div v-else key="message" class="write-message">
          <h2>文章发布成功喵！</h2>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import naviBar from "/src/components/naviBar.vue";
import { uploadFile} from "../../services/file.js";
import { createArticle } from "../../services/edit.js";
import FlyDan from "/src/components/FlyDan.vue";

export default {
  data() {
    return {
      showForm: true,
      title: "",
      image: null,
      imagePreview: null,
      description: "",
      content: "",
    };
  },
  components: {
    naviBar,
    FlyDan,
  },
  computed: {
    pageWidth() {
      return window.innerWidth;
    },
    pageHeight() {
      return window.innerHeight;
    },
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.image = file;
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    async uploadImage() {
      try {
        this.image = await uploadFile();
      } catch (e) {
        window.alert("上传图片失败！");
      }
    },
    async submitArticle() {
      try {
        await createArticle(this.title, this.description, this.image, this.content);
        this.showForm = false;
        window.alert("文章发布成功！");
      } catch (e) {
        window.alert("上传失败！请稍后再试。");
      }
    },
  },
};
</script>

<style scoped>
.write-article {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 14px;
  padding: 20px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
/* 应用淡入动画 */
.write-article {
    animation: fadeIn 1s ease-in-out;
    animation-fill-mode: forwards;
}

.write-title img {
    max-width: 80%;
    max-height: 200px;
    margin-top: 20px;
	margin-bottom: 20px;
    display: block;
    margin: 0 auto; /* 居中显示 */
	user-select: none;
}

.article-form label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  font-size:20px;
  color: #555;
  user-select: none;
}

.article-form input,
.article-form textarea {
  padding: 12px;
  font-size: 16px;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left:2%;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
  resize: none;
  background-color: transparent;
}

.article-form input:focus,
.article-form textarea:focus {
  border-color: #ffa11d;
}

.article-form textarea {
  resize: none;
  background-color: transparent;
}

.article-form button {
  display: block;
  width: 90%;
  margin-left:5%;
  margin-top: 20px;
  padding: 12px;
  background-color: #ffa11d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.article-form button:hover {
  background-color: #ff8c00;
}

.write-message {
  text-align: center;
  font-size: 36px;
  color: #ffa11d;
  padding: 20px;
  background-color: #fffbe1;
  border: 1px solid #d6e9c6;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  resize: none;
}

.write-message:hover {
  transform: scale(1.05);
}

/*预览图片*/
.image-preview {
  max-width: 80%;
  max-height: 100%;
  margin-top: 10px;
  margin-left: 2%;
}
</style>
