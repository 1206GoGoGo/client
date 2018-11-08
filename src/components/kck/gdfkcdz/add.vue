<template>
<el-container>
  <el-header style="background-color:#87D4FE; padding:10px; font-size:20px;">对应课程</el-header>
  <el-main>
    <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
    <el-row>
        <el-col :span="12">
            旧课程基本信息
            <el-row class="border-thin">
                <el-col :span="14">
                    <el-form-item label="课程编码：">
                        <el-col :span="18">
                            <el-input v-model="sizeForm.name" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;"></el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程中文名：">
                        <el-col :span="18">
                            <el-input v-model="sizeForm.name" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;"></el-button>
                        </el-col>
                    </el-form-item>                    
                    <el-form-item label="课程英文名：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="开课部门：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课程性质：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="课程类别：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item>        
                </el-col>
                <el-col :span="10">
                    <el-form-item label="总学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>                    
                    <el-form-item label="课程学分：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="理论学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课外学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="上机学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>
                    <el-form-item label="实验学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="实践学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
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
                            <el-input v-model="sizeForm.name" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;"></el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程中文名：">
                        <el-col :span="18">
                            <el-input v-model="sizeForm.name" style="width: 110px;"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button icon="el-icon-search" style="width: 40px;"></el-button>
                        </el-col>
                    </el-form-item>                    
                    <el-form-item label="课程英文名：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="开课部门：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课程性质：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="课程类别：">
                        <el-input v-model="sizeForm.name" style="width: 150px;"></el-input>
                    </el-form-item>        
                </el-col>
                <el-col :span="10">
                    <el-form-item label="总学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>                    
                    <el-form-item label="课程学分：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item> 
                    <el-form-item label="理论学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>   
                    <el-form-item label="课外学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="上机学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>
                    <el-form-item label="实验学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>      
                    <el-form-item label="实践学时：">
                        <el-input v-model="sizeForm.name" style="width: 80px;"></el-input>
                    </el-form-item>  
                </el-col>
            </el-row>
        </el-col>            
    </el-row>
    </el-form>
    <el-button type="primary">确认添加对照</el-button>
    <el-button type="primary" @click="return_back">返回</el-button>
  </el-main>
</el-container>
</template>

<script>
export default {
    data() {
        return {
            sizeForm: {
                name: '',
                region: '',
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
          document.getElementById("add").style.display="none";
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