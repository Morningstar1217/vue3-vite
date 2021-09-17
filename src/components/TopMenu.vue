<template>
  <div class="top-menu flex-row flex-center flex-s-b" :class="{closeMenu:isCollapse}">
    <div class="icon-wrap">
      <i class="el-icon-s-fold pointer" v-if="!isCollapse" @click="changeCollapse"></i>
      <i class="el-icon-s-unfold pointer" v-else @click="changeCollapse"></i>
    </div>
    <div class="menu-wrap flex-row flex-center flex-start">
      <el-badge :value="12" class="item pointer">
        <i class="el-icon-bell"></i>
      </el-badge>
      <div class="user-wrap flex-row flex-center flex-start">
        <div class="user-name">代理</div>
        <el-avatar :size="30" :src="defaultAvatar"></el-avatar>
      </div>
      <el-dropdown>
        <el-button type="primary" size="small">
          用户名
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户名(代理)</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>资料修改</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="logout-wrap pointer">
        <i class="el-icon-switch-button"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isCollapse: {
      default: () => false,
      type: Boolean,
    },
    defaultAvatar: {
      default: () => '',
      type: String,
    },
  },
  emits: ['changeCollapse'],
  setup(props, context) {
    const methods = {
      changeCollapse: () => {
        context.emit('changeCollapse', !props.isCollapse)
      },
    }
    return { ...methods }
  },
})
</script>

<style scoped lang="scss">
.top-menu {
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 68px;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 20px 0 280px;
  font-size: 24px;
  background-color: #f9fafc;
  z-index: 10;
  transition: .4s;

  &.closeMenu {
    padding-left: 84px;
  }

  .user-wrap {
    margin: 0 20px;

    .user-name {
      font-size: 14px;
      color: #333;
      margin-right: 10px;
    }
  }

  .logout-wrap {
    font-size: 25px;
    margin-left: 10px;
  }
}
</style>