<template>
<el-dialog
    title="新增高低分课程对照"
    :visible="visible"
    width="70%"
    top="7vh"
    :before-close="handleClose"
    :center="true">
  <el-header style="background-color:#87D4FE; padding:10px; ">
      输入完整的课程编码或课程名称(包含)，点旁边的查询按钮，在弹出的页面选择需要对比的课程，页面中其他字段会自动填充。
  </el-header>
  <el-main>
    <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
    <el-row>
        <el-col :span="12">
            旧课程基本信息
            <el-row class="border-thin">
                <el-col :span="14">
                    <el-form-item label="课程编码：">
                        <el-col :span="18">
                            <el-input v-model="oldCourse.kcdm" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;" @click="query('id','old')"></el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程中文名：">
                        <el-col :span="18">
                            <el-input v-model="oldCourse.kczwmc" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;" @click="query('name','old')"></el-button>
                        </el-col>
                    </el-form-item>                    
                    <el-form-item label="课程英文名：">
                        <el-input v-model="oldCourse.kcywmc" style="width: 150px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="开课部门：">
                        <el-input v-model="oldCourse.xydm" style="width: 150px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课程性质：">
                        <el-input v-model="oldCourse.kcxz" style="width: 150px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="课程类别：">
                        <el-input v-model="oldCourse.dmKclb.kclbmc" style="width: 150px;"></el-input>
                    </el-form-item>        
                </el-col>
                <el-col :span="10">
                    <el-form-item label="总学时：">
                        <el-input v-model="oldCourse.zhxs" style="width: 80px;"></el-input>
                    </el-form-item>                    
                    <el-form-item label="课程学分：">
                        <el-input v-model="oldCourse.xf" style="width: 80px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="理论学时：">
                        <el-input v-model="oldCourse.llxs" style="width: 80px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课外学时：">
                        <el-input v-model="oldCourse.kwxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="上机学时：">
                        <el-input v-model="oldCourse.sjxs" style="width: 80px;"></el-input>
                    </el-form-item>
                    <el-form-item label="实验学时：">
                        <el-input v-model="oldCourse.syxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="实践学时：">
                        <el-input v-model="oldCourse.sjxs2" style="width: 80px;"></el-input>
                    </el-form-item>  
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="12">
            新课程基本信息
            <el-row class="border-thin">
                <el-col :span="14">
                    <el-form-item label="课程编码：">
                        <el-col :span="18">
                            <el-input v-model="newCourse.kcdm" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;" @click="query('id','new')"></el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程中文名：">
                        <el-col :span="18">
                            <el-input v-model="newCourse.kczwmc" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;" @click="query('name','new')"></el-button>
                        </el-col>
                    </el-form-item>                    
                    <el-form-item label="课程英文名：">
                        <el-input v-model="newCourse.kcywmc" style="width: 150px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="开课部门：">
                        <el-input v-model="newCourse.xydm" style="width: 150px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课程性质：">
                        <el-input v-model="newCourse.kcxz" style="width: 150px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="课程类别：">
                        <el-input v-model="newCourse.dmKclb.kclbmc" style="width: 150px;"></el-input>
                    </el-form-item>        
                </el-col>
                <el-col :span="10">
                    <el-form-item label="总学时：">
                        <el-input v-model="newCourse.zhxs" style="width: 80px;"></el-input>
                    </el-form-item>                    
                    <el-form-item label="课程学分：">
                        <el-input v-model="newCourse.xf" style="width: 80px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="理论学时：">
                        <el-input v-model="newCourse.llxs" style="width: 80px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课外学时：">
                        <el-input v-model="newCourse.kwxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="上机学时：">
                        <el-input v-model="newCourse.sjxs" style="width: 80px;"></el-input>
                    </el-form-item>
                    <el-form-item label="实验学时：">
                        <el-input v-model="newCourse.syxs" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="实践学时：">
                        <el-input v-model="newCourse.sjxs2" style="width: 80px;"></el-input>
                    </el-form-item>  
                </el-col>
            </el-row>
        </el-col>            
    </el-row>
    </el-form>
    <el-button type="primary" @click="addData">确认添加对照</el-button>
    <el-button type="primary" @click="return_back">返回</el-button>
  </el-main>
  <query :dialog-visible-query="dialogVisibleQuery.query" :dialog-parameter="dialogVisibleQuery"
     @selectBack="returnData"  @closeDialog="doCloseDialog"></query>
