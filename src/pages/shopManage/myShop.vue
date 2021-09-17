<template>
  <div>
    <div>
      <div class="flex-row flex-center flex-start flex-s-b">
        <div class="flex-row flex-center flex-start flex-no-wrap">
          <div class="flex-row flex-center flex-start flex-no-wrap">
            <el-select class="w-120" size="small" v-model="shopType" placeholder="所属类别"
                       clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-input class="w-120 m-l-10 m-r-10" size="small" v-model="shopName"
                      placeholder="商户名称"/>
          </div>
          <el-button size="small" type="primary">刷新</el-button>
          <el-button size="small" type="primary">按默认排序</el-button>
          <el-button size="small" type="primary">按点数使用排序</el-button>
          <el-button size="small" type="primary">按AI使用次数排序</el-button>
        </div>
        <div class="flex-row flex-center flex-start">
          <el-button type="primary" size="small">+ 添加分类</el-button>
          <el-button type="primary" size="small">+ 添加商户</el-button>
        </div>
      </div>
      <div>
        <el-table :data="tableData" class="m-t-20">
          <el-table-column prop="date" label="商户ID">
          </el-table-column>
          <el-table-column prop="name" label="商户名称">
          </el-table-column>
          <el-table-column prop="phone" label="手机号">
          </el-table-column>
          <el-table-column prop="count" label="点数余额">
          </el-table-column>
          <el-table-column prop="aiCount" label="AI剪辑余额">
          </el-table-column>
          <el-table-column prop="phone" label="总播放次数">
          </el-table-column>
          <el-table-column label="状态">
            <template #default="scope">
              <el-switch v-model="scope.row.status"/>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="320">
            <template #default="scope">
              <div class="flex-row flex-center flex-start flex-no-wrap">
                <el-button type="primary" size="small" class="m-r-10">综合数据</el-button>
                <el-dropdown size="small" class="m-r-10" :hide-on-click="false">
                  <el-button type="primary" size="small">
                    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        AI权限
                        <el-switch v-model="scope.row.ai" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        商家设置活动
                        <el-switch v-model="scope.row.shop" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        活动是否审核
                        <el-switch v-model="scope.row.activity" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        卡券权限
                        <el-switch v-model="scope.row.card" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        抽奖权限
                        <el-switch v-model="scope.row.gift" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        禁用此商家
                        <el-switch v-model="scope.row.disableShop" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        快手活动
                        <el-switch v-model="scope.row.kuaishou" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        抖音活动
                        <el-switch v-model="scope.row.douyin" size="mini"></el-switch>
                      </el-dropdown-item>
                      <el-dropdown-item class="flex-row flex-s-b flex-center h-30">
                        视频号活动
                        <el-switch v-model="scope.row.shipinhao" size="mini"></el-switch>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <el-dropdown size="small" placement="bottom" @command="(command)=>{clickMenu(command,scope.row)}"
                             :hide-on-click="false">
                  <el-button type="primary" size="small">
                    更多设置<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>商家大数据</el-dropdown-item>
                      <el-dropdown-item>编辑资料</el-dropdown-item>
                      <el-dropdown-item command="platType">商家抖音/快手/视频号</el-dropdown-item>
                      <el-dropdown-item command="addAI">充值AI</el-dropdown-item>
                      <el-dropdown-item>查看视频库</el-dropdown-item>
                      <el-dropdown-item command="addCount">充值点数</el-dropdown-item>
                      <el-dropdown-item>重置默认密码</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination
        hide-on-single-page
        class="text-center m-t-20"
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
    <el-dialog title="充值点数" v-model="countDia" width="30%"
               :before-close="handleCloseCount">
      <div class="h-30 l-h-30 f-s-14">充值商家名称：<span>{{ chooseShop.name }}</span></div>
      <div class="h-30 l-h-30 f-s-14">您的点数余额：<span>{{ chooseShop.count }}</span></div>
      <div class="h-30 l-h-30 f-s-14">本次充值点数：
        <el-input type="number" v-model="countInp" size="small" class="w-100"></el-input>
      </div>
      <div class="h-30 l-h-30 f-s-14">单次充值为10的整数倍</div>
      <div class="text-right m-t-20">
        <el-button size="small" @click="countDia = false">取 消</el-button>
        <el-button size="small" type="primary" @click="countDia = false">充值点数</el-button>
      </div>
    </el-dialog>
    <el-dialog title="充值AI点数" v-model="AiDia" width="30%"
               :before-close="handleCloseAi">
      <div class="h-30 l-h-30 f-s-14">充值商家名称：<span>{{ chooseShop.name }}</span></div>
      <div class="h-30 l-h-30 f-s-14">您的AI余额：<span>{{ chooseShop.aiCount }}</span></div>
      <div class="h-30 l-h-30 f-s-14">本次充值点数：
        <el-input type="number" v-model="aiInp" size="small" class="w-100"></el-input>
      </div>
      <div class="h-30 l-h-30 f-s-14">单次充值为100的整数倍</div>
      <div class="text-right m-t-20">
        <el-button size="small" @click="AiDia = false">取 消</el-button>
        <el-button size="small" type="primary" @click="AiDia = false">充值点数</el-button>
      </div>
    </el-dialog>
    <el-dialog title="商家抖音/快手/视频号" v-model="platTypeDia"
               :before-close="handleClosePlat">
      <el-radio-group v-model="platType" class="m-b-20">
        <el-radio-button label="抖音"></el-radio-button>
        <el-radio-button label="快手"></el-radio-button>
        <el-radio-button label="视频号"></el-radio-button>
      </el-radio-group>
      <el-form inline label-width="130px" label-position="right">
        <el-form-item :label="platType+'主页链接:'">
          <el-input size="small" v-model="form.a" class="w-100"></el-input>
        </el-form-item>
        <el-form-item :label="(platType)+'商户名称:'">
          <el-input size="small" v-model="form.b" class="w-100"></el-input>
        </el-form-item>
        <el-form-item :label="(platType)+'联系地址:'">
          <el-input size="small" v-model="form.c" class="w-100"></el-input>
        </el-form-item>
        <el-form-item :label="(platType)+'商户身份:'">
          <el-input size="small" v-model="form.d" class="w-100"></el-input>
        </el-form-item>
        <el-form-item :label="(platType)+'商户位置:'">
          <el-input size="small" v-model="form.f" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="推送视频时机:">
          <el-radio-group v-model="form.e" class="w-100">
            <el-radio :label="1">弹窗确定推送</el-radio>
            <el-radio :label="2">领取奖品推送</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="text-right m-t-20">
        <el-button size="small" @click="platTypeDia = false">取消</el-button>
        <el-button size="small" type="primary" @click="platTypeDia = false">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      shopType: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
      ],
      shopName: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        phone: '13111112222',
        count: 11,
        status: true,
        aiCount: 1000,
        ai: true,
        shop: true,
        activity: true,
        card: true,
        gift: true,
        disableShop: true,
      }],
      permissonDia: false,
      permissonList: [],
      countDia: false,
      countInp: '',
      chooseShop: {},
      AiDia: false,
      aiInp: '',
      platTypeDia: false,
      platType: '抖音',
      form: {},
    }
  },
  methods: {
    handleClose() {
      this.permissonDia = false
    },
    handleCloseCount() {
      this.chooseShop = {}
      this.countInp = ''
      this.countDia = false
    },
    handleCloseAi() {
      this.chooseShop = {}
      this.aiInp = ''
      this.AiDia = false
    },
    handleClosePlat() {
      this.platTypeDia = false
    },
    clickMenu(val, item) {
      this.chooseShop = item
      console.log(val)
      switch (val) {
        case 'addAI':
          this.AiDia = true
          break
        case 'addCount':
          this.countDia = true
          break
        case 'platType':
          this.platTypeDia = true
          break
      }
    },
  },
})
</script>

<style scoped>

</style>