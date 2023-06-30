export default {
  path: "/simulation",
  redirect: "/simulation/geometric",
  meta: {
    icon: "monitor",
    title: "模拟仿真",
    rank: 1
  },
  children: [
    {
      path: "/simulation/geometric",
      name: "Geometric",
      component: () => import("@/views/simulation/geometric.vue"),
      meta: {
        title: "几何参数"
      }
    },
    {
      path: "/simulation/materials",
      name: "Materials",
      component: () => import("@/views/simulation/materials.vue"),
      meta: {
        title: "材料参数"
      }
    },
    {
      path: "/simulation/constraint",
      name: "Constraint",
      component: () => import("@/views/simulation/constraint.vue"),
      meta: {
        title: "约束条件及载荷"
      }
    }
  ]
};
