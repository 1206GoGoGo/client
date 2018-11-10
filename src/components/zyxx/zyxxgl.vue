<template>
<div>
    <el-container>
        <el-header class="header-path">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>专业信息</el-breadcrumb-item>
                <el-breadcrumb-item>专业信息管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <el-tabs type="border-card">
                <el-tab-pane label="基本查询">
                    <el-row :gutter="20" class="cxtj"> 
                        <el-col :span="5" >
                            <el-row>
                                <el-col :span="11">按校区查询</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="queryTerms.xqObj.xq" size="small">
                                        <el-option v-for="xqItem in queryTerms.xqObj.xqList"
                                            :key="xqItem.value"
                                            :label="xqItem.label"
                                            :value="xqItem.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>

                        </el-col>
                        <el-col :span="5">
                             <el-row>
                                <el-col :span="11">按学院查询</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="queryTerms.xyObj.xy" size="small">
                                        <el-option v-for="xyItem in queryTerms.xyObj.xyList"
                                            :key="xyItem.value"
                                            :label="xyItem.label"
                                            :value="xyItem.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="5">
                             <el-row>
                                <el-col :span="11">按年级查询</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="queryTerms.njObj.nj" size="small">
                                        <el-option v-for="njItem in queryTerms.njObj.njList"
                                            :key="njItem.value"
                                            :label="njItem.label"
                                            :value="njItem.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="5">
                             <el-row>
                                <el-col :span="11">按状态查询</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="queryTerms.ztObj.zt" size="small">
                                        <el-option v-for="ztItem in queryTerms.ztObj.ztList"
                                            :key="ztItem.value"
                                            :label="ztItem.label"
                                            :value="ztItem.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="4"><el-button size="small" type="primary" plain>查询</el-button></el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <el-row class="fun-button-area" :gutter="20">
                <el-col :span="10">
                    <el-row :gutter="5">
                        <el-col :span="6"><el-button @click="addZy" size="small" type="primary" plain>新增</el-button></el-col>
                        <el-col :span="6"><el-button @click="editZy" size="small" type="primary" plain>查看</el-button></el-col>
                        <el-col :span="6"><el-button size="small" type="primary" plain>删除</el-button></el-col>
                        <el-col :span="6"><el-button size="small" type="primary" plain>导出</el-button></el-col>
                    </el-row>
                </el-col>
                <el-col :span="4"><el-button size="small" type="primary" plain>全年级复制</el-button></el-col>
                <el-col :span="10">复制 <el-input  size="small"></el-input> 届—— <el-input size="small"></el-input> 届
                    <el-button size="small" type="primary" plain>确定</el-button>
                </el-col>
            </el-row>

            <el-table :data="kcData.kcList" border size="small"  stripe highlight-current-row  @current-change="getCurrent" style="width:100%;margin-top:20px;">
                <el-table-column prop="zt" label="状态" width="100" sortable></el-table-column>
                <el-table-column prop="jxjhh" label="教学计划号" width="100" sortable></el-table-column>
                <el-table-column prop="nj" label="年级" width="100" sortable></el-table-column>
                <el-table-column prop="xq" label="校区" width="100" sortable></el-table-column>
                <el-table-column prop="zymc" label="专业名称" width="100" sortable></el-table-column>
                <el-table-column prop="rs" label="人数" width="100" sortable></el-table-column>
                <el-table-column prop="cc" label="层次" width="100" sortable></el-table-column>
                <el-table-column prop="zskcs" label="正式课程数" width="100" sortable></el-table-column>
                <el-table-column prop="xfyq" label="最低毕业学分要求" width="100" sortable></el-table-column>
                <el-table-column prop="ggbx" label="公共必修" width="100" sortable></el-table-column>
                <el-table-column prop="ggxx" label="公共选修" width="100" sortable></el-table-column>
                <el-table-column prop="xkbx" label="学科必修" width="100" sortable></el-table-column>
                <el-table-column prop="xkxx" label="学科选修" width="100" sortable></el-table-column>
                <el-table-column prop="zybx" label="专业必修" width="100" sortable></el-table-column>
                <el-table-column prop="zyxx" label="专业选修" width="100" sortable></el-table-column>
                <el-table-column prop="zyxxxf" label="专业限选学分" width="100" sortable></el-table-column>
                <el-table-column prop="sjkxf" label="实践课学分" width="100" sortable></el-table-column>
                <el-table-column prop="fssjxf" label="分散实践学分" width="100" sortable></el-table-column>
                <el-table-column prop="jqsjxf" label="假期实践学分" width="100" sortable></el-table-column>
                <el-table-column prop="yybxxf" label="英语必修学分" width="100" sortable></el-table-column>
                <el-table-column prop="tybxxf" label="体育必修学分" width="100" sortable></el-table-column>
            </el-table>
        </el-main>
    </el-container>
    <add-zy :dialog-visible="dialogVisible.addZy" @closeDialog="doCloseDialog"></add-zy>
    <edit-zy :dialog-visible="dialogVisible.editZy" @closeDialog="doCloseDialog"></edit-zy>
