<template>
    <el-table
        stripe=true
        border=true
        highlight-current-row
        v-loading="loading"
        @row-click="handleCurrentChange"
        :height="tableHeight"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'xqdm', order: 'descending'}"
        >
        <el-table-column
            prop="kcxzdm"
            label="课程性质代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kcxzmc"
            label="课程性质名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kcxzywqc"
            label="课程性质英文全称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kcxzywjc"
            label="课程性质英文简称"
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
    mounted(){
        this.getData(); //获取数据前先取数据
    },
    data() {
      return {
         tableData: [],
         tableHeight: window.innerHeight * 0.75 ,
         loading: true,
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      //将数据库存储的状态数值，格式化为汉字
      stateFormatter(row,column){
        let state = row.state;
        if(state === '0'){return '否'} else {return '是'}
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
      },
      handleEdit(index, row) {
        document.getElementById("isshow").style.visibility="visible";
        this.$router.replace({name: 'kcxzdmRightForm',
            params:{ val:row ,change_id: row.kcxzdm+new Date().getSeconds(), type: 'change'}});
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteData(row.kcxzdm);
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
            this.axios.get('jwc/DmKcxz/delete?id='+dm)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    _this.$message({ message: '成功删除课程性质', type: 'success' });
                    _this.getData();
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '删除课程性质失败', type: 'error' });
                });
      },      
      getData(){
        var _this=this;
        _this.loading = true;
        //需要处理异步请求的问题
        this.axios.get('jwc/DmKcxz/getAll')
            .then(function (response) {
                //将response获得的数据进行处理
                //将获取到的数据以数组形式传递出去
                var dataList=response.data;
                _this.tableData=dataList;
                _this.$notify({title:"获取课程性质", message:"获取课程性质成功", type:"success"});
                _this.loading = false;
            })
            .catch(function (error) {
                console.log(error);
                _this.$notify({title:"获取课程性质", message:"获取课程性质失败", type:"error"});
                _this.loading = false;
            });
      }
    }
}
</script>

<style scoped></style>