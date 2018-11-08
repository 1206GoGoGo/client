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
        <el-header>
          <el-row style="text-align:left; padding-bottom:20px; padding-top:20px;">
            <el-button type="primary" plain v-on:click="goto('add')">学院新建</el-button>
            <el-button type="primary" plain disabled>学院修改</el-button>
            <el-button type="primary" plain>课程对比</el-button>
            <el-select v-model="select" placeholder="请选择学院" style="width:150px;margin-left:30px;">
                <el-option label="计算机" value="1"></el-option>
                <el-option label="管理" value="2"></el-option>
                <el-option label="信息" value="3"></el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入课程名称" style="width:150px;"></el-input>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-row>          
        </el-header>
        <el-container>
          <el-main>
            <main-table></main-table>
          </el-main>
          <el-aside width="300px">
            <router-view :key="key"></router-view>
          </el-aside>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mainTable from "./mainTable.vue"
export default {
  name: "kckbggl",
  components: {mainTable},
  computed: {
      key() {
          //解决同一组件路由跳转，数据不刷新问题
          return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
  },
  methods: {
      goto(kinf){
          document.getElementById("isshow").style.visibility="visible";
          //this.$router.push({name: 'kclbdmRightForm',params:{ val:null ,change_id: '000' ,type: 'add'}});
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