<script setup>
import {ref} from 'vue'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

// require not
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faEnvelope, faPhone, faShare} from '@fortawesome/free-solid-svg-icons'

const getWindowSize = () => {
  let width = window.innerWidth
  if (width > 1600) return 5
  else if (width > 1200) return 4
  else if (width > 1000) return 3
  else if (width > 600) return 2
  else if (width > 400) return 1
  else return 0
}


const windowSize = ref(getWindowSize())

addEventListener('resize', () => {
  windowSize.value = getWindowSize()
})

const tableData = [
  {
    id: 'MB1010 LV-MaxSonar-EZ1',
    accuracy: '1.2mm',
    frequency: '1800Hz',
    period_2m: '厚度3mm，直径8mm',
    period_4m: '厚度6mm，直径20mm',
    size: 'M10、M8'
  }
]

const caroselItems = [
  {
    title: '不断创新研究细分领域的高精密检测与定位技术',
    description: 'MB系列，高精密检测定位控制器，具有高性能、高精度的特点，适用于各种高精密场合。',
    image: '/images/rotate_1.webp'
  },
  {
    title: '不断深耕精准农业领域的传感器深度应用与探索',
    description: 'MB系列，高精度传感器，集成了先进的数据采集与分析功能，可满足现代精准农业的数据采集需求。',
    image: '/images/rotate_2.webp'
  },
  {
    title: '不断进步专注领域深化的工业级传感器应用技术',
    description: 'MB系列，先进的工业传感器，以其卓越的性能和精确度，成为工业自动化领域的关键。',
    image: '/images/rotate_3.webp'
  }
]

const featureItems = [
  {
    title: '可应对多种工件',
    description: '数字超声波传感器在检测工件方面具有独特的优势。与传统的反射型光电传感器相比，\
        数字超声波传感器能够轻松实现对难以检测的工件的测量。即使是金属、玻璃、液面等用反射型光电传感器难以检测的工件亦可轻松实现检测，\
        而且也不会受表面的颜色、图案、光泽所影响。',
    image: '/images/feature_1.avif'
  },
  {
    title: '高精度和高抗干扰性',
    description: '通过寻找到具有良好匹配层材料，数字超声波传感器可以实现高精度的测量。其精度达到毫米级，\
        可以满足许多应用场景对于精确测量的需求。同时，良好的匹配层材料还能提高传感器的抗干扰性，使其能够在复杂的工作环境中稳定运行，\
        减少外部干扰对测量结果的影响。',
    image: '/images/feature_2.avif'
  },
  {
    title: '抗雾、抗污能力强',
    description: '数字超声波传感器可以利用强力超声波穿透一定程度的灰尘和脏污。在一些工业环境中，工件表面可能会积累灰尘、脏污或其他杂质，\
    这可能会影响传感器的检测性能。然而，数字超声波传感器通过发射强力超声波脉冲，可以穿透一定程度的灰尘和脏污，从而实现对工件的准确检测。\
    这种特性使得数字超声波传感器在工业生产线等环境中能够持续稳定地工作，提供可靠的检测结果。此外，传感器主机符合IP67标准，\
    意味着它具有良好的密封性能，能够有效防止灰尘、水分和其他外部物质进入传感器内部，从而保护传感器的内部元件免受损坏。这使 \
    得数字超声波传感器能够在恶劣的工作环境中工作，如湿润的环境、工业车间或战术应用中，保持稳定的性能和可靠的工作。',
    image: '/images/feature_3.avif'
  },
  {
    title: '不受背景影响',
    description: '配备只对至近工件进行检测，无需在意背景的光泽和形状。无需采取对策，如将传感器倾斜或使用颜色较暗的背景，也可准确地进行检测。',
    image: '/images/feature_4.webp'
  }
]

const detailItem = [
  '/images/detail_1.png',
  '/images/detail_2.jpg',
  '/images/detail_3.jpg',
  '/images/detail_4.jpg'
]

</script>

