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
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "PBX",
  shape: "圆柱体",
  pressure: undefined,
  temperature: undefined,
  loadsNum: undefined,
  powderSize: undefined
});
const density = ref<number>();
const compressiveStrength = ref<number>();

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
      <el-form-item label="压力" prop="pressure">
        <el-input v-model="ruleForm.pressure" size="large" />
      </el-form-item>
      <el-form-item label="温度" prop="temperature">
        <el-input v-model="ruleForm.temperature" size="large" />
      </el-form-item>
      <el-form-item label="负载次数" prop="loadsNum">
        <el-input v-model="ruleForm.loadsNum" size="large" />
      </el-form-item>
      <el-form-item label="造粒粉粒度" prop="powderSize">
        <el-input v-model="ruleForm.powderSize" size="large" />
      </el-form-item>
      <div class="button-container">
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            保存
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
  <h2>输出</h2>
  <div class="outPut">
    <div>密度：{{ density }}</div>
    <div>压缩压强：{{ compressiveStrength }}</div>
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
