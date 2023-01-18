<template name="test-slide-fade">
  <div
    class="moneBox dialog"
    id="drag"
    style="width: 450px; background-color: white"
  >
    <div style="" class="Tiele dialog-title">
      <span style="margin-left: 10px;overflow:hidden">个人信息</span>
      <h1 style="margin-left: 95%; cursor: pointer" title="关闭">
        X
      </h1>
    </div>
    <!-- 主体部分 -->
  </div>
</template>
<script>
export default {
  name: "Personal",
  data() {
    return {};
  },
  methods: {
    //拖拽
    drag() {
      let drag = document.getElementById("drag");
      drag.onmousedown = function(e) {
        let diffX = e.clientX - drag.offsetLeft; //鼠标距box边框的距离
        let diffY = e.clientY - drag.offsetTop;
        document.onmousemove = function(e) {
          let left = e.clientX - diffX;
          let top = e.clientY - diffY;
          //控制在视窗内
          if (left < 0) {
            left = 0;
          } else if (left > window.innerWidth - drag.offsetWidth) {
            left = window.innerWidth - drag.offsetWidth;
          }
          if (top < 0) {
            top = 0;
          } else if (top > window.innerHeight - drag.offsetHeight) {
            top = window.innerHeight - drag.offsetHeight;
          }
          drag.style.left = left + "px";
          drag.style.top = top + "px";
        };
        document.onmouseup = function(e) {
          // console.log(this);
          this.onmousemove = null;
          this.onmouseup = null;
        };
      };
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.moneBox {
  position: absolute;
  top: 250px;
  left: 40%;
  z-index: 999;
}
#drag {
  position: absolute;
  justify-content: center;
  position: absolute;
}
.Tiele {
  cursor: move;
  height: 50px;
  line-height: 50px;
  background-color: #0080c9;
  span {
    float: left;
  }
}
.TieleBox {
  height: 180px;
  .selectItem {
    margin-left: 80px;
    margin-top: 50px;
  }
  .el-button {
    margin-top: 40px;
    width: 135px;
  }
}
</style>
