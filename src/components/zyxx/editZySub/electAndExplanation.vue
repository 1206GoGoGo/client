<template>
    <div class="main-panel">
        <el-row :gutter="10">
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">通识选修说明（中文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">通识选修说明（英文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">学科选修说明（中文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">学科选修说明（英文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
        </el-row>  
        <el-row :gutter="10">
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">专业选修说明（中文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">专业选修说明（英文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
        </el-row> 
        <el-row :gutter="10">
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">个性选修说明（中文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="textarea-with-label">
                    <div class="label">个性选修说明（英文）:</div>
                    <el-input type="textarea" class="textarea" :rows="2" resize="none"></el-input>
                </div>
            </el-col>
        </el-row>            
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
    padding:10px;
    margin-top:10px;
}
.main-panel .label{
    padding:5px;
}
</style>
