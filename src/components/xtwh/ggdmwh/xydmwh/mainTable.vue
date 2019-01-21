<template>
    <el-table
        stripe
        border
        highlight-current-row
        @row-click="handleCurrentChange"
        :height="tableHeight"
        v-loading="loading"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'xqdm', order: 'descending'}"
        >
        <el-table-column
            prop="xydm"
            label="学院代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xymc"
            label="学院简称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xyqc"
            label="学院全称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xyywmc"
            label="学院英文名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zt"
            label="是否停用"
            :formatter="stateFormatter"
            sortable>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-row>
                    <el-col :span="12"><el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button></el-col>
                    <el-col :span="12"><el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button></el-col>
                </el-row>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    //处理父窗口传来的刷新------------------------------------------
    props:{
        IsOp:false,
    },
    watch:{
        IsOp:function(val){
            //通过父页传入的数据进行搜索
            this.getData();  //将父传递的数据显示出来xydm,kcm
        }
    },
    //-------------------------------------------------------------
    mounted(){
        this.getData(); //获取数据前先取数据
    },
    data() {
      return {
          tableHeight: window.innerHeight * 0.75 ,
          loading: true,
          tableData: []
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      //将数据库存储的状态数值，格式化为汉字
      stateFormatter(row,column){
        let state = row.state;
        if(state == '1'){return '否'} else {return '是'}
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
      },
      handleEdit(index, row) {
        document.getElementById("isshow").style.visibility="visible";
        this.$router.replace({name: 'xydmRightForm',
            params:{ val:row ,change_id: row.xydm+new Date().getSeconds(), type: 'change'}});
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteData(row.xydm);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
      },
      deleteData(xydm){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysXy/delete?id='+xydm)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    _this.$message({ message: '成功删除学院信息: '+response.data, type: 'success' });
                    _this.getData();
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '删除学院信息失败: '+error, type: 'error' });
                });
      },
      getData(){
        var _this=this;
        _this.loading = true;
        //需要处理异步请求的问题
        this.axios.get('jwc/SysXy/getAllList')
            .then(function (response) {
                //将response获得的数据进行处理
                //将获取到的数据以数组形式传递出去
                var dataList=response.data;
                _this.tableData=dataList;
                _this.$notify({title:"获取学院信息", message:"获取学院信息成功 ("+response.data.length+')', type:"success"})
                _this.loading = false;
            })
            .catch(function (error) {
                console.log(error);
                _this.$notify({title:"获取学院信息", message:"获取学院信息失败: "+error, type:"error"});
                _this.loading = false;
            });
      }
    }
}
</script>

<style scoped></style>