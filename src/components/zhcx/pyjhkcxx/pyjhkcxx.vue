<template>
    <div id="order">
        <el-container>
            <!-- 显示当前页面路径 开始 -->
            <el-header class="header-path">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>综合查询</el-breadcrumb-item>
                <el-breadcrumb-item>培养计划课程信息</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <!-- 显示当前页面路径 结束 -->
            <!--菜单栏-->
            <!-- <div class="d1">查询条件：</div> -->
            <el-row class="border-set">
                <el-col :span="12">
                    <div class="grid-content bg-purple left">
                        <!--下拉列表框 开始-->
                        <el-select style="width:110px" v-model="query.name" placeholder="请选择">
                            <el-option v-for="item in select_name" 
                                :key="item.name" :value="item.value" :label="item.name">
                            </el-option>
                        </el-select>
                        <el-select style="width:110px" v-model="query.op" placeholder="请选择">
                            <el-option v-for="item in select_op" 
                                :key="item.name" :value="item.name" :label="item.name">
                            </el-option>
                        </el-select>
                        <el-input
                        style="width:120px"
                        placeholder="请输入内容"
                        v-model="query.value"
                        clearable>
                        </el-input>
                        <!--下拉列表框 结束-->
                        <el-button type="primary" plain v-on:click="goto('addline')">添加</el-button>
                    </div>
                    <el-row>
                        <el-col :span="19">
                            <div class="border-left">
                              <!-- <el-input class="border-left" type="textarea" v-model="queryString" style="height:240px" ></el-input> -->
                              {{queryString}} 
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="primary" plain class="left-right" v-on:click="goto('left')"> （ </el-button>
                            <el-button type="primary" plain class="left-right" v-on:click="goto('right')"> ） </el-button>
                            <el-button type="primary" plain class="left-right" v-on:click="goto('and')">并且</el-button>
                            <el-button type="primary" plain class="left-right" v-on:click="goto('or')">或者</el-button>
                            <el-button type="primary" plain class="left-right" v-on:click="goto('clear')">清空</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light border-right ">
                        <div class="d1">显示字段：</div>
                        <el-checkbox-group v-model="viewCheckList" class="right">
                            <el-checkbox label="教学计划号" id="cjxjhh" value="a.jxjhh"></el-checkbox>
                            <el-checkbox label="年级" value="substr(a.jxjhh,1,4)"></el-checkbox>
                            <el-checkbox label="学院代码" value="substr(a.jxjhh,5,3)"></el-checkbox>
                            <el-checkbox label="学院名称" value="skxy.xymc"></el-checkbox>
                            <el-checkbox label="专业代码" value="substr(a.jxjhh,5,4)"></el-checkbox>
                            <el-checkbox label="专业名称" value="skzy.zymc"></el-checkbox>
                            <el-checkbox label="课程代码" value="a.kcdm"></el-checkbox>
                            <el-checkbox label="课程名称" value="kec.kczwmc"></el-checkbox>
                            <el-checkbox label="开课学院代码" value="kkxy.xydm"></el-checkbox>
                            <el-checkbox label="开课学院名称" value="kkxy.xymc"></el-checkbox>
                            <el-checkbox label="考核方式" value="a.khfs"></el-checkbox>
                            <el-checkbox label="课程性质" value="a.kcxz"></el-checkbox>
                            <el-checkbox label="课程模块名称" value="kcmk.kcmkmc"></el-checkbox>
                            <el-checkbox label="课程类别" value="kec.kclbmc"></el-checkbox>
                            <el-checkbox label="专业方向名称" value="zyfx.zyfxzwmc"></el-checkbox>
                            <el-checkbox label="状态" value="a.zt"></el-checkbox>
                            <el-checkbox label="是否学位课" value="a.sfxwk"></el-checkbox>
                            <el-checkbox label="是否第二专业" value="a.sfdezy"></el-checkbox>
                            <el-checkbox label="是否个性化课程" value="a.sfgxkc"></el-checkbox>
                            <el-checkbox label="课程组名称" value="kcz.kczmc"></el-checkbox>
                            <el-checkbox label="学分" value="kec.xf"></el-checkbox>
                            <el-checkbox label="总学时" value="kec.zhxs"></el-checkbox>
                            <el-checkbox label="理论学时" value="kec.llxs" ></el-checkbox>
                            <el-checkbox label="实验学时" value="kec.syxs" ></el-checkbox>
                            <el-checkbox label="实践学时" value="kec.sjxs"></el-checkbox>
                            <el-checkbox label="上机学时" value="kec.sjxs2"></el-checkbox>
                            <el-checkbox label="课外学时" value="kec.kwxs"></el-checkbox>
                            <el-checkbox label="开课学期" value="a.jykkxq"></el-checkbox>
                        </el-checkbox-group>
                        <el-button type="primary" plain class="left-right">学时统计</el-button>
                        <el-button type="primary" plain class="left-right">清空</el-button>
                        <el-button type="primary" plain class="left-right">导出</el-button>
                        <el-button type="primary" plain class="left-right" @click="query">查询</el-button>
                    </div>
                </el-col>
            </el-row>
            <!--菜单栏-->
    <div>
        <el-table
          :data="tableData"
          border
          highlight-current-row
          class="t1"
          height="500" 
          style="width: 100%"
          :default-sort = "{prop: 'time', order: 'descending'}" >
          <el-table-column
            prop="num"
            header-align="center"
            label="教学计划号"
            
            :width="width.jxjhh"
             sortable>
          </el-table-column>
          <el-table-column
            prop="permission"
            header-align="center"
            label="年级"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            label="学院代码">
          </el-table-column>
          <el-table-column
            prop="sex"
            header-align="center"
            label="学院名称">
          </el-table-column>
          <el-table-column
            prop="job"
            header-align="center"
            label="专业代码">
          </el-table-column>
          <el-table-column
            prop="jobTitle"
            header-align="center"
            label="专业名称">
          </el-table-column>
          <el-table-column
            prop="phone"
            header-align="center"
            label="课程代码">
          </el-table-column>

          <el-table-column
            prop="permission"
            header-align="center"
            label="课程名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            label="开课学院代码">
          </el-table-column>
          <el-table-column
            prop="sex"
            header-align="center"
            label="开课学院名称">
          </el-table-column>
          <el-table-column
            prop="job"
            header-align="center"
            label="考核方式">
          </el-table-column>
          <el-table-column
            prop="jobTitle"
            header-align="center"
            label="课程性质">
          </el-table-column>
          <el-table-column
            prop="phone"
            header-align="center"
            label="课程模块名称">
          </el-table-column>

          <el-table-column
            prop="permission"
            header-align="center"
            label="课程类别"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            label="专业方向名称">
          </el-table-column>
          <el-table-column
            prop="sex"
            header-align="center"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="job"
            header-align="center"
            label="是否学位课">
          </el-table-column>
          <el-table-column
            prop="jobTitle"
            header-align="center"
            label="是否第二专业">
          </el-table-column>
          <el-table-column
            prop="phone"
            header-align="center"
            label="是否个性化课程">
          </el-table-column>

          <el-table-column
            prop="permission"
            header-align="center"
            label="课程组名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            label="学分">
          </el-table-column>
          <el-table-column
            prop="sex"
            header-align="center"
            label="总学时">
          </el-table-column>
          <el-table-column
            prop="job"
            header-align="center"
            label="理论学时">
          </el-table-column>
          <el-table-column
            prop="jobTitle"
            header-align="center"
            label="实验学时">
          </el-table-column>
          <el-table-column
            prop="phone"
            header-align="center"
            label="实践学时">
          </el-table-column>

          <el-table-column
            prop="sex"
            header-align="center"
            label="上机学时">
          </el-table-column>
          <el-table-column
            prop="job"
            header-align="center"
            label="课外学时">
          </el-table-column>
          <el-table-column
            prop="jobTitle"
            header-align="center"
            label="开课学期">
          </el-table-column>
        </el-table>
    </div>
        </el-container>
    </div>
