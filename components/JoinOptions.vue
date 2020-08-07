<template>
  <div class="container px-4 mx-auto pt-8 pb-12">
    <div class="text-center">
      <h1 v-html="title" class="text-white font-medium text-5xl"></h1>
    </div>
    <div class="md:flex justify-center mt-4">
      <div class="flex-1 mb-8 md:mb-0 md:mr-2 fade-corners rounded-lg text-white">
        <div class="bg-pink-400 rounded-t-lg pb-6 pt-8 px-8">
          <div class="md:flex items-center mb-6">
            <div class="rounded-full w-16 h-16 p-5 bg-white mr-4 text-pink-400 mb-6 md:mb-0">
              <Zondicon icon="compose" class="fill-current" />
            </div>
            <h2 class="text-xl font-bold uppercase tracking-wider">
              {{ $t('ways_to_join.membership.title') }}
            </h2>
          </div>

          <p class="text-lg md:text-xl text-white font-semibold mb-6">
            {{ $t('ways_to_join.membership.description') }}
          </p>

          <a :href="localePath('signup')">
            <button
              class="
                bg-white rounded-full px-6 py-3 text-pink-400 shadow-lg font-semibold flex items-center
                hover:bg-pink-100
              "
            >
              {{ $t('ways_to_join.membership.button') }}
              <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
            </button>
          </a>
        </div>
        <div class="flex flex-wrap -mx-2 pt-6 px-8">
          <div
            v-for="advantage in $t('ways_to_join.membership.advantages')"
            :key="advantage.title"
            class="mb-4 md:w-1/2"
          >
            <div class="h-full bg-white rounded-lg p-3 pr-4 items-center text-gray-900 mx-2 leading-snug shadow-md">
              <div class="flex items-center mb-1">
                <div class="rounded-full w-8 h-8 p-2 bg-pink-400 mr-3 text-white">
                  <Zondicon :icon="advantage.icon" class="fill-current" />
                </div>
                <div class="flex-1 leading-none">
                  <div v-text="advantage.title" class="font-bold text-pink-400 uppercase tracking-wider" />
                </div>
              </div>
              <div class="flex">
                <div class="pl-8 mr-3" />
                <p v-text="advantage.description" class="text-sm md:text-base leading-tight" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 md:ml-2">
        <div class="bg-white rounded-lg shadow p-8 flex-1 flex flex-col justify-between">
          <div class="flex-1">
            <div class="md:flex items-center mb-6">
              <div class="rounded-full w-16 h-16 p-4 bg-pink-400 mr-4 text-white mb-6 md:mb-0">
                <Zondicon :icon="leftIcon" class="fill-current" />
              </div>
              <h2 class="text-xl font-bold text-pink-400 uppercase tracking-wider">
                {{ leftTitle }}
              </h2>
            </div>
            <p class="mb-6 text-lg md:text-xl">
              <slot name="left" />
            </p>
          </div>
          <div>
            <a :href="leftUrl">
              <button class="block button-pink">
                {{ leftButtonText }}
              </button>
            </a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-8 flex-1 flex flex-col justify-between mt-6 md:mt-4">
          <div class="flex-1">
            <div class="md:flex items-center mb-6">
              <div class="rounded-full w-16 h-16 p-5 bg-pink-400 mr-4 text-white mb-6 md:mb-0">
                <Zondicon :icon="rightIcon" class="fill-current" />
              </div>
              <h2 class="text-xl font-bold text-pink-400 uppercase tracking-wider">
                {{ rightTitle }}
              </h2>
            </div>
            <p class="mb-6 text-lg md:text-xl">
              <slot name="right" />
            </p>
          </div>
          <div>
            <a :href="rightUrl">
              <button class="block button-pink">
                {{ rightButtonText }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: [
    'title',
    'leftIcon',
    'leftTitle',
    'leftButtonText',
    'rightIcon',
    'rightTitle',
    'rightButtonText',
    'leftUrl',
    'rightUrl'
  ]
}
</script>

<style scoped>
.fade-corners {
  background: #ffaadf;
  box-shadow: 0 0 20px #ffaadf;
}
</style>
