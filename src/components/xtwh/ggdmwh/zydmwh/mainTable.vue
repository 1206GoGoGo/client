<template>
    <el-table
        stripe
        border
        v-loading="loading"
        highlight-current-row
        :height="tableHeight"
        @row-click="handleCurrentChange"
        :data="tableData"
        :default-sort = "{prop: 'xqdm', order: 'descending'}"
        >
        <el-table-column label="操作">
            <template slot-scope="scope">
        <!--        <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        -->        
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
        <el-table-column
            prop="zydm"
            label="专业代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zymc"
            label="专业名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zyywmc"
            label="专业英文名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xz"
            label="学制"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xw"
            label="学位"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zyqc"
            label="专业全称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zypymb"
            label="专业培养目标"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zypyyq"
            label="专业培养要求"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xydm"
            label="所属学院代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="sysX.xdm"
            label="所属系代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="tjzydm"
            label="国家专业代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="cc"
            label="层次"
            sortable>
        </el-table-column>
        <el-table-column
            prop="zt"
            label="是否停用"
            :formatter="stateFormatter"
            sortable>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    //处理父窗口传来的查询------------------------------------------
    props:{
        kcSearch:{},
        kcSearchValue:{},
        IsOp:false,
    },
    watch:{
        kcSearch:function(val){
            //通过父页传入的数据进行搜索
            this.getData(this.kcSearchValue.xydm,this.kcSearchValue.zy);  //将父传递的数据显示出来xydm,kcm
        },
        IsOp:function(val){
            //通过父页传入的数据进行搜索
            this.getData(this.kcSearchValue.xydm,this.kcSearchValue.zy);  //将父传递的数据显示出来xydm,kcm
        }
    },
    //-------------------------------------------------------------

    mounted(){
        this.getData("",""); //初始化数据，待处理
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
        document.getElementById("isshow").style.display="inline";
        this.$router.replace({name: 'zydmRightForm',params:{ val:val ,change_id: val.zydm+new Date().getSeconds(), type: 'change'}});
      },
      //handleEdit(index, row) {
      //  document.getElementById("isshow").style.display="inline";
      //  this.$router.replace({name: 'zydmRightForm',params:{ val:row ,change_id: row.zydm, type: 'change'}});
      //},
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteData(row.zydm);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
      },
      deleteData(zydm){
        var _this=this;
        //需要处理异步请求的问题
        this.axios.get('jwc/SysZy/delete?zydm='+ zydm)
            .then(function (response) {
                //将response获得的数据进行处理
                //将获取到的数据以数组形式传递出去
                _this.$message({ message: '成功删除专业代码: '+response.data, type: 'success' });
                _this.getData();
            })
            .catch(function (error) {
                console.log(error);
                _this.$message({ message: '删除专业代码失败', type: 'error' });
            });
      },
      getData(xydm,zy){
            if(!xydm){
                xydm=0;
            }
            var _this=this;
            _this.loading = true;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysZy/WhSearch', {//通过这种方式解决模糊匹配后台报空指针异常的问题
                params: {
                    ssxydm: xydm,
                    zymc:zy,
                }
            })
            .then(function (response) {
                //将response获得的数据进行处理
                //将获取到的数据以数组形式传递出去
                var dataList=response.data;
                _this.tableData=dataList;
                _this.$notify({title:"获取专业信息", message:"获取专业信息成功 ("+response.data.length+')', type:"success"})
                _this.loading = false;
            })
            .catch(function (error) {
                console.log(error);
                _this.$notify({title:"获取专业信息", message:"获取专业信息失败: "+error, type:"error"})
                _this.loading = false;
            });
      }
    }
}
</script>

<style scoped></style>