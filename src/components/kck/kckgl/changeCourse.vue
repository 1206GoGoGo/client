<template>
    <el-container>
      <el-header class="header-path">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>课程库</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/kckgl' }">课程库管理</el-breadcrumb-item>
          <el-breadcrumb-item>课程修改</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <main style="text-align:left;">
        <el-form :label-position="labelPosition" label-width="110px" :inline="true" :model="formLabelAlign">
            <el-form-item label="课程代码">
                <el-input v-model="formLabelAlign.xqmc" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="课程中文名称">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="课程英文名称">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true">
            <el-form-item label="总学时" label-width="110px">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="课程类别">
                <el-select v-model="formLabelAlign.xqdm" placeholder="选择开课部门" class="el_select">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学分">
                <el-select v-model="formLabelAlign.xqdm" placeholder="选择开课部门" class="el_select">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程性质">
                <el-select v-model="formLabelAlign.xqdm" placeholder="选择开课部门" class="el_select">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="实践学时">
                <el-input v-model="formLabelAlign.xqdm"></el-input>
            </el-form-item>
            <el-form-item label="课外学时">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="选修归属">
                <el-select v-model="formLabelAlign.xqdm" placeholder="选择开课部门" class="el_select">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="理论学时">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="实验学时">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="开课学院代码">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>

        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程停开">
                <el-select v-model="formLabelAlign.xqdm" placeholder="选择开课部门" class="el_select">
                    <el-option label="课程停开" value="shanghai"></el-option>
                    <el-option label="正常开课" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上机学时">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="实践周数">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-checkbox v-model="formLabelAlign.xqmc">是否重点课程</el-checkbox>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程简介">
                <el-input type="textarea" style="width:380px;" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="课程英文简介">
                <el-input type="textarea" style="width:380px;" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程需要与目的">
                <el-input type="textarea" style="width:380px;" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" style="width:380px;" v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="备注">
                <el-input type="textarea" style="width:700px;" :rows="2" cols="20" autosize v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" size="mini" style="text-align:center;">
            <el-button type="primary" @click="button_click('submit')">提交</el-button>
            <el-button type="primary" @click="button_click('reset')">重置</el-button>
            <el-button type="primary" @click="button_click('return')">取消</el-button>
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
            formLabelAlign: {
                xqdm: "",
                xqmc: "",
                xqjp: ""
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
.el_select {
    width:150px;
}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
.el-form-item {
    margin-bottom: 8px;
}
</style>