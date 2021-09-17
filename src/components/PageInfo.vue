<template>
  <div class="page-info" :class="{closeMenu:isCollapse,changeHeight:isOpen}">
    <div class="open-or-close">
      <i class="el-icon-arrow-up pointer" v-if="!isOpen" @click="isOpen = true"></i>
      <i class="el-icon-arrow-down pointer" v-if="isOpen" @click="isOpen = false"></i>
    </div>
    <div class="font-weight">使用说明：</div>
    <div class="info-content">
      本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说明，本页设置说
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isCollapse: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
})
</script>

<style scoped lang="scss">
.page-info {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 45px;
  overflow: hidden;
  padding: 10px 20px 10px 280px;
  z-index: 10;
  background-color: #fff;
  left: 0;
  bottom: 0;
  box-shadow: 0 -2px 6px 0 #CECECE;
  transition: .4s;

  &.changeHeight {
    height: 400px;
  }

  &.closeMenu {
    padding-left: 84px;
  }

  .info-content {
    font-size: 14px;
    color: #333;
    margin-top: 10px;
    text-indent: 20px;
    max-height: 340px;
    overflow: auto;
  }

  .open-or-close {
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
  }
}
</style>