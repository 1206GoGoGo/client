<template>
<div class="order">
    <!-- 显示当前页面路径 开始 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>系统权限</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 显示当前页面路径 结束 -->  
  <el-row :gutter="0" style="padding-top:10px; padding-left:5px">
    <el-col :span="10">
        <div>
            <!--下拉列表框(教师姓名、教务用户) 开始-->
            <el-select style="width:120px" v-model="value1" clearable placeholder="请选择">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @click="toggle()"
                >
                </el-option>
            </el-select>
            <el-input
            style="width:120px"
            placeholder="请输入内容"
            v-model="input1"
            clearable>
            </el-input>
            <!--下拉列表框(教师姓名、教务用户)  结束-->
            <el-button type="primary" plain @click="query">查询</el-button>
        </div>
    </el-col>
    <!-- <el-col :span="7">
        <div>
           权限：<el-input readonly="readonly" style="width:100px" v-model="input2"></el-input>
            下拉列表框（教师、学生） 开始
            <el-select style="width:110px" v-model="value2" clearable placeholder="请选择">
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
            下拉列表框（教师、学生） 结束
        </div>
    </el-col>
    <el-col :span="7">
        <div>
            <el-row>
            <el-button type="primary" plain>修改</el-button> -->
            <!-- <el-button type="primary" plain>删除</el-button>
            <el-button type="primary" plain>更新</el-button> -->
            <!-- </el-row>
        </div>
    </el-col>  -->
  </el-row>  
    <div>
        <el-table
          v-if="hideRow1"
          :data="tableData.GetList"
          border
          highlight-current-row
          class="t1"
          height="500" 
          style="width: 100%"
          :default-sort = "{prop: 'zgh', order: 'descending'}" >
          <el-table-column
            prop="zgh"
            header-align="center"
            label="序号"
            height="50"
            width="100"
             sortable>
          </el-table-column>
          <el-table-column
            prop="xl"
            header-align="center"
            label="权限"
            width="100"
            :formatter="stateFormatter">
          </el-table-column>
          <el-table-column
            prop="xm"
            header-align="center"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="xb"
            header-align="center"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="zw"
            header-align="center"
            label="职务">
          </el-table-column>
          <el-table-column
            prop="zc"
            header-align="center"
            label="职称">
          </el-table-column>
          <el-table-column
            prop="emldz"
            header-align="center"
            label="联系方式">
          </el-table-column>
          <el-table-column label="操作" width="160px" header-align="center">
            <template slot-scope="scope">
                <el-row>
                    <el-col :span="12"><el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button></el-col>
                    <el-col :span="12"><el-button
                        size="mini"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button></el-col>
                </el-row>
            </template>
        </el-table-column>
        </el-table>
    </div>
<!-- @mousedown="mousedown" v-bind:id="id"-->
    <el-dialog title="权 限 管 理" :visible.sync="dialogFormVisible" @mousedown="mousedown" v-bind:id="id">
        <el-form :model="form">
            <!-- <el-form-item label="权  限：" :label-width="formLabelWidth">
                <el-input v-model="form.kczwmc" >
                </el-input>
            </el-form-item> -->
            权 限：<el-select style="width:150px" v-model="qx" clearable placeholder="请选择">
                <el-form-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @click="toggle()"
                >
                </el-form-option>
            </el-select>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
    export default {
        data(){
            return{
                options1: [{
                    value: '选项1',
                    label: '教师姓名'
                    }, {
                    value: '选项2',
                    label: '教务用户'
                }],
                value1: '',
                 options2: [{
                    value: '选项1',
                    label: '教师'
                    }, {
                    value: '选项2',
                    label: '学生'
                }],
                value2: '',
                input1: '',
                input2: '',
                hideRow1:true,
                hideRow2:false,
                tableData:{
                    GetList:[
                ]
            },
            dialogFormVisible: false,
                form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                qx:'',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                },
                //formLabelWidth: '120px'
            }
            
    },
        methods:{
            //将数据库存储的状态数值，格式化为汉字
            stateFormatter(row,column){
                let xl = row.xl;
                if(xl === '1'){return '教师'} 
                else if(xl === '2'){return '学生'} 
                else if(xl === '3'){return '教务处教研科'} 
                else if(xl === '4'){return '教务处其他'} 
                else if(xl === '5'){return '学院教务处'} 
                else if(xl === '6'){return '无权限'} 

            },
            handleEdit(row,column){
                var _this=this;
                _this.dialogFormVisible = true;

                let xl = row.xl;
                if(xl === '1'){ _this.form.qx='教师'} 
                else if(xl === '2'){ _this.form.qx='学生'} 
                else if(xl === '3'){ _this.form.qx='教务处教研科'} 
                else if(xl === '4'){ _this.form.qx='教务处其他'} 
                else if(xl === '5'){ _this.form.qx='学院教务处'} 
                else if(xl === '6'){ _this.form.qx='无权限'} 

                //_this.form.qx=row.xl;
            },
            handleDelete(){

            },
      //   mousedown(event) {
      //   this.selectElement = document.getElementById(this.id)
      //   var div1 = this.selectElement
      //   this.selectElement.style.cursor = 'move'
      //   this.isDowm = true
      //   var distanceX = event.clientX - this.selectElement.offsetLeft
      //   var distanceY = event.clientY - this.selectElement.offsetTop
      //   // alert(distanceX)
      //   // alert(distanceY)
      //   console.log(distanceX)
      //   console.log(distanceY)
      //   document.onmousemove = function (ev) {
      //     var oevent = ev || event
      //     div1.style.left = oevent.clientX - distanceX + 'px'
      //     div1.style.top = oevent.clientY - distanceY + 'px'
      //   }
      //   document.onmouseup = function () {
      //     document.onmousemove = null
      //     document.onmouseup = null
      //     div1.style.cursor = 'default'
      //   }
      // },
            toggle(){
                var _this=this;
                if(_this.value1=='选项1')
                {   _this.hideRow1=false;
                    _this.hideRow2=true;
                }
                else
                {   _this.hideRow1=true;
                    _this.hideRow2=false;

                }
            },
            query(){
                var _this=this;
            //     this.axios.get('jwc/JyQx/search', {//通过这种方式解决模糊匹配后台报空指针异常的问题
            //     params: {
            //         xm: '邓文'
            //     }
            // }).then   +_this.input1
                this.axios.get('/jwc/JyQx/search?xm=邓文'
                ).then(function(rep){
                    _this.tableData.GetList=rep.data;
                    // console.log(_this.xyList)
                    _this.$notify({
                        title:"获取权限",
                        message:"获取权限成功",
                        type:"success"
                    })
                })
                .catch(function(e){
                _this.$notify({
                        title:"获取权限",
                        dangerouslyUseHTMLString: true,
                        message:"获取权限失败</br>"+e,
                        type:"error"
                    })
                });
            }
        }
    }
</script>
<style>
.el-row {
    margin-bottom: 10px;
    margin-left: 0px;
  }
</style>