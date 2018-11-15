<template>
    <el-table
        stripe=true
        border=true
        highlight-current-row
        @row-click="handleCurrentChange"
        height="350px"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'xqdm', order: 'descending'}"
        >
        <el-table-column
            prop="xxgsdm"
            label="选修课程归属代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxgsmc"
            label="选修课程归属名称"
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
        if(state === '0'){return '否'} else {return '是'}
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
      },
      handleEdit(index, row) {
          
        document.getElementById("isshow").style.visibility="visible";
        this.$router.replace({name: 'xxkcgsdmRightForm',
            params:{ val:row ,change_id: row.xxkcgsdm+new Date().getSeconds(), type: 'change'}});
            //通过改变每次的参数解决路由跳转失效的问题
      },
      handleDelete(index, row) {
        alert(index);
      },
      getData(){
        var _this=this;
        //需要处理异步请求的问题
        this.axios.get('JyXxgs/getAll')
            .then(function (response) {
                //将response获得的数据进行处理
                //将获取到的数据以数组形式传递出去
                var dataList=response.data;
                _this.tableData=dataList;
            })
            .catch(function (error) {
                console.log(error);
                alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
            });
      }
    }
}
</script>

<style scoped></style>