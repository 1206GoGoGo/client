<template>
  <div id="app">
    <div style="text-align:left">
      <br/>
      <xtwhChooseButton></xtwhChooseButton>
    </div>
    <el-container>
      <el-main>
        <main-table></main-table>
      </el-main>
      <el-aside>
        <router-view :key="key"></router-view>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import xtwhChooseButton from "./chooseButton.vue"
import mainTable from "./mainTable.vue"
import rightForm from "./rightForm"
export default {
  name: "xklbdmwh",
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