<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import bqtImage from "@/assets/img/BQT.png";
import yztImage from "@/assets/img/YZT.png";
import zhtImage from "@/assets/img/ZHT.png";

interface RuleForm {
  shape: string;
  pbxheight?: number;
  pbxdia?: number;
  mutaoheight?: number;
  mndia?: number;
  mwdia?: number;
  upheigh?: number;
  updia?: number;
  downheight?: number;
  downdia?: number;
  pbxupdia?: number;
  pbxdowndia?: number;
  pbxheight1?: number;
  pbxheight2?: number;
  mutaoheight1?: number;
  mutaoheight2?: number;
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  shape: "",
  pbxheight: undefined,
  pbxdia: undefined,
  mutaoheight: undefined,
  mndia: undefined,
  mwdia: undefined,
  upheigh: undefined,
  updia: undefined,
  downheight: undefined,
  downdia: undefined,
  pbxupdia: undefined,
  pbxdowndia: undefined,
  pbxheight1: undefined,
  pbxheight2: undefined,
  mutaoheight1: undefined,
  mutaoheight2: undefined
});

const rules = reactive<FormRules<RuleForm>>({
  pbxheight: [
    { required: true, message: "请输入药粉高度", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  pbxdia: [
    { required: true, message: "请输入药粉半径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  mutaoheight: [
    { required: true, message: "请输入模套高度", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  mndia: [
    { required: true, message: "请输入模套内径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  mwdia: [
    { required: true, message: "请输入模套外径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  upheigh: [
    { required: true, message: "请输入冲头高度", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  updia: [
    { required: true, message: "请输入冲头半径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  downheight: [
    { required: true, message: "请输入底座高度", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  downdia: [
    { required: true, message: "请输入底座半径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  pbxupdia: [
    { required: true, message: "请输入锥合体顶半径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  pbxdowndia: [
    { required: true, message: "请输入锥合体底半径", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  pbxheight1: [
    { required: true, message: "请输入锥合体高度1", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  pbxheight2: [
    { required: true, message: "请输入锥合体高度2", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  mutaoheight1: [
    { required: true, message: "请输入模套高度1", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ],
  mutaoheight2: [
    { required: true, message: "请输入模套高度2", trigger: "blur" },
    { type: "number", message: "请输入数字" }
  ]
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

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="container">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="large"
      status-icon
    >
      <el-form-item label="形状选择" prop="shape">
        <el-radio-group v-model="ruleForm.shape">
          <el-radio label="YZT">圆柱体</el-radio>
          <el-radio label="BQT">半球体</el-radio>
          <el-radio label="ZHT">锥合体</el-radio>
        </el-radio-group>
      </el-form-item>
      <template v-if="ruleForm.shape === 'YZT'">
        <el-form-item label="药粉相关参数" prop="powder">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.pbxheight"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.pbxdia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="模套相关参数" prop="mold">
          <div class="grid grid-cols-1 gap-4">
            <el-input
              v-model="ruleForm.mutaoheight"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.mndia"
              placeholder="内径"
              size="large"
            />
            <el-input
              v-model="ruleForm.mwdia"
              placeholder="外径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="冲头相关参数" prop="punch">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.upheigh"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.updia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="底座相关参数" prop="base">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.downheight"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.downdia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
      </template>
      <template v-if="ruleForm.shape === 'BQT'">
        <el-form-item label="药粉相关参数" prop="powder">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.pbxheight"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.pbxdia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="模套相关参数" prop="mold">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.mutaoheight1"
              placeholder="高度1"
              size="large"
            />
            <el-input
              v-model="ruleForm.mutaoheight2"
              placeholder="高度2"
              size="large"
            />
            <el-input
              v-model="ruleForm.mndia"
              placeholder="内径"
              size="large"
            />
            <el-input
              v-model="ruleForm.mwdia"
              placeholder="外径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="冲头相关参数" prop="punch">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.upheigh"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.updia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="底座相关参数" prop="base">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.downheight"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.downdia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
      </template>
      <template v-if="ruleForm.shape === 'ZHT'">
        <el-form-item label="药粉相关参数" prop="powder">
          <div class="grid grid-cols-4 gap-4">
            <el-input
              v-model="ruleForm.pbxupdia"
              placeholder="顶半径"
              size="large"
            />
            <el-input
              v-model="ruleForm.pbxdowndia"
              placeholder="底半径"
              size="large"
            />
            <el-input
              v-model="ruleForm.pbxheight1"
              placeholder="高度1"
              size="large"
            />
            <el-input
              v-model="ruleForm.pbxheight2"
              placeholder="高度2"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="模套相关参数" prop="mold">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.mutaoheight1"
              placeholder="高度1"
              size="large"
            />
            <el-input
              v-model="ruleForm.mutaoheight2"
              placeholder="高度2"
              size="large"
            />
            <el-input
              v-model="ruleForm.mndia"
              placeholder="内径"
              size="large"
            />
            <el-input
              v-model="ruleForm.mwdia"
              placeholder="外径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="冲头相关参数" prop="punch">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.upheigh"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.updia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
        <el-form-item label="底座相关参数" prop="base">
          <div class="grid grid-cols-2 gap-4">
            <el-input
              v-model="ruleForm.downheight"
              placeholder="高度"
              size="large"
            />
            <el-input
              v-model="ruleForm.downdia"
              placeholder="半径"
              size="large"
            />
          </div>
        </el-form-item>
      </template>
      <div class="button-container">
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Create
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </div>
    </el-form>
    <div class="image-container">
      <template v-if="ruleForm.shape === 'YZT'">
        <img :src="yztImage" alt="圆柱体" />
      </template>
      <template v-if="ruleForm.shape === 'BQT'">
        <img :src="bqtImage" alt="半球体" />
      </template>
      <template v-if="ruleForm.shape === 'ZHT'">
        <img :src="zhtImage" alt="锥合体" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.el-input {
  width: 400px;
}

.container {
  display: flex;
  justify-content: space-between;
}
.button-container {
  display: flex;
  justify-content: flex-end;
}

.image-container {
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
  min-width: 2feat00px;
}
</style>
