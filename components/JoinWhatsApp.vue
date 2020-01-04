<template>
  <div class="mx-auto container relative">
    <div class="xl:h-28 xl:absolute -top-14 p-4 w-full text-center">
      <form
        @submit="submitForm"
        class="bg-white rounded shadow-xl h-full xl:inline-flex justify-between items-center lg:w-5/6"
      >
        <div class="text-2xl py-4 px-8 flex-1 flex items-center">
          <WhatsAppLogo class="fill-current text-green-400 h-32 md:h-20 xl:h-12 mr-4" />

          <div v-if="state == 'cta'" v-html="$t('footer.whatsapp.description')" />

          <div v-if="state == 'form'" class="flex items-center text-base text-left w-full">
            <p class="w-1/2 mx-2">
              <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                {{ $t('forms.label.name') }}
              </label>
              <input
                v-model="form.name"
                :placeholder="$t('forms.placeholder.name')"
                type="text"
                class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                required
              />
            </p>
            <p class="w-1/2 ml-2">
              <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                {{ $t('forms.label.phone_number') }}
              </label>
              <input
                v-model="form.phoneNumber"
                :placeholder="$t('forms.placeholder.phone_number')"
                type="text"
                class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                required
              />
            </p>
          </div>

          <div v-if="state == 'success'" class="text-left">
            <span class="block leading-tight">{{ $t('forms.success.heading') }}</span>
            <span class="block text-base" v-text="$t('forms.success.whatsapp')" />
          </div>
        </div>
        <button
          v-if="state == 'cta'"
          @click="state = 'form'"
          type="button"
          class="
            bg-green-400 h-full block px-8 text-white text-xl font-bold tracking-wider uppercase
            flex items-center justify-center py-2 rounded-b xl:rounded-b-none xl:rounded-r 
          "
        >
          <div>{{ buttonText }}</div>
        </button>
        <button
          v-if="state == 'form'"
          :disabled="formStatus === 'loading'"
          type="submit"
          class="
            bg-green-400 h-full block px-8 text-white text-xl font-bold tracking-wider uppercase
            flex items-center justify-center py-2 rounded-b xl:rounded-b-none xl:rounded-r 
            disabled:bg-green-300
          "
        >
          {{ formStatus === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
          <Zondicon icon="arrow-thin-right" class="w-4 ml-2 fill-current" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import submitFormToFirebase from '~/modules/firebase-submitter'
import WhatsAppLogo from '@/assets/images/whatsapp_logo.svg'

export default {
  props: ['button-text', 'button-target'],
  components: {
    WhatsAppLogo,
    Zondicon
  },
  data() {
    return {
      state: 'cta',
      formStatus: 'ready',
      form: {
        name: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()

      this.formStatus = 'loading'
      submitFormToFirebase('bestuur@outsite.nl', 'WhatsApp aanmelding', this.form)
        .then(() => {
          this.state = 'success'
        })
        .catch(() => {
          this.state = 'failed'
        })
        .finally(() => {
          this.formStatus = 'ready'
        })
    }
  }
}
</script>
