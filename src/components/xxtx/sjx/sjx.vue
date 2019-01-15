<template>

<!-- 显示当前页面路径 开始 -->
<div class="order">
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>消息提醒</el-breadcrumb-item>
  <el-breadcrumb-item>收件箱</el-breadcrumb-item>
</el-breadcrumb>
<!-- 显示当前页面路径 结束 -->

<!-- 菜单栏 开始 -->
<el-row :gutter="0"  class="time"> 
  <el-col :span="12">
    <div>
        <span>按时间查询：</span>
        <el-date-picker
          
          v-model="value1" 
          type="daterange" 
          align="right" 
          unlink-panels 
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
    </div>
  </el-col>
  <el-col :span="12">
    <div>
      <el-row> 
        <el-button type="primary" plain @click="clear()">清空</el-button>
        <el-button type="primary" plain @click="query()">查询</el-button>
        <el-button type="primary" plain @click="del()">删除</el-button>
        <el-button type="primary" plain @click="look()">查看</el-button>
      </el-row>
    </div>
  </el-col>
  </el-row>
<!-- 菜单栏 结束 -->

<!-- 表格 -->
<!-- <el-container> -->
  <!-- <el-aside width="200px">Aside</el-aside> height="500" @row-click="row1" v-for ="(item,items) in positionList[0]" :key="item.id"-->
  <!-- <el-main class="tmain"> -->
    <div id="sjx">
        <el-table
          :data="tableData"
          border
          highlight-current-row
          style="width: 100%"
          :default-sort = "{prop: 'time', order: 'descending'}" >
          <!-- :label-class-name="positionKey[prop].label" -->
          <el-table-column
            prop="status"
            header-align="center"
            label="总表状态"
            height="50"
            width="100">
          </el-table-column>
          <el-table-column
            prop="new"
            header-align="center"
            label="消息来源"
            width="100">
          </el-table-column>
          <el-table-column
            prop="title"
            header-align="center"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="content"
            header-align="center"
            label="内容概要">
          </el-table-column>
          <el-table-column
            prop="time"
            header-align="center"
            label="发送时间"
            sortable>
          </el-table-column>
        </el-table>
    </div>
  <!-- </el-main> -->
<!-- </el-container> -->
 
</div>
</template>

<script>

export default {
    data() {
      return {
        // positionKey:[
        // {prop:"status",label:"状态"},
        // {prop:"new",label:"消息来源"},
        // {prop:"title",label:"标题"},
        // {prop:"content",label:"内容概要"},
        // {prop:"time",label:"发送时间"}
        // ],
        tableData: [{
          status: '维护中',
          new: '代码维护',
          title: '前端框架',
          content:'系统为C/S结构，客户端采用electron使用网页前端技术来编写。',
          time:'2016-05-01'
        }],
    //日期选择
    pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: ''
      }
    },
     //日期选择结束

    methods: {
      formatter(row, column) {
        return row.address;
        //return column.address;
      },
      look(){
            this.$router.push('/select')
         },
      clear(id){

      },
      query(id){

      },
      del(id){

      }       
      // row1(row, event, column){
          
      // },
      // del(id){
      //     this.$http.get(''+id).then(){

      //     }
      
    },
  
  }

</script>

<style scoped>
  .tmain{
    background-color:azure;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .time{
     margin-bottom:15px;
     margin-top: 15px;
  }
</style>