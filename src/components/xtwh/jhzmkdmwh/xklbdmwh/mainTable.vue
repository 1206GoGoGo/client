<template>
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
            prop="xklbdm"
            label="学科类别代码"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xklbmc"
            label="学科类别名称"
            sortable>
        </el-table-column>
        <el-table-column
            prop="xklbywm"
            label="学科类别英文名"
            sortable>
        </el-table-column>
        <el-table-column
            prop="state"
            label="是否停用"
            :formatter="stateFormatter"
            sortable>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-row>
                    <el-col :span="12"><el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button></el-col>
                    <el-col :span="12"><el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button></el-col>
                </el-row>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
      return {
         tableData: [{
          xklbdm: '001',
          xklbmc: '理学',
          xklbywm: 'jh',
          state: '0'
          },{
          xklbdm: '002',
          xklbmc: '工学',
          xklbywm: 'jh',
          state: '0'
          },{
          xklbdm: '003',
          xklbmc: '文学',
          xklbywm: 'jh',
          state: '0'
          }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      //将数据库存储的状态数值，格式化为汉字
      stateFormatter(row,column){
        let state = row.state;
        if(state === '0'){return '否'} else {return '是'}
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        //this.$router.replace({name: 'rightFormView',params:{ val:val ,change_id: val.xqdm}});
      },
      handleEdit(index, row) {
          
        document.getElementById("isshow").style.visibility="visible";
        this.$router.replace({name: 'xklbdmRightForm',
            params:{ val:row ,change_id: row.xklbdm+new Date().getSeconds(), type: 'change'}});
      },
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>