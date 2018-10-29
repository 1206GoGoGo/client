<template>
    <div>
        <el-row>
            <el-button type="primary" plain v-on:click="goto('zyxxgl')">添加</el-button>
            <el-button type="primary" plain>导入</el-button>
            <el-button type="primary" plain>导出</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "ChooseButton",
    methods: {
         goto(kinf){
             this.$router.push({name: 'khfsdmRightForm',params:{ val:null ,change_id: '000' ,type: 'add'}});
         }
    }
};
</script>

<style scoped></style>