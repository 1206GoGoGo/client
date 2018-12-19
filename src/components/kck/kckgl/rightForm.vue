<template>
    <div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign"  size="mini">
            <el-form-item label="英文名称">
                <el-input v-model="formLabelAlign.kcywmc"></el-input>
            </el-form-item>
            <el-form-item label="开课部门">
                <el-input v-model="formLabelAlign.xydm"></el-input>
            </el-form-item>
            <el-form-item label="课程简拼">
                <el-input type="textarea" v-model="formLabelAlign.kcjp"></el-input>
            </el-form-item>
            <el-form-item label="课程英文简拼">
                <el-input type="textarea" v-model="formLabelAlign.kcywjp"></el-input>
            </el-form-item>
            <el-form-item label="需要与目的">
                <el-input type="textarea" v-model="formLabelAlign.kczyzyjmd"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" v-model="formLabelAlign.zycks"></el-input>
            </el-form-item>
            <el-form-item label="课程状态">
                <el-input type="textarea" v-model="formLabelAlign.zt"></el-input>
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
                kcywmc: this.$route.params.val.kcywmc,
                xydm: this.$route.params.val.xydm,
                kcjp: this.$route.params.val.kcjp,
                kcywjp: this.$route.params.val.kcywjp,
                kczyzyjmd: this.$route.params.val.kczyzyjmd,
                zycks: this.$route.params.val.zycks,
                zt: this.$route.params.val.zt
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