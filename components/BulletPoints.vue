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
          description: `Elke week borrelen we met veel plezier.
            Kost wat centen, maar dan heb je ook wat. Een biertje bijvoorbeeld.`
        },
        {
          title: 'Feesten',
          description: `Woehoe feestje hier, feestje daar. Wat een gebaar. Ben er bij of wordt vierkant,
            zoals een dubbeltje.`
        },
        {
          title: 'Activiteiten',
          description: `Soms doen we iets wat een activiteit noemen, ook erg leuk hoor. Lekker zingen ofzo. 
            Durf jij het aan?`
        },
        {
          title: 'Sociale Contacten',
          description: 'Ja lekker mensen leren kennen en samen WhatsAppen enzo, voor iedereen super leuk.'
        }
      ]
    }
  }
}
</script>
