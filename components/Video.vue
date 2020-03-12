<template>
  <div class="container px-4 mx-auto pt-8 pb-16">
    <h2 v-html="title" class="text-center text-pink-500 font-medium text-5xl mb-4"></h2>
    <div class="mx-auto bg-black rounded shadow-xl md:w-2/3">
      <div class="embed-responsive aspect-ratio-16/9">
        <iframe
          :src="url"
          class="embed-responsive-item rounded"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'url']
}
</script>
