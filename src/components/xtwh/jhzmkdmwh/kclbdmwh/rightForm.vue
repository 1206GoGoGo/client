<template>
    <div>
        <div style="text-align:left">课程类别代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="130px" :model="formLabelAlign">
            <el-form-item label="课程类别代码">
                <el-input v-model="formLabelAlign.kclbdm"
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="课程类别名称">
                <el-input v-model="formLabelAlign.kclbmc"></el-input>
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
                    
                    kclbdm: '',
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
                if(!this.formLabelAlign.kclbdm){
                    this.$message({ message: '获取课程类别代码失败！', type: 'error' });
                }else if(!this.formLabelAlign.kclbmc){  
                    this.$message({ message: '请输入课程类别全称！', type: 'error' });
                }else{
                    this.add();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.kclbmc){  
                    this.$message({ message: '请输入课程类别全称！', type: 'error' });
                }else{
                    this.modify();
                }
            }
        },
        modify(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmKclb/modify', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '成功修改课程类别: '+response.data, type: 'success' });
                    _this.$emit("opBack",true);
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '修改课程类别失败: '+error, type: 'error' });
                });            
        },
        add(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/DmKclb/add', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '成功添加课程类别: '+response.data, type: 'success' });
                    _this.$emit("opBack",true);
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '添加课程类别失败: '+error, type: 'error' });
                });            
        },

        getdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/DmKclb/getKclbdm')
                .then(function (response) {
                    var xqdmInitData=response.data;
                    _this.formLabelAlign.kclbdm = xqdmInitData;
                    _this.$message({ message: '课程列表代码初始化成功: '+response.data, type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '课程类别代码初始化失败: '+error, type: 'error' });
                });
        },

    }
};
</script>

<style scoped></style>