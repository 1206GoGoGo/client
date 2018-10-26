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
                prop="kcxzdm"
                label="课程性质代码"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="kcxzmc"
                label="课程性质名称"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="kcxzywqc"
                label="课程性质英文全称"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="kcxzywjc"
                label="课程性质英文简称"
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
          kcxzdm: '001',
          kcxzmc: '大类必修',
          kcxzywqc: 'jh21312312asdasd',
          kcxzywjc: 'ads',
          state: '0'
          },{
          kcxzdm: '002',
          kcxzmc: '选修课',
          kcxzywqc: 'jh21312312asdasd',
          kcxzywjc: 'ads',
          state: '0'
          }]
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
        this.$router.replace({name: 'kcxzdmRightForm',params:{ val:row ,change_id: row.kcxzdm, type: 'change'}});
      },
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>