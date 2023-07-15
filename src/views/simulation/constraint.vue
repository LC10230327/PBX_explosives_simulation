<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { constraintStore } from "@/store/modules/constraint";
import { useGeoFormStore } from "@/store/modules/geometric";
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from "element-plus";

interface SimulationData {
  yaotem?: string;
  chongtem?: string;
  mutem?: string;
  pressure1?: string;
  time1?: string;
  pressure2?: string;
  time2?: string;
  pressure3?: string;
  time3?: string;
}

const simulationData = reactive<SimulationData>({
  yaotem: "", // 药粉温度
  chongtem: "", // 冲头温度
  mutem: "", // 模套温度
  pressure1: "", // 第一段压力
  time1: "", // 第一段时间
  pressure2: "", // 第二段压力
  time2: "", // 第二段时间
  pressure3: "", // 第三段压力
  time3: "" // 第三段时间
});

const validateNumber = (rule, value, callback) => {
  if (value === "") {
    callback();
  } else if (!Number.isFinite(Number(value))) {
    callback(new Error("请输入数字"));
  } else {
    callback();
  }
};

const rules = {
  yaotem: [{ validator: validateNumber, trigger: "blur" }],
  chongtem: [{ validator: validateNumber, trigger: "blur" }],
  mutem: [{ validator: validateNumber, trigger: "blur" }],
  ditem: [{ validator: validateNumber, trigger: "blur" }],
  pressure1: [{ validator: validateNumber, trigger: "blur" }],
  time1: [{ validator: validateNumber, trigger: "blur" }],
  pressure2: [{ validator: validateNumber, trigger: "blur" }],
  time2: [{ validator: validateNumber, trigger: "blur" }],
  pressure3: [{ validator: validateNumber, trigger: "blur" }],
  time3: [{ validator: validateNumber, trigger: "blur" }]
};

const ruleFormRef = ref(null);

onMounted(() => {
  const storedGeoForm = constraintStore().getFormData();
  if (storedGeoForm) {
    Object.assign(simulationData, storedGeoForm);
  }
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      constraintStore().saveFormData(simulationData);
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
const resetForm = formRef => {
  formRef.resetFields();
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

defineOptions({
  name: "Constraint"
});
</script>

<template>
  <div class="container">
    <el-form
      :model="simulationData"
      :rules="rules"
      ref="ruleFormRef"
      label-width="120px"
      class="demo-ruleForm"
      size="large"
      status-icon
    >
      <div class="title">温度</div>
      <el-form-item label="药粉温度(°C)">
        <el-input v-model="simulationData.yaotem" />
      </el-form-item>
      <el-form-item label="冲头温度(°C)">
        <el-input v-model="simulationData.chongtem" />
      </el-form-item>
      <el-form-item label="模套温度(°C)">
        <el-input v-model="simulationData.mutem" />
      </el-form-item>
      <div class="title">压力</div>
      <el-form-item label="第一段压力">
        <el-input v-model="simulationData.pressure1" />
      </el-form-item>
      <el-form-item label="第一段时间">
        <el-input v-model="simulationData.time1" />
      </el-form-item>
      <el-form-item label="第二段压力">
        <el-input v-model="simulationData.pressure2" />
      </el-form-item>
      <el-form-item label="第二段时间">
        <el-input v-model="simulationData.time2" />
      </el-form-item>
      <el-form-item label=" 第三段压力">
        <el-input v-model="simulationData.pressure3" />
      </el-form-item>
      <el-form-item label="第三段时间">
        <el-input v-model="simulationData.time3" />
      </el-form-item>
      <div class="button-container">
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >保存</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-button class="fixed-footer" type="primary" @click="startCalculation"
      >开始计算</el-button
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

.fixed-footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-size: 20px;
  background-color: red;
}
</style>
