<template>
  <div>
    <header>
      <Header>
        <h1 class="text-4xl text-white font-normal">
          {{ $t('hero.title') }}
        </h1>
        <h2 class="text-2xl text-white mt-2 font-light">
          {{ $t('hero.subtitle') }}
        </h2>
        <div class="mt-8 flex">
          <a href="#join-outsite">
            <button class="block button-pink">
              {{ $t('hero.leftButton') }}
            </button>
          </a>
          <a href="#video">
            <button class="block ml-4 button-white">
              {{ $t('hero.rightButton') }}
            </button>
          </a>
        </div>
      </Header>
    </header>

    <section class="introduction overflow-x-hidden">
      <div class="container mx-auto pt-12 pb-24 md:flex">
        <div class="flex-1 md:w-1/2 px-4">
          <p v-html="$t('description.text')" class="text-lg md:text-xl leading-relaxed text-gray-800"></p>
          <div
            class="
              rounded shadow-xl bg-pink-400 text-lg md:text-xl text-white my-12 md:mt-10 md:mb-24 p-4 relative
              w-full md:w-auto md:inline-flex items-center 
            "
          >
            <div
              class="
                rounded-full w-16 h-16 p-4 bg-white text-pink-400 shadow md:shadow-none
                absolute -top-8 md:static
              "
            >
              <Zondicon icon="explore" class="fill-current" />
            </div>
            <div v-html="$t('description.invitation')" class="mt-6 md:mt-0 md:ml-4" />
          </div>
        </div>
        <div class="flex-1 md:w-1/2 overflow-hidden md:overflow-visible relative">
          <Panda class="panda relative md:absolute"></Panda>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="information bg-black relative -mb-48">
        <div class="information-content -mt-48">
          <div class="pb-48 pt-48">
            <BulletPoints class="relative x-50 z-20 pt-20 md:pt-40 pb-12 md:pb-24" />
          </div>

          <div class="image-container">
            <img src="~/assets/images/cover.jpg" class="opacity-50" />
          </div>
        </div>
      </div>
    </section>

    <section id="join-outsite" class="bg-pink-200 bg-hero-falling-triangles">
      <JoinOptions
        :title="$t('ways_to_join.title')"
        :left-title="$t('ways_to_join.kmg.title')"
        :left-button-text="$t('ways_to_join.kmg.action')"
        :left-url="localePath('kmg')"
        :right-title="$t('ways_to_join.bar_buddy.title')"
        :right-button-text="$t('ways_to_join.bar_buddy.action')"
        :right-url="localePath('barbuddy')"
        left-icon="user-group"
        right-icon="beverage"
      >
        <template v-slot:left>
          {{ $t('ways_to_join.kmg.description') }}
        </template>
        <template v-slot:right>
          {{ $t('ways_to_join.bar_buddy.description') }}
        </template>
      </JoinOptions>
    </section>

    <section class="relative t2">
      <div class="p-8 container mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu orci quis augue dignissim consequat. Vivamus
        eleifend tristique ligula vitae pellentesque. Proin sodales vestibulum sollicitudin. Cras bibendum lorem quis
        tristique, a efficitur metus aliquam. Nam sagittis quam sed erat ornare, eget sagittis risus fermentum. Proin id
        consequat arcu. Ut at mollis mi. Nunc ex lectus, euismod sed ligula laoreet, consectetur tempor arcu. Aliquam
        dapibus libero, sed porttitor sem ultrices eu. Pellentesque vel sem lacus. Quisque malesuada lacus mattis nisl
        accumsan, sed gravida odio sodales. In fermentum sapien et sem vehicula dignissim. Mauris laoreet odio purus, eu
        varius tellus vulputate vel. Nullam rhoncus interdum rhoncus. Nullam ante mi, luctus eu tincidunt vel, dapibus
        quis purus. Ut eget ante condimentum libero commodo tristique a sed quam.
      </div>
    </section>

    <section id="video" class="mb-24">
      <Video :title="$t('video.title')" url="https://www.youtube-nocookie.com/embed/zWWvERxW5rM" />
    </section>

    <section id="activities" class="relative page-ender pt-48 md:pt-20">
      <Testimonial class="absolute left-0 right-0 -mt-64 md:-mt-40" />
      <Activities :title="$t('activities.title')" />
    </section>

    <section id="eatingout" class="bg-gray-200">
      <EatingOut
        :title="$t('eating_out.title')"
        :subtitle="$t('eating_out.subtitle')"
        :button="$t('eating_out.button')"
        :notes="$t('eating_out.notes')"
      />
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import Panda from '@/assets/images/outsite_panda_cropped.svg'

import Header from '~/components/Header'
import BulletPoints from '~/components/BulletPoints'
import JoinOptions from '~/components/JoinOptions'
import Video from '~/components/Video'
import Testimonial from '~/components/Testimonial'
import Activities from '~/components/Activities'
import EatingOut from '~/components/EatingOut'

export default {
  components: {
    Header,
    Panda,
    BulletPoints,
    JoinOptions,
    Video,
    Testimonial,
    Activities,
    EatingOut,
    Zondicon
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
.information {
  @apply w-full overflow-hidden;
  transform: skewY(-7deg);
  z-index: -1;
}

.information-content {
  transform: skewY(7deg);
}

.t2::before {
  @apply bg-gray-200 absolute w-full;
  height: 150%;
  transform: skewY(-7deg);
  transform-origin: bottom left;
  content: '';
  z-index: -1;
  top: 0px;
}

.page-ender::before {
  @apply bg-gray-200 absolute w-full;
  height: 150%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}

.panda {
  z-index: -2;

  width: 100%;
  height: inherit;

  bottom: 0rem;
  left: 5rem;
}

.introduction {
  margin-bottom: -10rem;
}

.image-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
