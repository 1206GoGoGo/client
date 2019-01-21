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
            <el-button type="primary" plain v-on:click="contrast()" :disabled=showContrast>学院修改类目下的课程对比</el-button>
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
            <main-table :kc-search="searchValue.isSearch" :kc-search-value="searchValue" @selectBack="returnSelect"></main-table>
          </el-main>
          <el-aside width="300px">
            <router-view :key="key"></router-view>
          </el-aside>
        </el-container>
      </el-container>
    </el-container>
    <contrast :dialog-visible="dialogVisible.contrast"  :dialog-val="selectRow" @closeDialog="doCloseDialog"></contrast>
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
      returnSelect(value){
        this.selectRow = value;//点查看和修改时会用到(包含一条课程的所有信息)
      },
      goto(kind){
          if(!this.searchValue.xydm){
            this.$message({ message: '请选择学院', type: 'error' });
            return;
          }
          if(!this.searchValue.kcm){
              this.searchValue.kcm="";
          }
          if(kind=="add"){  //新增课程查询，并不是去新增课程
            this.searchValue.state=1;
            this.showContrast = true;
          }else if(kind=='change'){ //修改过的课程查询，并不是去修改课程
            this.searchValue.state=2;
            this.showContrast = false;
          }else if(kind=='search'){
            this.searchValue.state=0;
            this.showContrast = true;
          }
          //参数设置完后，向子组件传递信息
          if(this.searchValue.isSearch){
            this.searchValue.isSearch=false;
          }else {
            this.searchValue.isSearch=true;
          }
      },
      contrast(){
          if(!this.selectRow.kcdm){this.$message({ message: '请从下面表格中选择需要查看的课程', type: 'error' });return;} //待处理
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
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get("jwc/SysXy/getAllList")
                .then(function (response) {
                    var dataList=response.data;
                    _this.xyList=dataList;
                    _this.$notify({title:"获取学院信息", message:"获取学院信息成功 ("+response.data.length+')', type:"success"})
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取学院信息", message:"获取学院信息失败: "+error, type:"error"})
                });
      }
  },
  data() {
    return {
      selectRow:{},//表格中选中的行
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
      },
      showContrast:true
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