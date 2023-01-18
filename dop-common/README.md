```js
<template>
    <div>
        <Header></Header>
        <div style="display:flex">
            <Sidebar></Sidebar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
//头部组件
import Header from "@/components/layout/header";
//侧边栏组件
import Sidebar from "@/components/layout/sidebar";

export default {
    data() {
        return {};
    },
    props: {},
    components: { Header, Sidebar },
    computed: {},
    mounted() { },
    methods: {},
    watch: {},
};
</script>

<style lang="scss" scoped>

</style>

```
