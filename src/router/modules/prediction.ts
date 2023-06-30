export default {
  path: "/prediction",
  redirect: "/prediction/forward",
  meta: {
    icon: "histogram",
    title: "结果预测",
    rank: 2
  },
  children: [
    {
      path: "/prediction/forward",
      name: "Forward",
      component: () => import("@/views/prediction/forward.vue"),
      meta: {
        title: "正向推导"
      }
    },
    {
      path: "/prediction/reverse",
      name: "Reverse",
      component: () => import("@/views/prediction/reverse.vue"),
      meta: {
        title: "逆向推导"
      }
    }
  ]
};
