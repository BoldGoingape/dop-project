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

```js <el-form class="mtb-20" :rules="rules" status-icon>
              <el-form-item>
                <el-input
                  prefix-icon="el-icon-user ft-gray"
                  size="medium"
                  placeholder="请输入用户名"
                  v-model="userName"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  prefix-icon="el-icon-lock ft-gray"
                  size="medium"
                  placeholder="请输入密码"
                  clearable
                  v-model="userPassWord"
                ></el-input>
              </el-form-item>
              <el-form-item class="flex">
                <!-- 滑动 -->
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
              </el-form-item>
              <span>找回密码</span>
              <el-checkbox v-model="checked" true-label="#cccc"
                >记住我</el-checkbox
              >
              <el-form-item>
                <el-button
                  type="primary"
                  size="medium"
                  class="w100p"
                  @click="loginIn()"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
```

### js-cookie 使用

```js // npm安装
npm install js-cookie --save

// 引用
import Cookies from 'js-cookie'
// 使用
1 设置cookie
Cookies.set('name', 'value'， day);
2 获取cookie
Cookies.get('name');
3 删除
Cookies.remove('name');
```
