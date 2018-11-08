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
            prop="jkcdm"
            label="课程代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="jkcmc"
            label="课程中文名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="jxf"
            label="学分"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcdm"
            label="课程类别"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcmc"
            label="总学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="讲课学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcmc"
            label="实验学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="上机学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="实践学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcmc"
            label="课外学时"
            width="50px"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="实践周数"
            width="50px"
            sortable>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    mounted(){
        this.getData(); //获取数据前先取数据
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
        this.$router.replace({name: 'kckglRightForm',params:{ val:val ,change_id: val.jkcdm}});
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
      getData(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('ald')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //alert(response.config.url)
                    //将获取到的数据以数组形式传递出去
                    var dataList=[];
                        _this.tableData=dataList;
                })
                .catch(function (error) {
                    //alert(error);
                    _this.tableData=[];
                    var dataList=[{
                    jkcdm: '002',
                    jkcmc: '231',
                    jxf: '2',
                    xkcdm: '003',
                    xkcmc: '12',
                    xxf: '3',
                    state: '0'
                    }, {
                    jkcdm: '003',
                    jkcmc: '123',
                    jxf: '2',
                    xkcdm: '003',
                    xkcmc: '12',
                    xxf: '3',
                    state: '0'
                    }, {
                    jkcdm: '004',
                    jkcmc: '111',
                    jxf: '2',
                    xkcdm: '003',
                    xkcmc: '12',
                    xxf: '3',
                    state: '0'
                    }];
                    _this.tableData=dataList;
                });
      }
    }
}
</script>

<style scoped></style>