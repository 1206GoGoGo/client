<template>
    <div>
        <el-table
            stripe=true
            border=true
            highlight-current-row
            @row-click="handleCurrentChange"
            height="350px"
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'xqdm', order: 'descending'}"
            >
            <el-table-column
                prop="xxkcgsdm"
                label="选修课程归属代码"
                sortable>
            </el-table-column>
            <el-table-column
                prop="xxkcgsmc"
                label="选修课程归属名称"
                sortable>
            </el-table-column>
            <el-table-column
                prop="state"
                label="是否停用"
                sortable>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
      return {
         tableData: [{
          xxkcgsdm: '001',
          xxkcgsmc: '人文社科',
          state: '0'
          },{
          xxkcgsdm: '002',
          xxkcgsmc: '体育类',
          state: '0'
          },]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
      },
      handleEdit(index, row) {
        this.$router.replace({name: 'xxkcgsdmRightForm',
            params:{ val:row ,change_id: row.xxkcgsdm+new Date().getSeconds(), type: 'change'}});
            //通过改变每次的参数解决路由跳转失效的问题
      },
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>