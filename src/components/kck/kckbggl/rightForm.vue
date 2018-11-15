<template>
    <div>
        <div style="text-align:left">更多信息</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="英文名称">
                <el-input v-model="formLabelAlign.kcywmc" ></el-input>
            </el-form-item>
            <el-form-item label="开课部门">
                <el-input v-model="formLabelAlign.xdm"></el-input>
            </el-form-item>
            <el-form-item label="课程简拼">
                <el-input type="textarea" v-model="formLabelAlign.kcjp"></el-input>
            </el-form-item>
            <el-form-item label="课程英文简拼">
                <el-input type="textarea" v-model="formLabelAlign.kcywjp"></el-input>
            </el-form-item>
            <el-form-item label="需要与目的(字段不确定">
                <el-input type="textarea" v-model="formLabelAlign.kczyzyjmd"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" v-model="formLabelAlign.zycks"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain>通过</el-button>
        <el-button type="primary" plain v-on:click="cancel_hide()">拒绝</el-button>
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
                xdm: this.$route.params.val.xdm,
                kcjp: this.$route.params.val.kcjp,
                kcywjp: this.$route.params.val.kcywjp,
                kczyzyjmd: this.$route.params.val.kczyzyjmd,
                zycks: this.$route.params.val.zycks
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

<style scoped></style>