</template>

<script>
export default {
    data () {
      return {
        width: {
            jxjhh: 0,
        },
        select_name: [
            {
            name: '年级',
            value: '年级'
            },
            {
            name: '学院代码',
            value: '学院代码'
            },
            {
            name: '学院名称',
            value: '学院名称'
            },
            {
            name: '专业代码',
            value: '专业代码'
            },
            {
            name: '专业名称',
            value: '专业名称'
            },
            {
            name: '课程代码',
            value: '课程代码'
            },
            {
            name: '课程名称',
            value: '课程名称'
            },
            {
            name: '开课学院代码',
            value: '开课学院代码'
            },
            {
            name: '开课学院名称',
            value: '开课学院名称'
            },
            {
            name: '开课学期',
            value: '开课学期'
            },
            {
            name: '考核方式',
            value: '考核方式'
            },
            {
            name: '课程性质',
            value: '课程性质'
            },
            {
            name: '状态',
            value: '状态'
            }
        ],
        select_op: [
            { name: 'like' },
            { name: '=' },
            { name: '>' },
            { name: '<' },
            { name: '>=' },
            { name: '<=' }
        ],
        query: {
            name: '',
            op: '',
            value: ''
        },
        tableData:[],
        viewCheckList: ['',''],
        queryString:''

      }
    },
    methods:{
        goto(val){
            if(val == 'clear'){
                this.queryString = '';
                this.query.name='';
                this.query.op='';
                this.query.value='';
            }else if(val == 'and'){
                this.queryString+=" and ";
            }else if(val == 'or'){
                this.queryString+=" or ";
            }else if(val == 'left'){
                this.queryString+=" ( ";
            }else if(val == 'right'){
                this.queryString+=" ) ";
            }else if(val == 'addline'){
                this.queryString+= this.query.name+" "+this.query.op+" "+this.query.value;
            }
        },
        query(){

        }
    }
}
</script>

<style>
/* .left-right1{
    margin-top: 15px;
    margin-left: 10px;
} */
.left-right{
    margin-top: 10px;
    margin-left: 10px;
}
.border-set {
  background: #ffffff;
  border-color:#409EFF;
  border-width:1px;
  border-style:solid;
  padding-top: 10px;
  padding-bottom: 10px; 
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
}
.border-left{
  background: #ffffff;
  border-color:#409EFF;
  border-width:1px;
  border-style:solid;
  margin-left: 15px;
  margin-top: 10px;
  height: 240px;
  /* width: 70%; */
}
.border-right{
  background: #ffffff;
  border-color:#409EFF;
  border-width:1px;
  border-style:solid;
  margin:5px;
  height: 280px;
  width: 95%;
}

.left{
    margin-left: 5px;
    padding-left: 0px;
}
.right{
    text-align: left;
    margin-left: 10px;
}
.order{
    margin: 10px;
    /* padding: 10px; */
    width: 100%;
    float:left;
    clear:left;
  }
.d1{
    text-align: left;
    padding: 5px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
</style>
