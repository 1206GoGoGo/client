<template>
    <div>
        <div style="text-align:left">课程性质代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="130px" :model="formLabelAlign">
            <el-form-item label="课程性质代码">
                <el-input v-model="formLabelAlign.kcxzdm" placeholder="添加新的校区信息"></el-input>
            </el-form-item>
            <el-form-item label="课程性质名称">
                <el-input v-model="formLabelAlign.kcxzmc"></el-input>
            </el-form-item>
            <el-form-item label="课程性质英文全称">
                <el-input v-model="formLabelAlign.kcxzywqc"></el-input>
            </el-form-item>
            <el-form-item label="课程性质英文简称">
                <el-input v-model="formLabelAlign.kcxzywjc"></el-input>
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
                kcxzdm: this.$route.params.val.kcxzdm,
                kcxzmc: this.$route.params.val.kcxzmc,
                kcxzywqc: this.$route.params.val.kcxzywqc,
                kcxzywjc: this.$route.params.val.kcxzywjc
            },
            optype: type
        };
    },
    methods: {

    }
};
</script>

<style scoped></style>