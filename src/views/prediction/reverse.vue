<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

interface RuleForm {
  name: string;
  shape: string;
  pressure?: number;
  temperature?: number;
  loadsNum?: number;
  powderSize?: number;
  parameter: string;
  density?: number;
  compressiveStrength?: number;
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "PBX",
  shape: "圆柱体",
  pressure: undefined,
  temperature: undefined,
  loadsNum: undefined,
  powderSize: undefined,
  parameter: "压力",
  density: undefined,
  compressiveStrength: undefined
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div>
    <h2>输入</h2>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      size="large"
      status-icon
    >
      <el-form-item label="推导数据">
        <el-radio-group v-model="ruleForm.parameter">
          <el-radio label="压力">压力</el-radio>
          <el-radio label="温度">温度</el-radio>
          <el-radio label="复压次数">复压次数</el-radio>
          <el-radio label="造粒粉粒度">造粒粉粒度</el-radio>
          <el-radio label="压缩强度">压缩轻度</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="材料名称" prop="name">
        <el-select v-model="ruleForm.name">
          <el-option llabel="PBX" value="PBX" />
        </el-select>
      </el-form-item>
      <el-form-item label="形状选择" prop="shape">
        <el-select v-model="ruleForm.shape">
          <el-option label="圆柱体" value="YZT" />
          <el-option label="半球体" value="BQT" />
          <el-option label="锥合体" value="ZHT" />
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="ruleForm.parameter !== '压力'"
        label="压力"
        prop="pressure"
      >
        <el-input v-model="ruleForm.pressure" size="large" />
      </el-form-item>
      <el-form-item
        v-if="ruleForm.parameter !== '温度'"
        label="温度"
        prop="temperature"
      >
        <el-input v-model="ruleForm.temperature" size="large" />
      </el-form-item>
      <el-form-item
        v-if="ruleForm.parameter !== '复压次数'"
        label="复压次数"
        prop="loadsNum"
      >
        <el-input v-model="ruleForm.loadsNum" size="large" />
      </el-form-item>
      <el-form-item
        v-if="ruleForm.parameter !== '造粒粉粒度'"
        label="造粒粉粒度"
        prop="powderSize"
      >
        <el-input v-model="ruleForm.powderSize" size="large" />
      </el-form-item>
      <el-form-item
        v-if="ruleForm.parameter !== '压缩强度'"
        label="压缩强度"
        prop="compressiveStrength"
      >
        <el-input v-model="ruleForm.compressiveStrength" size="large" />
      </el-form-item>
      <el-form-item label="密度" prop="density">
        <el-input v-model="ruleForm.density" size="large" />
      </el-form-item>
      <div class="button-container">
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            点击推导结果
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
  <h2>输出</h2>
  <div class="outPut">
    <div>{{ ruleForm.parameter }}:</div>
  </div>
</template>

<style lang="scss" scoped>
.el-input {
  width: 400px;
}

.outPut {
  margin: 20px 50px;
  font-size: 18px;
}

h2 {
  margin: 30px;
}

.el-button {
  margin-left: 450px;
}

.el-select {
  width: 400px;
}
</style>
