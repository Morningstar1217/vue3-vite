<template>
  <div>
    <div class="form-wrap w-450">
      <el-form label-width="120px" label-position="right">
        <el-form-item label="代理商名称：">
          <el-input size="small" v-model="form.name" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="底页技术方：">
          <el-input size="small" v-model="form.bottom" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="提示窗内容：">
          <el-input size="small" v-model="form.dialog" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="成片存储：">
          <el-radio-group v-model="form.save" class="w-300">
            <el-radio :label="1">跟随AI配置</el-radio>
            <el-radio :label="2">跟随系统配置</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="flex-row flex-center">
          <el-form-item label="在线充值：" class="w-180">
            <el-switch v-model="form.sendMoney"></el-switch>
          </el-form-item>
          <el-form-item label="系统分销：" class="w-180">
            <el-switch v-model="form.system"></el-switch>
          </el-form-item>
        </div>
        <el-form-item label="冲值单价：">
          <el-input size="small" v-model="form.money" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="最底冲值：">
          <el-input size="small" v-model="form.lastMoney" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="提现门槛：">
          <el-input size="small" v-model="form.setMoney" class="w-300"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="text-center w-450">
      <el-button type="primary" size="small" class="w-120">上一步</el-button>
      <el-button type="primary" size="small" class="w-120">保存</el-button>
    </div>
    <div class="f-s-14 flex-row flex-center flex-start m-t-30">
      <div>统计更新地址:<span class="url1">{{ url1 }}</span></div>
      <el-button type="primary" class="m-l-10" size="small">复制
      </el-button>
    </div>
    <div class="f-s-14 flex-row flex-center flex-start m-t-10">
      <div>延迟推送地址:<span class="url2">{{ url2 }}</span></div>
      <el-button type="primary" class="m-l-10" size="small">复制
      </el-button>
    </div>
    <div class="flex-row flex-center flex-start m-t-30">
      <div>
        总开关
        <el-switch v-model="powerAll"></el-switch>
      </div>
      <div>
        代理商
        <el-switch v-model="daili"></el-switch>
      </div>
      <div>
        业务员
        <el-switch v-model="yewu"></el-switch>
      </div>
      <div>
        商户
        <el-switch v-model="shanghu"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {},
      url1: 'https://www.apple.com.cn',
      url2: 'https://www.apple.com.cn',
      powerAll: '',
      daili: '',
      yewu: '',
      shanghu: '',
    }
  },
})
</script>

<style scoped>

</style>