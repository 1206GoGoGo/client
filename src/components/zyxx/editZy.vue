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
                    <BaseInfo></BaseInfo>
                </el-tab-pane>
                <el-tab-pane label="业务培养目标及要求">
                    <TargetAndReq></TargetAndReq>
                </el-tab-pane>
                <el-tab-pane label="选修说明">
                    <ElectAndExp></ElectAndExp>
                </el-tab-pane>
                <el-tab-pane label="建议及要求">建议及要求</el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
    <div slot="footer">
            <el-button plain type="primary">管理课程组和课程模块</el-button>
            <el-button plain type="primary">修改专业信息</el-button>
            <el-button plain type="primary" @click="comeback">返回</el-button>
    </div>
</el-dialog>

</template>

<script>



import BaseInfo from '@/components/zyxx/editZySub/baseInfo'
import TargetAndReq from '@/components/zyxx/editZySub/targetAndRequirements'
import ElectAndExp from '@/components/zyxx/editZySub/electAndExplanation'


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
    },
    methods:{
        comeback:function(){
            this.visible=false;
            //冒泡传递事件到上层组件，同步visible
            this.$emit("closeDialog","editZy");
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
/deep/ .el-dialog__body{
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
