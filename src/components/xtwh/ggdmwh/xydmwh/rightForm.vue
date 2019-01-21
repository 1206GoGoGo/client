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
                <el-input v-model="formLabelAlign.xymc"></el-input>
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
            this.getXydmInit();
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
                    xydm: '',
                    xymc: '',
                    xyqc: '',
                    xyywmc: '',
                    zt: 1,
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
        //自动生成3位随机数然后交后台验证可用性
        getXydmInit(){            
            var _this=this;
            var canuse = false;
            while(!canuse){
                canuse = true;
                var this_re = Math.round(100+Math.random()*900);
                //需要处理异步请求的问题
                this.axios.get('jwc/SysXy/checkXydm?xydm='+this_re)
                    .then(function (response) {
                        //将response获得的数据进行处理
                        //将获取到的数据以数组形式传递出去
                        if(response.data == 'noexist'){
                            canuse = true;
                            _this.formLabelAlign.xydm = this_re;
                        }
                        _this.$message({ message: '成功生成学院代码: '+response.data, type: 'success' });
                    })
                    .catch(function (error) {
                        console.log(error);
                        _this.$message({ message: '生成学院代码失败: '+error, type: 'error' });
                    });
            }

        },
        addXydm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/SysXy/add', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '成功添加学院代码: '+response.data, type: 'success' });
                    _this.$emit("opBack",true); 
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '添加学院代码失败: '+error, type: 'error' });
                });
        },
        modifyXydm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/SysXy/modify', _this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '成功修改学院代码: '+response.data, type: 'success' });
                    _this.$emit("opBack",true); 
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '修改学院代码失败: '+error, type: 'error' });
                });
        },
        submitdate(){
            if(this.optype=='添加'){
                if(!this.formLabelAlign.xydm){
                    this.$message({ message: '获取学院代码失败', type: 'error' });
                }else if(!this.formLabelAlign.xyqc){
                    this.$message({ message: '请输入学院全称', type: 'error' });
                }else{
                    this.addXydm();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.xyqc){
                    this.$message({ message: '请输入学院全称', type: 'error' });
                }else{
                    this.modifyXydm();
                }
            }
        }
    }
};
</script>

<style scoped></style>