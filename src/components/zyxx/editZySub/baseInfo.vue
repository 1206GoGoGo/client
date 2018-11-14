<template>
    <div class="baseinfo">
            <el-form :model="zyxxForm" size="mini">
                <el-row> <h3>专业基本信息</h3></el-row>
                <el-row :gutter="5">
                    <el-col :span="5">
                        <el-form-item label="教学计划号">
                            <el-input></el-input >
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

                <el-row :gutter="5">
                    <el-col :span="5">
                        <el-form-item label="人数">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="班级数">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="5">
                    <el-col :span="5">
                        <el-form-item label="学科类别">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="修业年限">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                   <el-col :span="5">
                        <el-form-item label="辅修年限">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                 <el-row> <h3>专业详细信息</h3></el-row>
                 <el-row :gutter="5">
                     <el-col :span="10">
                         <el-row :gutter="5">
                             <el-col :span="12">
                                <el-form-item label="通识必修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="通识选修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="大类必修学分">
                                     <el-input></el-input>
                                </el-form-item> 
                                <el-form-item label="大类选修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="专业必修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="专业限选学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="专业选修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="课外学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="英语必修学分">
                                     <el-input></el-input>
                                </el-form-item>
                             </el-col>
                            <el-col :span="12">
                                <el-form-item label="公共必修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="公共选修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="学科必修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="学科选修学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="实践课学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="假期实践学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="分散实践学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="个性课程学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="体育必修学分">
                                     <el-input></el-input>
                                </el-form-item>
                             </el-col>
                         </el-row>
                     </el-col>
                     <el-col :span="14">
                         <el-row :gutter="5">
                             <el-col :span="8">
                                 <el-form-item label="第二学位学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="文化课程学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="艺术课程学分">
                                     <el-input></el-input>
                                </el-form-item>
                            </el-col>
                             <el-col :span="8">
                                <el-form-item label="正式课程数">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="公选课学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="课内实验学分">
                                     <el-input></el-input>
                                </el-form-item></el-col>
                             <el-col :span="8">
                                <el-form-item label="最低毕业学分">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="学习与生涯">
                                     <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="科技文化课">
                                     <el-input></el-input>
                                </el-form-item>
                            </el-col>
                         </el-row>
                         <el-row :gutter="5">
                             <el-col :span="8">
                                <el-form-item label="毕业标准">
                                     <el-input></el-input>
                                </el-form-item>
                            </el-col>
                             <el-col :span="8">
                                 <el-form-item label="学位授予标准">
                                     <el-input></el-input>
                                </el-form-item>
                            </el-col>
                         </el-row>
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
.el-input{
    width: 150px;
    
}
.el-form-item{
  margin-bottom: 5px;
}
</style>
