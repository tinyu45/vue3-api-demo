<template>
  <card title="toRef 相关">
    <div class="time-container">
      <h4>学生信息</h4>
      <p>
        姓名：{{ info.name }} <br />
        年龄：{{ info.age }}
      </p>
      <label>toRef-姓名：</label><input type="text" v-model="name" />
      <!-- <button @click="updateInfo">修改姓名</button> -->
    </div>

    <div class="time-container">
      <h4>toRefs数据</h4>
      <p>
        姓名：{{ info.name }} <br />
        年龄：{{ info.age }}
      </p>
      <button @click="updateInfos">修改信息</button>
    </div>
  </card>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
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
    const info = reactive({
      name: "test",
      age: "12",
      time: getCurrentTime(),
    });

    // 将响应式数据的某个属性转ref 并关联响应式
    const name = toRef(info, "name");

    // 将响应式数据的所有属性转ref 并关联响应式
    const InfoRefs = toRefs(info);
    const updateInfos = () => {
      InfoRefs.time.value = getCurrentTime();
      InfoRefs.name.value = "王二麻";
      InfoRefs.age.value = "18";
    };

    return {
      info,
      name,
      InfoRefs,
      updateInfos,
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