<script setup>
const getWindowSize = () => {
  let width = window.innerWidth
  if (width > 1600) return 5
  else if (width > 1200) return 4
  else if (width > 1000) return 3
  else return 2
}
</script>

<template>
  <header class="underline-offset-8 text-white py-4 px-[10%] h-24 content-center" style="background: #00262f">
    <div class="container mx-auto flex justify-between items-center">
      <img alt="logo" class="h-12 w-12" src="/favicon.ico"/>
      <div v-if="getWindowSize() > 3" class="w-fit px-16">
        <h1 class="text-2xl font-bold">声辉科技</h1>
      </div>
      <span class="grow"></span>
      <nav class="w-fit">
        <ul class="flex space-x-8">
          <!--     主页     -->
          <li>
            <router-link class="hover:underline" to="/">主页</router-link>
          </li>
          <!--     产品     -->
          <li>
            <router-link class="hover:underline" to="/products">产品</router-link>
          </li>
          <!--     服务     -->
          <li>
            <router-link class="hover:underline" to="/services">服务</router-link>
          </li>

          <!--     关于     -->
          <li>
            <router-link class="hover:underline" to="/about">关于</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>
