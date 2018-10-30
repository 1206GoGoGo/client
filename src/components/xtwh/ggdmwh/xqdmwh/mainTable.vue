<template>
    <div>
        <el-table
            stripe=false
            border=false
            highlight-current-row
            @row-click="handleCurrentChange"
            height="350px"
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'xqdm', order: 'descending'}"
            >
            <el-table-column
                type="index"
                width="100">
            </el-table-column>
            <el-table-column
                prop="xqdm"
                label="校区代码"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="xqmc"
                label="校区名称"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="xqjp"
                label="校区简拼"
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
    created () { // 在组件初始化的时候执行，只执行一次
        this.axios.get('/user')
            .then(function (response) {
                //将response获得的数据进行处理
                alert(response.state)
                //this.data();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    data() {
      return {
         tableData: [{
          xqdm: '001',
          xqmc: '鉴湖',
          xqjp: 'jh',
          state: '0'
          }, {
          xqdm: '002',
          xqmc: '南湖',
          xqjp: 'jh',
          state: '0'
        }, {
          xqdm: '003',
          xqmc: '马房山',
          xqjp: 'jh',
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
        this.$router.replace({name: 'xqdmRightForm',params:{ val:row ,change_id: row.xqdm, type: 'change'}});
      },
      handleDelete(index, row) {
        alert(index);
      }
    }
}
</script>

<style scoped></style>