</el-dialog>
</template>

<script>
import query from "./queryCourse.vue"
export default {
    props:{
        dialogVisible:{
            type:Boolean,
            default:false,
            require:true
        },
    },
    watch:{
        dialogVisible:function(val){
            this.visible=val;
        }
    },
    components: {query},
    data() {
        return {
            //弹框标记数据对象
            dialogVisibleQuery:{
                query:false,    //添加课程对照
                way:'', //通过id或name进行查询
                value:''    //查询的关键字
            },  
            visible:this.dialogVisible,

            oldCourse: {dmKclb:{kclbmc:''}},    //表单里的值,初始化三重的数据
            newCourse: {dmKclb:{kclbmc:''}},

            part:''//区分填充数据在左边还是右边。取值为old或new
        };
    },
    methods: {
        //处理新添加对照信息
        addData(){
            //不满足添加条件，跳出
            if(!this.oldCourse.kcdm || !this.newCourse.kcdm){
                this.$message({ message: '请选择两门对照课程', type: 'error' });
                return;
            }
            if(this.oldCourse.kcdm == this.newCourse.kcdm){
                this.$message({ message: '请选择两门不同的课程对照', type: 'error' });
                return;
            }
            var _this=this;
            //需要处理异步请求的问题

            this.axios.post('jwc/JyGdxfdz/add',
                {
                    sysKcByKcdm: _this.oldCourse,
                    sysKcByXkcdm: _this.newCourse,
                    id: null,
                    kcdm: _this.oldCourse.kcdm,
                    xkcdm: _this.newCourse.kcdm,
                    zt: 1
                }
            )
                .then(function (response) {
                    _this.$message({ message: '添加对比数据成功: '+response.data, type: 'success' });
                })
                .catch(function (error) {
                    console.log(error);
                    _this.$message({ message: '添加对比数据失败: '+error, type: 'error' });
                });  
        },
        //处理和父级的关系---------------------------------------------------------
        return_back(){
            //冒泡传递事件到上层组件，同步visible
            this.$emit("closeDialog","add");
        },
        handleClose(done) {
            var _this=this;
            this.$confirm('确认关闭？')
            .then(_ => {
                this.return_back();
                //done();
            })
            .catch(_ => {});
        },
        //----------------------------------------------------------------------

        //处理下一层的内容
        //关闭对话框
        doCloseDialog(msg){
            if(msg=="query"){
                this.dialogVisibleQuery.query=false;
            }
        },
        //处理返回的数据
        returnData(value){
            this.dialogVisibleQuery.query=false;
            //关掉弹出的窗口，并处理数据
            if(this.part=='old'){
                this.oldCourse=value;
            }else{
                this.newCourse=value;
            }
            
        },
        //way通过id或name进行查询
        //part左边的查询部分或右边的
        query(way,in_part){
            this.part=in_part;
            if(way=='id'){
                this.dialogVisibleQuery.way=3;
                if(in_part=="old"){
                    this.dialogVisibleQuery.value = this.oldCourse.kcdm;
                }else if(in_part=='new'){
                    this.dialogVisibleQuery.value = this.newCourse.kcdm;
                }
            } else if(way=='name'){
                this.dialogVisibleQuery.way=1;
                if(in_part=="old"){
                    this.dialogVisibleQuery.value = this.oldCourse.kczwmc;
                }else if(in_part=='new'){
                    this.dialogVisibleQuery.value = this.newCourse.kczwmc;
                }
            }
            this.dialogVisibleQuery.query=true;
        }

    }
}
</script>

<style scoped>
.border-thin{
    margin:10px;
    padding: 10px;
  border-style: solid;
  border-width:1px;
  border-color: #87D4FE;
}
</style>