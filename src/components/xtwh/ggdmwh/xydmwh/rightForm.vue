<template>
    <div>
        <div style="text-align:left">学院代码{{optype}}</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="学院代码">
                <el-input v-model="formLabelAlign.xydm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="学院简称">
                <el-input v-model="formLabelAlign.xyjc"></el-input>
            </el-form-item>
            <el-form-item label="学院全称">
                <el-input v-model="formLabelAlign.xyqc"></el-input>
            </el-form-item>
            <el-form-item label="学院英文名称">
                <el-input v-model="formLabelAlign.xyywmc"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain v-on:click="submitdate()">{{optype}}</el-button>
        <el-button type="primary" plain v-on:click="cancel_hide()">取消</el-button>
    </div>
</template>

<script>

export default {
    name: "xt",    
    mounted(){
        if(this.$route.params.type=="add"){
            //初始化数据，自动生成新的id
            this.formLabelAlign.xydm = this.getXydmInit();
        }
    },
    data() {
        var type;
        if(this.$route.params.type=="add"){
            type="添加";
        }else type="修改";
        if(!this.$route.params.val){
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    xqdm: '',
                    xqmc: '',
                    xqjp: ''
                },
                optype: type
            };
        }
        return {
            labelPosition: 'right',
            formLabelAlign: {
                xydm: this.$route.params.val.xydm,
                xyjc: this.$route.params.val.xyjc,
                xyqc: this.$route.params.val.xyqc,
                xyywmc: this.$route.params.val.xyywmc
            },
            optype: type
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.visibility="hidden";
        },
        getXydmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('SysXy/getXqdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var InitData=response.data;
                    _this.formLabelAlign.xydm = mInitData;
                })
                .catch(function (error) {
                    console.log(error);
                    alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                });
        },
        addXydm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('SysXy/add',
                {
                    xydm : _this.formLabelAlign.xydm,
                    xymc : _this.formLabelAlign.xymc,
                    xyqc : _this.formLabelAlign.xyqc, 
                    xyywmc : _this.formLabelAlign.xyywmc,
                    zt : "1"
                })
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dataList=response.data;
                    _this.tableData=dataList;
                })
                .catch(function (error) {
                    console.log(error);
                alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                });
        },
        submitdate(){
            if(this.optype=='添加'){
                if(!this.formLabelAlign.xydm){
                    alert("获取学院代码失败！");
                }else if(!this.formLabelAlign.xymc){
                    alert("请输入学院名称！");
                }else{
                    this.addXydm();
                    alert("添加成功！");
                    this.$router.go(0);
                }

            }else if(this.optype=='修改'){
                alert(this.formLabelAlign.xydm);
            }
        }
    }
};
</script>

<style scoped></style>