<template>
  <div id="app">
    <el-table
        stripe
        border
        highlight-current-row
        v-loading="loading"
        @row-click="handleCurrentChange"
        :height="tableHeight"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'xqdm', order: 'descending'}">
        <el-table-column
            prop="kcdm"
            label="旧课程代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sysKcByKcdm.kczwmc"
            label="旧课程名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sysKcByKcdm.xf"
            label="旧学分"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcdm"
            label="新课程代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sysKcByXkcdm.kczwmc"
            label="新课程名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sysKcByXkcdm.xf"
            label="新学分"
            sortable>
        </el-table-column>
        <el-table-column
            :formatter="stateFormatter"
            prop="zt"
            label="是否停用"
            sortable>
        </el-table-column>
        <el-table-column label="操作" width="160px">
            <template slot-scope="scope">
                <el-row>
                    <!--el-col :span="12"><el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button></el-col-->
                    <el-col :span="12"><el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button></el-col>
                    <el-col :span="12"><el-button
                        size="mini"
                        @click="viewDetail(scope.row)">查看详情</el-button></el-col>
                </el-row>
            </template>
        </el-table-column>
    </el-table>
<!--**********************************对照的对话框**************************-->
    <el-dialog
        title="高低分课程对照详情"
        :visible.sync="dialogVisibleScrap"
        top="7vh"
        width="70%">
  <el-main>
    <el-form ref="form" label-width="100px" size="mini">
    <el-row>
        <el-col :span="12">
            旧课程基本信息
            <el-row class="border-thin">
                <el-col :span="14">
                    <el-form-item label="课程编码：">
                        <el-input v-model="oldCourse.kcdm" style="width: 150px;"></el-input>
                    </el-form-item>
                    <el-form-item label="课程中文名：">
                        <el-input v-model="oldCourse.kczwmc" style="width: 150px;"></el-input>
                    </el-form-item>                    
                    <el-form-item label="课程英文名：">
                        <el-input v-model="oldCourse.kcywmc" style="width: 150px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="开课部门：">
                        <el-input v-model="oldCourse.xydm" style="width: 150px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课程性质：">
                        <el-input v-model="oldCourse.kcxz" style="width: 150px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="课程类别：">
                        <el-input v-model="oldCourse.dmKclb.kclbmc" style="width: 150px;"></el-input>
                    </el-form-item>
                    <el-form-item label="总学时：">
                        <el-input v-model="oldCourse.zhxs" style="width: 150px;"></el-input>
                    </el-form-item>              
                </el-col>
                <el-col :span="10">              
                    <el-form-item label="课程学分：">
                        <el-input v-model="oldCourse.xf" style="width: 80px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="理论学时：">
                        <el-input v-model="oldCourse.llxs" style="width: 80px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课外学时：">
                        <el-input v-model="oldCourse.kwxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="上机学时：">
                        <el-input v-model="oldCourse.sjxs" style="width: 80px;"></el-input>
                    </el-form-item>
                    <el-form-item label="实验学时：">
                        <el-input v-model="oldCourse.syxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="实践学时：">
                        <el-input v-model="oldCourse.sjxs2" style="width: 80px;"></el-input>
                    </el-form-item>  
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="12">
            新课程基本信息
            <el-row class="border-thin">
                <el-col :span="14">
                    <el-form-item label="课程编码：">
                        <el-input v-model="newCourse.kcdm" style="width: 150px;"></el-input>
                    </el-form-item>
                    <el-form-item label="课程中文名：">
                        <el-input v-model="newCourse.kczwmc" style="width: 150px;"></el-input>
                    </el-form-item>                    
                    <el-form-item label="课程英文名：">
                        <el-input v-model="newCourse.kcywmc" style="width: 150px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="开课部门：">
                        <el-input v-model="newCourse.xydm" style="width: 150px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课程性质：">
                        <el-input v-model="newCourse.kcxz" style="width: 150px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="课程类别：">
                        <el-input v-model="newCourse.dmKclb.kclbmc" style="width: 150px;"></el-input>
                    </el-form-item>
                    <el-form-item label="总学时：">
                        <el-input v-model="newCourse.zhxs" style="width: 150px;"></el-input>
                    </el-form-item>    
                </el-col>
                <el-col :span="10">                
                    <el-form-item label="课程学分：">
                        <el-input v-model="newCourse.xf" style="width: 80px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="理论学时：">
                        <el-input v-model="newCourse.llxs" style="width: 80px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课外学时：">
                        <el-input v-model="newCourse.kwxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="上机学时：">
                        <el-input v-model="newCourse.sjxs" style="width: 80px;"></el-input>
                    </el-form-item>
                    <el-form-item label="实验学时：">
                        <el-input v-model="newCourse.syxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="实践学时：">
                        <el-input v-model="newCourse.sjxs2" style="width: 80px;"></el-input>
                    </el-form-item>  
                </el-col>
            </el-row>
        </el-col>            
    </el-row>
    </el-form>
    <el-button type="primary" @click="closeDetail">返回</el-button>
  </el-main>
    </el-dialog>   
