<template>
  <div class="moneBox " id="drag" style="width: 800px; background-color: white">
    <div style="" class="Tiele dialog-title" @click="drag">
      <span style="margin-left: 10px;overflow:hidden">选择应用</span>
      <h1
        style="margin-left: 95%; cursor: pointer"
        @click="doubleShow"
        title="关闭"
      >
        X
      </h1>
    </div>
    <div id="TieleBox" class="TieleBox">
      <div
        class="img-div"
        v-for="item in applicationList"
        :key="item.id"
        @click="selectBoard(item.home_path)"
      >
        <img :src="item.icon" :alt="item.title" :title="item.title" srcset="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import auth from "@/lib/auth.js";
import { getTenantTeams } from "@/api/khaan";
import { getConfig } from "@/api/unay";
export default {
  name: "Checksystem-",
  // props: ["isShow"],
  data() {
    return {
      icon: "",
      applicationList: {}
    };
  },
  methods: {
    selectBoard(e) {
      alert(e);
      window.location.href = "http://www.wenjuju.com/common#/common/home";
    },
    //显示
    doubleShow() {
      this.$bus.$emit("doubleShow", false);
    },
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
          this.onmousemove = null;
          this.onmouseup = null;
        };
      };
    },
    //查询方法
    queryView() {
      const applicationList = JSON.parse(auth.applicationList.get());
      if (applicationList.length <= 6) {
        var tieleBox = document.getElementById("TieleBox");
        tieleBox.style.height = "500px";
      }
    }
  },
  mounted() {
    const applicationList = JSON.parse(auth.applicationList.get());
    console.log(applicationList.length);
    this.applicationList = applicationList;
    this.queryView();
  }
};
</script>
<style lang="scss" scoped>
.moneBox {
  position: absolute;
  top: 150px;
  left: 33%;
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
  background-color: rgba(231, 231, 231, 0.5);

  span {
    float: left;
  }
}
.TieleBox {
  display: flex;
  flex-wrap: wrap;
}
.img-div {
  width: 110px;
  height: 120px;
  margin: 10px;
  border-radius: 15px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
  }
  p {
    display: block;
    line-height: 12px;
  }
}
//悬停放大
.img-div:hover {
  transform: scale(1.1);
  transition: all 0.3s;
}
//媒体查询
@media screen and (max-width: 1024px) {
  .moneBox {
    position: absolute;
    top: 150px;
    left: 5%;
    z-index: 999;
  }
}
</style>
