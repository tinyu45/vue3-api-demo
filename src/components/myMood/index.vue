<template>
  <card title="心情小案例">
    <div>
      <h4>心情标签</h4>
      <div class="tags">
        <span
          v-for="item in list"
          :key="item.text"
          :class="{ active: current.text === item.text }"
          @click="current = item"
          >{{ item.text }}</span
        >
      </div>
      <div class="img-container">
        <img height="150" :src="current.img" />
      </div>
    </div>
  </card>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      list: [
        {
          text: "开心",
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011b075c1c799da80121df9057c5b4.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652865870&t=cf07d88ddb3308c923d989b0dcf2f050",
        },
        {
          text: "悲伤",
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F11%2F20210511214952_64c54.thumb.400_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652866493&t=61c52e63ff599ebc3f6a0c0c9ca71bda",
        },
        {
          text: "大笑",
          img: "https://img95.699pic.com/element/40142/7488.png_860.png",
        },
        {
          text: "大哭",
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F05%2F20151105105131_GwKdC.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652868224&t=a00c129ffe21349b3294cd2ecebdd3de",
        },

        {
          text: "悠闲",
          img:
            "https://img.zcool.cn/community/015cf25df46c1ea801219cce18865d.png@1280w_1l_2o_100sh.png",
        },
      ],
      current: {
        text: "开心",
        img:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011b075c1c799da80121df9057c5b4.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652865870&t=cf07d88ddb3308c923d989b0dcf2f050",
      },
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.tags {
  span {
    display: inline-block;
    padding: 2px 4px;
    margin: 0 1px;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 14px;
    background: #ccc;
    color: black;
    &.active {
      background: #1893a8;
      color: white;
    }
  }
}

.img-container {
  text-align: center;
}
</style>