<template>
  <div>
    <header>
      <Header small="true" bg="bg-gray-200">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('highlights.title') }}
        </h1>
      </Header>
    </header>

    <section class="bg-gray-200 pb-12">
      <Highlights :excerpts="false" />
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Highlights from '~/components/Highlights'

export default {
  components: {
    Header,
    Highlights
  }
}
</script>
