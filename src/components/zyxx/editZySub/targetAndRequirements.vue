
<template>
    <div class="main-panel">
        <div class="textarea-width-label">
            <div class="label">业务培养目标</div>
            <el-input type="textarea" :rows="3"  resize="none"></el-input>
        </div>
        <div class="textarea-width-label">
            <div class="label">Educational Objectives:</div>
            <el-input type="textarea" :rows="3" resize="none"></el-input>
        </div>
        <div class="textarea-width-label">
            <div class="label">业务培养要求</div>
            <el-input type="textarea" :rows="3" resize="none"></el-input>
        </div>
        <div class="textarea-width-label">
            <div class="label">Educational Requirement:</div>
            <el-input type="textarea" :rows="3" resize="none"></el-input>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{

        }
    },
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
