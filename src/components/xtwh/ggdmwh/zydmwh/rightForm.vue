<template>
    <div>
        <div style="text-align:left">专业代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign" size="mini">
            <el-form-item label="专业代码">
                <el-input v-model="formLabelAlign.zydm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
                <el-input v-model="formLabelAlign.zymc"></el-input>
            </el-form-item>
            <el-form-item label="专业英文名称">
                <el-input v-model="formLabelAlign.zyywmc"></el-input>
            </el-form-item>
            <el-form-item label="学制">
                <el-input v-model="formLabelAlign.xz"></el-input>
            </el-form-item>
            <el-form-item label="学位">
                <el-input v-model="formLabelAlign.xw"></el-input>
            </el-form-item>
            <el-form-item label="专业全称">
                <el-input v-model="formLabelAlign.zyqc"></el-input>
            </el-form-item>
            <el-form-item label="专业培养目标">
                <el-input v-model="formLabelAlign.zypymb"></el-input>
            </el-form-item>
            <el-form-item label="专业培养要求">
                <el-input v-model="formLabelAlign.zypyyq"></el-input>
            </el-form-item>
            <el-form-item label="所属学院代码">
                <el-input v-model="formLabelAlign.ssxydm"></el-input>
            </el-form-item>
            <el-form-item label="所属系代码">
                <el-input v-model="formLabelAlign.ssxdm"></el-input>
            </el-form-item>
            <el-form-item label="国家专业代码">
                <el-input v-model="formLabelAlign.gjzydm"></el-input>
            </el-form-item>
            <el-form-item label="层次">
                <el-input v-model="formLabelAlign.cc"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain v-on:click="submitdate()">{{optype}}</el-button>
        <el-button type="primary" plain @click="cancel_hide()">取消</el-button>
    </div>
</template>

<script>

export default {
    name: "xt",  
    mounted(){
        if(this.$route.params.type=="add"){
            //初始化数据，自动生成新的id
            this.formLabelAlign.xqdm = this.getZydmInit();
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
                zydm: this.$route.params.val.zydm,
                zymc: this.$route.params.val.zymc,
                zyywmc: this.$route.params.val.zyywmc,
                xz: this.$route.params.val.xz,
                xw: this.$route.params.val.xw,
                zyqc: this.$route.params.val.zyqc,
                zypymb: this.$route.params.val.zypymb,
                zypyyq: this.$route.params.val.zypyyq,
                ssxydm: this.$route.params.val.ssxydm,
                ssxdm: this.$route.params.val.ssxdm,
                gjzydm: this.$route.params.val.gjzydm,
                cc: this.$route.params.val.cc
            },
            optype: type
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.display="none";
            //只需隐藏，不用清空输入框内容，因为在重新打开时会处理该问题
        },
        getZydmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('SysXq/getZydm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var InitData=response.data;
                    _this.formLabelAlign.zydm = InitData;
                })
                .catch(function (error) {
                    console.log(error);
                    alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                });
        },
        addZydm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('SysZy/add',
                {

                zydm: this.formLabelAlign.zydm,
                sysX: {
                    xdm: ssxdm
                },
                zymc: this.formLabelAlign.zymc,
                xw: this.formLabelAlign.xw,
                zypymb: this.formLabelAlign.zypymb,
                zypyyq: this.formLabelAlign.zypyyq,
                xydm: this.formLabelAlign.ssxydm,
                zyqc: this.formLabelAlign.zyqc,
                tjzydm,
                cc: this.formLabelAlign.cc,
                zt : "1",
                xz: this.formLabelAlign.xz,
                ssxqdm,
                zyywmc: this.formLabelAlign.zyywmc,

                //gjzydm: this.formLabelAlign.gjzydm,//国家专业代码无效

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
                if(!this.formLabelAlign.zydm){
                    alert("获取专业代码失败！");
                }else if(!this.formLabelAlign.zymc){
                    alert("请输入专业名称！");
                }else{
                    this.addZydm();
                    alert("添加成功！");
                    this.$router.go(0);
                }

            }else if(this.optype=='修改'){
                alert(this.formLabelAlign.xqdm);
            }
        }

    }
};
</script>

<style scoped>
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
</style>