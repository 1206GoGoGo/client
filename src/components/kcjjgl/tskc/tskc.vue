<template>
<div>
    <!-- 显示当前页面路径 开始 -->
    <div class="order">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>课程简介管理</el-breadcrumb-item>
        <el-breadcrumb-item>通识课程</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!-- 显示当前页面路径 结束 -->
<!--菜单栏-->
<el-tabs type="border-card">
    <el-tab-pane label="基本信息查询">
        <el-row :gutter="20">
            <el-col :span="9" >
                <el-row>
                    <el-col :span="11">学院</el-col>
                    <el-col :span="13"> 
                        <el-select v-model="xy" size="small">
                            <el-option v-for="xyItem in xyList"
                                :key="xyItem.xydm"
                                :label="xyItem.xymc"
                                :value="xyItem.xydm">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="9">
                <el-row>
                    <el-col :span="11">年级</el-col>
                    <el-col :span="13"> 
                        <el-select v-model="nj" size="small">
                            <el-option v-for="njItem in njList"
                                :key="njItem.value"
                                :label="njItem.label"
                                :value="njItem.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="6"><el-button size="small" type="primary" plain @click="query">查询</el-button></el-col>
        </el-row>
    </el-tab-pane>
</el-tabs>

<el-container>
    <el-main>
        <main-table>
            <!-- @row-click="handleCurrentChange" -->
            <el-table
                stripe
                border
                highlight-current-row
                height="350px"
                :data="tableData.GetList"
                style="width: 100%"
                :default-sort = "{prop: 'index', order: 'descending'}">
                <el-table-column
                    prop="id"
                    label="序号"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="sysKc.kcyl10"
                    label="标题"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="sysXy.xymc"
                    label="学院"
                    sortable>
                </el-table-column>
                <!-- :formatter="stateFormatter" -->
                <el-table-column
                    
                    prop="nj"
                    label="年级"
                    sortable>
                </el-table-column>
                <el-table-column
                    
                    prop="zt"
                    label="流程状态"
                    sortable>
                </el-table-column>
                <el-table-column label="操作" width="160px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">课程简介管理</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </main-table>
    </el-main>
</el-container>

</div>
    
</template>
<script>
   export default {
        mounted:function(){
            this.init();
        },
       data(){
           return {
            xy:"",
            nj:"",
            xyList:[],
            njList:[],
            tableData:{
                    GetList:[
                    ]
                },
           }
       },
       methods:{
           query(){
               var _this=this;
               this.axios({
                    method:'get',
                    url:'/jwc/JyTsxxpy/searchxvsn1?xydm='+_this.xy+'&nj='+_this.nj, 
                    //url:'/jwc/JyTsxxpy/getList', 
                })
                .then(function(rep){
                    _this.tableData.GetList=rep.data;
                    // _this.$notify({
                    //     title:"初始化学院",
                    //     message:"初始化学院成功",
                    //     type:"success"
                    // })
                })
                .catch(function(e){
                // _this.$notify({
                //         title:"初始化学院",
                //         dangerouslyUseHTMLString: true,
                //         message:"初始化学院失败</br>"+e,
                //         type:"error"
                //     })
                });
           },
           handleEdit(index, row) {
                var _this=this;
                //console.log(index, row);
                //this.$router.push({name: 'kcjjgl',params:{jxjhh:_this.index}});
                this.$router.push({path: '/tskc/Tskcjjgl',query:{index:index,row:row}});
            },


            //页面初始化
            init:function(){
                var _this=this;

                //学院
                this.axios({
                    method:'get',
                    url:'/jwc/SysXy/getAllList', 
                })
                .then(function(rep){
                    _this.xyList=rep.data;
                    _this.$notify({
                        title:"初始化学院",
                        message:"初始化学院成功",
                        type:"success"
                    })
                })
                .catch(function(e){
                _this.$notify({
                        title:"初始化学院",
                        dangerouslyUseHTMLString: true,
                        message:"初始化学院失败</br>"+e,
                        type:"error"
                    })
                });

                //年级
                var date=new Date;
                var now_year=date.getFullYear();
                for(var i=now_year;i>=2002;i--)
                {
                    _this.njList.push({label:i+'',value:i+''});
                }
                _this.$notify({
                    title:"初始化年级",
                    message:"初始化年级成功",
                    type:"success"
                })
            },

       }
   }

</script>
<style>
.order{
    margin: 20px
}
</style>
