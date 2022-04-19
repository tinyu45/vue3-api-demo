<template>
  <div class="card">
    <div class="title">
      <slot name="title">
        <h3>{{ title }}</h3>
      </slot>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="less" scoped>
h3 {
  margin: 0;
  padding: 0;
}
.card {
  border: 1px solid #efefef;
  border-radius: 4px;
  overflow: hidden;
  .title {
    height: 38px;
    line-height: 38px;
    background: #336699;
    color: white;
    text-indent: 5px;
  }
  .content {
    min-height: 150px;
    padding: 10px 5px;
  }
}
</style>