<template>
    <div>
        <div style="text-align:left">学院代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="学院代码">
                <el-input v-model="formLabelAlign.xydm" placeholder="添加新的学院信息"></el-input>
            </el-form-item>
            <el-form-item label="学院简称">
                <el-input v-model="formLabelAlign.xyjc"></el-input>
            </el-form-item>
            <el-form-item label="学院全称">
                <el-input v-model="formLabelAlign.xyqc"></el-input>
            </el-form-item>
            <el-form-item label="学院英文名称">
                <el-input v-model="formLabelAlign.xyywmc"></el-input>
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
                xydm: this.$route.params.val.xydm,
                xyjc: this.$route.params.val.xyjc,
                xyqc: this.$route.params.val.xyqc,
                xyywmc: this.$route.params.val.xyywmc
            },
            optype: type
        };
    },
    methods: {

    }
};
</script>

<style scoped></style>