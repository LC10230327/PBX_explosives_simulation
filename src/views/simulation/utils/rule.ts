import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const geoRules = reactive<FormRules>({
  pbxheight: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  pbxdia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  mutaoheight: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  mndia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  mwdia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  upheigh: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  updia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  downheight: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  downdia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  pbxupdia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  pbxdowndia: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  pbxheight1: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  pbxheight2: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  mutaoheight1: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  mutaoheight2: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback();
        } else if (isNaN(Number(value))) {
          callback(new Error("请输入数字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
});
