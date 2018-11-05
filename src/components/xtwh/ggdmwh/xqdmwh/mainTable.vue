<template>
    <el-table
        stripe
        border
        highlight-current-row
        @row-click="handleCurrentChange"
        height="350px"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'xqdm', order: 'descending'}">
        <el-table-column
            prop="xqdm"
            label="校区代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xqmc"
            label="校区名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xqjp"
            label="校区简拼"
            sortable>
        </el-table-column>
        <el-table-column
            :formatter="stateFormatter"
            prop="state"
            label="是否停用"
            sortable>
        </el-table-column>
        <el-table-column label="操作" width="160px">
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
      getData(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('ald')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //alert(response.config.url)
                    //将获取到的数据以数组形式传递出去
                    var dataList=[{
                        xqdm: '001',
                        xqmc: '鉴湖',
                        xqjp: 'jh',
                        state: '0'
                        }, {
                        xqdm: '002',
                        xqmc: '南湖',
                        xqjp: 'jh',
                        state: '0'
                        }, {
                        xqdm: '003',
                        xqmc: '马房山',
                        xqjp: 'jh',
                        state: '1'
                        }];
                        _this.tableData=dataList;
                })
                .catch(function (error) {
                    alert(error);
                    _this.tableData=[];
                });
      }
    }
}
</script>

<style scoped></style>