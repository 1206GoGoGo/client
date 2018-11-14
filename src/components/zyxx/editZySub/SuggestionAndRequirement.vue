<template>
   <div class="main-panel">
        <div class="textarea-width-label">
            <div class="label">课程修读指导建议:</div>
            <el-input type="textarea" :rows="3"  resize="none"></el-input>
        </div>
        <div class="textarea-width-label">
            <div class="label">Recommendations on Course Studies:</div>
            <el-input type="textarea" :rows="3" resize="none"></el-input>
        </div>
        <div class="textarea-width-label">
            <div class="label">其它要求:</div>
            <el-input type="textarea" :rows="3" resize="none"></el-input>
        </div>
        <div class="textarea-width-label">
            <div class="label">Other Demands:</div>
            <el-input type="textarea" :rows="3" resize="none"></el-input>
        </div>
    </div>  

</template>

<script>
export default {
    data:function(){
        return{

        }
    }
}
</script>

<style scoped>
.main-panel{
    margin-top:20px;
}
.textarea-width-label{
    padding-left:10px;
    padding-right:10px;
    margin-top:5px;
}
.textarea-width-label .label{
    font-size:15px;
    padding: 3px;
}
.textarea-width-label /deep/ .inner{
    min-height:60px;
}

</style>
