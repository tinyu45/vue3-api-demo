<template>
  <card title="readonly相关">
    <div class="time-container">
      <h4>学生信息</h4>
      <p>
        <span>姓名：{{ info.name }}</span> <br />
        <span>年龄：{{ info.age }}</span
        ><br />
        <span
          >班级: {{ classInfo.school }}{{ classInfo.detail.room
          }}{{ classInfo.detail.desk }}</span
        ><br />
      </p>
      <button @click="updateInfo">更新信息</button>
      <button @click="showResult(1)">isProxy</button>
      <button @click="showResult(2)">isReadonly</button>
      <button @click="updateShallowInfo">浅层变更</button>
    </div>
  </card>
</template>

<script>
import { reactive, readonly, isProxy, isReadonly, shallowReadonly } from "vue";
export default {
  /**
   *   注意，其他响应式数据变更时，会更新所有状态
   */
  setup() {
    const info = reactive(
      readonly({
        name: "test",
        age: "12",
      })
    );

    // 浅层转换为 响应式数据
    const classInfo = shallowReadonly({
      school: "十二中",
      detail: reactive({
        room: "6班",
        desk: "4排3座",
      }),
    });

    // 更新info
    const updateInfo = () => {
      info.name = "张三";
      info.age = 18;
      console.log(info);
    };

    function updateShallowInfo() {
      classInfo.detail.room = "5班【改】";
      console.log(classInfo);
    }

    // 判断结果
    function showResult(flag) {
      if (flag === 1) {
        return alert(isProxy(info));
      }
      if (flag === 2) {
        return alert(isReadonly(info));
      }
    }

    return {
      info,
      classInfo,
      updateInfo,
      showResult,
      updateShallowInfo,
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