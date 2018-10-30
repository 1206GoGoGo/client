<template>
    <div class="order">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>消息中心</el-breadcrumb-item>
        <el-breadcrumb-item>消息查看</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="s1">武汉理工大学</span>
      <div class="d1"></div>
      <!-- <div><span>发自:</span></div> -->

      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"><span>发自:</span></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><span>发自:</span></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
            <el-button type="primary" plain>返回</el-button>
            </div>
        </el-col>
      </el-row>


    </div>
</template>
<script>
export default {
    
}
</script>
<style>
   .d1{
       width: 800px;
       height: 300px;
       border:1px solid  gray;
       text-align: center;
   }
   .order{
    margin: 10px;
    height: 70px;
    line-height: 70px;
    width: 100%;
    float:left;
    clear:left;
  }
  .s1{
      text-align:center;
      font-size: larger;
      width: 100%;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
</style>