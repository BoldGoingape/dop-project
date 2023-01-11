# vue-demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 创建项目

```js
vue init webpack XXX
```

## 结构目录

```
.
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dop-login
│   ├── build
│   │   ├── build.js
│   │   ├── check-versions.js
│   │   ├── logo.png
│   │   ├── utils.js
│   │   ├── vue-loader.conf.js
│   │   ├── webpack.base.conf.js
│   │   ├── webpack.dev.conf.js
│   │   └── webpack.prod.conf.js
│   ├── config
│   │   ├── dev.env.js
│   │   ├── index.js
│   │   └── prod.env.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   └── logo.png
│   │   ├── components
│   │   │   └── HelloWorld.vue
│   │   ├── main.js
│   │   └── router
│   │       └── index.js
│   └── static
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api
│   │   └── khaan.js
│   ├── App.vue
│   ├── assets
│   │   ├── fonts
│   │   │   ├── demo.css
│   │   │   ├── demo_index.html
│   │   │   ├── iconfont.css
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.js
│   │   │   ├── iconfont.json
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   └── iconfont.woff2
│   │   ├── images
│   │   │   ├── erweima.jpg
│   │   │   ├── login_logo.png
│   │   │   ├── system_01.png
│   │   │   ├── system_02.png
│   │   │   ├── system_03.png
│   │   │   ├── system_04.png
│   │   │   ├── system_05.png
│   │   │   └── system_06.png
│   │   ├── logo.png
│   │   ├── package.json
│   │   └── sm.png
│   ├── components
│   │   └── LoginBox.vue
│   ├── constants
│   ├── datas
│   ├── lib
│   │   ├── auth.js
│   │   ├── requsert.js
│   │   └── utils.js
│   ├── main.js
│   ├── plugins
│   ├── router
│   │   └── index.js
│   ├── styles
│   │   ├── login.scss
│   │   ├── reset.scss
│   │   └── widget.scss
│   └── views
│       ├── 404.vue
│       └── login.vue
└── static
    └── config.js

```

## 安装 sass 依赖

```js
cnpm install node-sass@4.x --save-dev
cnpm install sass-loader@7.3.1 --save-dev
cnpm install style-loader --save-dev
```

## vue-drag-verify 滑动插件

```js
npm install vue-drag-verify --save

//二 安装字体图标
npm install  font-awesome --save
//三 使用

```

```html
<drag-verify
  :width="width"
  :height="height"
  :text="text"
  :circle="false"
  :success-text="successText"
  :background="background"
  :progress-bar-bg="progressBarBg"
  :completed-bg="completedBg"
  :handler-bg="handlerBg"
  :handler-icon="handlerIcon"
  :text-size="textSize"
  :success-icon="successIcon"
  ref="Verify"
>
</drag-verify>
```

```js
//导入
import dragVerify from "vue-drag-verify";

import "font-awesome/css/font-awesome.min.css"; // 最好在main.js中引入，可以全局使用

  data() {
    return {
      handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#cccccc",
      progressBarBg: "#4b0",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 320,
      height: 42,
      textSize: "18px"
      }
  }
  //钩子
  components:{dragVerify},
```

## 安装 MD5

```js
npm install crypto-js --save-dev
```

```js
//使用md5 加密
  CryptoJS  https://www.cnblogs.com/huiguo/p/16601076.html
```

## QS 使用

```js
//安装
npm install qs
//引入
import qs from 'qs'
//常用方法
qs.parse() //将url 简析成对象
qs.stringify() //将对象 简析成url 第二个参数 指定输出格式
```

## 创建库 方便后期调用

### 分别暴露 & 默认暴露

```js
import XXX from "XXX";
export default {
  XXXX
};
```

## 弹出组件

1.居住显示 2.宽高， 传递参数

## 托拽事件，有边界判断

```js
https://juejin.cn/post/6997772711594295327
```
