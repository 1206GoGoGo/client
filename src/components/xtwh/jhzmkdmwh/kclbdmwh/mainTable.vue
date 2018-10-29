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
                prop="kclbdm"
                label="课程类别代码"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="kclbmc"
                label="课程类别名称"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="state"
                label="是否停用"
                sortable
                width="100">
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
          kclbdm: '001',
          kclbmc: '实验课',
          state: '0'
          },{
          kclbdm: '002',
          kclbmc: '公共课',
          state: '0'
          },{
          kclbdm: '003',
          kclbmc: '鉴湖',
          state: '0'
          } ]
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
        this.$router.replace({name: 'kclbdmRightForm',params:{ val:row ,change_id: row.kclbdm, type: 'change'}});
      },
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>