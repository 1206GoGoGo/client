<template>
    <div>
        <div style="text-align:left">考核方式代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="考核方式代码">
                <el-input v-model="formLabelAlign.khfsdm" 
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="考核方式名称">
                <el-input v-model="formLabelAlign.khfsmc"></el-input>
            </el-form-item>
            <el-form-item label="建议考试方式">
                <el-input v-model="formLabelAlign.jyksfs"></el-input>
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
            this.getdmInit();
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
                    khfsdm: '',
                    khfsmc: '',
                    jyksfs: '',
                    zt: 1
                },
                optype: type
            };
        }
        return {
            labelPosition: 'right',
            formLabelAlign: this.$route.params.val,
            optype: type
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.visibility="hidden";
        },
        submitdate(){
            if(this.optype=='添加'){
                if(!this.formLabelAlign.khfsdm){
                    alert("获取考核方式代码失败！");
                }else if(!this.formLabelAlign.khfsmc){
                    alert("请输入考核方式代码全称！");
                }else{
                    this.add();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.khfsmc){
                    alert("请输入考核方式代码全称！");
                }else{
                    this.modify();
                }
            }
        },
        modify(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmKhfs/modify', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    _this.$router.go(0);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });            
        },
        add(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmKhfs/add', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    _this.$router.go(0);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });            
        },

        getdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/DmKhfs/getKhfsdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dmInitData=response.data;
                    _this.formLabelAlign.khfsdm = dmInitData;
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });
        },
    }
};
</script>

<style scoped></style>