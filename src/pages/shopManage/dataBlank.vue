<template>
  <div>
    <div class="flex-row flex-center flex-start">
      <el-radio-group size="small" v-model="platType" class="m-r-20">
        <el-radio-button label="抖音"></el-radio-button>
        <el-radio-button label="快手"></el-radio-button>
        <el-radio-button label="视频号"></el-radio-button>
      </el-radio-group>
      <el-button size="small" type="text">今天</el-button>
      <el-button size="small" type="text">本周</el-button>
      <el-button size="small" type="text">本月</el-button>
      <el-button size="small" type="text">所有</el-button>
      <el-button size="small" type="text">按周期显示</el-button>
      <el-select size="small" v-model="shopName" class="w-120 m-l-20 m-r-20" placeholder="商户名" clearable>
      </el-select>
      <el-button size="small" type="primary">搜索</el-button>
      <el-button size="small" type="primary">恢复默认顺序</el-button>
      <el-button size="small" type="primary">刷新</el-button>
    </div>
    <div class="font-weight m-t-20">数据走势图</div>
    <div class="flex-row flex-center flex-start flex-s-b m-t-20">
      <div class="data-block-list h-90 text-center brs8 p-t-30">
        <div class="f-s-20 m-b-10">{{ shopNum }}</div>
        <div class="f-s-14">到店参与人数</div>
      </div>
      <div class="data-block-list h-90 p-t-30 text-center brs8">
        <div class="f-s-20 m-b-10">{{ playNum }}</div>
        <div class="f-s-14">总播放次数</div>
      </div>
      <div class="data-block-list h-90 p-t-30 text-center brs8">
        <div class="f-s-20 m-b-10">{{ likeNum }}</div>
        <div class="f-s-14">总点赞数</div>
      </div>
      <div class="data-block-list h-90 p-t-30 text-center brs8">
        <div class="f-s-20 m-b-10">{{ commitNum }}</div>
        <div class="f-s-14">总评论次数</div>
      </div>
    </div>
    <div class="max-w-1200 flex-row flex-center flex-s-b echart-wrap">
      <div class="w-500 h-300 m-t-20" ref="echartC" id="echartC"></div>
      <div class="w-500 h-300 m-t-20" ref="echartD" id="echartD"></div>
    </div>
    <el-table :data="tableData" class="m-t-20">
      <el-table-column prop="date" label="活动编号">
      </el-table-column>
      <el-table-column prop="name" label="活动名称">
      </el-table-column>
      <el-table-column prop="phone" label="播放数">
      </el-table-column>
      <el-table-column prop="count" label="点赞数">
      </el-table-column>
      <el-table-column prop="aiCount" label="评论数">
      </el-table-column>
      <el-table-column prop="phone" label="参加人数">
      </el-table-column>
      <el-table-column prop="phone" label="现场领券数">
      </el-table-column>
      <el-table-column prop="phone" label="核销数">
      </el-table-column>
      <el-table-column prop="phone" label="实物奖品">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  data() {
    return {
      platType: '抖音',
      shopName: '',
      shopNum: 1000,
      playNum: 2000,
      likeNum: 3000,
      commitNum: 4000,
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
      devData: {
        weike: 111,
        video: 100,
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getEchartC()
      this.getEchartD()
    })
  },
  methods: {
    getEchartC() {
      let dom = this.$refs.echartC
      let myChart = echarts.init(dom)
      let app = {}
      let option
      option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '核销管理',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '已核销' },
              { value: 735, name: '未核销' },
            ],
          },
        ],
        title: {
          text: '核销管理',
          textStyle: {
            fontSize: 24,
            color: '#000',
          },
        },
      }

      if (option && typeof option === 'object') {
        myChart.setOption(option)
      }
    },
    getEchartD() {
      var chartDom = this.$refs.echartD
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: '点赞播放数',
          textStyle: {
            fontSize: 24,
            color: '#000',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['播放数', '点赞数'],
          top: '2%',
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '播放数',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '点赞数',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      }

      option && myChart.setOption(option)
    },
  },
})
</script>

<style scoped lang="scss">
.data-block-list {
  width: 24%;
  color: #fff;

  &:nth-child(1) {
    background: linear-gradient(180deg, #2CABF8 0%, #4087FF 100%);
    box-shadow: 0 6px 6px 0 #CECECE;
  }

  &:nth-child(2) {
    background: linear-gradient(180deg, #88C6FE 0%, #23C1D9 100%);
    box-shadow: 0 6px 6px 0 rgba(206, 206, 206, 0.6);
  }

  &:nth-child(3) {
    background: linear-gradient(180deg, #F6DA6A 0%, #EFC10C 100%);
    box-shadow: 0 6px 6px 0 rgba(206, 206, 206, 0.6);
  }

  &:nth-child(4) {
    background: linear-gradient(180deg, #FF8CAB 0%, #FF7BA2 100%);
    box-shadow: 0 6px 6px 0 rgba(206, 206, 206, 0.6);
  }
}

.echart-wrap {
  margin: 0 auto;
}
</style>