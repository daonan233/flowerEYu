<script lang="ts" setup>
defineProps({
    userInfo: {
        type: Object,
        // 给它个默认值
        default: () => { }
    },
})
</script>

<template>
    <div class="sidebar">
        <a href="可以跳转到个人主页"><el-avatar class="myAvatar" :size="150" src="src/assets/background.png" /></a>
        <div class="user-info">
            <h2> {{ userInfo.name }}</h2>
            <p>ID:&nbsp;{{ userInfo.id }}</p>
        </div>
        
                    
    </div>
</template>

<style>
/* 头像样式 */
.myAvatar {
    position: relative;
    display: flex;
    margin: auto;
    margin-top: 100px;
}

/* 侧边栏显示样式 */
.sidebar {
    position: fixed;
    /* 固定在页面左侧 */
    top: 0;
    left: 0;
    z-index: 10;
    /* 以保证在nav之下，在波浪之上 */
    width: 270px;
    /* 侧边栏宽度 */
    height: 100vh;
    /* 与视口高度相同，确保覆盖整个视口 */
    background-color: rgb(176, 173, 173);
    text-align: center;
    /* color: #fff; */
}

.user-info {
    color:aliceblue;
    font-size: 16px;
}
</style>

  