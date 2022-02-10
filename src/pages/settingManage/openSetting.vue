<template>
  <div class="w-450">
    <FormCom :form-title="formTitle" :plat-type="platType"></FormCom>
    <div class="text-center">
      <el-button type="primary" size="small" class="w-120" @click="saveInfo">保存</el-button>
      <el-button type="primary" size="small" class="w-120">下一步</el-button>
    </div>
  </div>
</template>

<script setup>
import FormCom from '@/components/FormCom.vue'
import { ElNotification } from 'element-plus'

const formTitle = '小程序开放平台', platType = 2

const saveInfo = () => {
  ElNotification.success({
    title: '提示',
    message: '保存成功',
  })
}
</script>

<style scoped lang="scss">
</style>