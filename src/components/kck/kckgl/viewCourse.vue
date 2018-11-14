<template>
    <el-container>
      <el-header class="header-path">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>课程库</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/kckgl' }">课程库管理</el-breadcrumb-item>
          <el-breadcrumb-item>课程查看</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <main style="text-align:left;">
        <el-form :label-position="labelPosition" label-width="110px" :inline="true" :model="formLabelAlign">
            <el-form-item label="课程代码:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="课程中文名称:">
                <span class="span_for_view span_for_word">{{courseInfo.xqjp}}</span>
            </el-form-item>
            <el-form-item label="课程英文名称:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程类别:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="开课部门:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="课程性质:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="学分:" label-width="110px">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="总学时:" label-width="110px">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="理论学时:">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="实验学时:">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="实践学时:">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="课外学时:">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="上机学时:">
                <span class="span_for_view span_for_number">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="选修归属:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
            <el-form-item label="课程停开:">
                <span class="span_for_view span_for_word">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程简介:">
                <span class="span_for_view" style="width:380px">{{courseInfo.xqjp}}</span>
            </el-form-item>
            <el-form-item label="课程英文简介:">
                <span class="span_for_view" style="width:380px">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程需要/目的:">
                <span class="span_for_view" style="width:380px">{{courseInfo.xqjp}}</span>
            </el-form-item>
            <el-form-item label="主要参考书:">
                <span class="span_for_view" style="width:380px">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="备注:">
                <span class="span_for_view" style="width:380px">{{courseInfo.xqmc}}</span>
            </el-form-item>
        </el-form>
        <el-form :inline="true" size="mini" style="text-align:center;">
            <el-button type="primary" @click="button_click('return')">返回</el-button>
        </el-form>
      </main>
    </el-container>
</template>

<script>

export default {
    name: "kckglAdd",
    data() {
        return {
            labelPosition: 'right',
            courseInfo: {
                xqdm: "",
                xqmc: "12h",
                xqjp: "243weUI无法无法的收款方耗时间发货"
            }
        };
    },
    methods: {
        button_click(kind){
            if(kind=='return'){
                this.$router.push({name: 'kckgl'});
                return;
            }
        }
    }
};
</script>

<style scoped>
.span_for_view {
    display:inline-block;
    border-color:#409EFF;
    border-width:1px;
    border-style:solid;
    padding-left:2px;
}
.span_for_number{
    width:80px;
}
.span_for_word{
    width:150px;
}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
.el-form-item {
    margin-bottom: 8px;
}
</style>