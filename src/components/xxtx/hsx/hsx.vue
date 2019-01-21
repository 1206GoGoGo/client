<template>

<!-- 显示当前页面路径 开始 -->
<div class="order">
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>消息提醒</el-breadcrumb-item>
  <el-breadcrumb-item>回收箱</el-breadcrumb-item>
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
        <!-- <el-button type="primary" plain @click="del">删除</el-button>
        <el-button type="primary" plain @click="look">查看</el-button> -->
      </el-row>
    </div>
  </el-col>
  </el-row>

  <!-- <el-row>
  
  </el-row> -->
<!-- 菜单栏 结束 -->

<!-- 表格 -->
<el-container>
  <el-main class="tmain">
    <div id="hsx">
        <el-table
          :data="tableData"
          border
          highlight-current-row
          
          class="t1"
          height="500" 
          style="width: 100%"
          :default-sort = "{prop: 'time', order: 'descending'}" >
          <!-- :label-class-name="positionKey[prop].label" -->
          <el-table-column
            
            prop="fsf"
            header-align="center"
            label="发送方"
            height="50"
            width="100">
          </el-table-column>
          <el-table-column
            prop="jsf"
            header-align="center"
            label="接收方"
            width="100">
          </el-table-column>
          <el-table-column
            prop="xxbt"
            header-align="center"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="xxnr"
            header-align="center"
            label="内容概要">
          </el-table-column>
          <el-table-column
            prop="fssj"
            header-align="center"
            label="发送时间"
            sortable>
          </el-table-column>
          <el-table-column label="操作" width="160px" header-align="center">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleQuery(scope.$index, scope.row)">查看</el-button>
                <el-button
                size="mini"
                @click="handleDele(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </el-main>
</el-container>
 
</div>
</template>

<script>

export default {
    data() {
      return {
        tableData:'',
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
      // formatter(row, column) {
      //   return row.address;
      //   //return column.address;
      // },

      handleQuery(){

      },
      handleDele(){

      },
       clear(){
        this.value1=""
        this.query=[]
      },
      query(){
        var _this=this;
        var sj1='01/08/2012'
        var sj2='02/08/2014'
        var jyb='教研办'
        this.axios({
            method:'get',
            url:'jwc/JyXxtx/getdelXxtxByfsforjsf?fsf='+jyb+'&sj1='+sj1+'&sj2='+sj2, 

        })
        .then(function(rep){
            _this.tableData=rep.data;
            // _this.$notify({
            //     title:"初始化学院",
            //     message:"初始化学院成功",
            //     type:"success"
            // })
        })
        .catch(function(e){
        // _this.$notify({
        //         title:"初始化学院",
        //         dangerouslyUseHTMLString: true,
        //         message:"初始化学院失败</br>"+e,
        //         type:"error"
        //     })
        });
      }, 

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