<template>
  <div class="left-menu" :class="{closeMenu:isCollapse}">
    <div class="logo-wrap">
      <img src="@/assets/logo.png" alt="">
    </div>
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo"
             :collapse="isCollapse">
      <el-sub-menu :index="item.index" v-for="(item,index) in defaultMenu" :key="index">
        <template #title>
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item class="flex flex-center flex-start" :index="itm.path"
                      v-for="(itm,ind) in item.children" :key="ind" @click="changeMenu(itm)">
          {{ itm.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    defaultMenu: {
      default: [],
      type: Array,
    },
    activeMenu: {
      default: '1-1',
      type: String,
    },
    isCollapse: {
      default: () => false,
      type: Boolean,
    },
  },
  emits: ['changeMenu'],
  setup: (prop, context) => {
    const methods = {
      changeMenu: (val) => {
        context.emit('changeMenu', val)
      },
    }
    return { ...methods }
  },
})
</script>

<style scoped lang="scss">
.left-menu {
  transition: .4s;
  width: 260px;
  height: 100%;
  border-right: solid 1px #e6e6e6;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  background-color: #1a1d34;

  &.closeMenu {
    width: 64px;

    .logo-wrap {
      img {
        transition: .4s;
        width: 44px;
        object-fit: scale-down;
      }
    }
  }

  .logo-wrap {
    padding: 13px 0;
    text-align: center;

    img {
      transition: .4s;
      width: 177px;
      height: 42px;
      vertical-align: middle;
    }
  }

  :deep(.el-menu) {
    background-color: #1a1d34 !important;

    .el-sub-menu__title {
      color: #fff;

      i {
        color: #fff;
      }

      &:hover {
        background-color: #001528;
      }
    }

    .el-menu-item {
      color: #fff;

      &:hover {
        background-color: #001528;
        color: #fff;
      }

      &:focus,
      &.is-active {
        background-color: #001528;
        color: #409eff;
      }

      .sub-menu-icon {
        width: 18px;
        height: 18px;
        vertical-align: middle;
        margin-top: -2px;
      }
    }
  }

  .el-menu-vertical-demo {
    border-right: none;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 260px;
    height: calc(100% - 68px);
  }
}
</style>

<style lang="scss">
.el-menu--popup {
  background-color: #1a1d34;

  .el-menu-item {
    color: #fff;

    &:hover {
      background-color: #001528;
      color: #fff;
    }

    &:focus,
    &.is-active {
      background-color: #001528;
      color: #409eff;
    }

    .sub-menu-icon {
      width: 18px;
      height: 18px;
      vertical-align: middle;
      margin-top: -2px;
    }
  }
}
</style>