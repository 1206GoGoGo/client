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
          
          v-model="Datedatas" 
          type="daterange" 
          align="right" 
          unlink-panels 
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="MM-dd-yyyy"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
  </el-col>
  <el-col :span="12">
    <div class="grid-content bg-purple">
      <el-row> 
        <el-button type="primary" plain @click="clear">清空</el-button>
        <el-button type="primary" plain @click="query">查询</el-button>
      </el-row>
    </div>
  </el-col>
  </el-row>
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
            width="100"
            sortable>
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
            :formatter="fssjFormatter"
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
  <el-dialog title="武汉理工大学" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item>
            <el-input type="textarea" v-model="form.xxnr" readonly>
            </el-input>
        </el-form-item>
        <el-form-item >
            发自：<el-input v-model="form.fsf" readonly>
            </el-input>
            时间：<el-input v-model="form.fssj" readonly>
            </el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">返  回</el-button>
    </div>
   </el-dialog>
</el-container>
 
</div>
</template>

<script>

export default {
    //获取数据前先取数据
   mounted(){
        this.getData(); 
    },
    data() {
      return {
        tableData:'',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
        xxnr:'',
        fsf:'',
        fssj:'',
        
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
        },
        formLabelWidth: '120px',
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
        Datedatas: ''
      }
    },
     //日期选择结束

    methods: {
      add(m){return m<10?'0'+m:m },
      fssjFormatter(row,column){
            var fssj = new Date(parseInt(row.fssj));
            var year=fssj.getFullYear();
            var month=fssj.getMonth()+1;
            var day=fssj.getDate();
            return year+"-"+this.add(month)+"-"+this.add(day);
      },
      handleQuery(index, row){
        // 获取表单元素的内容
        // console.log(row.xxnr)
        this.dialogFormVisible = true
        this.form.xxnr=row.xxnr
        this.form.fsf=row.fsf

        //时间格式转换
        var fssj = new Date(parseInt(row.fssj));
        var year=fssj.getFullYear();
        var month=fssj.getMonth()+1;
        var day=fssj.getDate();
        var fssj1=year+"-"+this.add(month)+"-"+this.add(day)
        this.form.fssj=fssj1
      },
      handleDele(index, row){
       // this.row.splice();
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteData(row.index);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
      },
      deleteData(index){ //?????????????????????????????????????????????????????????????
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/JyXxtx/deleteMse?jyXxtx='+(jyXxtx)(index))
                .then(function (response) {
                    //refresh
                    _this.$message({ message: '删除校区代码成功: '+response.data,showClose: true,type: 'success' });
                    _this.getData();
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '删除校区代码失败: '+error,showClose: true,type: 'error' });
                });
      },
      getData(){
            var _this=this;
            // _this.loading = true;
            //需要处理异步请求的问题
            this.axios.get('jwc/JyXxtx/getXxtxByjsf?jsf='+jyb+'&sj1='+sj1+'&sj2='+sj2,)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.tableData=dataList;
                    _this.$notify({title:"获取收件箱信息", message:"获取收件箱信息成功 ("+response.data.length+")", type:"success"});
                    // _this.loading = false;
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取收件箱信息", message:"获取收件箱信息失败: "+error, type:"error"});
                    // _this.loading = false;
                });
      },
      
       clear(){
        this.Datedatas=""
        this.query=[]
      },
      query(){
        // if(!this.query==[])
        //   this.query=[];         //???????????????????????????????????
        if(!this.Datedatas){
                var sj1 = '0';
                var sj2 = '0';
        }else{
                var sj1 = this.Datedatas.toString().split(',')[0];
                var sj2 = this.Datedatas.toString().split(',')[1]; //????????????
        }
        var _this=this;
        var jyb='教研办'
        this.axios({
            method:'get',
            url:'jwc/JyXxtx/getdelXxtxByfsforjsf?fsf='+jyb+'&sj1='+sj1+'&sj2='+sj2, 

        })
        .then(function(rep){
            _this.tableData=rep.data;
            _this.$notify({
                title:"获取回收箱",
                message:"获取回收箱成功",
                type:"success"
            })
        })
        .catch(function(e){
        _this.$notify({
                title:"获取回收箱",
                dangerouslyUseHTMLString: true,
                message:"获取回收箱失败</br>"+e,
                type:"error"
            })
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