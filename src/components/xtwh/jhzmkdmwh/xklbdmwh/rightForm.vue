<template>
    <div>
        <div style="text-align:left">学科类别代码</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="学科类别代码">
                <el-input v-model="formLabelAlign.xklbdm" placeholder="添加新的学科代码"></el-input>
            </el-form-item>
            <el-form-item label="学科类别名称">
                <el-input v-model="formLabelAlign.xklbmc"></el-input>
            </el-form-item>
            <el-form-item label="学科类别英文名">
                <el-input v-model="formLabelAlign.xklbywm"></el-input>
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
                xklbdm: this.$route.params.val.xklbdm,
                xklbmc: this.$route.params.val.xklbmc,
                xklbywm: this.$route.params.val.xklbywm
            },
            optype: type
        };
    },
    methods: {

    }
};
</script>

<style scoped></style>