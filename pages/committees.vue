<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('committees.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto pb-4 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p v-html="$t('committees.introduction')" class="mt-8 mb-4 md:mt-12 md:mb-20" />
      </div>
    </section>

    <section class="information bg-pink-200 -mb-10 md:-mb-40 md:pb-8 bg-hero-wiggle">
      <div class="information-content pt-12 md:pt-40 pb-20 md:pb-64 container mx-auto px-4 md:flex">
        <div class="flex space-x-2 md:space-x-0 md:block md:w-1/4 md:-mb-4 overflow-auto whitespace-no-wrap">
          <div
            v-for="committee in committees"
            :key="committee.name"
            @click="setActive(committee)"
            :class="
              committee.active ? 'bg-white' : 'bg-pink-900 bg-opacity-25 text-white cursor-pointer hover:bg-opacity-50'
            "
            class="
              rounded-t-lg md:rounded-t-none md:rounded-l-lg py-6 md:py-3 px-6 md:px-4 md:mb-4 
              font-semibold tracking-wide z-20 relative
            "
          >
            {{ committee.name }}
          </div>
        </div>
        <div
          class="flex-1 bg-white rounded-b-lg md:rounded-b-none md:rounded-r-lg shadow-lg p-10 z-10 relative md:flex"
        >
          <div class="flex-1 md:pr-10 mb-8 md:mb-0">
            <h2 class="text-2xl font-bold text-pink-400 uppercase tracking-wider mb-4">
              {{ activeCommittee.name }}
            </h2>
            <p v-html="activeCommittee.description" class="text-lg md:text-xl" />
          </div>
          <div class="md:w-2/5 flex flex-col justify-between space-y-4">
            <div class="flex-1 rounded-lg shadow overflow-hidden">
              <img src="~/assets/images/photos/eatingout/eatingout.jpg" class="object-cover h-full w-full" />
            </div>
            <div class="flex-1 rounded-lg shadow overflow-hidden">
              <img src="~/assets/images/photos/eatingout/eatingout.jpg" class="object-cover h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      committees: this.$t('committees.list').map((committee, index) => {
        return { ...committee, active: index === 0 }
      })
    }
  },
  computed: {
    activeCommittee() {
      return this.committees.find(committee => committee.active)
    }
  },
  methods: {
    setActive(committee) {
      this.committees.forEach(committee => {
        committee.active = false
      })
      committee.active = true
    }
  }
}
</script>

<style scoped>
.information {
  @apply w-full overflow-hidden;
  transform: skewY(-7deg);
}

.information-content {
  transform: skewY(7deg);
}
</style>
