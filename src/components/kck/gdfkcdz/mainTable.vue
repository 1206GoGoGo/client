<template>
    <el-table
        stripe
        border
        highlight-current-row
        @row-click="handleCurrentChange"
        height="86%"
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
                </el-row>
            </template>
        </el-table-column>
    </el-table>
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
            tableData:[]
        }
    },
    methods: {
      formatter(row, column) {
        return row.address;
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
        alert(index);
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
            //需要处理异步请求的问题
            this.axios.get('JyGdxfdz/get?kcm='+kcm)
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