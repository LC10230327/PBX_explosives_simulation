export default {
  path: "/management",
  redirect: "/management/geometrical",
  meta: {
    icon: "collection",
    title: "数据管理",
    rank: 3
  },
  children: [
    {
      path: "/management/geometrical",
      name: "Geometrical",
      component: () => import("@/views/management/geometrical.vue"),
      meta: {
        title: "几何参数表"
      }
    },
    {
      path: "/management/experiment",
      name: "Experiment",
      component: () => import("@/views/management/experiment.vue"),
      meta: {
        title: "试验记录表"
      }
    }
  ]
};
