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
                    zt: '1'
                },
                optype: type,
            };
        }
        return {
            labelPosition: 'right',
            formLabelAlign: this.$route.params.val,
            optype: type,
        };
    },
    methods: {
        cancel_hide(){
            document.getElementById("isshow").style.visibility="hidden";
        },
        getXqdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/SysXq/getXqdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var xqdmInitData=response.data;
                    _this.formLabelAlign.xqdm = xqdmInitData;
                    _this.$message({ message: '校区代码成功生成: '+response.data,showClose: true,type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '生成校区代码失败: '+error,showClose: true,type: 'error' });
                });
        },
        addXqdm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/SysXq/add', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '校区代码成功添加: '+response.data,showClose: true,type: 'success' });
                    //_this.getData();
                    _this.$emit("opBack",true); 
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '校区代码添加失败: '+error,showClose: true,type: 'error' });
                });
        },
        modifyXqdm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/SysXq/modify', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '校区代码修改成功: '+response.data,showClose: true,type: 'success' });
                    
                    _this.$emit("opBack",true); 
                    
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '校区代码修改失败: '+error,showClose: true,type: 'error' });
                });
        },
        submitdate(){
            if(this.optype=='添加'){
                if(!this.formLabelAlign.xqdm){
                    this.$message({ message: '获取校区代码失败，点击添加按钮重新获取！',showClose: true,type: 'error' });
                }else if(!this.formLabelAlign.xqmc){
                    this.$message({ message: '请输入校区名称',showClose: true,type: 'error' });
                }else{
                    this.addXqdm();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.xqmc){
                    this.$message({ message: '请输入校区名称',showClose: true,type: 'error' });
                }else{
                    this.modifyXqdm();
                }
            }
        }
    }
};
</script>

<style scoped></style>