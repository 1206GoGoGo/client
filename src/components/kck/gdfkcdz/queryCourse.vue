<template>
<el-dialog
    title="选中需要对比的课程"
    :visible="visible"
    width="80%"
    top="9vh"
    :before-close="handleClose"
    :center="true"
    append-to-body>
  <el-header style="background-color:#87D4FE; padding:10px; ">使用方法</el-header>
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
            prop="kcdm"
            label="课程代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kczwmc"
            label="课程名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="dmKclb.kclbmc"
            label="课程类别"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kcxz"
            label="课程性质"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xf"
            label="学分"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zhxs"
            label="总学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="llxs"
            label="理论学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="syxs"
            label="实验学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sjxs"
            label="上机学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sjxs2"
            label="实践学时"
            sortable>
        </el-table-column>
        <el-table-column
            prop="kwxs"
            label="课外学时"
            sortable>
        </el-table-column>
        <el-table-column
            :formatter="stateFormatter"
            prop="zt"
            label="是否停用"
            sortable>
        </el-table-column>
    </el-table>
    <el-row style="text-align:right;">
        <el-button type="primary" @click="select_back">确定</el-button>
        <el-button type="primary" @click="return_back">返回</el-button>
    </el-row>
</el-dialog>
</template>

<script>
export default {
    props:{
        dialogVisibleQuery:{
            type:Boolean,
            default:false,
            require:true
        },
        dialogParameter:{}
    },
    watch:{
        dialogVisibleQuery:function(val){
            this.visible=val;
            //通过父页传入的数据进行搜索
            this.getData(this.dialogParameter.way,this.dialogParameter.value);  //将父传递的数据显示出来
        }
    },


    data() {
        return {
            visible:this.dialogVisibleQuery.query,
            tableData:[],
            selectedCourse:''   //选中的课程(内容)放在这里传给父显示
        }
    },
    methods: {
        select_back(){
            //冒泡传递事件到上层组件，同步visible
            this.$emit("selectBack",this.selectedCourse);
            //在父函数中同时关掉显示
        },
        //处理回调
        return_back(){
            //冒泡传递事件到上层组件，同步visible
            this.$emit("closeDialog","query");
        },
        handleClose(done) {
            var _this=this;
            this.$confirm('确认关闭？')
            .then(_ => {
                this.return_back();
                //done();
            })
            .catch(_ => {});
        },
        handleCurrentChange(val) {
            this.currentRow = val;
            //获取改行数据，点确定后返回父窗口
            this.selectedCourse=val;
        },


        //将数据库存储的状态数值，格式化为汉字
        stateFormatter(row,column){
            let state = row.state;
            if(state === '0'){return '否'} else {return '是'}
        },
        //通过way 查询字段   1.按课程中文名称   2.系代码   3.课程代码   4.课程类别名称
	    //key 查询条件
        getData(way,key){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysKc/getMHKcList?text='+key+'&cb='+way)
            //这里获取全部内容会出问题的。。。。。。。太多了
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.tableData=dataList;
                    _this.$message({ message: '获取课程数据成功 ('+response.data.length+')', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '获取课程数据失败: '+error, type: 'error' });
                });
        }
    }
}
</script>

<style scoped></style>