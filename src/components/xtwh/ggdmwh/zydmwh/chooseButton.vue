<template>
    <div>
        <el-row>
            <el-button type="primary" plain v-on:click="goto('zyxxgl')">添加</el-button>
            <el-button type="primary" plain>导入</el-button>
            <el-button type="primary" plain>导出</el-button>
            <span style="margin-left:10px;">
                <el-select v-model="select" slot="prepend" placeholder="请选择学院" style="width:150px">
                    <el-option label="计算机" value="1"></el-option>
                    <el-option label="管理" value="2"></el-option>
                    <el-option label="信息" value="3"></el-option>
                </el-select>
                <el-input placeholder="请输入专业" v-model="input" style="width:150px"></el-input>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </span>
        </el-row>


                
    </div>
</template>

<script>
export default {
    name: "ChooseButton",
    methods: {
         goto(kinf){
             document.getElementById("isshow").style.display="inline";
             this.$router.push({name: 'zydmRightForm',params:{ val:null ,change_id: '000' ,type: 'add'}});
         }
    },
    data() {
        return {
        input: '',
        select: ''
        }
    }
};
</script>

<style scoped>

</style>