<template>
  <Header/>

  <el-affix :offset="-1">
    <div class="flex h-24 px-[3%] lg:px-[15%] space-x-4 place-items-center" style="background: #fdfdfd">
      <div class="px-4">
        <img alt="product" class="h-fit w-fit max-w-16" height="234" src="/images/product.jpg" width="214">
      </div>
      <div class="flex flex-col w-fit h-fit">
        <span class="text-xl">数字超声波传感器</span>
        <span class="text-gray-400">MB系列</span>
      </div>
      <div class="grow" v-if="windowSize > 2"></div>
      <div class="flex items-center space-x-4 h-full">
        <nav v-if="windowSize > 2">
          <ul class="flex text-base space-x-4">
            <li class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold">
              <a href="#summary">产品概述</a>
            </li>
            <li class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold">
              <a href="#feature">产品特性</a>
            </li>
            <li class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold">
              <a href="#format">产品规格</a>
            </li>
            <li class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold">
              <a href="#picture">产品图片</a>
            </li>
          </ul>
        </nav>
        <el-divider v-if="windowSize > 2" direction="vertical"/>


        <nav v-if="windowSize === 5">
          <ul class="flex text-sm space-x-4">
            <li>
              <FontAwesomeIcon :icon="faShare"/>
              分享给朋友
            </li>
            <li>
              <FontAwesomeIcon :icon="faEnvelope"/>
              咨询最低价
            </li>
          </ul>
        </nav>
        <nav v-if="windowSize === 4">
          <ul class="flex text-sm space-x-4">
            <li>
              <FontAwesomeIcon :icon="faShare"/>
            </li>
            <li>
              <FontAwesomeIcon :icon="faEnvelope"/>
            </li>
          </ul>
        </nav>

        <div v-if="windowSize > 3" class="bg-red-600 text-white px-4 py-2 rounded">
          下载目录
        </div>
      </div>
    </div>
  </el-affix>
  <el-affix v-if="windowSize <= 2 && windowSize > 0" :offset="95">
    <div class="flex h-12 text-base justify-between bg-white px-[10%]">
      <div class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold "><a href="#summary">产品概述</a>
      </div>
      <div class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold "><a href="#feature">产品特性</a>
      </div>
      <div class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold "><a href="#format">产品规格</a>
      </div>
      <div class="underline-offset-8 hover:underline hover:text-red-600 hover:font-bold "><a href="#picture">产品图片</a>
      </div>
    </div>
  </el-affix>

  <div class="px-[5%] lg:px-[20%] flex flex-col bg-gray-100 space-y-8 pt-16">
    <el-carousel v-if="windowSize > 3" height="auto" indicator-position="outside">
      <el-carousel-item v-for="(item, key) in caroselItems" :key="item.title"
                        :style="`height: ${getCarouselHeight()}px`">
        <div v-if="key++ % 2 === 0" class="space-x-8 flex flex-row mx-auto max-w-6xl">
          <div class="h-full w-full">
            <img :alt="item.title" :src="`${item.image}`" class="w-fit h-fit" height="1024px" width="1024px"/>
          </div>
          <div class="flex flex-col bg-gray-900 w-full text-white p-8 space-y-4">
            <h2 class="text-3xl font-bold">
              {{ item.title }}
            </h2>
            <p>
              {{ item.description }}
            </p>
            <div class="grow"></div>
            <div class="flex items-center mb-4">
              <button class="bg-red-600 text-white px-4 py-2 mr-2 rounded">
                下载资料
              </button>
              <button class="bg-gray-200 text-black px-4 py-2 mr-2 rounded">
                立即询价
              </button>
              <button class="bg-gray-200 text-black px-4 py-2 rounded">
                样品申请
              </button>
            </div>
            <div class="space-x-1 px-2">
              <FontAwesomeIcon :icon="faPhone"/>
              <span> 4007-567-367</span>
            </div>
          </div>
        </div>
        <div v-else class="space-x-8 flex flex-row mx-auto max-w-6xl">
          <div class="flex flex-col bg-gray-900 w-full text-white p-8 space-y-4">
            <h2 class="text-3xl font-bold">
              {{ item.title }}
            </h2>
            <p>
              {{ item.description }}
            </p>
            <div class="grow"></div>
            <div class=" flex items-center mb-4">
              <button class="bg-red-600 text-white px-4 py-2 mr-2 rounded">
                下载资料
              </button>
              <button class="bg-gray-200 text-black px-4 py-2 mr-2 rounded">
                立即询价
              </button>
              <button class="bg-gray-200 text-black px-4 py-2 rounded">
                样品申请
              </button>
            </div>
            <div class="space-x-1 px-2">
              <FontAwesomeIcon :icon="faPhone"/>
              <span> 4007-567-367</span>
            </div>
          </div>
          <div class="h-full w-full">
            <img :alt="item.title" :src="`${item.image}`" height="2000px" width="2000px"/>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-if="windowSize <= 3" height="auto" indicator-position="outside">
      <el-carousel-item v-for="(item, key) in caroselItems" :key="item.title"
                        :style="`height: 600px`">
        <div class="max-w-6xl bg-gray-900 text-white">
          <div class="p-8 space-y-4">
            <h2 class="text-3xl font-bold">
              {{ item.title }}
            </h2>
            <p>
              {{ item.description }}
            </p>
          </div>
          <div class="h-[90%] w-[90%] p-8 mx-auto">
            <img :alt="item.title" :src="`${item.image}`" height="2000px" width="2000px"/>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="flex flex-col space-y-10">
      <el-divider id="summary" class="pb-24"></el-divider>
      <h2 class="text-4xl font-bold">产品概述</h2>
      <div class="flex flex-col space-y-4 lg:flex-row lg:space-x-16 justify-center">
        <div class="mt-auto ">
          <img alt="sensor_structure" class="bg-white p-4 h-fit w-fit" src="/images/sensor_structure.webp">
        </div>
        <div>
          <el-divider></el-divider>
          <div class="space-y-4">
            <p class="font-normal text-gray-700">超声波是一种振动频率超出人类听觉范围上限 (>20kHz) 的声波，可穿过各种介质（空气或流体）。
              这些技术（例如，飞行时间或多普勒）用于测量流量、检测物体、执行浓度分析和测量距离，所有这些操作都能在不进行物理接触的情况下完成。
              超声波传感器可用于检测各种材料，无论其形状、透明度或颜色如何。
            </p>
            <p class="font-normal text-gray-700">数字超声波传感器是一种利用超声波技术实现测距功能的先进设备。它通过发射和接收超声波脉冲来测量目标物体与传感器之间的距离。
              数字超声波传感器具有许多优越的特点，使其在各种应用领域中广泛使用。</p>
            <p class="font-normal text-gray-700">
              数字超声波传感器以其高精度、广泛的响应频率范围、可测量不同工作距离和多样化的外观尺寸，成为许多领域中不可或缺的测距工具。
              无论是工业自动化、机器人技术、无人机应用还是智能家居，数字超声波传感器都发挥着重要的作用，为各种应用场景提供准确、
              可靠的测量解决方案。
            </p>
          </div>
        </div>
      </div>
      <el-divider id="feature" class="pb-28"></el-divider>
      <h2 class="text-4xl font-bold">产品特性</h2>
      <div class="flex flex-col justify-center">
        <div v-for="(item, key) in featureItems" :key="item" class="pl-2 flex flex-col">
          <h3 class="text-2xl font-bold pt-8 pb-4">{{ item.title }}</h3>
          <div v-if="key++ % 2 === 0" class="flex flex-col space-y-4 lg:flex-row lg:space-x-16 justify-center">
            <img :alt="item.title" :src="item.image" class="max-w-[120] h-fit mt-auto">
            <div>
              <el-divider></el-divider>
              <p class="font-normal text-gray-700">{{ item.description }}</p>
            </div>
          </div>
          <div v-else class="flex flex-col space-y-4 lg:flex-row lg:space-x-16 justify-center">
            <div>
              <el-divider></el-divider>
              <p class="font-normal text-gray-700">{{ item.description }}</p>
            </div>
            <img :alt="item.title" :src="item.image" class="max-w-[120] h-fit mt-auto">
          </div>
        </div>
      </div>
      <el-divider id="format" class="pb-28"></el-divider>
      <h2 class="text-4xl font-bold">产品规格</h2>
      <div class="flex flex-col space-y-4 lg:flex-row lg:space-x-16 justify-center">
        <el-table :data="tableData" style="width: 90%;">
          <el-table-column label="产品编号">
            <template #default="{row}">
              <span>{{ row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="可测量精度">
            <template #default="{row}">
              <span>{{ row.accuracy }}</span>
            </template>
          </el-table-column>
          <el-table-column label="响应频率">
            <template #default="{row}">
              <span>{{ row.frequency }}</span>
            </template>
          </el-table-column>
          <el-table-column label="生产运行周期（测距2米）">
            <template #default="{row}">
              <span>{{ row.period_2m }}</span>
            </template>
          </el-table-column>
          <el-table-column label="生产运行周期（测距4米）">
            <template #default="{row}">
              <span>{{ row.period_4m }}</span>
            </template>
          </el-table-column>
          <el-table-column label="外观尺寸（探头尺寸）">
            <template #default="{row}">
              <span>{{ row.size }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-divider id="picture" class="pb-28"></el-divider>
      <h2 class="text-4xl font-bold">产品图片</h2>
      <div class="flex flex-col space-y-4 lg:flex-row lg:space-x-16 justify-center">
        <el-carousel v-if="windowSize > 3" :interval="4000" class="w-[80%] mx-auto" height="250px" type="card">
          <el-carousel-item v-for="item in detailItem" :key="item" class="bg-transparent w-fit h-fit">
            <div class="mx-auto w-fit">
              <img :alt="item" :src="item" class="max-h-[200px] w-fit h-fit" height="200"/>
            </div>
          </el-carousel-item>
        </el-carousel>
        <el-carousel v-else :interval="4000" class="w-[80%] mx-auto" height="220px">
          <el-carousel-item v-for="item in detailItem" :key="item" class="bg-transparent w-fit h-fit">
            <div class="mx-auto w-fit">
              <img :alt="item" :src="item" class="max-h-[200px] w-fit h-fit" height="200"/>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>

  <Footer/>

</template>

<style scoped>

</style>
