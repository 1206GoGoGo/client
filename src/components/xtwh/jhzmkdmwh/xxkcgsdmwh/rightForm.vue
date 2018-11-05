<template>
    <div>
        <div style="text-align:left">选修课程归属代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
            <el-form-item label="选修课程归属代码">
                <el-input v-model="formLabelAlign.xxkcgsdm" 
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="选修课程归属名称">
                <el-input v-model="formLabelAlign.xxkcgsmc"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain>{{optype}}</el-button>
        <el-button type="primary" plain v-on:click="cancel_hide()">取消</el-button>
    </div>
</template>

<script>
//处理代码数字是否可以修改的问题
//待处理，若是自动生成，则无需区分

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
                xxkcgsdm: this.$route.params.val.xxkcgsdm,
                xxkcgsmc: this.$route.params.val.xxkcgsmc
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