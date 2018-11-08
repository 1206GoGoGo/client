<template>
    <div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign"  size="mini">
            <el-form-item label="英文名称">
                <el-input v-model="formLabelAlign.xqdm"></el-input>
            </el-form-item>
            <el-form-item label="开课部门">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="课程简拼">
                <el-input type="textarea" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="课程英文简拼">
                <el-input type="textarea" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="需要与目的">
                <el-input type="textarea" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="课程状态">
                <el-input type="textarea" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: "xt",
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                xqdm: this.$route.params.val.xqdm,
                xqmc: this.$route.params.val.xqmc,
                xqjp: this.$route.params.val.xqjp
            }
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.visibility="hidden";
        }
    }
};
</script>

<style scoped>
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
.el-form-item {
    margin-bottom: 8px;
}
</style>