</div>
</template>

<script>
import AddZy from '@/components/zyxx/addZy'
import EditZy from '@/components/zyxx/editZy'


export default {
    name:"zyxxgl",
    data:function(){
        return{
            //弹框标记数据对象
            dialogVisible:{
                addZy:false,    //添加专业
                editZy:false,   //编辑查看专业
            },    
            //查询条件对象
            queryTerms:{
                xyObj:{
                    xy:0,
                    xyList:[
                        {
                            label:"不限校区",
                            value:0
                        }
                    ]
                },
                xqObj:{
                    xq:0,
                    xqList:[
                        {
                            label:"不限学院",
                            value:0
                        },
                    ]
                },
                ztObj:{
                    zt:0,
                    ztList:[
                        {
                            label:"不限状态",
                            value:0
                        }
                    ]
                },
                njObj:{
                    nj:0,
                    njList:[
                        {
                            label:"不限年级",
                            value:0
                        }
                    ]
                }
            },
            //课程对象
            kcData:{
                currentKc:null,   //当前选中课程对象
                kcList:[
                {zt:"测试数据",jxjhh:"1",nj:"1",xq:"1",zymc:"1",rs:"1",cc:"1",zskcs:"1",xfyq:"1",ggbx:"1",ggxx:"1",xkbx:"1",zybx:"1",zyxx:"1",zyxxxf:"1",shkcxf:"1",fssjxf:"1",jqsjxf:"1",yybxxf:"1",tybxxf:"1"},
                ],
            }
        }
    },
    components:{
        AddZy,
        EditZy
    },
    
    methods:{
        addZy:function(){
            this.dialogVisible.addZy=true;
        },
        editZy:function(){
            //判断是否选中了数据
            if(this.kcData.currentKc){
                this.dialogVisible.editZy=true;
            }
            else{
                //展示提醒-element-UI-message
                this.$message({
                    showClose:true,
                    message:'错误，当前未选中数据，请先在表格中选择需要查看的数据项。',
                    type:'error',
                    duration:5000
                });
                
            }

        },

        //关闭对话框
        doCloseDialog:function(msg){
            if(msg=="addZy"){
                this.dialogVisible.addZy=false;
            }
            else if(msg=="editZy"){
                this.dialogVisible.editZy=false;
            }
        },
        //获取表格中当前选中项
        getCurrent:function(val){

            this.kcData.currentKc=val;

            console.log("当前"+this.kcData.currentKc.jxjhh);
        }


    }
}
</script>

<style scoped>
.header-path{
    height:14px !important;;
    margin-top:10px;
}

.cxtj{
    font-size: 14px;
    line-height: 30px;
}
.fun-button-area{
    margin-top: 15px;
}
.el-input{
    width:100px;
}
.el-table__header{
    background-color: #acb !important;
}

</style>
