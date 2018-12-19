<template>
    <div>
        <div style="text-align:left">{{optype}}校区代码</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="校区代码">
                <el-input v-model="formLabelAlign.xqdm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="校区名称">
                <el-input v-model="formLabelAlign.xqmc"></el-input>
            </el-form-item>
            <el-form-item label="校区简拼">
                <el-input v-model="formLabelAlign.xqjp"></el-input>
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
            this.formLabelAlign.xqdm = this.getXqdmInit();
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
                xqdm: this.$route.params.val.xqdm,
                xqmc: this.$route.params.val.xqmc,
                xqjp: this.$route.params.val.xqjp
            },
            optype: type
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.visibility="hidden";
        },
        getXqdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('SysXq/getXqdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var xqdmInitData=response.data;
                    _this.formLabelAlign.xqdm = xqdmInitData;
                })
                .catch(function (error) {
                    console.log(error);
                    alert("网络连接错误,无法获取服务器数据，请检查后刷新页面");
                });
        },
        addXqdm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('SysXq/add',
                {
                    xqdm : _this.formLabelAlign.xqdm,
                    xqmc : _this.formLabelAlign.xqmc,
                    xqjp : _this.formLabelAlign.xqjp,
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
                if(!this.formLabelAlign.xqdm){
                    alert("获取校区代码失败！");
                }else if(!this.formLabelAlign.xqmc){
                    alert("请输入校区名称！");
                }else{
                    this.addXqdm();
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

<style scoped></style>