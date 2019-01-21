<template>
    <div>
        <div style="text-align:left">专业代码维护</div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign" size="mini">
            <el-form-item label="学院代码">
                <el-select v-model="formLabelAlign.xydm" placeholder="请选择学院" @change="xyChange()"  :disabled=xydisable>
                    <el-option v-for="xyItem in xyList"
                        :key="xyItem.xydm"
                        :label="xyItem.xyqc"
                        :value="xyItem.xydm">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业代码">
                <el-input v-model="formLabelAlign.zydm"
                :disabled="true"
                placeholder="选择学院代码后自动生成"></el-input>
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
                <el-input v-model="formLabelAlign.xydm" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="所属系代码">
                <el-input v-model="formLabelAlign.sysX.xdm"></el-input>
            </el-form-item>
            <el-form-item label="国家专业代码">
                <el-input v-model="formLabelAlign.tjzydm"></el-input>
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
        if(!this.formLabelAlign.sysX){
            this.formLabelAlign.sysX={xdm:''};
        }
        this.getXy(); //获取数据前先取数据
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
                    zydm: null,
                    sysX: null,
                    zymc: null,
                    xw: null,
                    zypymb: null,
                    zypyyq: null,
                    xydm: null,
                    zyqc: null,
                    tjzydm: null,
                    cc: null,
                    zt: 1,
                    xz: null,
                    ssxqdm: null,
                    zyywmc: null
                },
                optype: type,
                xyList:[],
                xydisable:false,
            };
        }

        //this_formLabelAlign = this.$route.params.val;
        return {
            labelPosition: 'right',
            formLabelAlign: this.$route.params.val,
            optype: type,
            xyList:[],
            xydisable:true,
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
            this.axios.get('jwc/SysZy/getZydmByXydm?xydm='+ _this.formLabelAlign.xydm)
                .then(function (response) {
                    //将response获得的数据进行处理
                    //将获取到的数据以数组形式传递出去
                    var InitData=response.data;
                    _this.formLabelAlign.zydm = InitData;
                    _this.$message({ message: '成功生成专业代码: '+response.data, type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '生成专业代码失败: '+error, type: 'error' });
                });
        },
        //初始化下拉列表调用的学院信息
        getXy(){
              var _this=this;
              //需要处理异步请求的问题
              this.axios.get("jwc/SysXy/getAllList")
                  .then(function (response) {
                      var dataList=response.data;
                      _this.xyList=dataList;
                    _this.$message({ message: '成功获取学院信息 ('+response.data.length+')', type: 'success' });
                  })
                  .catch(function (error) {
                      console.log(error);
                    _this.$message({ message: '获取学院信息失败: '+error, type: 'error' });
                  });
        },
        addZydm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/SysZy/add', this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '成功添加专业信息: '+response.data, type: 'success' });
                    _this.$emit("opBack",true); 
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '添加专业信息失败: '+error, type: 'error' });
                });
        },
        modifyZydm(){
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/SysZy/modify', this.formLabelAlign)
                .then(function (response) {
                    _this.$message({ message: '成功修改专业信息: '+response.data, type: 'success' });
                    _this.$emit("opBack",true); 
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '修改专业信息失败: '+error, type: 'error' });
                });
        },
        submitdate(){
            if(this.optype=='添加'){
                if(!this.formLabelAlign.zydm){
                    this.$message({ message: '获取专业代码失败', type: 'error' });
                }else if(!this.formLabelAlign.zymc){
                    this.$message({ message: '请输入专业名称', type: 'error' });
                }else{
                    this.addZydm();
                }

            }else if(this.optype=='修改'){
                if(!this.formLabelAlign.zymc){
                    this.$message({ message: '请输入专业名称', type: 'error' });
                }else{
                    this.modifyZydm();
                }
            }
        },
        xyChange(){
            //初始化数据，自动生成新的id
            this.getZydmInit();
        }

    }
};
</script>

<style scoped>
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 8px;
}
</style>