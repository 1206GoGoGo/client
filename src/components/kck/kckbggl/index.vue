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
            <el-button type="primary" plain v-on:click="contrast()" id="showContrast">课程对比</el-button>
            <el-select v-model="searchValue.xydm" placeholder="请选择学院" style="width:150px;margin-left:30px;">
                <el-option v-for="xyItem in xyList"
                    :key="xyItem.xydm"
                    :label="xyItem.xyqc"
                    :value="xyItem.xydm">
                </el-option>
            </el-select>
            <el-input v-model="searchValue.kcm" placeholder="请输入课程名称" style="width:150px;"></el-input>
            <el-button type="primary" @click="goto('search')">查询</el-button>
          </el-row>          
        </el-header>
        <el-container>
          <el-main>
            <main-table :kc-search="searchValue.isSearch" :kc-search-value="searchValue"></main-table>
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
  //初始化下拉列表的学院信息
  mounted(){
      this.getXy(); //获取数据前先取数据
  },
  computed: {
      key() {
          //解决同一组件路由跳转，数据不刷新问题
          return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
  },
  methods: {
      //button的操作
      goto(kind){
          if(!this.searchValue.xydm){
            alert("请选择学院！");
            return;
          }
          if(!this.searchValue.kcm){
              this.searchValue.kcm="";
          }
          if(kind=="add"){  //新增课程查询，并不是去新增课程
            this.searchValue.state=1;
            document.getElementById("showContrast").disabled=true;
          }else if(kind=='change'){ //修改过的课程查询，并不是去修改课程
            this.searchValue.state=2;
            document.getElementById("showContrast").disabled=false;
          }else if(kind=='search'){
            this.searchValue.state=0;
          }
          //参数设置完后，向子组件传递信息
          if(this.searchValue.isSearch){
            this.searchValue.isSearch=false;
          }else {
            this.searchValue.isSearch=true;
          }
      },
      contrast(){ //待处理
          this.dialogVisible.contrast=true;
      },
      //关闭对话框
      doCloseDialog:function(msg){
          if(msg=="contrast"){
              this.dialogVisible.contrast=false;
          }
      },

      //初始化下拉列表调用的学院信息
      getXy(){
            //alert('开始获取数据');
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get("SysXy/getAllList")
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.xyList=dataList;
                })
                .catch(function (error) {
                    console.log(error);
                    alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                });

            //alert('成功获取数据');
      }
  },
  data() {
    return {
      //弹框标记数据对象
      dialogVisible:{
          contrast:false,    //对比课程
      },
      xyList:[],  //初始化的学院下拉列表
      searchValue:{//传递给子组件的查询条件
        xydm:'',
        kcm:'',
        state:'',
        isSearch:false//是否点了查找按钮
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