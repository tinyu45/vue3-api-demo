<template>
  <div class="container">
    <label>传过来的值：</label>
    <div>{{ msg }}</div>
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    msg: String,
  },

  setup(props, { emit, attrs }) {
    console.log(props, attrs);
    function send(){
      emit('sendHandler', props.msg);
    }
    return {
      send
    };
  },
};
</script>

<style lang="less" scoped >
.container {
  div {
    margin: 10px;
    padding: 0 10px;
    line-height: 40px;
    border-radius: 4px;
    min-height: 100px;
    border: 1px solid #ccc;
  }
}
</style>