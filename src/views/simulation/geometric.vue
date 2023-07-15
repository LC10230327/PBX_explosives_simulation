<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { constraintStore } from "@/store/modules/constraint";
import { geoRules } from "./utils/rule";
import { useGeoFormStore } from "@/store/modules/geometric";
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
  shape: "YZT",
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

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      useGeoFormStore().saveForm(ruleForm);
      ElMessage({
        message: "保存成功，点击开始计算获取结果或到约束条件页面完善信息",
        type: "success",
        duration: 3000,
        center: true
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};

onMounted(() => {
  const storedGeoForm = useGeoFormStore().getFormData();
  if (storedGeoForm) {
    Object.assign(ruleForm, storedGeoForm);
  }
});

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const router = useRouter();

const startCalculation = async () => {
  const constraintData = constraintStore().getFormData();
  const geoFormData = useGeoFormStore().getFormData();

  const requestData = {
    constraint: constraintData,
    geoForm: geoFormData
  };
  console.log(JSON.stringify(requestData));
  try {
    // 替换后端真实接口
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    });

    if (response.ok) {
      const result = await response.json();
      // 假设后端返回的页面路径为 result.pageUrl
      router.push(result.pageUrl);
      constraintStore().resetFormData();
      useGeoFormStore().resetFormData();
    } else {
      console.error("请求失败：", response.status);
      ElMessage({
        message: "请求失败，请稍后重试",
        type: "error",
        duration: 3000,
        center: true
      });
    }
  } catch (error) {
    console.error("请求错误：", error);
    ElMessage({
      message: "请求错误，请检查网络连接",
      type: "error",
      duration: 3000,
      center: true
    });
  }
};
</script>

