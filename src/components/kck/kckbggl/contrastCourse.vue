<template>
<el-dialog
    title="调整课程对比"
    :visible="visible"
    width="70%"
    top="7vh"
    :before-close="handleClose"
    :center="true">
  <el-header style="background-color:#87D4FE; padding:10px; font-size:20px;">调整课程对比</el-header>
  <el-main>
    <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
    <el-row>
        <el-col :span="12">
            学院调整课程
            <el-form label-width="110px" size="mini">            
                <el-form-item label="课程英文名：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item> 
                <el-form-item label="开课部门：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>   
                <el-form-item label="课程性质：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>      
                <el-form-item label="课程类别：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>
                <el-form-item label="总学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>                    
                <el-form-item label="课程学分：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item> 
                <el-form-item label="理论学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>   
                <el-form-item label="课外学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>      
                <el-form-item label="上机学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>
                <el-form-item label="实验学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>      
                <el-form-item label="实践学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>  
            </el-form>
        </el-col>
        <el-col :span="12">
            原课程
            <el-form label-width="110px" size="mini">            
                <el-form-item label="课程英文名：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item> 
                <el-form-item label="开课部门：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>   
                <el-form-item label="课程性质：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>      
                <el-form-item label="课程类别：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>
                <el-form-item label="总学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>                    
                <el-form-item label="课程学分：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item> 
                <el-form-item label="理论学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>   
                <el-form-item label="课外学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>      
                <el-form-item label="上机学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>
                <el-form-item label="实验学时：">
                    <span class="span_for_view ">{{sizeForm.name}}</span>
                </el-form-item>      
                <el-form-item label="实践学时：">
                    <span class="span_for_view ">{{sizeForm.region}}</span>
                </el-form-item>  
            </el-form>
        </el-col>            
    </el-row>
    </el-form>
    <el-button type="primary" @click="return_back">返回</el-button>
  </el-main>
</el-dialog>
</template>

<script>
export default {
    props:{
        dialogVisible:{
            type:Boolean,
            default:false,
            require:true
        }
    },
    watch:{
        dialogVisible:function(val){
            this.visible=val;
        }
    },
    data() {
        return {
            visible:this.dialogVisible,
            sizeForm: {
                name: 'haha',
                region: 'xxxxxxxxxxxxxx',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },
    methods: {
        return_back(){
            //冒泡传递事件到上层组件，同步visible
            this.$emit("closeDialog","contrast");
        },
        handleClose(done) {
            var _this=this;
            this.$confirm('确认关闭？')
            .then(_ => {
                this.return_back();
                //done();
            })
            .catch(_ => {});
        }
    }
}
</script>

<style scoped>
.span_for_view {
    display:inline-block;
    padding-left:2px;
}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 5px;
    text-align: left;
}
.border-thin{
    margin:10px;
    padding: 10px;
  border-style: solid;
  border-width:1px;
  border-color: #87D4FE;
}
</style>