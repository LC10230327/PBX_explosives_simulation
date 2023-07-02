import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const geoRules = reactive<FormRules>({
  pbxheight: [
    { required: true, message: "请输入药粉高度", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入药粉半径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入木炭高度", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入木炭直径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入木屑直径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入上盖高度", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入上盖直径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入下盖高度", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入下盖直径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入药粉上盖直径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入药粉下盖直径", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入药粉高度1", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入药粉高度2", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入木炭高度1", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
    { required: true, message: "请输入木炭高度2", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入数字"));
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
