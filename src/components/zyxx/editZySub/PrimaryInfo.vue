<template>
<div>
    <el-input
  class="mtitle"
  type="textarea"
  :rows="1"
  placeholder="请输入内容"
  v-model="aaa"
  resize="none"
    >
    </el-input>
     <el-row class="info-panel">
         <h4>学科信息</h4>
         <el-row :gutter="8">
             <el-col :span="11" >
                 <div class="textarea-with-label">
                     <div class="label">主干学科</div>
                     <el-input class="textarea" type="textarea" :rows="2" resize="none"></el-input>
                 </div>
                 <div class="textarea-with-label">
                     <div class="label">专业核心课程</div>
                     <el-input class="textarea" type="textarea" :rows="2" resize="none"></el-input>
                 </div>
                 <div class="textarea-with-label">
                     <div class="label">专业特色课程</div>
                     <el-input class="textarea" type="textarea" :rows="2" resize="none"></el-input>
                 </div>
             </el-col>
             <el-col :span="11" :offset="1">
                 <div class="textarea-with-label">
                     <div class="label">Major Disciplines</div>
                     <el-input class="textarea" type="textarea" :rows="2" resize="none"></el-input>
                 </div>
                 <div class="textarea-with-label">
                     <div class="label">Core Courses</div>
                     <el-input class="textarea" type="textarea" :rows="2" resize="none"></el-input>
                 </div>
                 <div class="textarea-with-label">
                     <div class="label">Characteristic Courses</div>
                     <el-input class="textarea" type="textarea" :rows="2" resize="none"></el-input>
                 </div>
             </el-col>
         </el-row>
    </el-row>
</div>
   
</template>
<script>
export default {
    data:function(){
        return{
            aaa:"培养计划测试",
        }
    }
}
</script>
<style scoped>
.mtitle{
    width:80%;
    margin-left:10%;
    text-align: center;
    margin-top:20px;
}
 .mtitle /deep/ .el-textarea__inner{
    text-align: center !important;
    font-size:30px;
}
.info-panel{
    min-height:300px;
    
    border:1px solid #dcdfe6;
    margin-left:30px;
    margin-right:30px;
    margin-top:40px;
    padding-left:20px;
    padding-bottom:20px;
    border-radius: 6px;
}
.info-panel h4{
    position: relative;

}
.info-panel h4:after{
    content:'';
    position: absolute;
    bottom:-5px;
    left:0px;
    height:2px;
    width:60px;
    background-color: #409EFF;
}
.textarea-with-label{
    padding:5px;
    font-size: 15px;
}
.textarea-with-label .label{
    display:inline-block;
    width:200px;
}

</style>
