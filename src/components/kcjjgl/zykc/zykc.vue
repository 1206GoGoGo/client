<template>
<div>
    <!-- 显示当前页面路径 开始 -->
    <div class="order">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>课程简介管理</el-breadcrumb-item>
        <el-breadcrumb-item>专业课程</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!-- 显示当前页面路径 结束 -->
<!--菜单栏-->
<el-tabs type="border-card">
    <el-tab-pane label="基本信息查询">
        <el-row :gutter="20"> 

            <el-col :span="7" >
                <el-row>
                    <el-col :span="11">学院</el-col>
                    <el-col :span="13"> 
                        <el-select v-model="xy" size="small" @change="initZy">
                            <el-option v-for="xyItem in xyList"
                                :key="xyItem.xydm"
                                :label="xyItem.xymc"
                                :value="xyItem.xydm">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="7">
                <el-row>
                    <el-col :span="11">专业</el-col>
                    <el-col :span="13"> 
                        <el-select v-model="zy" size="small">
                            <el-option v-for="zyItem in zyList"
                                :key="zyItem.zydm"
                                :label="zyItem.zymc"
                                :value="zyItem.zydm">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="7">
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

            <el-col :span="3"><el-button size="small" type="primary" plain @click="query">查询</el-button></el-col>
        </el-row>
    </el-tab-pane>
</el-tabs>

<el-container>
    <el-main>
        <!-- <el-row style="text-align:left; padding-bottom:20px; padding-left:0px;">
           <el-button type="primary" plain>课程简介管理</el-button>
        </el-row> -->
         <!-- @row-click="CurrentRow" -->
        <main-table>
            <el-table
                stripe
                border
                highlight-current-row
               
                height="350px"
                :data="tableData.GetList"
                style="width: 100%"
                :default-sort = "{prop: 'jxjhh', order: 'descending'}">
                <el-table-column
                    prop="jxjhh"

                    label="序号"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="pyjhzwmc"
                    label="标题"
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
            zy:"",
            nj:"",
            njList:[],
            xyList:[],
            zyList:[],
            tableData:{
                GetList:[
                    // {jxjhh:"", pyjhzwmc:""}
                ]
            }
           }
       },
       methods:{
            query(){
                var _this=this;
                if(_this.nj=='')
                    _this.nj="0";
                if(_this.xy=='')
                    _this.xy="0";
                if(_this.zy=='')
                    _this.zy="0";
                this.axios({
                    method:'get',
                    url:'/jwc/JyPyjhyq/search?xydm='+_this.xy+'&zydm='+_this.zy+'&nj='+_this.nj, 
                })
                .then(function(rep){
                    _this.tableData.GetList=rep.data;
                   // console.log(_this.xyList)
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
                this.$router.push({path: '/zykc/Zykcjjgl',query:{index:index,row:row}});
            },


            //页面初始化学院、年级
            init(){
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

            ////页面初始化专业
            initZy(){
                var _this=this
                _this.zyList=""
                this.axios({
                    method:'get',
                    url:'/jwc/SysZy/getzyListByxydm?xydm='+this.xy
                })
                .then(function(rep){
                    _this.zyList=rep.data;
                    
                    _this.$notify({
                        title:"初始化专业",
                        message:"初始化专业成功",
                        type:"success"
                    })
                })
                .catch(function(e){
                _this.$notify({
                        title:"初始化专业",
                        dangerouslyUseHTMLString: true,
                        message:"初始化专业失败</br>"+e,
                        type:"error"
                    })
                });
            }
        }
   }

</script>
<style>
.order{
    margin: 20px
}
</style>
