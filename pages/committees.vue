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
        <p v-html="$t('ways_to_join.bar_buddy.description')" class="mt-8 mb-4 md:mt-0 md:mb-12" />
      </div>
    </section>

    <section class="bg-pink-200 py-16 pb-24">
      <div class="container mx-auto px-4 flex">
        <div class="w-1/4 -mb-4">
          <div
            v-for="committee in committees"
            :key="committee.name"
            @click="setActive(committee)"
            :class="committee.active ? 'bg-white' : 'bg-pink-900 bg-opacity-25 text-white cursor-pointer'"
            class="rounded-l-lg py-3 px-4 mb-4 font-semibold tracking-wide z-20 relative"
          >
            {{ committee.name }}
          </div>
        </div>
        <div class="flex-1 bg-white rounded-r-lg shadow-lg p-10 z-10 relative flex">
          <div class="flex-1 pr-10">
            <h2 class="text-2xl font-bold text-pink-400 uppercase tracking-wider mb-4">
              {{ activeCommittee.name }}
            </h2>
            <p v-html="activeCommittee.description" class="text-lg md:text-xl" />
          </div>
          <div class="w-2/5 flex flex-col justify-between space-y-4">
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
  methods: {
    setActive(committee) {
      this.committees.forEach(committee => {
        committee.active = false
      })
      committee.active = true
    }
  },
  computed: {
    activeCommittee() {
      return this.committees.find(committee => committee.active)
    }
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
