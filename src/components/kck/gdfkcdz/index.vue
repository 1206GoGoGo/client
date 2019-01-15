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
            <el-button type="primary" plain v-on:click="add()">添加</el-button>
            <el-button type="primary" plain disabled>导入</el-button>
            <el-button type="primary" plain>导出</el-button>
            <el-input v-model="kcmSearch.kcm" placeholder="请输入课程名称" style="width:150px;margin-left:20px;"></el-input>
            <el-button type="primary" @click="search()">按课程名称查询</el-button>
          </el-row>
          <main-table :kcm-search="kcmSearch.isSearch" :kcm-search-value="kcmSearch"></main-table>
        </el-main>
      </el-container>
    </el-container>
    <add :dialog-visible="dialogVisible.add" @closeDialog="doCloseDialog"></add>
  </div>
</template>

<script>
import mainTable from "./mainTable.vue"
import add from "./add.vue"
export default {
  name: "gdfkcdz",
  components: {mainTable,add},
  methods: {
      add(){
          this.dialogVisible.add=true;
      },
      //关闭对话框
      doCloseDialog(msg){
          if(msg=="add"){
              this.dialogVisible.add=false;
          }     
      },
      //查找输入的课程
      search(){
        if(this.kcmSearch.isSearch){
          this.kcmSearch.isSearch=false;
        }else {
          this.kcmSearch.isSearch=true;
        }
      }
  },
  data() {
    return {
      kcmSearch:{//查找框中的数据
          kcm:'',
          isSearch:false//是否点了查找按钮
      },
      //弹框标记数据对象
      dialogVisible:{
          add:false,    //添加课程对照
      }
    }
  }

};

</script>

<style scoped>
.add{
  background-color: #ffffff;
  border-style: solid;
  border-width:1px;
  border-color: #000000;
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