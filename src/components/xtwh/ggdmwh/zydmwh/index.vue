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
                <el-select v-model="searchValue.xydm" placeholder="请选择学院" style="width:150px">
                  <el-option v-for="xyItem in xyList"
                      :key="xyItem.xydm"
                      :label="xyItem.xyqc"
                      :value="xyItem.xydm">
                  </el-option>
                </el-select>
                <el-input placeholder="请输入专业" v-model="searchValue.zy" style="width:150px"></el-input>
                <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
            </span>
          </el-row>
          <main-table :kc-search="searchValue.isSearch" :kc-search-value="searchValue"></main-table>
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
        //点击查询按钮后
        search(){
          //参数设置完后，向子组件传递信息
          if(this.searchValue.isSearch){
            this.searchValue.isSearch=false;
          }else {
            this.searchValue.isSearch=true;
          }
        },
        goto(kinf){
            document.getElementById("isshow").style.display="inline";
            this.$router.push({name: 'zydmRightForm',params:{ val:null ,change_id: '000'+new Date().getSeconds() ,type: 'add'}});
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
        xyList:[],
        searchValue:{//传递给子组件的查询条件
          xydm: '',
          zy:'',
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