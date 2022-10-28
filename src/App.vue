<script lang="ts" setup>

window.addEventListener(
  "mousewheel",
  function (event :any) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }
  },
  { passive: false }
);

</script>

<template>

    <div id="app">
      
        <router-view></router-view>
      
      
    </div>  

</template>

<style scoped lang="less">
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url("@/assets/images/img/app-bg.jpg");
    background-size: cover;
    background-color: #213073;

}

</style>