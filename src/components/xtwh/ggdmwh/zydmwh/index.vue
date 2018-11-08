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
            <el-button type="primary" plain>导入</el-button>
            <el-button type="primary" plain>导出</el-button>
            <span style="margin-left:10px;">
                <el-select v-model="select" placeholder="请选择学院" style="width:150px">
                    <el-option label="计算机" value="1"></el-option>
                    <el-option label="管理" value="2"></el-option>
                    <el-option label="信息" value="3"></el-option>
                </el-select>
                <el-input placeholder="请输入专业" v-model="input" style="width:150px"></el-input>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </span>
          </el-row>
          <main-table></main-table>
        </el-main>
        <el-aside id="isshow">
          <router-view :key="key"></router-view>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mainTable from "./mainTable.vue"
import rightForm from "./rightForm"
export default {
  name: "xqdmwh",
  components: {mainTable,rightForm},
  computed: {
      key() {
          //解决同一组件路由跳转，数据不刷新问题
          return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
  },
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
.header-path{
    height:14px !important;;
    margin-top:10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>