<template>
  <div id="app">

    <el-container>
      <el-main>
        <div style="text-align:left">
          <xtwhChooseButton></xtwhChooseButton>
          <br/>
        </div>
        <main-table></main-table>
      </el-main>
      <div id="isshow" style="display:none">
        <el-aside>
          <router-view :key="key"></router-view>
        </el-aside>
      </div>
    </el-container>
  </div>
</template>

<script>
import xtwhChooseButton from "./chooseButton.vue"
import mainTable from "./mainTable.vue"
import rightForm from "./rightForm"
export default {
  name: "xqdmwh",
  components: {xtwhChooseButton,mainTable,rightForm},
  computed: {
      key() {
          //解决同一组件路由跳转，数据不刷新问题
          return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
  }

};

</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>