<template>
  <div>
    <div class="table-wrap">
      <div class="flex-row flex-center flex-start">
        <el-button size="small" type="primary" @click="addTypeDia=true">+ 添加分类
        </el-button>
        <el-button size="small" type="primary" @click="step=2">+ 添加商户</el-button>
      </div>
      <div class="m-t-20">
        <el-table :data="tableData" v-show="step===1">
          <el-table-column prop="date" label="分类ID"></el-table-column>
          <el-table-column prop="name" label="分类名称"></el-table-column>
          <el-table-column prop="phone" label="创建时间"></el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="scope">
              <el-button size="small" type="primary">编辑</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            v-if="step===1"
            class="text-center"
            style="margin: 20px auto"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
        <el-form class="max-w-1200" inline label-width="120px" label-position="right"
                 v-if="step===2">
          <el-form-item label="商户名称:">
            <el-input size="small" v-model="form.key" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="单次提交次数:">
            <el-input size="small" v-model="form.secret" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="默认账号:">
            <el-input size="small" v-model="form.url" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="创建活动数:">
            <el-input size="small" v-model="form.time" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="登录密码:">
            <el-input size="small" v-model="form.password" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="活动最低点数:">
            <el-input size="small" v-model="form.password" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="选择分类:">
            <el-select class="w-300" size="small" v-model="form.shopType" placeholder="选择分类"
                       clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商家有效期:">
            <el-date-picker
                size="small"
                v-model="form.time1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="代理:">
            <el-select class="w-150" size="small" v-model="form.shopType" placeholder=""
                       clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select class="w-150" size="small" v-model="form.shopType" placeholder=""
                       clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="核销人员:">
            <el-input size="small" v-model="form.password" class="w-210"></el-input>
            <el-button class="m-l-10" type="primary" size="mini">一键获取</el-button>
          </el-form-item>
          <el-form-item label="代理范围:">
            <el-select class="w-150" size="small" v-model="form.shopType" placeholder=""
                       clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-select class="w-150" size="small" v-model="form.shopType" placeholder=""
                       clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="核销码:">
            <el-input size="small" v-model="form.password" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="联系电话:">
            <el-input size="small" v-model="form.password" class="w-300"></el-input>
          </el-form-item>
          <el-form-item label="核销方式:">
            <el-radio-group v-model="form.timeModel" class="w-300">
              <el-radio :label="1">微信</el-radio>
              <el-radio :label="2">抖音</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="地址:">
            <el-input size="small" v-model="form.password" class="w-300"></el-input>
          </el-form-item>
          <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img alt="" v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form>
        <div class="text-center m-t-20" v-show="step===2">
          <el-button size="small" type="primary" @click="step=1">返回分类</el-button>
          <el-button size="small" type="primary">保存</el-button>
          <el-button size="small" type="primary">下一步</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="添加分类" v-model="addTypeDia" width="30%"
               :before-close="handleClose">
      <el-input v-model="typeInp"></el-input>
      <div class="text-right m-t-20">
        <el-button size="small" @click="handleClose">取 消</el-button>
        <el-button size="small" type="primary" @click="handleClose">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        phone: '13111112222',
        status: true,
      }],
      step: 1,
      addTypeDia: false,
      typeInp: '',
      form: {},
      imageUrl: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
      ],
    }
  },
  methods: {
    handleClose() {
      this.addTypeDia = false
      this.typeInp = ''
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
  },
})
</script>

<style scoped lang="scss">
:deep(.el-date-editor) {
  width: 300px;
}

:deep(.el-upload) {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 120px;

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px !important;
    text-align: center;
  }

  &:hover {
    border-color: #409EFF;
  }
}
</style>