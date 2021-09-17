<template>
  <div class="w-450">
    <div class="p-b-0">
      <el-radio-group v-model="platType" class="w-450 text-center">
        <el-radio :label="1">阿咪多（推荐）</el-radio>
        <el-radio :label="2">腾讯云</el-radio>
        <el-radio :label="3">阿里云</el-radio>
      </el-radio-group>
      <div class="flex-row flex-center flex-top flex-wrap">
        <div>
          <FormCom :plat-type="platType"></FormCom>
        </div>
      </div>
    </div>
    <div class="text-center">
      <el-button type="primary" class="w-120" size="small">上一步</el-button>
      <el-button type="primary" class="w-120" size="small">保 存</el-button>
      <el-button type="primary" class="w-120" size="small">下一步</el-button>
    </div>
  </div>
</template>

<script>
import FormCom from '@/components/FormCom.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      platType: 1,
    }
  },
  components: { FormCom },
})
</script>

<style scoped lang="scss">

</style>