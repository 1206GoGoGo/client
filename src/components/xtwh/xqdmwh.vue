<template>
  <div id="app">
    <span>
      校区代码管理
    </span>
    <div>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
          >
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
        </el-table>
      </template>
    </div>

  </div>
</template>

<script>
export default {
  name: "xqdmwh",
  data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
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