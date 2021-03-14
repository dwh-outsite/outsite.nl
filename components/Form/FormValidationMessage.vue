<template>
  <div v-if="Object.keys(errors).length > 0" class="text-red-800 bg-red-100 p-4 rounded-lg mb-4">
    {{ $t('forms.validation_message') }}
  </div>
</template>

<script>
export default {
  props: {
    errors: Object
  }
}
</script>
