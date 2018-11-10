<template>
    <div class="baseinfo">
            <el-form :model="zyxxForm" size="mini">
                <el-row> 专业基本信息</el-row>
                <el-row :gutter="5">
                    <el-col :span="5">
                        <el-form-item label="教学计划号">
                            <el-input ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                         <el-form-item label="年级">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                         <el-form-item label="专业名称">
                            <el-input ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                         <el-form-item label="学院代码">
                            <el-input ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                         <el-form-item label="校区">
                            <el-select >
                                <el-option label="校区测试"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                
            </el-form>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            zyxxForm:null,
        }
    }
}
</script>
<style scoped>
.baseinfo{
    margin-left:5px;
}
</style>
