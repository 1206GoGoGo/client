<template>
    <div>
        <div style="text-align:left">更多信息</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="课程代码">
                <el-input v-model="formLabelAlign.kcdm" disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="英文名称">
                <el-input v-model="formLabelAlign.kcywmc" ></el-input>
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
            <el-form-item label="需要与目的(字段不确定">
                <el-input type="textarea" v-model="formLabelAlign.kczyzyjmd"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" v-model="formLabelAlign.zycks"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain v-on:click="pass_hide()">通过</el-button>
        <el-button type="primary" plain v-on:click="nopass_hide()">拒绝</el-button>
    </div>
</template>

<script>

export default {
    name: "xt",
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: this.$route.params.val
        };
    },
    methods: {
        nopass_hide(){

            this.$confirm('此操作将拒绝课程新建或修改, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //确认后继续
                    this.pass_real();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });


        },
        pass_real(){

            var _this=this;
            //需要处理异步请求的问题
            this.axios.post('jwc/SysKc/del', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '已通过新建或者修改的课程: '+response.data, type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '通过新建或者修改的课程失败: '+error, type: 'error' });
                });  

        },
        pass_hide(){

            this.$confirm('此操作将通过课程的新建或修改, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //确认后继续
                    this.hide_real();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });

        },
        hide_real(){

            var _this=this;
            //需要处理异步请求的问题
            this.axios.post('jwc/SysKc/passforkcsh', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '已拒绝课程的修改或删除: '+response.data, type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '拒绝课程的修改或删除失败: '+error, type: 'error' });
                });  
        }
    }
};
</script>

<style scoped></style>