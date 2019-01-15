<template>
<el-dialog
    title="新增专业"
    :visible.sync="visible"
    width="70%"
    top="7vh"
    :before-close="comeback"
    :center="true"
    >
    <el-form></el-form>
    <el-row>
        <el-col :span="20" :offset="2">
            <el-row :gutter="10">
                <el-col :span="8">
                        <el-row>
                            <el-col :span="6">学院</el-col>
                            <el-col :span="18"> 
                                <el-select v-model="zyxx.xy" value-key="xydm" size="small">
                                    <el-option v-for="xyItem in selectList.xyList"
                                        :key="xyItem.xydm"
                                        :label="xyItem.xymc"
                                        :value="xyItem">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                </el-col>
                <el-col :span="8">
                    <el-row>
                            <el-col :span="6" >专业</el-col>
                            <el-col :span="18"> 
                                <el-select v-model="zyxx.zy" size="small">
                                    <el-option v-for="zyItem in selectList.zyList"
                                        :key="zyItem.value"
                                        :label="zyItem.label"
                                        :value="zyItem.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                </el-col>

                <el-col :span="8">
                        <el-row>
                            <el-col :span="6">校区</el-col>
                            <el-col :span="18"> 
                                <el-select v-model="zyxx.xq" value-key="xqdm" size="small">
                                    <el-option v-for="xqItem in selectList.xqList"
                                        :key="xqItem.xqdm"
                                        :label="xqItem.xqmc"
                                        :value="xqItem">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                </el-col>
            </el-row>
            <el-row></el-row>
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="20" :offset="2">
            <el-row :gutter="10">
                <el-col :span="8">
                        <el-row>
                            <el-col :span="6">年级</el-col>
                            <el-col :span="18"> 
                                <el-select v-model="zyxx.nj" value-key="njcode" size="small">
                                    <el-option v-for="njItem in selectList.njList"
                                        :key="njItem.njcode"
                                        :label="njItem.nj"
                                        :value="njItem">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                </el-col>
                <el-col :span="8">
                    <el-row>
                            <el-col :span="6" >学科类别</el-col>
                            <el-col :span="18"> 
                                <el-select v-model="zyxx.xklb" value-key="xklbdm" size="small">
                                    <el-option v-for="xklbItem in selectList.xklbList"
                                        :key="xklbItem.xklbdm"
                                        :label="xklbItem.xklbzwmc"
                                        :value="xklbItem">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    
    <el-row >
        <el-col :span="20" :offset="2">
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-row >
                        <el-col :span="6">班级数</el-col>
                        <el-col :span="18" > 
                            <el-input-number size="small" v-model="zyxx.bjs"  controls-position="right" :min="0" ></el-input-number>
                          
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8">
                    <el-row>
                            <el-col :span="6" >人数</el-col>
                            <el-col :span="18"> 
                                <el-input-number size="small" v-model="zyxx.rs"  controls-position="right" :min="0" ></el-input-number>
                               
                            </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

    <el-row slot="footer" :gutter="20" type="flex" justify="center">
            <el-button size="small" type="primary" plain @click="commit"> 提交 </el-button>
            <el-button size="small" type="primary" plain @click="reset"> 重置 </el-button>
            <el-button size="small" type="primary" plain @click="comeback"> 返回 </el-button>
        
    </el-row>
