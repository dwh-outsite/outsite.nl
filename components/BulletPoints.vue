<template>
  <div class="container mx-auto px-4">
    <div class="md:flex -mx-3">
      <div v-for="point in bulletPoints" :key="point.title" class="flex-1 rounded-md bg-white mx-3 mb-4 shadow-lg">
        <div class="">
          <div class="w-full h-40 rounded-t overflow-hidden mx-auto">
            <img src="~/assets/images/photos/eatingout/eatingout.jpg" class="object-cover h-full" />
          </div>
        </div>
        <div class="w-full p-6">
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

<script>
export default {
  data() {
    return {
      bulletPoints: [
        {
          title: 'Borrels',
          description: `Elke week borrelen we met plezier met z’n allen. Of het nou een gin tonic is, een biertje, of
            een frisje, het is altijd gezellig.`
        },
        {
          title: 'Feesten',
          description: `Wees bij of wees vierkant, af en toe transformeren wij de bar en organiseren wij een groots
            feest op ons pand.`
        },
        {
          title: 'Activiteiten',
          description: `Door het jaar heen organiseren we ook wat kleinere activiteiten , of het nou karaoke is,
            spelletjesavond, of een cocktail workshop, er is altijd wel wat leuks`
        },
        {
          title: 'Sociale Contacten',
          description: 'Uiteindelijk zijn wij een grote familie, je leert in korte tijd vele mensen kennen met diverse
            interesses, altijd wel iemand om mee te praten dus!'
        }
      ]
    }
  }
}
</script>
