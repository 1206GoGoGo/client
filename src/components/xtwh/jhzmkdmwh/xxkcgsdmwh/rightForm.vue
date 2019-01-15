<template>
    <div>
        <div style="text-align:left">选修课程归属代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
            <el-form-item label="选修课程归属代码">
                <el-input v-model="formLabelAlign.xxgsdm" 
                :disabled="true"
                placeholder="自动生成ID"></el-input>
            </el-form-item>
            <el-form-item label="选修课程归属名称">
                <el-input v-model="formLabelAlign.xxgsmc"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" plain v-on:click="submitdate()">{{optype}}</el-button>
        <el-button type="primary" plain v-on:click="cancel_hide()">取消</el-button>
    </div>
</template>

<script>
//处理代码数字是否可以修改的问题
//待处理，若是自动生成，则无需区分

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
                    xxgsdm: '',
                    xxgsmc: '',
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
                if(!this.formLabelAlign.xxgsdm){
                    alert("获取选修课程归属代码失败！");
                }else if(!this.formLabelAlign.xxgsmc){
                    alert("请输入选修课程归属代码全称！");
                }else{
                    this.add();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.xxgsmc){
                    alert("请输入选修课程归属代码全称！");
                }else{
                    this.modify();
                }
            }
        },
        modify(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/JyXxgs/modify', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    alert(response.data);
                    _this.$router.go(0);
                    _this.$message({ message: '成功修改选修课程归属代码', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '修改选修课程归属代码失败', type: 'error' });
                });            
        },
        add(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/JyXxgs/add', _this.formLabelAlign)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    //alert(response.data);
                    //_this.$router.go(0);
                    _this.$message({ message: '成功添加选修课程归属代码', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '添加选修课程归属代码失败', type: 'error' });
                });            
        },

        getdmInit(){
            var _this=this;
            //需要处理异步请求的问题
            this.axios.get('jwc/JyXxgs/getXxgsdm')
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var dmInitData=response.data;
                    _this.formLabelAlign.xxgsdm = dmInitData;
                    _this.$message({ message: '成功初始化选修课程归属代码', type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '初始化选修课程归属代码失败', type: 'error' });
                });
        },


    }
};
</script>

<style scoped></style>