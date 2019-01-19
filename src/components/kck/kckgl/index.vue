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
                        :key="item.name" :value="item.name" :label="item.name">
                      </el-option>
                  </el-select>
                  <el-input v-model="query.value" placeholder="请输入字段值" style="width:160px;"></el-input>
                  <el-button type="primary" plain @click="add_query('query')" style="margin-left:30px;">查询</el-button>
                </el-row>
                <el-row style="text-align:left;">
                  <el-button type="primary" plain v-on:click="add_query('clear')" style="margin-right:30px;">清除查询条件</el-button>
                  <el-button type="primary" plain v-on:click="add_query('and')">添加条件-与</el-button>
                  <el-button type="primary" plain v-on:click="add_query('or')">添加条件-或</el-button>
                  <el-tag type="success">同时只能选择一种条件，当前选中的逻辑是：</el-tag>
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
            <el-button type="primary" plain v-on:click="goto('nouse')">弃用/恢复</el-button>
            <el-button type="primary" plain v-on:click="goto('delect')">删除</el-button>
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
          if(!_this.selectRow.kcdm){this.$message({ message: '请从下面表格中选择需要查看的课程', type: 'error' });return;}
          this.$router.push({name: 'kckglView',params:{ val: _this.selectRow } });
        }else if(kind=='change'){
          if(!_this.selectRow.kcdm){this.$message({ message: '请从下面表格中选择需要修改的课程', type: 'error' });return;}
          this.$router.push({name: 'kckglChange',params:{ val: _this.selectRow } });
        }else if(kind=='nouse'){//弃用
          if(!_this.selectRow.kcdm){this.$message({ message: '请从下面表格中选择需要弃用的课程', type: 'error' });return;}
          this.nouse(_this.selectRow.kcdm);
        }else if(kind=='delect'){//删除
          if(!_this.selectRow.kcdm){this.$message({ message: '请从下面表格中选择需要删除的课程', type: 'error' });return;}
          this.delect(_this.selectRow.kcdm);
        }
      },
      nouse(id){
            this.$confirm('此操作将弃用或恢复课程, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //确认后继续
                    this.nouse_ok(id);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });

      },
      nouse_ok(id){
            //将课程对象的Sfqy(是否弃用)设置为0
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysKc/depKc?kcdm='+id)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    _this.$message({ message: '成功弃用课程'+response.data, type: 'success' });
                    _this.add_query('query');
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '弃用课程失败'+error, type: 'error' });
                });
      },
      delect(id){
            this.$confirm('此操作将删除课程, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //确认后继续
                    this.delect_ok(id);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });

      },
      delect_ok(id){
            //将课程列表中被选中的(获取选中的课程代码kcdm)某课程逻辑删除（课程状态改为0）
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysKc/chackKc?kcdm='+id)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    _this.$message({ message: '成功删除课程'+response.data, type: 'success' });
                    _this.add_query('query');
                })
                .catch(function (error) {
                    console.log(error);
                    alert("此接口尚未配置成功");
                    _this.$message({ message: '删除课程失败'+error, type: 'error' });
                });
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

        if(op_kind==="query"){
            if(!this.query_view){
              _this.$message({ message: '请选择正确的查询条件', type: 'success' });
              return;
            }
            this.searchValue.hql="from SysKc where "+this.query_view;
            //拼接hql语句后向子组件传递
            if(this.searchValue.isSearch){
              this.searchValue.isSearch=false;
            }else {
              this.searchValue.isSearch=true;
            }
        }else if(op_kind==="and" || op_kind==="or"){
            var isnew = ' '+op_kind+' ';  if(!this.query_view){isnew = ' ';} //处理逻辑关系
            if(this.query.name=='' || this.query.op=='' || this.query.value==''){
                _this.$message({ message: '请选择正确条件', type: 'error' });
                return;
            }

            //处理值的问题
            var key = " '"+this.query.value+"' ";
            if(this.query.op == 'like'){
                key = " '%"+this.query.value+"%' ";
            }
            if(this.query.name == 'xf'){
                key = " "+this.query.value+" ";
            }


            this.query_view += isnew + this.query.name + ' ' +this.query.op + key;

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
          value: 'kcdm'
        },
        {
          name: '课程名称',
          value: 'kczwmc'
        },
        {
          name: '课程性质',
          value: 'kcxz'
        },
        {
          name: '课程类别',
          value: 'kclbmc'
        },
        {
          name: '总学时',
          value: 'zhxs'
        },
        {
          name: '学分',
          value: 'xf'
        }
      ],
      select_op: [
        { name: 'like' },
        { name: '=' },
        { name: '>' },
        { name: '<' }
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