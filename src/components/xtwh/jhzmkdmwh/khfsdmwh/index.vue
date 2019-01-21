<template>
  <div id="app">
    <el-container>
      <el-header class="header-path">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统维护</el-breadcrumb-item>
          <el-breadcrumb-item>计划子模块代码维护</el-breadcrumb-item>
          <el-breadcrumb-item>考核方式代码维护</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-main>
          <el-row style="text-align:left; padding-bottom:20px; ">
            <el-button type="primary" plain v-on:click="goto('add')">添加</el-button>
            <el-button type="primary" plain>导入</el-button>
            <el-button type="primary" plain>导出</el-button>
          </el-row>
          <main-table :is-op="isOp"></main-table>
        </el-main>
        <el-aside id="isshow">
          <router-view :key="key" @opBack="opBack"></router-view>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mainTable from "./mainTable.vue"
import rightForm from "./rightForm"
export default {
  name: "khfsdmwh",
  components: {mainTable,rightForm},
  computed: {
    key() {
        //解决同一组件路由跳转，数据不刷新问题
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
  },
  data() {
    return{
      isOp:false,
    }
  },
  methods: {
    goto(kinf){
        document.getElementById("isshow").style.visibility="visible";
        this.$router.push({name: 'khfsdmRightForm',params:{ val:null ,change_id: '000' ,type: 'add'}});
    },
    opBack(val){
      if(this.isOp){
        this.isOp = false;
      }else{
        this.isOp = true;
      }
    }
  }

};

</script>

<style scoped>
.header-path{
    height:14px !important;;
    margin-top:10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>