<template>
  <card title="reactive相关">
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
        <span>地址：{{ address.city }}市 </span><br />
      </p>
      <button @click="updateInfo">更新信息</button>
      <button @click="showResult(1)">isProxy</button>
      <button @click="showResult(2)">isReactive</button>
      <button @click="updateOriginInfo">变更原始数据</button>
      <button @click="updateMarkInfo">mark版更改</button>
      <button @click="updateShallowInfo">浅层变更</button>
    </div>
  </card>
</template>

<script>
import {
  reactive,
  isProxy,
  isReactive,
  toRaw,
  markRaw,
  shallowReactive,
} from "vue";
export default {
  /**
   *   注意，其他响应式数据变更时，会更新所有状态
   */
  setup() {
    const info = reactive({
      name: "test",
      age: "12",
    });

    //markRaw 标记对象，使得不能转为响应式或只读 有bug
    const address = reactive(
      markRaw({
        city: "上海",
      })
    );

    // 浅层转换为 响应式数据
    const classInfo = shallowReactive({
      school: "十二中",
      detail: {
        room: "6班",
        desk: "4排3座",
      },
    });

    // 更新info
    const updateInfo = () => {
      info.name = "张三";
      info.age = 18;
      //classInfo.school = "三中";
    };

    function updateMarkInfo() {
      // 标记过的属性，失去响应式
      console.log(isReactive(address));
      address.city = "西安";
    }

    function updateShallowInfo() {
      classInfo.detail.room = "5班【改】";
    }

    // toRaw
    const updateOriginInfo = () => {
      // 获取原始对象， 失去响应式， 更改时不会更新界面
      let originInfo = toRaw(info);
      originInfo.name = "toRaw name";
    };

    // 判断结果
    function showResult(flag) {
      if (flag === 1) {
        return alert(isProxy(info));
      }
      if (flag === 2) {
        return alert(isReactive(info));
      }
    }

    return {
      info,
      address,
      classInfo,
      updateInfo,
      showResult,
      updateOriginInfo,
      updateMarkInfo,
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