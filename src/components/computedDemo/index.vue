<template>
  <card title="计算属性和监听">
    <div class="counter-box">
      <input type="text" v-model="state.num1" /> <span> + </span>
      <input v-model="state.num2" type="text" /> <span> = </span>
      <span>{{ count }}</span>
    </div>
    <div>
      <h4>watch 和 watchEffect</h4>
      <div>
        <button @click="useWatch = !useWatch">
          {{ btnText }}</button
        ><br />
        <label>姓名：</label><input v-model="state.name" type="text" /><br />
        <label>年龄：</label><input v-model="state.age" type="text" />
        <p>{{ state.contentText }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import { reactive, computed, ref, watch, watchEffect } from "vue";
export default {
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      // 检索条件
      name: "",
      age: "",
      contentText: "",
    });

    let count = computed(() => {
      return parseInt(state.num1) + parseInt(state.num2);
    });

    let useWatch = ref(true);

    let btnText = computed(() =>
      useWatch.value ? "watchEffect监听" : "watch监听"
    );

    // watch监听
    watch([useWatch, () => state.name, () => state.age], (val, oldval) => {
      if (useWatch.value) {
        state.contentText = `watch {name:${state.name}, age:${state.age}}对应的数据`;
      }
    });

    //watchEffect监听
    watchEffect(() => {
      if (!useWatch.value) {
        state.contentText = `watchEffect {name:${state.name}, age:${state.age}}对应的数据`;
      }
    });

    return {
      state,
      count,
      btnText,
      useWatch,
    };
  },
};
</script>

<style lang="less" scoped>
.counter-box {
  font-size: 24px;
  input {
    width: 50px;
    font-size: 24px;
  }
}
</style>