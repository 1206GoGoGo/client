<template>
<el-dialog 
    :visible.sync="visible"
    width="80%"
    top="7vh"
    :before-close="comeback"
    :center="true"
    
    >
    <div slot="title">
        编辑查看专业信息
    </div>
    <el-container>
        <el-main>
            <el-tabs type="border-card">
                <el-tab-pane label="基本信息">
                    <base-info></base-info>
                </el-tab-pane>
                <el-tab-pane label="主要信息">
                    <primary-info></primary-info>
                </el-tab-pane>
                <el-tab-pane label="业务培养目标及要求">
                    <target-and-req></target-and-req>
                </el-tab-pane>
                <el-tab-pane label="选修说明">
                   <elect-and-exp></elect-and-exp>
                </el-tab-pane>
                <el-tab-pane label="建议及要求">
                    <suggestion-and-requirement></suggestion-and-requirement>
                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
    <div slot="footer">
            <el-button plain type="primary" @click="open_kcz">管理课程组和课程模块</el-button>
            <el-button plain type="primary" @click="modify">修改专业信息</el-button>
            <el-button plain type="primary" @click="comeback">返回</el-button>
    </div>
</el-dialog>

</template>

<script>



import BaseInfo from '@/components/zyxx/editZySub/BaseInfo'
import TargetAndReq from '@/components/zyxx/editZySub/TargetAndRequirements'
import ElectAndExp from '@/components/zyxx/editZySub/ElectAndExplanation'
import PrimaryInfo from '@/components/zyxx/editZySub/PrimaryInfo'
import SuggestionAndRequirement from '@/components/zyxx/editZySub/SuggestionAndRequirement'


export default {
    props:{
        dialogVisible:{
            type:Boolean,
            default:false,
            require:true
        },
    },
    data:function(){
        return{
           visible:this.dialogVisible,
        }
    },
    computed:{
       
    },
    watch:{
        dialogVisible:function(val){
            this.visible=val;
        }
    },
    components:{
        BaseInfo,
        TargetAndReq,
        ElectAndExp,
        PrimaryInfo,
        SuggestionAndRequirement,
    },
    methods:{
        comeback:function(){
            this.visible=false;
            //冒泡传递事件到上层组件，同步visible
            this.$emit("closeDialog","editZy");
        },
        modify:function(){
            alert("修改专业信息");
        },
        open_kcz:function(){
            alert("课程组");
        }

    }
    
}
</script>

<style scoped>
/deep/ .el-dialog__header{
    padding:10px 0 10px 0px;
    margin:0 20px;
    border-bottom:2px dashed #409EFF;
    font-size:17px;
    font-weight:bold;
}
/deep/ .el-dialog__headerbtn{
    top:15px;
}
/deep/.el-dialog__body{
    padding-top:2px;
}
/deep/ .el-dialog__body .el-container .el-main{
    padding:15px 10px 10px 10px;
}

/deep/.el-tabs--border-card>.el-tabs__content{
    padding:0px;
    min-height:500px;
}
</style>
