<template>
  <card title="ref 相关">
    <div class="time-container">
      <p>当前时间：{{ time }}</p>
      <p>unref时间：{{ unrefTime }}</p>
      <button @click="updateTime">更新时间</button>
      <button @click="refUpdateTime">ref更新时间</button>
      <button @click="unrefUpdateTime">修改源数据</button>
    </div>

    <div class="time-container">
     <h4>学生信息</h4> 
      <p>
        姓名：{{ info.name }} <br />
        年龄：{{ info.age }}
      </p>
      <button @click="updateInfo">更新信息</button>
    </div>
  </card>
</template>

<script>
import { ref, unref, isRef } from "vue";
/**
 * 获取当前日期时间串
 */
function getCurrentTime() {
  let date = new Date();
  const formatNumber = (num) => (num < 10 ? `0${num}` : `${num}`);
  let y = date.getFullYear();
  let M = formatNumber(date.getMonth() + 1);
  let d = formatNumber(date.getDate());
  let h = formatNumber(date.getHours());
  let m = formatNumber(date.getMinutes());
  let s = formatNumber(date.getSeconds());
  return `${y}-${M}-${d} ${h}:${m}:${s}`;
}

export default {
  setup() {
    const time = ref(getCurrentTime());

    //拿到原始数据（值） 失去响应式
    let unrefTime = unref(time);

    // ref包装对象  使用reactive实现响应式并使用.value访问
    const info = ref({
      name: "test",
      age: "12",
    });

    const updateTime = () => (time.value = getCurrentTime());

    /**
     * 响应式更新
     */
    const refUpdateTime = () => {
      let temp = time;
      temp.value = "ref 更新";
    };

    const unrefUpdateTime = () => {
      // 失去响应式 界面不更新
      unrefTime = getCurrentTime();
      let str = `unref时间:${unrefTime}(响应式：${
        isRef(unrefTime) ? "是" : "否"
      })`;
      alert(str);
    };

    //
    const updateInfo = () => {
      info.value.name = "张三";
      info.value.age = 18;
    };

    return {
      time,
      info,
      unrefTime,
      updateTime,
      refUpdateTime,
      unrefUpdateTime,
      updateInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.time-container {
  button {
    margin: 0 2px;
  }
}
</style>