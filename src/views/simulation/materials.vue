<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ElTable, ElTableColumn } from "element-plus";

defineOptions({
  name: "Materials",
  components: {
    ElTable,
    ElTableColumn
  }
});

const tableData = ref([]);

onMounted(async () => {
  // 获取后端数据的方法，需要替换为实际的 API 请求
  // const data = await fetchBackendData();
  // tableData.value = data;
  const mockData = [
    {
      poissonRatio: 0.3,
      elasticModulus: 200000,
      frictionAngle: 30,
      cohesion: 1000,
      initialRelativeDensity: 0.8
    },
    {
      poissonRatio: 0.35,
      elasticModulus: 250000,
      frictionAngle: 28,
      cohesion: 1200,
      initialRelativeDensity: 0.85
    }
  ];

  tableData.value = mockData;
});
</script>

<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">材料参数</h1>
    <div class="px-4 py-6 sm:px-0">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
        <el-table
          v-if="tableData.length"
          :data="tableData"
          class="w-full h-full"
        >
          <el-table-column prop="poissonRatio" label="泊松比" />
          <el-table-column prop="elasticModulus" label="弹性模量" />
          <el-table-column prop="frictionAngle" label="摩擦角" />
          <el-table-column prop="cohesion" label="内聚力" />
          <el-table-column prop="initialRelativeDensity" label="初时相对密度" />
        </el-table>
        <el-empty v-else description="暂无数据" />
      </div>
    </div>
  </div>
</template>
