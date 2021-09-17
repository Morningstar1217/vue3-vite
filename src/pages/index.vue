<template>
  <div class="container flex-row">
    <left-menu @change-menu="changeUrl" :active-menu="activeMenu" :default-menu="defaultMenu"
               :is-collapse="isCollapse"/>
    <div class="content" :class="{closeMenu:isCollapse}">
      <top-menu :is-collapse="isCollapse" :default-avatar="defaultAvatar" @change-collapse="changeCollapse"/>
      <router-view class="p-t-90 p-l-20 p-r-20 p-b-20"></router-view>
      <page-info :is-collapse="isCollapse"/>
    </div>
  </div>
</template>

<script>
import { defaultAvatar, defaultMenu } from '@/common/static'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LeftMenu from '@/components/LeftMenu.vue'
import PageInfo from '@/components/PageInfo.vue'
import TopMenu from '@/components/TopMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data: vm => ({
    defaultMenu: defaultMenu,
    defaultAvatar: defaultAvatar,
  }),
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()
    const isCollapse = ref(false)
    const activeMenu = route.name
    const methods = {
      changeUrl(item) {
        router.push({
          name: item.path,
        })
      },
      changeCollapse(val) {
        isCollapse.value = val
      },
    }
    return { ...methods, isCollapse, activeMenu }
  },
  created() {
    this.isCollapse = document.body.clientWidth <= 1200
    window.addEventListener('resize', () => {
      this.isCollapse = document.body.clientWidth <= 1200
    })
  },
  components: {
    LeftMenu,
    PageInfo,
    TopMenu,
  },

})
</script>

<style scoped lang="scss">
.container {
  .content {
    flex: 1;
    background-color: #f9fafc;
    padding-left: 260px;
    transition: .4s;
    min-height: 100vh;
    box-sizing: border-box;
    overflow: hidden;

    &.closeMenu {
      padding-left: 64px;
    }

    .router-content {
      padding: 88px 20px 20px;
    }
  }
}
</style>