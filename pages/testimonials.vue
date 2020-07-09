<template>
  <div>
    <header>
      <Header small="true" bg="bg-pink-100">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('testimonials.title') }}
        </h1>
      </Header>
    </header>

    <section class="bg-pink-100">
      <div class="container mx-auto px-4 pb-10 flex flex-wrap justify-center">
        <div
          v-for="(testimonial, index) in $t('testimonials.members')"
          :key="index"
          class="w-1/3 asdfjaslkdfjaslkdfjsldkf"
        >
          <div class="mx-4 bg-white relative rounded-lg bg-hero-falling-triangles py-6 mb-10 shadow-xl">
            <div class="w-48 h-48 rounded-full overflow-hidden mx-auto">
              <img src="~/assets/images/photos/eatingout/eatingout.jpg" class="object-cover h-full" />
            </div>
            <div class="bg-white-gradient-vertical">
              <div class="text-center py-6 text-xl">
                <div v-text="testimonial.author.name" class="uppercase tracking-wide font-bold text-pink-400 mr-1" />
                <div v-text="testimonial.author.description" class="text-gray-500 italic" />
              </div>
              <div class="flex px-6 pb-6 leading-snug">
                <div class="absolute text-mega text-pink-100 -ml-6 -mt-20 pt-2 z-0">“</div>
                <div v-text="testimonial.text" class="text-xl z-20 pt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="container mx-auto px-4 text-xl leading-normal text-gray-800">
      <div
        v-for="testimonial in $t('testimonials.members')"
        :key="testimonial.name"
        class="bg-pink-200 flex rounded-full shadow-xl overflow-hidden mb-20"
      >
        <div class="w-1/3 flex items-center justify-center">
          <div class="bg-white rounded-full ml-10 w-80 h-80 border-8 border-white overflow-hidden">
            <img src="~/assets/images/photos/eatingout/eatingout.jpg" class="object-cover h-full" />
          </div>
        </div>
        <div class="flex-1 bg-pink-100 p-12 pr-32">
          <h2 v-text="testimonial.name" class="text-pink-500 font-bold text-3xl mb-4 uppercase" />
          <p v-html="testimonial.text" />
        </div>
      </div>
    </section>
    <section class="relative page-ender -mb-64 pb-64">hoi</section> -->
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.page-ender::before {
  @apply bg-gray-200 absolute w-full;
  height: 40rem;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  bottom: 0px;
}

.bg-white-gradient-vertical {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
