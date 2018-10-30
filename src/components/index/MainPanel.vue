<template>
    <el-container>
        <el-header>el-header</el-header>
        <el-main>
            <router-view>
            </router-view>
        </el-main>
    </el-container>
</template>

<script>
//主界面
export default {
    name:"mainPanel",
    data:function(){
        return {


        }
    }
}
</script>

<style scoped>
.el-header{
    background-color:#adf;
    height:84px !important;
    line-height: 84px;
}
</style>
