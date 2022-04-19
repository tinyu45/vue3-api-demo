<template>
  <card class="hello" title="props/emit传值">
    <p>sendMsg组件，测试属性传递（props父子传值）</p>
    <div>
      <child :msg="msgText" name="JACK" @sendHandler="sendHandler" />
    </div>
  </card>
</template>
<script>
import child from "./child.vue";
import { ref } from "vue";
export default {
  name: "sendMsg",
  components: {
    child,
  },

  /***
   * 周期函数，编写逻辑
   */
  setup() {
    // 不使用ref不是响应式数据，无法在数据变更时更新页面
    let msgText = ref("第一条消息哈哈😀");
    function sendHandler(msg) {
      msgText.value = "343424";
      alert(`收到消息,${msg}`);
    }
    return {
      sendHandler,
      msgText,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
</style>
