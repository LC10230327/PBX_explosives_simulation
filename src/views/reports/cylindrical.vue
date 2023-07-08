<template>
  <el-card>
    <el-form :inline="true" class="form">
      <el-form-item :inline="true">
        <el-form-item label="时间：">
          <el-input placeholder="请输入：xxxx-xx-xx" v-model="keyword" />
        </el-form-item>

        <el-button type="primary" size="default" @click="search">
          查询
        </el-button>
      </el-form-item>
      <el-form-item />
      <!-- <el-form-item>
        <el-button type="primary" size="default">生成工艺报表</el-button>
      </el-form-item> -->
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0px">
    <QyTable
      ref="dataTableRef"
      :columns="columns"
      :dataSource="tableData"
      :options="tableOptions"
    >
      <template #baobiao="{ index, row }">
        <el-button
          type="primary"
          size="small"
          :icon="ZoomIn"
          @click="setPermisstion(row)"
        />
      </template>
    </QyTable>
  </el-card>
  <!-- 添加职位与更新已有职位的结构:对话框 -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Edit, Delete, ZoomIn } from "@element-plus/icons-vue";
import axios from "axios";
//收集新增岗位数据
const tableData = ref<any>({});
const columns = ref<any>({});
const tableOptions = ref<any>({});
//搜索职位关键字
const keyword = ref<string>("");

const getStudents = () => {
  axios.get("http://localhost:8848/yuanzhuti").then(
    response => {
      tableData.value = response.data.data.tableData;
      columns.value = response.data.data.columns;
      tableOptions.value = response.data.data.tableOptions;
      localStorage.setItem("yuanzhuti", JSON.stringify(tableData.value));
      console.log("请求成功了", tableData);
    },
    error => {
      console.log("请求失败了", error.message);
    }
  );
};
const search = () => {
  tableData.value = JSON.parse(localStorage.getItem("yuanzhuti"));
  tableData.value.list = tableData.value.list.filter(p => {
    return p.Time.indexOf(keyword.value) !== -1;
  });
  console.log("444", tableData.value);
  // keyword.value = "";
};
getStudents();
// import { ElMessage } from "element-plus";
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
</style>
