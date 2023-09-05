import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuActive', () => {
    // 控制菜单激活状态样式的布尔值 state
    const isMainPageActive = ref(true)  // 首页激活状态默认为true
    const isFriendsActive = ref(false)
    const isEditActive = ref(false)

    // 控制菜单激活状态变化的 action
    const mainPageClicked = () => {
        isMainPageActive.value = true
        isFriendsActive.value = false
        isEditActive.value = false
    }

    const friendsLinkClicked = () => {
        isMainPageActive.value = false
        isFriendsActive.value = true
        isEditActive.value = false
    }

    const editClicked = () => {
        isMainPageActive.value = false
        isFriendsActive.value = false
        isEditActive.value = true
    }

    return {
        isMainPageActive,
        isFriendsActive,
        isEditActive,
        mainPageClicked,
        friendsLinkClicked,
        editClicked,
    }
})