</el-dialog>
</template>
<script>
export default {
    props:{
        dialogVisible:{
            type:Boolean,
            default:false,
            require:true
        },
    },

    data:function(){
        return{
            visible:this.dialogVisible,

            //添加专业页面下拉框数据对象
            selectList:{     
                    xyList:[],
                    zyList:[],
                    xqList:[],
                    njList:[],
                    xklbList:[],
            },
            //专业信息
            zyxx:{
                xy:{},
                zy:{},
                nj:{},
                xklb:{},
                bjs:'',
                rs:'',
            },
            
        }
    },
    mounted:function(){
        var _this=this;
        //初始化学院列表
        //学院
            this.axios({
                method:'get',
                url:'/jwc/SysXy/getAllList', 
            })
            .then(function(rep){
               //拼接返回结果数组
                _this.selectList.xyList=rep.data;
                _this.$notify({
                    title:"初始化学院",
                    message:"初始化学院成功",
                    type:"success"
                })
            })
            .catch(function(e){
            _this.$notify({
                    title:"初始化学院",
                    dangerouslyUseHTMLString: true,
                    message:"初始化学院失败</br>"+e,
                    type:"error"
                })
            });


            //校区
            this.axios({
                method:'get',
                url:'/jwc/SysXq/getAll', 
            })
            .then(function(rep){

               
                _this.selectList.xqList=rep.data;

                _this.$notify({
                    title:"初始化校区",
                    message:"初始化校区成功",
                    type:"success"
                })

            })
            .catch(function(e){
            _this.$notify({
                    title:"初始化校区",
                    dangerouslyUseHTMLString: true,
                    message:"初始化校区失败</br>"+e,
                    type:"error"
                })
            });

            //初始化年级
            var date=new Date;
            var now_year=date.getFullYear();
            for(var i=now_year+1;i>=2002;i--)
            {
                _this.selectList.njList.push({nj:i+'',njcode:i+''});
            }
             _this.$notify({
                    title:"初始化年级",
                    message:"初始化年级成功",
                    type:"success"
                })

            //学科类别
            this.axios({
                method:'get',
                url:'/jwc/DmXklb/getAll', 
            })
            .then(function(rep){

               
                _this.selectList.xklbList=rep.data;

                _this.$notify({
                    title:"初始化学科类别",
                    message:"初始化学科类别成功",
                    type:"success"
                })

            })
            .catch(function(e){
            _this.$notify({
                    title:"初始化学科类别",
                    dangerouslyUseHTMLString: true,
                    message:"初始化学科类别失败</br>"+e,
                    type:"error"
                })
            });

    },
    computed:{
        
    },
    watch:{
        dialogVisible:function(val){
            this.visible=val;
        },

        //学院下拉列表选择项发生变化时
        'zyxx.xy':function(val){

            var _this=this;
            var reqData={};
            reqData.xydm=val;

            this.axios({
                method:'get',
                url:'/jwc/SysZy/getZydmByXydm', 
                params:reqData,
            })
            .then(function(rep){

               //拼接返回结果数组与“不限学院”
                _this.selectList.zyList=rep.data;

                _this.$notify({
                    title:"初始化专业",
                    message:"初始化专业成功",
                    type:"success"
                })

            })
            .catch(function(e){
            _this.$notify({
                    title:"初始化学科类别",
                    dangerouslyUseHTMLString: true,
                    message:"初始化学科类别失败</br>"+e,
                    type:"error"
                })
            });
        },


    },

    methods:{
        //提交
        commit:function(){
            //先通过教学计划号进行检查专业信息是否存在
                var jxjhh_check=this.zyxx.nj.njcode+''+this.zyxx.xy.zydm;
                var reqData={};
                reqData.jxjhh=jxjhh_check;

                this.axios({
                method:'get',
                url:'/jwc/JyZyxx/checkJxjhh', 
                params:reqData,
            })
            .then(function(rep){

               //拼接返回结果数组与“不限学院”
                if(rep.data==="exist")
                    {
                        alert("该专业信息在库中存在!")

                    }
                else
                {
                     

                }
               
            })
            .catch(function(e){
            _this.$notify({
                    title:"添加专业",
                    dangerouslyUseHTMLString: true,
                    message:"添加专业失败</br>"+e,
                    type:"error"
                })
            });        



                //存在的话报错，提示信息
                console.log(jxjhh_check);
                //不存在时创建新的专业
                

            
        },
        //重置
        reset:function(){

        },
        //返回
        comeback:function(){
            this.visible=false;
            //冒泡传递事件到上层组件，同步visible
            this.$emit("closeDialog","addZy");
        }
    }


}
</script>
<style scoped>
.el-row{
    margin-bottom:10px;
}
.el-input{
    margin-left:10px;
}
.el-button{
    width:90px;
    margin-right: 10px;
}
</style>
