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

## 安装 sass 依赖

```js
cnpm install node-sass@4.x --save-dev
cnpm install sass-loader@7.3.1 --save-dev
cnpm install style-loader --save-dev
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
