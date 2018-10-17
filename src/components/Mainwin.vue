<template>
  <div id="app">
      <div>
        <img src="../assets/head.jpg" width="100%">
      </div>
      <div>
        <el-menu :default-active="activeIndex" background-color="#CDE5F1" text-color="#000000" height="10px" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">系统维护</template>
            <el-submenu index="1-1">
              <template slot="title">公共代码维护</template>
              <el-menu-item index="1-1-1" v-on:click="goto('xqdmwh')">校区代码维护</el-menu-item>
              <el-menu-item index="1-1-2">学院代码维护</el-menu-item>
              <el-menu-item index="1-1-3">专业代码维护</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">计划子模块代码维护</template>
              <el-menu-item index="1-2-1" v-on:click="goto(31)">课程性质代码维护</el-menu-item>
              <el-menu-item index="1-2-2">课程类别代码维护</el-menu-item>
              <el-menu-item index="1-2-3">学科类别代码维护</el-menu-item>
              <el-menu-item index="1-2-4">选修课程归属代码维护</el-menu-item>
              <el-menu-item index="1-2-5">考核方式代码维护</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">专业信息</template>
            <el-menu-item index="2-1" v-on:click="goto('zyxxgl')">专业信息管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">课程库</template>
            <el-menu-item index="3-1" v-on:click="goto('zyxxgl')">课程库管理</el-menu-item>
            <el-menu-item index="3-2" v-on:click="goto('zyxxgl')">课程库变更管理</el-menu-item>
            <el-menu-item index="3-3" v-on:click="goto('zyxxgl')">高低分课程对照</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">培养计划管理</template>
            <el-menu-item index="4-1" v-on:click="goto('zyxxgl')">专业培养计划管理</el-menu-item>
            <el-menu-item index="4-2" v-on:click="goto('zyxxgl')">教学计划打印</el-menu-item>
            <el-submenu index="4-3">
              <template slot="title">通识选修管理</template>
              <el-menu-item index="4-3-1" v-on:click="goto('xqdmwh')">通识选修培养计划管理</el-menu-item>
              <el-menu-item index="4-3-2">通识课程教师对应管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="4-4" v-on:click="goto('zyxxgl')">个性化课程管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">系统权限</template>
            <el-menu-item index="5-1" v-on:click="goto('zyxxgl')">权限管理</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">课程简介管理</template>
            <el-menu-item index="6-1" v-on:click="goto('zyxxgl')">专业课程</el-menu-item>
            <el-menu-item index="6-2" v-on:click="goto('zyxxgl')">通识课程</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">综合查询</template>
            <el-menu-item index="7-1" v-on:click="goto('zyxxgl')">培养计划课程信息</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">消息提醒</template>
            <el-menu-item index="7-1" v-on:click="goto('zyxxgl')">收件箱</el-menu-item>
            <el-menu-item index="7-1" v-on:click="goto('zyxxgl')">发件箱</el-menu-item>
            <el-menu-item index="7-1" v-on:click="goto('zyxxgl')">回收箱</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

    <div class="line"></div>

    <div id="count">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: "Mainwin",

  data() {
    counter: 0;
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    goto(id) {
      // `this` 在方法里指向当前 Vue 实例
      //alert('Hello ')
      switch(id){
        case 'xqdmwh':
          this.$router.push({name: 'xqdmwh',params:{ tip:'首页——>系统维护——>公共代码维护——>校区代码维护'}});
          break;
        case 'zxyygl':
          this.$router.push({name: 'xqdmwh',params:{ id:'1'}});
          break;
        default:
          this.$router.push({name: 'HelloWorld',params:{ id:'1'}});

      }
      
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>