<template>
  <div id="header" :class="[small ? 'header-small' : '', 'relative overflow-hidden bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center">
        <a :href="localePath('index')">
          <OutsiteLogo class="h-16" />
        </a>
        <div v-show="showMenu" class="md:hidden absolute top-16 bg-white w-full -ml-4 p-4 text-xl font-semibold">
          <a v-for="item in menu" :key="item.url" :href="item.url" class="block no-underline mr-4 my-2">
            {{ item.title }}
          </a>
          <a href="https://dwhdelft.nl" class="no-underline mr-4 my-2 flex items-center">
            <Zondicon icon="link" class="h-5 inline mr-2" />
            <DWHLogo class="inline h-8 fill-current" />
          </a>
        </div>
        <div class="hidden md:block text-xl font-semibold text-white">
          <a v-for="item in menu" :key="item.url" :href="item.url" class="no-underline mr-4 my-2">
            {{ item.title }}
          </a>
        </div>
        <div class="flex items-center">
          <div
            class="
              rounded-full w-7 h-7 bg-white mr-3 md:mr-4 border-2 border-white
              flex items-center justify-center 
              overflow-hidden relative 
            "
          >
            <a v-if="$i18n.locale == 'nl'" :href="switchLocalePath('en')" class="block h-6 w-8 absolute">
              <GBFlag />
            </a>
            <a v-if="$i18n.locale == 'en'" :href="switchLocalePath('nl')" class="block h-6 w-8 absolute">
              <NLFlag />
            </a>
          </div>
          <a href="https://dwhdelft.nl" class="hidden md:block text-white text-xl font-semibold no-underline mr-4">
            <DWHLogo class="h-8 ml-2 fill-current" />
          </a>
          <div
            @click="showMenu = !showMenu"
            class="
              rounded-full w-7 h-7 p-1 bg-white mr-1 md:mr-4 border-2 border-white
              flex items-center justify-center md:hidden
              overflow-hidden relative
            "
          >
            <Zondicon v-show="!showMenu" icon="menu" class="fill-current w-full" />
            <Zondicon v-show="showMenu" icon="close" class="fill-current w-full" />
          </div>
        </div>
      </div>
    </nav>
    <!-- <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center">
        <div class="hidden md:block">
          <a :href="localePath('index')" class="text-white text-xl font-semibold no-underline mr-4">
            Home
          </a>
          <a :href="localePath('index') + '#join-outsite'" class="text-white text-xl font-semibold no-underline mr-4">
            Join Outsite
          </a>
          <a :href="localePath('index') + '#eatingout'" class="text-white text-xl font-semibold no-underline mr-4">
            EatingOUT
          </a>
          <a href="#contact" class="text-white text-xl font-semibold no-underline mr-4">
            Contact
          </a>
        </div>
       
    </nav> -->
    <div class="video-container">
      <video id="headervid" preload="metadata" muted loop class="opacity-50">
        <source src="/outsite_web_bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div :class="bg ? bg : 'bg-white'" class="hero"></div>
    <div class="relative flex items-center h-full">
      <div class="container px-4 mx-auto my-40">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import OutsiteLogo from '@/assets/images/outsite_logo.svg'
import DWHLogo from '@/assets/images/dwh_logo.svg'
import NLFlag from '@/assets/images/flags/nl.svg'
import GBFlag from '@/assets/images/flags/gb.svg'

export default {
  components: {
    Zondicon,
    OutsiteLogo,
    DWHLogo,
    NLFlag,
    GBFlag
  },
  props: ['small', 'bg'],
  data() {
    return {
      showMenu: false,
      menu: this.$t('menu').map(item => {
        return { title: item.title, url: item.url(this.localePath) }
      })
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      document.getElementById('headervid').play()
    })
  }
}
</script>

<style>
@screen md {
  #header {
    height: calc(190px * 4);
  }

  #header.header-small {
    height: calc(120px * 4);
  }
}

@media (min-width: 1900px) {
  #header {
    height: calc(240px * 4);
  }

  #header.header-small {
    height: calc(120px * 4);
  }
}

.hero {
  @apply absolute w-full;
  transform: skewY(-7deg);
  transform-origin: 0;
  height: 100rem;
  bottom: -100rem;
}

.video-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  max-width: none;

  width: auto;
  height: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
