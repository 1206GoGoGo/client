<template>
<el-container>
    <el-header class="header-path">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>专业信息</el-breadcrumb-item>
                <el-breadcrumb-item>专业信息管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增</el-breadcrumb-item>
            </el-breadcrumb>
    </el-header>
    <el-main>

        <el-row>
            <el-col :span="20" :offset="2">
                <el-row :gutter="10">
                    <el-col :span="8">
                             <el-row>
                                <el-col :span="11">学院</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="xy" size="small">
                                        <el-option v-for="xyItem in xyList"
                                            :key="xyItem.value"
                                            :label="xyItem.label"
                                            :value="xyItem.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                    </el-col>
                    <el-col :span="8">
                         <el-row>
                                <el-col :span="11" >专业</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="zy" size="small">
                                        <el-option v-for="zyItem in zyList"
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
                                <el-col :span="11">校区</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="xy" size="small">
                                        <el-option v-for="xyItem in xyList"
                                            :key="xyItem.value"
                                            :label="xyItem.label"
                                            :value="xyItem.value">
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
                                <el-col :span="11">年级</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="nj" size="small">
                                        <el-option v-for="njItem in njList"
                                            :key="njItem.value"
                                            :label="njItem.label"
                                            :value="njItem.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                    </el-col>
                    <el-col :span="8">
                         <el-row>
                                <el-col :span="11" >学科类别</el-col>
                                <el-col :span="13"> 
                                    <el-select v-model="xklb" size="small">
                                        <el-option v-for="xklbItem in xklbList"
                                            :key="xklbItem.value"
                                            :label="xklbItem.label"
                                            :value="xklbItem.value">
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
                            <el-col :span="11">班级数</el-col>
                            <el-col :span="12" > 
                                <el-input v-model="bjs" size="small" placeholder="请输入班级数"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="8">
                        <el-row>
                                <el-col :span="11" >人数</el-col>
                                <el-col :span="12"> 
                                    <el-input v-model="rs" size="small" placeholder="请输入人数"></el-input>
                                </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <el-row :gutter="20" type="flex" justify="center">
                <el-button size="small" type="primary" plain @click="commit"> 提交 </el-button>
                <el-button size="small" type="primary" plain @click="reset"> 重置 </el-button>
                <el-button size="small" type="primary" plain @click="comeback"> 返回 </el-button>
            
        </el-row>


    </el-main>
</el-container>

</template>
<script>
export default {
    data:function(){
        return{
            xyList:[{label:"计算机",value:0},{label:"材料",value:1},{label:"信息",value:2}],
            zyList:[{label:"软件",value:0},{label:"计算机",value:1},{label:"物联网",value:2}],
            xqList:[{label:"鉴湖",value:0},{label:"南湖",value:1},{label:"西院",value:2}],
            njList:[{label:"2017",value:0},{label:"2018",value:1},{label:"2019",value:2}],
            xklbList:[{label:"学科类别1",value:0},{label:"学科类别2",value:1},{label:"学科类别3",value:2}],
            xy:0,
            zy:0,
            nj:0,
            xklb:0,

            bjs:0,
            rs:50,
        }
    },
    methods:{
        //提交
        commit:function(){

        },
        //重置
        reset:function(){

        },
        //返回
        comeback:function(){
            this.$router.push({path:'zyxxgl'});

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
