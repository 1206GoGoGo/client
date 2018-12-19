<template>
    <el-container>
      <el-header class="header-path">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>课程库</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/kckgl' }">课程库管理</el-breadcrumb-item>
          <el-breadcrumb-item>新建课程</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <main style="text-align:left;">
        <el-form :label-position="labelPosition" label-width="110px" :inline="true" :model="kcAdd">
            <el-form-item label="开课部门">
                <el-select v-model="kcAdd.xydm" placeholder="选择开课部门"  @change="initKcdm">
                    <el-option v-for="xyItem in xyList"
                        :key="xyItem.xydm"
                        :label="xyItem.xyqc"
                        :value="xyItem.xydm">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程类别">
                <el-select v-model="kcAdd.dmKclb" placeholder="选择课程类别">
                    <el-option v-for="item in kclbList"
                        :key="item.kclbdm"
                        :label="item.kclbmc"
                        :value="item.kclbdm">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程性质">
                <el-select v-model="kcAdd.kcxz" placeholder="选择课程性质">
                    <el-option v-for="item in kcxzList"
                        :key="item.kcxzdm"
                        :label="item.kcxzmc"
                        :value="item.kcxzdm">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程代码">
                <el-input v-model="kcAdd.kcdm1" disabled="true" placeholder="选择学院后自动生成"></el-input>
            </el-form-item>+
            <el-form-item label="">
                <el-input v-model="kcAdd.kcdm2"></el-input>
            </el-form-item>
            <el-tag type="warning">注：最后一位为校区代码(一共三位)，+前的七位在选择学院后自动生成</el-tag>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="理论学时">
                <el-input v-model="kcAdd.llxs"></el-input>
            </el-form-item>
            <el-form-item label="上机学时">
                <el-input v-model="kcAdd.sjxs"></el-input>
            </el-form-item>
            <el-form-item label="实践学时">
                <el-input v-model="kcAdd.sjxs2"></el-input>
            </el-form-item>
            <el-form-item label="实践周数">
                <el-input v-model="kcAdd.sjzs"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="总学时">
                <el-input v-model="kcAdd.zhxs"></el-input>
            </el-form-item>
            <el-form-item label="实验学时">
                <el-input v-model="kcAdd.syxs"></el-input>
            </el-form-item>
            <el-form-item label="课外学时">
                <el-input v-model="kcAdd.kwxs"></el-input>
            </el-form-item>
            <el-checkbox v-model="kcAdd.sfqy">是否重点课程</el-checkbox>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程简介">
                <el-input type="textarea" style="width:380px;" v-model="kcAdd.kcjj"></el-input>
            </el-form-item>
            <el-form-item label="课程英文简介">
                <el-input type="textarea" style="width:380px;" v-model="kcAdd.kcywjj"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程需要与目的">
                <el-input type="textarea" style="width:380px;" v-model="kcAdd.kczyzyjmd"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" style="width:380px;" v-model="kcAdd.zycks"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="备注">
                <el-input type="textarea" style="width:700px;" :rows="2" cols="20" autosize v-model="kcAdd.bz"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" size="mini" style="text-align:center;">
            <el-button type="primary" @click="button_click('submit')">提交</el-button>
            <el-button type="primary" @click="button_click('reset')">重置</el-button>
            <el-button type="primary" @click="button_click('return')">返回</el-button>
        </el-form>
      </main>
    </el-container>
</template>

<script>

export default {
    name: "kckglAdd",
    //初始化下拉列表信息
    mounted(){
        this.initList(); //学院,课程类别，课程性质
    },

    data() {
        return {
            labelPosition: 'right',

            //表单中的内容
            kcAdd: {
                xydm: '',
                dmKclb: '',
                kcxz: '',
                kcdm1: '',
                kcdm2: '',
                kcdm: '',
                llxs: '',
                sjxs: '',
                sjxs2: '',
                sjzs: '',
                zhxs: '',
                syxs: '',
                kwxs: '',
                sfqy: '',   //是否重点课程待确定
                kcjj: '',
                kcywjj: '',
                kczyzyjmd: '',
                zycks: '',
                bz: ''
            },

            //下拉列表数据
            xyList:[],
            kclbList:[],
            kcxzList:[]
        };
    },
    methods: {
        //监控下拉列表的变化，生成课程代码的前部分
        initKcdm(){
             var _this=this;
            //需要处理异步请求的问题
            this.axios.get("SysKc/recommendBydm", {//通过这种方式解决模糊匹配后台报空指针异常的问题
                params: {
                    //通过学院代码或系代码获取按照规则生成的课程代码
	                //flag  标识是学院代码还是系代码   dm代码    按照规则生成课程代码前七位数
                    flag: "dm",
                    dm: _this.kcAdd.xydm
                }
            })
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.kcAdd.kcdm1=dataList;
                })
                .catch(function (error) {
                    console.log(error);
                    alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                });
        },
        button_click(kind){
            if(kind=='return'){
                this.$router.push({name: 'kckgl'});
                return;
            }
        },


        //初始化下拉列表信息 //学院,课程类别，课程性质
        initList(){
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
                //课程类别
                this.axios.get("DmKclb/getAll")
                    .then(function (response) {
                        //将response获得的数据进行处理
                        //将获取到的数据以数组形式传递出去
                        var dataList=response.data;
                        _this.kclbList=dataList;
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                    });
                //课程性质
                this.axios.get("DmKcxz/getAll")
                    .then(function (response) {
                        //将response获得的数据进行处理
                        //将获取到的数据以数组形式传递出去
                        var dataList=response.data;
                        _this.kcxzList=dataList;
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                    });
        },




    }
};
</script>

<style scoped>
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
.el-form-item {
    margin-bottom: 8px;
}
</style>