<template>
    <div>
        <div style="text-align:left">专业代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign" size="mini">
            <el-form-item label="专业代码">
                <el-input v-model="formLabelAlign.zydm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
                <el-input v-model="formLabelAlign.zymc"></el-input>
            </el-form-item>
            <el-form-item label="专业英文名称">
                <el-input v-model="formLabelAlign.zyywmc"></el-input>
            </el-form-item>
            <el-form-item label="学制">
                <el-input v-model="formLabelAlign.xz"></el-input>
            </el-form-item>
            <el-form-item label="学位">
                <el-input v-model="formLabelAlign.xw"></el-input>
            </el-form-item>
            <el-form-item label="专业全称">
                <el-input v-model="formLabelAlign.zyqc"></el-input>
            </el-form-item>
            <el-form-item label="专业培养目标">
                <el-input v-model="formLabelAlign.zypymb"></el-input>
            </el-form-item>
            <el-form-item label="专业培养要求">
                <el-input v-model="formLabelAlign.zypyyq"></el-input>
            </el-form-item>
            <el-form-item label="所属学院代码">
                <el-input v-model="formLabelAlign.ssxydm"></el-input>
            </el-form-item>
            <el-form-item label="所属系代码">
                <el-input v-model="formLabelAlign.ssxdm"></el-input>
            </el-form-item>
            <el-form-item label="国家专业代码">
                <el-input v-model="formLabelAlign.gjzydm"></el-input>
            </el-form-item>
            <el-form-item label="层次">
                <el-input v-model="formLabelAlign.cc"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain>{{optype}}</el-button>
        <el-button type="primary" plain @click="cancel_hide()">取消</el-button>
    </div>
</template>

<script>

export default {
    name: "xt",
    data() {
        var type;
        if(this.$route.params.type=="add"){
            type="添加";
        }else type="修改";
        if(!this.$route.params.val){
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    xqdm: '',
                    xqmc: '',
                    xqjp: ''
                },
                optype: type
            };
        }
        return {
            labelPosition: 'right',
            formLabelAlign: {
                zydm: this.$route.params.val.zydm,
                zymc: this.$route.params.val.zymc,
                zyywmc: this.$route.params.val.zyywmc,
                xz: this.$route.params.val.xz,
                xw: this.$route.params.val.xw,
                zyqc: this.$route.params.val.zyqc,
                zypymb: this.$route.params.val.zypymb,
                zypyyq: this.$route.params.val.zypyyq,
                ssxydm: this.$route.params.val.ssxydm,
                ssxdm: this.$route.params.val.ssxdm,
                gjzydm: this.$route.params.val.gjzydm,
                cc: this.$route.params.val.cc
            },
            optype: type
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.display="none";
            //只需隐藏，不用清空输入框内容，因为在重新打开时会处理该问题
        }

    }
};
</script>

<style scoped>
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
</style>