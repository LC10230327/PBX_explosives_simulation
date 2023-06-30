<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Geometric"
});

const shape = ref("圆柱体");
const powderHeight = ref("");
const powderRadius = ref("");
const moldHeight = ref("");
const moldInnerRadius = ref("");
const moldOuterRadius = ref("");
const punchHeight = ref("");
const punchRadius = ref("");
const baseHeight = ref("");
const baseRadius = ref("");

const resetForm = () => {
  shape.value = "圆柱体";
  powderHeight.value = "";
  powderRadius.value = "";
  moldHeight.value = "";
  moldInnerRadius.value = "";
  moldOuterRadius.value = "";
  punchHeight.value = "";
  punchRadius.value = "";
  baseHeight.value = "";
  baseRadius.value = "";
};

const saveForm = () => {
  // TODO: 保存表单数据
};

const startCalculation = () => {
  // TODO: 发送表单数据到后端进行计算
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-medium mb-4">形状选择</h2>
    <el-radio-group v-model="shape">
      <el-radio label="圆柱体" />
      <el-radio label="半球体" />
      <el-radio label="锥合体" />
    </el-radio-group>

    <h2 class="text-lg font-medium my-4">药粉相关参数</h2>
    <div class="grid grid-cols-2 gap-4">
      <el-input v-model="powderHeight" placeholder="高度" />
      <el-input v-model="powderRadius" placeholder="半径" />
    </div>

    <h2 class="text-lg font-medium my-4">模套相关参数</h2>
    <div class="grid grid-cols-3 gap-4">
      <el-input v-model="moldHeight" placeholder="高度" />
      <el-input v-model="moldInnerRadius" placeholder="内径" />
      <el-input v-model="moldOuterRadius" placeholder="外径" />
    </div>

    <h2 class="text-lg font-medium my-4">冲头相关参数</h2>
    <div class="grid grid-cols-2 gap-4">
      <el-input v-model="punchHeight" placeholder="高度" />
      <el-input v-model="punchRadius" placeholder="半径" />
    </div>

    <h2 class="text-lg font-medium my-4">底座相关参数</h2>
    <div class="grid grid-cols-2 gap-4">
      <el-input v-model="baseHeight" placeholder="高度" />
      <el-input v-model="baseRadius" placeholder="半径" />
    </div>

    <div class="flex justify-end mt-8">
      <el-button type="primary" class="mr-4" @click="resetForm">重置</el-button>
      <el-button type="primary" @click="saveForm">保存</el-button>
    </div>

    <div class="flex justify-end mt-8">
      <el-button type="primary" @click="startCalculation">开始计算</el-button>
    </div>
  </div>
</template>
