<template>
    <div>
        <div style="text-align:left">学科类别代码</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
            <el-form-item label="学科类别代码">
                <el-input v-model="formLabelAlign.xklbdm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="学科类别名称">
                <el-input v-model="formLabelAlign.xklbzwmc"></el-input>
            </el-form-item>
            <el-form-item label="学科类别英文名">
                <el-input v-model="formLabelAlign.xklbywmc"></el-input>
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
                    xklbdm: '',
                    xklbzwmc:'',
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
                if(!this.formLabelAlign.xklbdm){
                    alert("获取学科类别代码失败！");
                }else if(!this.formLabelAlign.xklbzwmc){
                    alert("请输入学科类别代码全称！");
                }else{
                    this.add();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.xklbzwmc){
                    alert("请输入学科类别代码全称！");
                }else{
                    this.modify();
                }
            }
        },
        modify(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmXklb/modify', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    _this.$router.go(0);
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });            
        },
        add(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmXklb/add', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    _this.$router.go(0);
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$notify({title:"获取专业信息", message:"获取专业信息成功", type:"success"})
                });            
        },

        getdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/DmXklb/getXklbdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dmInitData=response.data;
                    _this.formLabelAlign.xklbdm = dmInitData;
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