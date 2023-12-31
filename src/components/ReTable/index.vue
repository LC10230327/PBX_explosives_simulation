<template>
  <div>
    <el-table
      ref="dataTable"
      :data="dataSource.list || []"
      :stripe="options.stripe"
      :border="options.border"
      header-row-class-name="table-header-row"
      highlight-current-row
      @row-click="handleRowClick"
      @selection-change="handleSelectionChange"
    >
      <!--selection选择框-->
      <el-table-column
        v-if="options.selectType && options.selectType == 'checkbox'"
        type="selection"
        width="50"
        align="center"
      />
      <!--序号-->
      <el-table-column
        v-if="options.showIndex"
        label="序号"
        type="index"
        width="60"
        fixed
        align="center"
      />
      <!--数据列-->
      <template v-for="(column, index) in columns">
        <template v-if="column.scopedSlots">
          <el-table-column
            :key="index"
            :prop="column.prop"
            :label="column.label"
            :align="column.align || 'center'"
            :width="column.width"
          >
            <template #default="scope">
              <slot
                :name="column.scopedSlots"
                :index="scope.$index"
                :row="scope.row"
              />
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :key="index"
            :prop="column.prop"
            :label="column.label"
            :align="column.align || 'center'"
            :width="column.width"
            :fixed="column.fixed"
          />
        </template>
      </template>
    </el-table>
    <!-- 分页 -->
    <div v-if="showPagination" class="pagination">
      <el-pagination
        v-if="dataSource.totalCount"
        v-model:current-page="dataSource.pageNo"
        background
        :total="dataSource.totalCount"
        :page-sizes="[15, 30, 50, 100]"
        :page-size="dataSource.pageSize"
        :layout="layout"
        style="text-align: right"
        @size-change="handlePageSizeChange"
        @current-change="handlePageNoChange"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
defineOptions({
  name: "QyTable"
});
const emit = defineEmits(["rowSelected", "rowClick"]);
const props = defineProps({
  dataSource: Object,
  showPagination: {
    type: Boolean,
    default: false
  },
  showPageSize: {
    type: Boolean,
    default: true
  },
  options: {
    type: Object,
    default: () => ({
      extHeight: 0,
      showIndex: false
    })
  },
  columns: Array,
  fetch: Function, // 获取数据的函数
  initFetch: {
    type: Boolean,
    default: true
  }
});
onMounted(() => {
  console.log("aaaaa", props.dataSource);
});
const layout = computed(() => {
  return `total, ${
    props.showPageSize ? "sizes" : ""
  }, prev, pager, next, jumper`;
});
// 顶部 60 , 内容区域距离顶部 20， 内容上下内间距 15*2  分页区域高度 46
// const topHeight = 60 + 20 + 30 + 46;

// const tableHeight = ref(
//   props.options.tableHeight
//     ? props.options.tableHeight
//     : window.innerHeight - topHeight - props.options.extHeight
// );

// 初始化
const init = () => {
  if (props.initFetch && props.fetch) {
    props.fetch();
  }
};
init();

const dataTable = ref();
// 清除选中
const clearSelection = () => {
  dataTable.value.clearSelection();
};

// 设置行选中
const setCurrentRow = (rowKey, rowValue) => {
  const row = props.dataSource.list.find(item => {
    return item[rowKey] === rowValue;
  });
  dataTable.value.setCurrentRow(row);
};
// 将子组件暴露出去，否则父组件无法调用
defineExpose({ setCurrentRow, clearSelection });

// 行点击
const handleRowClick = row => {
  emit("rowClick", row);
};

// 多选
const handleSelectionChange = row => {
  emit("rowSelected", row);
};

// 切换每页大小
const handlePageSizeChange = size => {
  props.dataSource.pageSize = size;
  props.dataSource.pageNo = 1;
  props.fetch();
};
// 切换页码
const handlePageNoChange = pageNo => {
  props.dataSource.pageNo = pageNo;
  props.fetch();
};
</script>
<style lang="scss" scoped>
.pagination {
  padding-top: 10px;
  padding-right: 10px;
}
.el-pagination {
  justify-content: right;
}

:deep .el-table__cell {
  padding: 4px 0px;
}
</style>
