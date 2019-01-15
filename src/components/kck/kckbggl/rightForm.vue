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
            var _this=this;
            //需要处理异步请求的问题
            this.axios.post('jwc/SysKc/del', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    //_this.$router.go(0);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });  
        },
        pass_hide(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.post('jwc/SysKc/passforkcsh', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    //_this.$router.go(0);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });  
        }
    }
};
</script>

<style scoped></style>