<template>
  <div id="app">
    <el-container>
      <el-header class="header-path">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统维护</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-main>
          <el-row style="text-align:left; padding-bottom:20px; ">
            <el-button type="primary" plain v-on:click="goto('add')">添加</el-button>
            <el-button type="primary" plain disabled>导入</el-button>
            <el-button type="primary" plain>导出</el-button>
            <el-input v-model="formInline.user" placeholder="请输入课程名称" style="width:150px;margin-left:20px;"></el-input>
            <el-button type="primary" @click="onSubmit">按课程名称查询</el-button>
          </el-row>
          <main-table></main-table>
        </el-main>
      </el-container>
    </el-container>
    <div class="add" id="add">
      <add></add>
    </div>
  </div>
</template>

<script>
import mainTable from "./mainTable.vue"
import add from "./add.vue"
export default {
  name: "gdfkcdz",
  components: {mainTable,add},
  methods: {
      goto(kinf){
          document.getElementById("add").style.display="inline";
          //this.$router.push({name: 'kclbdmRightForm',params:{ val:null ,change_id: '000' ,type: 'add'}});
      }
  },
  data() {
    return {
      formInline: {
        user: ''
      }
    }
  }

};

</script>

<style scoped>
.add{
  position:absolute;
  top: 50px;
  left: 10px;
  min-width: 1000px;
  background-color: #ffffff;
  border-style: solid;
  border-width:1px;
  border-color: #000000;
  display: none;
}
.header-path{
    height:14px !important;;
    margin-top:10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>