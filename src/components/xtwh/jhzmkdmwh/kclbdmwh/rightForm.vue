<template>
    <div>
        <div style="text-align:left">课程类别代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="130px" :model="formLabelAlign">
            <el-form-item label="课程类别代码">
                <el-input v-model="formLabelAlign.kclbdm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="课程类别名称">
                <el-input v-model="formLabelAlign.kclbmc"></el-input>
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
                    
                    kclbdm: '',
                    kclbmc: ''
                },
                optype: type
            };
        }
        return {
            labelPosition: 'right',
            formLabelAlign: {
                kclbdm: this.$route.params.val.kclbdm,
                kclbmc: this.$route.params.val.kclbmc
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