<template>
<div class="sider">
    <div class="title-area">
        <img class="whut-logo" src="../../assets/whut-logo.png">
        <span class="whut-title-area">
            <img src="../../assets/whut-title.png" class="whut-title-logo">
            <div>教务管理系统</div>
        </span>
    </div>
   <el-menu  class="" @select="handleSelect"  :unique-opened=true  background-color="#191a1b" text-color="#fff" active-text-color="#e83729">
      
       <el-submenu index=1>
            <template   slot="title"><i class="el-icon-setting"></i>系统维护</template>   
            <el-submenu index="1-1">
                <template slot="title">-公共代码维护</template> 
                <el-menu-item index="1-1-1">- -校区代码维护</el-menu-item>
                <el-menu-item index="1-1-2">- -学院代码维护</el-menu-item>
                <el-menu-item index="1-1-3">- -专业代码维护</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
                <template slot="title">- 计划子模块代码维护</template> 
                <el-menu-item index="1-2-1">--课程性质代码维护</el-menu-item>
                <el-menu-item index="1-2-2">--课程类别代码维护</el-menu-item>
                <el-menu-item index="1-2-3">--学科类别代码维护</el-menu-item>
                <el-menu-item index="1-2-4">--选修课程归属代码维护</el-menu-item>
                <el-menu-item index="1-2-5">--考核方式代码维护</el-menu-item>
            </el-submenu>
       </el-submenu>

        <el-submenu index="2">
            <template   slot="title"><i class="el-icon-menu"></i>专业信息</template>  
            <el-menu-item index="2-1">-专业信息管理</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
            <template   slot="title"><i class="el-icon-menu"></i>课程库</template>  
            <el-menu-item index="3-1">-课程库管理</el-menu-item>
            <el-menu-item index="3-2">-课程库变更管理</el-menu-item>
            <el-menu-item index="3-3">-高低分课程对照</el-menu-item>            
       </el-submenu>

        <el-submenu index="4">
            <template  slot="title"><i class="el-icon-menu"></i>培养计划管理</template>  
            <el-menu-item index="4-1">-专业培养计划管理</el-menu-item>
            <el-menu-item index="4-2">-教学计划打印</el-menu-item>  
            <el-submenu index="4-3">
                <template slot="title">-通识选修管理</template> 
                <el-menu-item index="4-3-1">--通识选修培养计划管理</el-menu-item>
                <el-menu-item index="4-3-2">--通识课程教师对应管理</el-menu-item>
            </el-submenu>
             <el-menu-item index="4-4">-个性化课程管理</el-menu-item>
       </el-submenu>

         <el-submenu index="5">
            <template  slot="title"><i class="el-icon-setting"></i>系统权限</template>  
            <el-menu-item index="5-1">-权限管理</el-menu-item>
        </el-submenu>

         <el-submenu index="6">
            <template   slot="title"><i class="el-icon-menu"></i>课程简介管理</template>  
            <el-menu-item index="6-1">-专业课程</el-menu-item>
            <el-menu-item index="6-2">-通识课程</el-menu-item>
        </el-submenu>

        <el-submenu index="7">
            <template   slot="title"><i class="el-icon-search"></i>综合查询</template>  
            <el-menu-item index="7-1">-培养计划课程信息</el-menu-item>
        </el-submenu>

         <el-submenu index="8">
            <template   slot="title"><i class="el-icon-message"></i>消息提醒</template>  
            <el-menu-item index="8-1">-收件箱</el-menu-item>
            <el-menu-item index="8-2">-发件箱</el-menu-item>
            <el-menu-item index="8-3">-回收箱</el-menu-item>
        </el-submenu>

   </el-menu>
</div>
</template>

<script>
//首页侧边栏模块
export default {
    name:"Sider",
    data:function(){
        return {
            
        }
    },

    methods:{
        //路由跳转处理
        handleSelect:function(index,indexpath){
            var locthis=this;
            switch(index)
            {
                //通过index来控制路由跳转
                case "1-1-1":locthis.$router.push({path:'/xqdm'});break;
                case "8-1":locthis.$router.push({path:'/sjx'});break;
                case "8-1":locthis.$router.push({path:'/select'});break;
                case "8-2":locthis.$router.push({path:'/fjx'});break;
                case "8-3":locthis.$router.push({path:'/hsx'});break;
                case "1-1-2":locthis.$router.push({path:'/xydm'});break;
                case "1-1-3":locthis.$router.push({path:'/zydm'});break;
                case "1-2-1":locthis.$router.push({path:'/kcxzdm'});break;
                case "1-2-2":locthis.$router.push({path:'/kclbdm'});break;
                case "1-2-3":locthis.$router.push({path:'/xklbdm'});break;
                case "1-2-4":locthis.$router.push({path:'/xxkcgsdm'});break;
                case "1-2-5":locthis.$router.push({path:'/khfsdm'});break;
                
                default:console.log("跳转错误");
            }
        }

    }
}
</script>

<style scoped>
    .sider{
        display: inline-block;
        position:absolute;
        width:300px;
        top:0px;
        left:0px;
        bottom:0px;
        background-color:#191a1b;
    }
    .sider .title-area{
        height:84px;
    }
    .whut-logo{
        float:left;
        height:75px;
    }
    .whut-title-area{
        float:right;
        width:200px;
        margin-right:0px;
    }
    .whut-title-logo{
        display: inline-block;
        margin-top:7px;
        margin-right:6px;
        width:180px;

    }
    .el-menu{
        text-align: left;
    }
    .el-menu.el-submenu{
        background-color:white;
    }

    .el-menu-item.is-active{
        background-color:#080809 !important;
    }
   .el-submenu{
       position: relative;
   }
    .el-menu .el-submenu:after{
        content:" ";
        z-index: 10;
        position: absolute;
        width:250px;
        height:0px;
        bottom:0px;
        left:25px;
       
        border-bottom:1px groove #95989d;
    }
    .el-menu-item:hover{
        background-color: #080809 !important;
    }
    .el-submenu__title:hover{
        background-color: #080809 !important;
    }
    .el-submenu__title i{
        color:#fff !important;
    }
    .title-area{
        color:#fff;
    }
</style>

