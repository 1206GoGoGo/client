<template>
<el-container>
  <el-header style="background-color:#87D4FE; padding:10px; font-size:20px;">选中需要对比的课程</el-header>
    <el-table
        stripe
        border
        highlight-current-row
        @row-click="handleCurrentChange"
        height="300px"
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
            label="课程名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="jxf"
            label="课程类别"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcdm"
            label="课程性质"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcmc"
            label="学分"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="总学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcdm"
            label="理论学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcmc"
            label="实验学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="上机学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xkcmc"
            label="实践学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xxf"
            label="课外学时"
            sortable>
        </el-table-column>
        <el-table-column
            :formatter="stateFormatter"
            prop="state"
            label="是否停用"
            sortable>
        </el-table-column>
    </el-table>
    <el-row style="text-align:right;">
        <el-button type="primary">确定</el-button>
        <el-button type="primary" @click="return_back">返回</el-button>
    </el-row>
</el-container>
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
      return_back(){
        document.getElementById("query_course").style.display="none";
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
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
                    jkcmc: '老鹰以',
                    jxf: '2',
                    xkcdm: '003',
                    xkcmc: '新辣道是',
                    xxf: '3',
                    state: '0'
                    }, {
                    jkcdm: '003',
                    jkcmc: '老鹰以',
                    jxf: '2',
                    xkcdm: '003',
                    xkcmc: '新辣道是',
                    xxf: '3',
                    state: '0'
                    }, {
                    jkcdm: '004',
                    jkcmc: '老鹰以',
                    jxf: '2',
                    xkcdm: '003',
                    xkcmc: '新辣道是',
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