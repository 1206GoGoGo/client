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
                type="index">
            </el-table-column>
            <el-table-column
                prop="xydm"
                label="学院代码"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="xyjc"
                label="学院简称"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="xyqc"
                label="学院全称"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="xyywmc"
                label="学院英文名称"
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
          xydm: '001',
          xyjc: '计算机',
          xyqc: '计算机科学与技术学院',
          xyywmc: 'computer science and technology',
          state: '正常'
          }, {
          xydm: '001',
          xyjc: '鉴湖',
          xyqc: 'jh',
          xyywmc: '',
          state: '0'
          }, {
          xydm: '001',
          xyjc: '鉴湖',
          xyqc: 'jh',
          xyywmc: '',
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
        this.$router.replace({name: 'xydmRightForm',params:{ val:row ,change_id: row.xydm, type: 'change'}});
      },
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>