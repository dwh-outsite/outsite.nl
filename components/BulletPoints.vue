<template>
  <div class="container mx-auto px-4">
    <div class="md:flex -mx-3">
      <div
        v-for="point in $t('bulletPoints')"
        :key="point.title"
        class="flex-1 rounded-md bg-white mx-3 mb-4 shadow-lg"
      >
        <div class="">
          <div class="w-full h-40 rounded-t overflow-hidden mx-auto">
            <img
              :src="require(`@/assets/images/photos/bullets/bullet_${point.image}.png`)"
              class="object-cover w-full"
            />
          </div>
        </div>
        <div class="w-full p-6 pt-3">
          <div class="uppercase mx-auto font-bold tracking-wider text-2xl text-pink-400 mb-1">
            {{ point.title }}
          </div>
          <div class="text-gray-600 text-lg leading-snug">
            {{ point.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
