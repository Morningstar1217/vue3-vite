<template>
  <div class="m-b-20 font-weight text-center">{{ formTitle }}</div>
  <el-form class="w-450" inline label-width="90px" label-position="right">
    <el-form-item label="APP_key:">
      <el-input size="small" v-model="form.key" class="w-300"></el-input>
    </el-form-item>
    <el-form-item label="APP_secret:">
      <el-input size="small" v-model="form.secret" class="w-300"></el-input>
    </el-form-item>
    <el-form-item label="回调网址:">
      <el-input size="small" v-model="form.url" class="w-300"></el-input>
    </el-form-item>
    <el-form-item label="素材时长:" v-if="platType===2">
      <el-input size="small" v-model="form.time" class="w-300"></el-input>
    </el-form-item>
    <el-form-item label="时长模式:" v-if="platType===2">
      <el-radio-group v-model="form.timeModel" class="w-300">
        <el-radio :label="1">四舍五入</el-radio>
        <el-radio :label="2">向上取整</el-radio>
        <el-radio :label="3">向下取整</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  platType: {
    default: 1,
    type: [Number, String],
  },
  formTitle: {
    default: '',
    type: String,
  },
})
</script>

<script>
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
    }
  },
  props: {
    platType: [Number, String],
    formTitle: String,
  },
})
</script>

<style scoped>

</style>