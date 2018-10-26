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
            <el-table-column label="操作">
                <template slot-scope="scope">
            <!--        <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            -->        
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="zydm"
                label="专业代码"
                sortable>
            </el-table-column>
            <el-table-column
                prop="zymc"
                label="专业名称"
                sortable>
            </el-table-column>
            <el-table-column
                prop="zyywmc"
                label="专业英文名称"
                sortable>
            </el-table-column>
            <el-table-column
                prop="xz"
                label="学制"
                sortable>
            </el-table-column>
            <el-table-column
                prop="xw"
                label="学位"
                sortable>
            </el-table-column>
            <el-table-column
                prop="zyqc"
                label="专业全称"
                sortable>
            </el-table-column>
            <el-table-column
                prop="zypymb"
                label="专业培养目标"
                sortable>
            </el-table-column>
            <el-table-column
                prop="zypyyq"
                label="专业培养要求"
                sortable>
            </el-table-column>
            <el-table-column
                prop="ssxydm"
                label="所属学院代码"
                sortable>
            </el-table-column>
            <el-table-column
                prop="ssxdm"
                label="所属系代码"
                sortable>
            </el-table-column>
            <el-table-column
                prop="gjzydm"
                label="国家专业代码"
                sortable>
            </el-table-column>
            <el-table-column
                prop="cc"
                label="层次"
                sortable>
            </el-table-column>
            <el-table-column
                prop="state"
                label="是否停用"
                sortable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
      return {
         tableData: [{
          zydm: '001',
          zymc: '鉴湖',
          zyywmc: 'jh',
          xz: '4',
          xw: '工学',
          zyqc: '计算机科学与技术',
          zypymb: '培养目标',
          zypyyq: '培养要求',
          ssxydm: '001',
          ssxdm: '001',
          ggzydm: '001',
          cc:'本科',
          state: '0'
          }, {
          zydm: '001',
          zymc: '鉴湖',
          zyywmc: 'jh',
          xz: '4',
          xw: '工学',
          zyqc: '计算机科学与技术',
          zypymb: '培养目标',
          zypyyq: '培养要求',
          ssxydm: '001',
          ssxdm: '001',
          ggzydm: '001',
          cc:'本科',
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
        document.getElementById("isshow").style.display="inline";
        this.$router.replace({name: 'zydmRightForm',params:{ val:val ,change_id: val.zydm, type: 'change'}});
      },
      //handleEdit(index, row) {
      //  document.getElementById("isshow").style.display="inline";
      //  this.$router.replace({name: 'zydmRightForm',params:{ val:row ,change_id: row.zydm, type: 'change'}});
      //},
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>