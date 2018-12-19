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
          <el-row  :gutter="24" class="border-set">
            <el-col :span="15">
              <div>
                <el-row style="text-align:left; padding-bottom:10px; ">
                  <el-select v-model="query.name" placeholder="请选择查询字段" style="width:150px;">
                      <el-option v-for="item in select_name" 
                        :key="item.name" :value="item.value" :label="item.name">
                      </el-option>
                  </el-select>
                  <el-select v-model="query.op" placeholder="请选择运算符" style="width:110px;">
                      <el-option v-for="item in select_op" 
                        :key="item.name" :value="item.value" :label="item.name">
                      </el-option>
                  </el-select>
                  <el-input v-model="query.value" placeholder="请输入字段值" style="width:160px;"></el-input>
                  <el-button type="primary" plain @click="add_query('query')" style="margin-left:30px;">查询</el-button>
                </el-row>
                <el-row style="text-align:left;">
                  <el-button type="primary" plain v-on:click="add_query('clear')" style="margin-right:30px;">清除查询条件</el-button>
                  <el-button type="primary" plain v-on:click="add_query('and')">添加条件-与</el-button>
                  <el-button type="primary" plain v-on:click="add_query('or')">添加条件-或</el-button>
                </el-row>
              </div>
            </el-col>
            <el-col :span="9">
              <span style="font-size:12px;">
                你所选择的查询条件：查询字段 运算符 属性值 逻辑运算符
              </span>
              <el-input
                type="textarea"
                :rows="3"
                disabled
                placeholder="请选择查询条件，然后点击查询进行查询"
                v-model="query_view">
              </el-input>
            </el-col>
          </el-row>

          <el-row style="text-align:left; padding-bottom:10px; ">
            <el-button type="primary" plain v-on:click="goto('add')">添加</el-button>
            <el-button type="primary" plain v-on:click="goto('view')">查看</el-button>
            <el-button type="primary" plain v-on:click="goto('change')">修改</el-button>
            <el-button type="primary" plain>弃用</el-button>
            <el-button type="primary" plain>删除</el-button>
            <el-button type="primary" plain>导出</el-button>
            <el-button type="primary" plain>课程简介导入</el-button>
          </el-row>
          <el-container>
            <el-main><main-table :kc-search="searchValue.isSearch" :kc-search-value="searchValue"
                @selectBack="returnSelect" ></main-table></el-main>
            <el-aside width="300px"><router-view :key="key"></router-view></el-aside>
          </el-container>
        </el-main>
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
      returnSelect(value){
        this.selectRow = value;//点查看和修改时会用到(包含一条课程的所有信息)
      },
      goto(kind){
        var _this=this;
        if(kind=='add'){
          this.$router.push({name: 'kckglAdd'});
        }else if(kind=='view'){
          if(!_this.selectRow.kcdm){alert("请从下面表格中选择需要查看的课程");return;}
          this.$router.push({name: 'kckglView',params:{ val: _this.selectRow } });
        }else if(kind=='change'){
          if(!_this.selectRow.kcdm){alert("请从下面表格中选择需要修改的课程");return;}
          this.$router.push({name: 'kckglChange',params:{ val: _this.selectRow } });
        }
      },
      add_query(op_kind){
        if(op_kind==="clear"){
          this.query.name="";
          this.query.op="";
          this.query.value="";
          this.query_view="";
          return;
        }

        var _this = this;
        var query_name;
        var query_op;
        var query_value=this.query.value;
        if(_this.query.name!=''){
          query_name = this.select_name.find(function(x) {
              return x.value == _this.query.name;
            }).name;
        }
        if(_this.query.op!=''){
          query_op = this.select_op.find(function(x) {
              return x.value == _this.query.op;
            }).name;
        }
        if(op_kind==="query"){
          if(this.query_view===''){
            if(query_name!='' && query_op!='' && query_value!=''){
              this.query_view+=" "+query_name+query_op+query_value;
            }else{
              alert("请选择正确的查询条件");
            }
          }else {
            if(query_name!='' && query_op!='' && query_value!=''){
              //带上为添加到右侧的内容进行查询，同时更新显示
              this.query_view+=" "+query_name+query_op+query_value;
            }else{
              //对已添加的条件进行查询
            }
            //处理查询操作

            this.searchValue.hql="from SysKc where xydm = 412 and kczwmc like '%数据结构%'";
            //拼接hql语句后向子组件传递
            if(this.searchValue.isSearch){
              this.searchValue.isSearch=false;
            }else {
              this.searchValue.isSearch=true;
            }            
          }
        }else if(op_kind==="and"){
            if(query_name!='' && query_op!='' && query_value!=''){
              this.query_view+=" and "+'\n'+query_name+query_op+query_value;
            }else{
              alert("请选择正确的查询条件");
            }         
        }else if(op_kind==="or"){
            if(query_name!='' && query_op!='' && query_value!=''){
              this.query_view+=" or "+'\n'+query_name+query_op+query_value;
            }else{
              alert("请选择正确的查询条件");
            }
        }
      },

  },
  data() {
    return {
      selectRow:{},//表格中选中的行
      query: {
        name: '',
        op: '',
        value: '',
        logic: ''
      },
      query_view: '',
      select_name: [
        {
          name: '课程代码',
          value: '1'
        },
        {
          name: '课程名称',
          value: '2'
        },
        {
          name: '课程性质',
          value: '3'
        }
      ],
      select_op: [
        {
          name: 'like',
          value: '1'
        },
        {
          name: '=',
          value: '2'
        },
        {
          name: '>',
          value: '3'
        },
        {
          name: '<',
          value: '4'
        }
      ],
      searchValue:{//传递给子组件的查询条件
        hql:'',
        isSearch:false//是否点了查找按钮
      }
    }
  }

};

</script>

<style scoped>
.border-set {
  background: #ffffff;
  border-color:#409EFF;
  border-width:1px;
  border-style:solid;
  padding: 10px;
  margin-bottom: 10px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
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