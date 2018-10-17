<template>
  <div id="app12">
    <span>
      {{ tip }}
    </span>

  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      tip: '教务管理系统'
    }
  }
};
</script>

<style>
#app12 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 5em;
  text-align: center;
  margin-top: 200px;
}

body {
  /*background: url('../assets/bankground.jpg') no-repeat center 0px;
  background-size: cover;*/

  background-color: #F0F7FF;
  margin: 0px;
}
</style>