<template>
    <div>
        <div style="text-align:left">课程性质代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="130px" :model="formLabelAlign">
            <el-form-item label="课程性质代码">
                <el-input v-model="formLabelAlign.kcxzdm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="课程性质名称">
                <el-input v-model="formLabelAlign.kcxzmc"></el-input>
            </el-form-item>
            <el-form-item label="课程性质英文全称">
                <el-input v-model="formLabelAlign.kcxzywqc"></el-input>
            </el-form-item>
            <el-form-item label="课程性质英文简称">
                <el-input v-model="formLabelAlign.kcxzywjc"></el-input>
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
            this.getKcxzdmInit();
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
                    kcxzdm: '',
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
                if(!this.formLabelAlign.kcxzdm){
                    alert("获取课程性质代码失败！");
                }else if(!this.formLabelAlign.kcxzmc){
                    alert("请输入课程性质全称！");
                }else{
                    this.add();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.kcxzmc){
                    alert("请输入课程性质全称！");
                }else{
                    this.modify();
                }
            }
        },
        modify(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmKcxz/modify', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    //_this.$router.go(0);
                    _this.$message({ message: '成功修改课程性质代码', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '修改课程性质代码失败', type: 'error' });
                });            
        },
        add(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmKcxz/add', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    _this.$router.go(0);
                    _this.$message({ message: '添加课程性质代码成功', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '添加课程性质代码失败', type: 'error' });
                });            
        },

        getKcxzdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/DmKcxz/getKcxzdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var xqdmInitData=response.data;
                    _this.formLabelAlign.kcxzdm = xqdmInitData;
                    _this.$message({ message: '成功初始化课程性质代码', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '初始化课程性质代码失败', type: 'error' });
                });
        },


    }
};
</script>

<style scoped></style>