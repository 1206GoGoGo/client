<template>
    <div>
        <div style="text-align:left">考核方式代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="考核方式代码">
                <el-input v-model="formLabelAlign.khfsdm" 
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="考核方式名称">
                <el-input v-model="formLabelAlign.khfsmc"></el-input>
            </el-form-item>
            <el-form-item label="建议考试方式">
                <el-input v-model="formLabelAlign.jyksfs"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain>{{optype}}</el-button>
        <el-button type="primary" plain v-on:click="cancel_hide()">取消</el-button>
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
                    khfsdm: '',
                    khfsmc: '',
                    jyksfs: ''
                },
                optype: type
            };
        }
        return {
            labelPosition: 'right',
            formLabelAlign: {
                khfsdm: this.$route.params.val.khfsdm,
                khfsmc: this.$route.params.val.khfsmc,
                jyksfs: this.$route.params.val.jyksfs
            },
            optype: type
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