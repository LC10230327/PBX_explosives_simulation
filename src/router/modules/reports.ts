export default {
  path: "/reports",
  redirect: "/reports/cylindrical",
  meta: {
    icon: "folder",
    title: "数据报告",
    rank: 3
  },
  children: [
    {
      path: "/reports/cylindrical",
      name: "Cylindrical",
      component: () => import("@/views/reports/cylindrical.vue"),
      meta: {
        title: "圆柱体"
      }
    },
    {
      path: "/reports/hemispheres",
      name: "Hemispheres",
      component: () => import("@/views/reports/hemispheres.vue"),
      meta: {
        title: "半球体"
      }
    },
    {
      path: "/reports/cone-combination",
      name: "ConeCombination",
      component: () => import("@/views/reports/cone-combination.vue"),
      meta: {
        title: "锥合体"
      }
    }
  ]
};