<!--*********************************对照的对话框*******************************************-->
  </div>
</template>

<script>
export default {
    //处理父窗口传来的查询------------------------------------------
    props:{
        kcmSearch:{},
        kcmSearchValue:{}
    },
    watch:{
        kcmSearch:function(val){
            //alert(this.kcmSearchValue.kcm);
            //通过父页传入的数据进行搜索
            this.getData(this.kcmSearchValue.kcm);  //将父传递的数据显示出来
        }
    },
    //-------------------------------------------------------------

    mounted(){
        this.getData('java课程设计'); //获取数据前先取数据
    },
    data() {
        return {
            loading: true ,
            tableHeight: window.innerHeight * 0.77 ,
            tableData:[],
            dialogVisibleScrap: false,
            oldCourse: {dmKclb:{kclbmc:''}},    //表单里的值,初始化三重的数据
            newCourse: {dmKclb:{kclbmc:''}},
        }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      viewDetail(row){
          this.dialogVisibleScrap = true;
          this.oldCourse = row.sysKcByKcdm;
          this.newCourse = row.sysKcByXkcdm;
      },
      closeDetail(){
          this.dialogVisibleScrap = false;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
      },
      handleEdit(index, row) {
        document.getElementById("isshow").style.visibility="visible";
        this.$router.replace({name: 'xqdmRightForm',
            params:{ val:row ,change_id: row.xqdm+new Date().getSeconds(), type: 'change'}});
            ////通过改变每次的参数解决路由跳转失效的问题
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteData(row.id);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
      },
      deleteData(dm){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/JyGdxfdz/clear?id='+dm)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    //_this.$router.go(0);
                    _this.$message({ message: '成功删除对照数据，后台返回'+response.data, type: 'success' });
                    _this.getData(_this.kcmSearchValue.kcm);
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '删除对照数据失败', type: 'error' });
                });
      },  
      //将数据库存储的状态数值，格式化为汉字
      stateFormatter(row,column){
        let state = row.state;
        if(state === '0'){return '否'} else {return '是'}
      },
      //通过kcm查询
      getData(kcm){
            //alert('开始获取数据');
            var _this=this;
            _this.loading = true;
            //需要处理异步请求的问题
            this.axios.get('jwc/JyGdxfdz/get?kcm='+kcm)
            //这里获取全部内容会出问题的。。。。。。。太多了
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.tableData=dataList;
                    _this.$message({ message: '高低分课程对照数据获取成功', type: 'success' });
                    _this.loading = false;
                })
                .catch(function (error) {
                    console.log(error);
                    _this.loading = false;
                    _this.$message({ message: '高低分课程对照数据获取失败', type: 'error' });
                });

            //alert('成功获取数据');
      }
    }
}
</script>

<style scoped>
</style>