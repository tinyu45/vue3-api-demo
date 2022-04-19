<template>
  <div>
    <h2>vue3 API 练习</h2>
    <hr />
    <div class="container">
      <sendMsg />
      <refDemo />
      <toRefDemo />
      <otherRefDemo />
      <reactiveDemo />
      <readonlyDemo />
      <myMood />
      <computedDemo />
    </div>
  </div>
</template>

<script>
import sendMsg from "@/components/propsDemo/index.vue";
import refDemo from "@/components/refDemo/index.vue";
import toRefDemo from "@/components/toRefDemo/index.vue";
import otherRefDemo from "@/components/otherRefDemo/index.vue";
import reactiveDemo from "@/components/reactiveDemo/index.vue";
import readonlyDemo from "@/components/readonlyDemo/index.vue";
import computedDemo from "@/components/computedDemo/index.vue";
import myMood from "@/components/myMood/index.vue";
export default {
  components: {
    sendMsg,
    refDemo,
    toRefDemo,
    otherRefDemo,
    reactiveDemo,
    readonlyDemo,
    computedDemo,
    myMood,
  },
};
</script>

<style lang="less" scoped>
.container {
  max-height: calc(100vh - 100px);
  overflow: hidden auto;
  /* 声明一个容器 */
  display: grid;
  /*  声明列的宽度  */
  grid-template-columns: repeat(4, 1fr);
  /*  声明行间距和列间距  */
  grid-gap: 20px;
  /*  声明行的高度  */
  // grid-template-rows: 100px 200px;
}
</style>