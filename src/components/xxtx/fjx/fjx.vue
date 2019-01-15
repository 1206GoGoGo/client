<template>
<!-- 显示当前页面路径 开始 -->
<div class="order">
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>消息提醒</el-breadcrumb-item>
  <el-breadcrumb-item>发件箱</el-breadcrumb-item>
</el-breadcrumb>
<!-- 显示当前页面路径 结束 -->

<!-- 菜单栏 开始 -->
<el-row :gutter="0" style="width: 100%" class="time"> 
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
    <div class="grid-content bg-purple">
      <el-row> 
        <el-button type="primary" plain @click="clear">清空</el-button>
        <el-button type="primary" plain @click="query">查询</el-button>
        <el-button type="primary" plain @click="del(selectRow.news)">删除</el-button>
        <el-button type="primary" plain @click="search()">查看</el-button>
      </el-row>
    </div>
  </el-col>
</el-row>
<!-- 菜单栏 结束-->

<!-- 表格 -->
<el-container>
  <el-main class="tmain">
    <div id="hsx">
        <el-table
          @selectBack="returnSelect"
          :data="tableData"
          border
          highlight-current-row
          class="t1"
          height="500" 
          style="width: 100%"
          :default-sort = "{prop: 'time', order: 'descending'}" >
          <el-table-column
            prop="receive"
            header-align="center"
            label="接受方"
            height="50"
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
        <search  @closeDialog="doCloseDialog" :xx-search="Search.isSearch" :xx-search-value="Search"></search>
    </div>
    <!-- //:dialog-visible="dialogVisible.search" -->
  </el-main>
</el-container>
</div>
</template>

<script>
import search from '@/components/xxtx/search.vue'
export default {
    name: "fjx",
    components: {search},
    mounted(){
      //this.query(); 获取数据前先取数据
    },
    data() {
      return {
        tableData:[],
        isSearch:false,
        Search:false,
        
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

    //查看详细的内容
    methods: {
      returnSelect(value){
        this.selectRow = value;//点查看和删除时会用到(包含一条课程的所有信息)
      },

      search(){
        //this.dialogVisible.search=true;
         if(this.Search.isSearch){
          this.Search.isSearch=false;
        }else {
          this.Search.isSearch=true;
        }

      },
      doCloseDialog(msg){
          if(msg=="search"){
              //this.dialogVisible.search=false;
              this.Search.isSearch=false;
          }
      },

      //查询
      query(){
        var _this=this;
        //需要处理异步请求的问题
         var sj1='01/08/2012'
         var sj2='02/08/2012'
         var jyb=''
        this.axios.get('/jwc/JyXxtx/getXxtxByfsf?fsf='+jyb+'&sj1='+sj1+'&sj2='+sj2).then(function (response) 
        {
          //将获取到的数据以数组形式传递出去
          var dataList=response.data;
          _this.tableData=dataList;
        }).catch(function (error) {
            console.log(error);
            alert("数据获取失败！");
          });
      },
      //清空
      clear(){
        this.value1=""
        this.query=[]
      },
      //删除
      del(id){
        if(!id)
        {alert("请从下面表格中选择需要删除的消息");return;}
        //将课程列表中被选中的(获取选中的课程代码kcdm)某课程逻辑删除（课程状态改为0）
        var _this=this;
        //需要处理异步请求的问题
        this.axios.get('/jwc/JyXxtx/RealDeleteMse')//未给？？？？？？？？？？？？？？？？？？？？
          .then(function (response) {
              //将response获得的数据进行处理
              //将获取到的数据以数组形式传递出去
              alert(response.data);
          })
          .catch(function (error) {
              console.log(error);
              alert("此接口尚未配置成功");
          });
      }
      
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
    /* float:left;
    clear: right; */
  }
  .order{
    margin: 10px;
    /* padding: 10px; */
    width: 100%;
    float:left;
    clear:left;
  }
  .t1{
    height: 100px;
  }
  .time{
     margin: 10px;
  }
</style>