<template>
  <div id="app">
    <el-container>
      <el-header class="header-path">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>课程库</el-breadcrumb-item>
          <el-breadcrumb-item>课程库变更管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-header>
          <el-row style="text-align:left; padding-bottom:20px; padding-top:20px;">
            <el-button type="primary" plain v-on:click="goto('add')">学院新建</el-button>
            <el-button type="primary" plain v-on:click="goto('change')">学院修改</el-button>
            <el-button type="primary" plain v-on:click="goto('contrast')" id="showContrast">课程对比</el-button>
            <el-select v-model="select" placeholder="请选择学院" style="width:150px;margin-left:30px;">
                <el-option label="计算机" value="1"></el-option>
                <el-option label="管理" value="2"></el-option>
                <el-option label="信息" value="3"></el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入课程名称" style="width:150px;"></el-input>
            <el-button type="primary" @click="goto('search')">查询</el-button>
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
    <contrast :dialog-visible="dialogVisible.contrast" @closeDialog="doCloseDialog"></contrast>
  </div>
</template>

<script>
import mainTable from "./mainTable.vue"
import contrast from "./contrastCourse.vue"
export default {
  name: "kckbggl",
  components: {mainTable,contrast},
  computed: {
      key() {
          //解决同一组件路由跳转，数据不刷新问题
          return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
  },
  methods: {
      //button的操作
      goto(kind){
        if(kind=="add"){
          document.getElementById("showContrast").disabled=true;
        }else if(kind=='change'){
          document.getElementById("showContrast").disabled=false;
        }else if(kind=='search'){
        }else if(kind=='contrast'){
          this.dialogVisible.contrast=true;
        }
      },
      //关闭对话框
      doCloseDialog:function(msg){
          if(msg=="contrast"){
              this.dialogVisible.contrast=false;
          }
      },
  },
  data() {
    return {
      //弹框标记数据对象
      dialogVisible:{
          contrast:false,    //对比课程
      },
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