<template>
  <div class="w-450">
    <FormCom form-title="小程序开放平台"></FormCom>
    <div class="text-center">
      <el-button type="primary" size="small" class="w-120">保存</el-button>
      <el-button type="primary" size="small" class="w-120">下一步</el-button>
    </div>
  </div>
</template>

<script>
import FormCom from '@/components/FormCom.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {
        key: '',
        secret: '',
        url: '',
        time: '',
        timeModel: '',
      },
      formTitle: '小程序开放平台',
      platType: 2,
    }
  },
  setup(props, context) {
    const methods = {}
    return { ...methods }
  },
  components: { FormCom },
})
</script>

<style scoped lang="scss">
</style>