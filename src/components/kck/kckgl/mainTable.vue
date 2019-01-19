<template>
    <el-table
        stripe
        border
        highlight-current-row
        v-loading="loading"
        :height="tableHeight"
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
    //处理父窗口传来的查询------------------------------------------
    props:{
        kcSearch:{},
        kcSearchValue:{}
    },
    watch:{
        kcSearch:function(val){
            //通过父页传入的数据进行搜索
            this.getData(this.kcSearchValue.hql);  //将父传递的数据显示出来xydm,kcm
        }
    },
    //-------------------------------------------------------------

    mounted(){
        this.getData("from SysKc where xydm = 412 and kczwmc like '%java%'"); //获取数据前先取数据
    },
    data() {
        return {
            loading: true,
            tableHeight: window.innerHeight * 0.55 ,
            tableData:[],

        }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        this.$router.replace({name: 'kckglRightForm',params:{ val:val ,change_id: val.kcdm+new Date().getSeconds()}});
        this.$emit("selectBack",val);   //直接选中的行信息传递给父组件
      },
      handleEdit(index, row) {
        document.getElementById("isshow").style.visibility="visible";
        this.$router.replace({name: 'xqdmRightForm',
            params:{ val:row ,change_id: row.xqdm+new Date().getSeconds(), type: 'change'}});
            ////通过改变每次的参数解决路由跳转失效的问题
      },
      handleDelete(index, row) {
        alert(index);
      },
      //将数据库存储的状态数值，格式化为汉字
      stateFormatter(row,column){
        let state = row.state;
        if(state === '0'){return '否'} else {return '是'}
      },
      //通过学院代码和课程名获取数据
      getData(hql){
            //alert('开始获取数据');
            var _this=this;
            _this.loading = true;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysKc/kcSearch', {//通过这种方式解决模糊匹配后台报空指针异常的问题
                params: {
                    all: hql
                }
            })
            //这里获取全部内容会出问题的。。。。。。。太多了
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.tableData=dataList;
                    _this.loading = false;
                    _this.$message({ message: '成功获取课程信息', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '获取课程信息失败', type: 'error' });
                    _this.loading = false;
                });

      }
    }
}
</script>

<style scoped></style>