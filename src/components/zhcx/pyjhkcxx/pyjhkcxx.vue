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
            <div class="d1">查询条件：</div>
            <el-row class="border-set">
                <el-col :span="12">
                    <div class="grid-content bg-purple left">
                        <!--下拉列表框 开始-->
                        <el-select style="width:120px" v-model="value1" clearable placeholder="请选择">
                            <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select style="width:120px" v-model="value1" clearable placeholder="请选择">
                            <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input
                        style="width:120px"
                        placeholder="请输入内容"
                        v-model="input1"
                        clearable>
                        </el-input>
                        <!--下拉列表框 结束-->
                        <el-button type="primary" plain>添加</el-button>
                    </div>
                    <el-row>
                        <el-col :span="19">
                            <div class="border-left">
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <el-button type="primary" plain class="left-right"> （ </el-button>
                            <el-button type="primary" plain class="left-right"> ） </el-button>
                            <el-button type="primary" plain class="left-right">并且</el-button>
                            <el-button type="primary" plain class="left-right">或者</el-button>
                            <el-button type="primary" plain class="left-right">删除</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light border-right ">
                        <div class="d1">显示字段：</div>
                        <el-checkbox-group v-model="checkList" class="right">
                            <el-checkbox label="教学计划号"></el-checkbox>
                            <el-checkbox label="年级"></el-checkbox>
                            <el-checkbox label="学院代码"></el-checkbox>
                            <el-checkbox label="学院名称"></el-checkbox>
                            <el-checkbox label="专业代码"></el-checkbox>
                            <el-checkbox label="专业名称"></el-checkbox>
                            <el-checkbox label="课程代码"></el-checkbox>
                            <el-checkbox label="课程名称"></el-checkbox>
                            <el-checkbox label="开课学院代码"></el-checkbox>
                            <el-checkbox label="开课学院名称"></el-checkbox>
                            <el-checkbox label="考核方式"></el-checkbox>
                            <el-checkbox label="课程性质"></el-checkbox>
                            <el-checkbox label="课程模块名称"></el-checkbox>
                            <el-checkbox label="课程类别"></el-checkbox>
                            <el-checkbox label="专业方向名称"></el-checkbox>
                            <el-checkbox label="状态"></el-checkbox>
                            <el-checkbox label="是否学位课"></el-checkbox>
                            <el-checkbox label="是否第二专业"></el-checkbox>
                            <el-checkbox label="是否个性化课程"></el-checkbox>
                            <el-checkbox label="课程组名称"></el-checkbox>
                            <el-checkbox label="学分"></el-checkbox>
                            <el-checkbox label="总学时"></el-checkbox>
                            <el-checkbox label="理论学时"></el-checkbox>
                            <el-checkbox label="实验学时"></el-checkbox>
                            <el-checkbox label="实践学时"></el-checkbox>
                            <el-checkbox label="上机学时"></el-checkbox>
                            <el-checkbox label="课外学时"></el-checkbox>
                            <el-checkbox label="开课学期"></el-checkbox>
                        </el-checkbox-group>
                        <el-button type="primary" plain class="left-right">学时统计</el-button>
                        <el-button type="primary" plain class="left-right">清空</el-button>
                        <el-button type="primary" plain class="left-right">导出</el-button>
                        <el-button type="primary" plain class="left-right">查询</el-button>
                    </div>
                </el-col>
            </el-row>
            <!--菜单栏-->
    <div id="qxgl">
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
            label="序号"
            height="50"
            width="100"
             sortable>
          </el-table-column>
          <el-table-column
            prop="permission"
            header-align="center"
            label="权限"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="sex"
            header-align="center"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="job"
            header-align="center"
            label="职务">
          </el-table-column>
          <el-table-column
            prop="jobTitle"
            header-align="center"
            label="职称">
          </el-table-column>
          <el-table-column
            prop="phone"
            header-align="center"
            label="联系方式">
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
        checkList: ['','']
      };
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
