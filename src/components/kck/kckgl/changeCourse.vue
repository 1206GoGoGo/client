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
        <el-form :label-position="labelPosition" label-width="110px" :inline="true" :model="kcChange">
            <el-form-item label="课程代码">
                <el-input v-model="kcChange.kcdm" disabled=true></el-input>
            </el-form-item>
            <el-form-item label="课程中文名称">
                <el-input v-model="kcChange.kczwmc"></el-input>
            </el-form-item>
            <el-form-item label="课程英文名称">
                <el-input v-model="kcChange.kcywmc"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true">
            <el-form-item label="总学时" label-width="110px">
                <el-input v-model="kcChange.zhxs"></el-input>
            </el-form-item>
            <el-form-item label="课程类别">
                <el-select v-model="kcChange.dmKclb.kclbdm" placeholder="选择课程类别" class="el_select">
                    <el-option v-for="item in kclbList"
                        :key="item.kclbdm"
                        :label="item.kclbmc"
                        :value="item.kclbdm">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学分" label-width="110px">
                <el-input v-model="kcChange.xf"></el-input>
            </el-form-item>
            <el-form-item label="课程性质">
                <el-select v-model="kcChange.kcxz" placeholder="选择课程性质" class="el_select">
                    <el-option v-for="item in kcxzList"
                        :key="item.kcxzmc"
                        :label="item.kcxzmc"
                        :value="item.kcxzmc">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="实践学时">
                <el-input v-model="kcChange.sjxs2"></el-input>
            </el-form-item>
            <el-form-item label="课外学时">
                <el-input v-model="kcChange.kwxs"></el-input>
            </el-form-item>
            <el-form-item label="选修归属">
                <el-select v-model="kcChange.jyXxgs.xxgsdm" placeholder="选修归属不能修改" class="el_select" disabled=true>
                    <el-option v-for="item in xxgsList"
                        :key="item.xxgsdm"
                        :label="item.xxgsmc"
                        :value="item.xxgsdm">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="理论学时">
                <el-input v-model="kcChange.llxs"></el-input>
            </el-form-item>
            <el-form-item label="实验学时">
                <el-input v-model="kcChange.syxs"></el-input>
            </el-form-item>
            <el-form-item label="开课学院代码">
                <el-input v-model="kcChange.xydm"></el-input>
            </el-form-item>

        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程停开">
                <el-select v-model="kcChange.zt" class="el_select">
                    <el-option v-for="item in ztList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上机学时">
                <el-input v-model="kcChange.sjxs"></el-input>
            </el-form-item>
            <el-form-item label="实践周数">
                <el-input v-model="kcChange.sjzs"></el-input>
            </el-form-item>

            <el-form-item label="是否为重点课程">
                <el-switch v-model="kcChange.sfqy" active-value="1" off-value="0"></el-switch>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程简介">
                <el-input type="textarea" style="width:380px;" v-model="kcChange.kcjj"></el-input>
            </el-form-item>
            <el-form-item label="课程英文简介">
                <el-input type="textarea" style="width:380px;" v-model="kcChange.kcywjj"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="课程需要与目的">
                <el-input type="textarea" style="width:380px;" v-model="kcChange.kczyzyjmd"></el-input>
            </el-form-item>
            <el-form-item label="主要参考书">
                <el-input type="textarea" style="width:380px;" v-model="kcChange.zycks"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="110px">
            <el-form-item label="备注">
                <el-input type="textarea" style="width:700px;" :rows="2" cols="20" autosize v-model="kcChange.bz"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" size="mini" style="text-align:center;">
            <el-button type="primary" @click="button_click('submit')">提交</el-button>
            <!--el-button type="primary" @click="button_click('reset')">重置</el-button-->
            <el-button type="primary" @click="button_click('return')">取消</el-button>
        </el-form>
      </main>
    </el-container>
</template>

<script>

export default {
//上面选修课程性质用的都是名称！！！！！！！！！！-----------json数据中是名称，数据库中存的什么待处理
    name: "kckglAdd",
    //初始化下拉列表信息
    mounted(){
        this.initList(); //学院,课程类别，课程性质
        if(!this.kcChange.jyXxgs){
            this.kcChange.jyXxgs={xxgsdm:''};
        }
    },
    data() {
        return {
            labelPosition: 'right',
            kcChange: this.$route.params.val,
            kclbList:[],
            kcxzList:[],
            xxgsList:[],
            xyList:[],
            ztList:[
                {
                    label:"课程停开" ,
                    value:0
                },{
                    label:"正常开课" ,
                    value:1
                }
            ]
        };
    },
    methods: {
        button_click(kind){
            if(kind=='return'){
                this.$router.push({name: 'kckgl'});
                return;
            }else if(kind=='submit'){
                this.changeData();
            }
        },
        changeData(){
            var _this=this;    
            this.axios.post('jwc/SysKc/modify', _this.kcChange)
                .then(function (response) {
                    _this.$message({ message: '修改数据成功: '+response.data, type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '修改数据失败: '+error, type: 'error' });
                });                
        },

        //初始化下拉列表信息 //学院,课程类别，课程性质
        initList(){
                var _this=this;
                //需要处理异步请求的问题
                this.axios.get("jwc/SysXy/getAllList")
                    .then(function (response) {
                        var dataList=response.data;
                        _this.xyList=dataList;
                        _this.$notify({title:"获取学院信息", message:"获取学院信息成功 ("+response.data.length+")", type:"success"})
                    })
                    .catch(function (error) {
                        console.log(error);
                        _this.$notify({title:"获取学院信息", message:"获取学院信息失败: "+error, type:"error"})
                    });
                //课程类别
                this.axios.get("jwc/DmKclb/getAll")
                    .then(function (response) {
                        //将response获得的数据进行处理
                        //将获取到的数据以数组形式传递出去
                        var dataList=response.data;
                        _this.kclbList=dataList;
                        _this.$notify({title:"获取课程类别", message:"获取课程类别成功 ("+response.data.length+")", type:"success"})
                    })
                    .catch(function (error) {
                        console.log(error);
                        _this.$notify({title:"获取课程类别", message:"获取课程类别失败: "+error, type:"error"})
                    });
                //课程性质
                this.axios.get("jwc/DmKcxz/getAll")
                    .then(function (response) {
                        //将response获得的数据进行处理
                        //将获取到的数据以数组形式传递出去
                        var dataList=response.data;
                        _this.kcxzList=dataList;
                        _this.$notify({title:"获取课程性质", message:"获取课程性质成功 ("+response.data.length+")", type:"success"})
                    })
                    .catch(function (error) {
                        console.log(error);
                        _this.$notify({title:"获取课程性质", message:"获取课程性质失败: "+error, type:"error"})
                    });
                //选修归属
                this.axios.get("jwc/JyXxgs/getAll")
                    .then(function (response) {
                        //将response获得的数据进行处理
                        //将获取到的数据以数组形式传递出去
                        var dataList=response.data;
                        _this.xxgsList=dataList;
                        _this.$notify({title:"获取课程归属", message:"获取课程归属成功 ("+response.data.length+")", type:"success"})
                    })
                    .catch(function (error) {
                        console.log(error);
                        _this.$notify({title:"获取课程归属", message:"获取课程归属失败: "+error, type:"error"})
                    });
        },


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