<template>
  <div class="container">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="geoRules"
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
        <div class="title">药粉相关参数</div>
        <el-form-item label="高度(mm)" prop="pbxheight">
          <el-input
            v-model="ruleForm.pbxheight"
            size="large"
            placeholder="请输入大于20，如比模套小则输入10以上"
          />
        </el-form-item>
        <el-form-item label="半径(mm)" prop="pbxdia">
          <el-input
            v-model="ruleForm.pbxdia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，四个内径一致"
          />
        </el-form-item>
        <div class="title">模套相关参数</div>
        <el-form-item label="高度(mm)" prop="mutaoheight">
          <el-input
            v-model="ruleForm.mutaoheight"
            size="large"
            placeholder="请输入30-50"
          />
        </el-form-item>
        <el-form-item label="内径(mm)" prop="mndia">
          <el-input
            v-model="ruleForm.mndia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，四个内径一致"
          />
        </el-form-item>
        <el-form-item label="外径(mm)" prop="mwdia">
          <el-input
            v-model="ruleForm.mwdia"
            size="large"
            placeholder="请输入15-20"
          />
        </el-form-item>
        <div class="title">冲头相关参数</div>
        <el-form-item label="高度(mm)" prop="upheigh">
          <el-input
            v-model="ruleForm.upheigh"
            size="large"
            placeholder="请输入8-10"
          />
        </el-form-item>
        <el-form-item label="半径(mm)" prop="updia">
          <el-input
            v-model="ruleForm.updia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，四个内径一致"
          />
        </el-form-item>
        <div class="title">底座相关参数</div>
        <el-form-item label="高度(mm)" prop="downheight">
          <el-input
            v-model="ruleForm.downheight"
            size="large"
            placeholder="请输入5-8"
          />
        </el-form-item>
        <el-form-item label="半径(mm)" prop="downdia">
          <el-input
            v-model="ruleForm.downdia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，四个内径一致"
          />
        </el-form-item>
      </template>
      <template v-if="ruleForm.shape === 'BQT'">
        <div class="title">药粉相关参数</div>
        <el-form-item label="高度(mm)" prop="pbxheight">
          <el-input
            v-model="ruleForm.pbxheight"
            size="large"
            placeholder="请输入10-15"
          />
        </el-form-item>
        <el-form-item label="半径(mm)" prop="pbxdia">
          <el-input
            v-model="ruleForm.pbxdia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，三个内径一致"
          />
        </el-form-item>
        <div class="title">模套相关参数</div>
        <el-form-item label="高度一(mm)" prop="mutaoheight1">
          <el-input
            v-model="ruleForm.mutaoheight1"
            size="large"
            placeholder="请输入39-45"
          />
        </el-form-item>
        <el-form-item label="高度二(mm)" prop="mutaoheight2">
          <el-input
            v-model="ruleForm.mutaoheight2"
            size="large"
            placeholder="请输入高度一的值减5"
          />
        </el-form-item>
        <el-form-item label="内径(mm)" prop="mndia">
          <el-input
            v-model="ruleForm.mndia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，三个内径一致"
          />
        </el-form-item>
        <el-form-item label="外径(mm)" prop="mwdia">
          <el-input
            v-model="ruleForm.mwdia"
            size="large"
            placeholder="请输入15-20"
          />
        </el-form-item>
        <el-form-item label="底座厚度(mm)" prop="downheight">
          <el-input
            v-model="ruleForm.downheight"
            size="large"
            placeholder="请输入5-8"
          />
        </el-form-item>
        <div class="title">冲头相关参数</div>
        <el-form-item label="高度(mm)" prop="upheigh">
          <el-input
            v-model="ruleForm.upheigh"
            size="large"
            placeholder="请输入15-20"
          />
        </el-form-item>
        <el-form-item label="半径(mm)" prop="updia">
          <el-input
            v-model="ruleForm.updia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，三个内径一致"
          />
        </el-form-item>
      </template>
      <template v-if="ruleForm.shape === 'ZHT'">
        <div class="title">药粉相关参数</div>
        <el-form-item label="高度一(mm)" prop="pbxheight1">
          <el-input
            v-model="ruleForm.pbxheight1"
            size="large"
            placeholder="请输入27-35"
          />
        </el-form-item>
        <el-form-item label="高度二(mm)" prop="pbxheight2">
          <el-input
            v-model="ruleForm.pbxheight2"
            size="large"
            placeholder="请输入高度一的值减17"
          />
        </el-form-item>
        <el-form-item label="顶半径(mm)" prop="pbxupdia">
          <el-input
            v-model="ruleForm.pbxupdia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，三个内径一致"
          />
        </el-form-item>
        <el-form-item label="底半径(mm)" prop="pbxdowndia">
          <el-input
            v-model="ruleForm.pbxdowndia"
            size="large"
            placeholder="请输6.5-8.5和模套底半径保持一致"
          />
        </el-form-item>
        <div class="title">模套相关参数</div>
        <el-form-item label="高度一(mm)" prop="mutaoheight1">
          <el-input
            v-model="ruleForm.mutaoheight1"
            size="large"
            placeholder="请输入46-55"
          />
        </el-form-item>
        <el-form-item label="高度二(mm)" prop="mutaoheight2">
          <el-input
            v-model="ruleForm.mutaoheight2"
            size="large"
            placeholder="请输入高度一的值减12"
          />
        </el-form-item>
        <el-form-item label="内径(mm)" prop="mndia">
          <el-input
            v-model="ruleForm.mndia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，三个内径一致"
          />
        </el-form-item>
        <el-form-item label="外径(mm)" prop="mwdia">
          <el-input
            v-model="ruleForm.mwdia"
            size="large"
            placeholder="请输入15-20"
          />
        </el-form-item>
        <el-form-item label="底座厚度(mm)" prop="downheight">
          <el-input
            v-model="ruleForm.downheight"
            size="large"
            placeholder="请输入5-8"
          />
        </el-form-item>
        <el-form-item label="底半径(mm)" prop="downdia">
          <el-input
            v-model="ruleForm.downdia"
            size="large"
            placeholder="请输入6.5-8.5和模套底半径保持一致"
          />
        </el-form-item>
        <div class="title">冲头相关参数</div>
        <el-form-item label="高度(mm)" prop="upheigh">
          <el-input
            v-model="ruleForm.upheigh"
            size="large"
            placeholder="请输入15-18"
          />
        </el-form-item>
        <el-form-item label="半径(mm)" prop="updia">
          <el-input
            v-model="ruleForm.updia"
            size="large"
            placeholder="请输入10-15，如比外径小5以上，三个内径一致"
          />
        </el-form-item>
      </template>
      <div class="button-container">
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            保存
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
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
    <el-button class="fixed-footer" type="primary" @click="startCalculation"
      >开始计算</el-button
    >

    >
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

.title {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
}

.container {
  display: flex;
  justify-content: space-around;
}
.button-container {
  display: flex;
  justify-content: flex-end;
}

.image-container {
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
  min-width: 200px;
}

.fixed-footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-size: 20px;
  background-color: red;
}
</style>
