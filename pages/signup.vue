<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('signup.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto mb-12 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p v-html="$t('signup.main_text')" class="mt-8 md:mt-0 mb-8" />
      </div>
    </section>

    <section id="form" class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('signup.title') }}
        </h2>
        <div v-if="formStatus === 'finished'">
          <div class="mx-auto container px-4 my-8 flex justify-center">
            <div class="bg-white rounded shadow-lg p-8 md:pr-48 text-lg flex items-center">
              <div class="rounded-full w-16 h-16 p-3 bg-pink-500 text-white">
                <Zondicon icon="checkmark-outline" class="fill-current w-10" />
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-xl">{{ $t('forms.success.heading') }}</h4>
                <span class="text-gray-700">{{ $t('forms.success.membership') }}</span>
              </div>
            </div>
          </div>
        </div>
        <form v-if="formStatus !== 'finished'" @submit="submit" class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12">
          <FormValidationMessage :errors="validationErrors" />
          <p class="form-element">
            <label class="required">{{ $t('forms.label.firstname') }}</label>
            <input v-model="form.firstname" :placeholder="$t('forms.placeholder.firstname')" type="text" required />
            <FormValidation :errors="validationErrors" name="firstname" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.initials') }}</label>
            <input v-model="form.initials" :placeholder="$t('forms.placeholder.initials')" type="text" required />
            <FormValidation :errors="validationErrors" name="initials" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.lastname') }}</label>
            <input v-model="form.lastname" :placeholder="$t('forms.placeholder.lastname')" type="text" required />
            <FormValidation :errors="validationErrors" name="lastname" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.language') }}</label>
            <label class="radio">
              <input v-model="form.language" type="radio" value="dutch" />
              {{ $t('forms.label.languages.dutch') }}
            </label>
            <label class="radio">
              <input v-model="form.language" type="radio" value="english" />
              {{ $t('forms.label.languages.english') }}
            </label>
            <FormValidation :errors="validationErrors" name="language" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.date_of_birth') }}</label>
            <input v-model="form.date_of_birth" :placeholder="$t('forms.placeholder.date_of_birth')" required />
            <FormValidation :errors="validationErrors" name="date_of_birth" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.address') }}</label>
            <input v-model="form.address" :placeholder="$t('forms.placeholder.address')" required />
            <FormValidation :errors="validationErrors" name="address" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.postal_code') }}</label>
            <input v-model="form.postal_code" :placeholder="$t('forms.placeholder.postal_code')" required />
            <FormValidation :errors="validationErrors" name="postal_code" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.residence') }}</label>
            <input v-model="form.residence" :placeholder="$t('forms.placeholder.residence')" required />
            <FormValidation :errors="validationErrors" name="residence" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.email') }}</label>
            <input v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" required />
            <FormValidation :errors="validationErrors" name="email" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.phone_number') }}</label>
            <input v-model="form.phone_number" :placeholder="$t('forms.placeholder.phone_number')" required />
            <FormValidation :errors="validationErrors" name="phone_number" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.pronouns') }}</label>
            <input v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" type="text" />
            <FormValidation :errors="validationErrors" name="pronouns" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.membership_fee') }}</label>
            <label class="radio">
              <input v-model="form.membership_fee" type="radio" value="full" />
              {{ $t('signup.fees.full') }}
            </label>
            <label class="radio">
              <input v-model="form.membership_fee" type="radio" value="discounted" />
              <span v-html="$t('signup.fees.discounted')" />
            </label>
            <FormValidation :errors="validationErrors" name="membership_fee" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.iban') }}</label>
            <input v-model="form.iban" :placeholder="$t('forms.placeholder.iban')" type="text" required />
            <FormValidation :errors="validationErrors" name="iban" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.remarks') }}</label>
            <textarea v-model="form.remarks" :placeholder="$t('forms.placeholder.remarks')"></textarea>
            <FormValidation :errors="validationErrors" name="remarks" />
          </p>
          <div id="recaptcha" />
          <p class="mt-8 md:my-8 text-right">
            <button :disabled="formStatus === 'loading'" type="submit" class="button-pink">
              {{ formStatus === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
            </button>
          </p>
          <p v-html="$t('signup.fee_description')" class="mt-12" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import ReMemberForm from '~/modules/ReMemberForm'
import Header from '~/components/Header'
import FormValidation from '~/components/Form/FormValidation'
import FormValidationMessage from '~/components/Form/FormValidationMessage'

export default {
  components: {
    Header,
    Zondicon,
    FormValidation,
    FormValidationMessage
  },
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        initials: '',
        language: this.$i18n.locale === 'nl' ? 'dutch' : 'english',
        date_of_birth: '',
        address: '',
        postal_code: '',
        residence: '',
        email: '',
        phone_number: '',
        pronouns: '',
        membership_fee: 'full',
        iban: '',
        remarks: ''
      },
      validationErrors: {},
      formStatus: 'start'
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('membership')
        .submit(this.form)
        .then(() => {
          this.formStatus = 'finished'
          window.scrollTo({ top: document.getElementById('form').offsetTop, behavior: 'smooth' })
        })
        .catch(validationError => {
          this.formStatus = 'validation-error'
          this.validationErrors = validationError.errors()
          window.scrollTo({ top: document.getElementById('form').offsetTop, behavior: 'smooth' })
        })
    }
  }
}
</script>
