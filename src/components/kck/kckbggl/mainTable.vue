<template>
    <el-table
        stripe
        border
        highlight-current-row
        @row-click="handleCurrentChange"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'xqdm', order: 'descending'}">
        <el-table-column
            prop="kcdm"
            label="课程代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kczwmc"
            label="课程中文名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xf"
            label="学分"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="dmKclb.kclbmc"
            label="课程类别"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zhxs"
            label="总学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="llxs"
            label="理论学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="syxs"
            label="实验学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sjxs"
            label="上机学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sjxs2"
            label="实践学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kwxs"
            label="课外学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sjzs"
            label="实践周数"
            width="50px"
            sortable>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    mounted(){
        this.getData(412,'数据结构'); //获取数据前先取数据
        this.tableData=[];
    },
    data() {
        return {
            tableData:[],
        }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        this.$router.replace({name: 'kckbgglRightForm',params:{ val:val ,change_id: val.kcdm+new Date().getSeconds()}});
      },
      handleDelete(index, row) {
        alert(index);
      },

      //通过学院代码和课程名获取数据
      getData(xydm,kcm){
            //alert('开始获取数据');
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get("SysKc/kcSearch?all=from SysKc where KCZWMC like '"+kcm+"' and XYDM = "+xydm)
            //这里获取全部内容会出问题的。。。。。。。太多了
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

            //alert('成功获取数据');
      }
    }
}
</script>

<style scoped></style>