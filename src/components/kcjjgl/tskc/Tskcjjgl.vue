<template>
<div>
    <!-- 显示当前页面路径 开始 -->
    <div class="order">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>课程简介管理</el-breadcrumb-item>
        <el-breadcrumb-item>通识课程</el-breadcrumb-item>
        <el-breadcrumb-item>课程简介管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!--菜单栏-->
    <el-tabs type="border-card">
    <el-tab-pane label="基本信息查询">
        <el-row :gutter="20"> 

            <el-col :span="7">
                <el-row>
                    <el-col :span="11">课程名称:</el-col>
                    <el-col :span="13"> 
                        <el-input
                        placeholder="请输入内容"
                        v-model="input1"
                        clearable>
                        </el-input>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="3"><el-button size="small" type="primary" plain @click="query">查询</el-button></el-col>
        </el-row>
    </el-tab-pane>
</el-tabs>
<!--菜单栏-->

<el-container>
    <el-main>
        <main-table>
            <el-table
                stripe
                border
                highlight-current-row
               
                height="350px"
                :data="tableData.GetList"
                style="width: 100%"
                :default-sort = "{prop: 'kcdm', order: 'descending'}">
                <el-table-column
                    prop="sysKc.kcdm"
                    label="序号"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="sysKc.kczwmc"
                    label="名称"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="sysKc.xf"
                    label="学分"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="sysKc.zhxs"
                    label="学时"
                    sortable>
                </el-table-column>
                <el-table-column label="操作" width="160px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编写课程简介</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </main-table>
    </el-main>
        <el-dialog title="课程简介管理" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="课程名称：" :label-width="formLabelWidth">
                    <el-input v-model="form.kczwmc" >
                    </el-input>
                </el-form-item>
                <el-form-item label="课程简介：" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.kcjj" >
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
</el-container>

</div>
</template>

<script>
    export default {
        name: "kcjjgl",
        mounted:function(){
            this.init();
        },
        data(){
            return {
                input1: '',
                tableData:{
                    GetList:[
                    ]
                },

                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                kczwmc:'',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                kcjj: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods:{
            init(){
                var _this=this;
                this.axios({
                    method:'get', //梳理一下！！！！！！！！！！
                    url:'/jwc/JyTsxxpy/gettspykcByXyNjMc?xydm='+_this.$route.query.row.xydm+'tspydm='+_this.$route.query.row.tsxxpydm+'kcmc'+_this.$route.query.row.kcmc, 
                })
                .then(function(rep){
                    _this.tableData.GetList=rep.data;
                    _this.$notify({
                        title:"获取查询",
                        message:"获取查询成功",
                        type:"success"
                    })
                })
                .catch(function(e){
                _this.$notify({
                        title:"获取查询",
                        dangerouslyUseHTMLString: true,
                        message:"获取查询</br>"+e,
                        type:"error"
                    })
                });
            },
            query(){
                var _this=this;
                this.axios({
                    method:'get',  //？？？？？？？？？？？？？？？？？？？？
                    url:'/jwc/JyTsxxpy/gettspykcByXyNjMc?xydm='+_this.row.sysKc.tsxydm+'&tspydm='+_this.row.tspydm+'&kcmc'+_this.input1, 
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
            submit(){          //和专业课程一吗？？？？？？
                var _this=this;
                this.axios({
                    method:'get',
                    url:'/jwc/SysKc/modify?sysKc='+_this.form.kcjj, 
                })
                .then(function(rep){
                    _this.tableData.GetList=rep.data;
                    // _this.$notify({
                    //     title:"初始化",
                    //     message:"初始化成功",
                    //     type:"success"
                    // })
                })
                .catch(function(e){
                // _this.$notify({
                //         title:"初始化",
                //         dangerouslyUseHTMLString: true,
                //         message:"初始化失败</br>"+e,
                //         type:"error"
                //     })
                });
                
                _this.dialogFormVisible = false
            },
            handleEdit(index, row) {
                var _this=this;
                _this.dialogFormVisible = true,
                _this.form.kczwmc=row.sysKc.kczwmc
                _this.form.kcjj=row.sysKc.kcjj   //修改后无法返回改好的内容！！！！！！！！！
            },

        }
    }
</script>

<style>
.order{
    margin: 20px
}
</style>