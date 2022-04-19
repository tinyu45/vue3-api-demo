<template>
  <card title="其他ref">
    <div>
      <h4>带校验的ref (customRef)</h4>
      <label>密码：</label><input type="text" v-model="pwd" />
    </div>
    <div class="time-container">
      <h4>浅层ref(shallowRef)</h4>
      <p>区域：{{ location.city }}</p>
      <button @click="updateLocation">更新位置</button>
      <button @click="updateCity">更新位置-城市</button>
      <button @click="triggerUpdateCity">手动触发（triggerRef）</button>
    </div>
  </card>
</template>

<script>
import { customRef, shallowRef, triggerRef } from "vue";

/**
 * 自定义ref
 */
function validateRef(value, exp) {
  return customRef((track, trigger) => {
    return {
      get() {
        track(); //追踪依赖
        return value;
      },
      set(newValue) {
        if (exp.test(newValue)) {
          value = newValue;
        } else {
          console.warn(`${newValue}  数据不合法！`);
        }
        trigger(); //触发变更监听
      },
    };
  });
}

export default {
  setup() {
    // 带校验的ref
    const pwd = validateRef("", /^([a-z]|[0-9]){0,5}$/);

    // 内层数据不是响应式的
    const location = shallowRef({
      city: "西安",
    });
    const updateLocation = () => {
      location.value = {
        city: "商洛",
      };
    };
    const updateCity = () => {
      // .value内部不是响应式的，不会触发界面更新
      location.value.city = "深圳";
    };

    /**
     * 手动触发 ref
     */
    const triggerUpdateCity = () => {
      location.value.city = "成都";
      triggerRef(location);
    };
    return {
      pwd,
      location,
      updateLocation,
      updateCity,
      triggerUpdateCity,
    };
  },
};
</script>
<style lang="less" scoped>
.time-container {
  button {
    margin: 0 2px 4px;
  }
}
</style>