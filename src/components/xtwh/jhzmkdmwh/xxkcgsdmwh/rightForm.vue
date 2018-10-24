<template>
    <div>
        <div style="text-align:left">添加校区代码</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="校区代码">
                <el-input v-model="formLabelAlign.xqdm" placeholder="添加新的校区信息"></el-input>
            </el-form-item>
            <el-form-item label="校区名称">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="校区简拼">
                <el-input v-model="formLabelAlign.xqjp"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain>{{optype}}</el-button>
        <el-button type="primary" plain>取消</el-button>
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
                xqdm: this.$route.params.val.xqdm,
                xqmc: this.$route.params.val.xqmc,
                xqjp: this.$route.params.val.xqjp
            },
            optype: type
        };
    },
    methods: {

    }
};
</script>

<style scoped></style>