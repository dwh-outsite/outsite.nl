<template>
  <div>
    <nuxt />

    <footer id="contact" class="bg-gray-700">
      <JoinWhatsApp
        :button-text="$t('footer.whatsapp.button')"
        button-target="https://chat.whatsapp.com/5yMBCohMukj1oCVR4lPHer"
      >
        <span v-html="$t('footer.whatsapp.description')" />
      </JoinWhatsApp>
      <Footer
        :left-title="$t('footer.leftTitle')"
        :link-title="$t('confidential_counsellor.title')"
        :link-destination="localePath('confidential-counsellor')"
        :right-title="$t('footer.rightTitle')"
        :dwh-description="$t('footer.dwhDescription')"
        contact-email="bestuur@outsite.nl"
        contact-address="Lange Geer 22<br />2611PV Delft"
      >
        <template v-slot:board-members>
          <BoardMember :role="$t('footer.board.president')" name="Niv Bharos" email="voorzitter@outsite.nl" />
          <BoardMember :role="$t('footer.board.secretary')" name="Ivo Brands" email="secretaris@outsite.nl" />
          <BoardMember :role="$t('footer.board.treasurer')" name="Bouke Stoelinga" email="penningmeester@outsite.nl" />
          <BoardMember :role="$t('footer.board.external_affairs')" name="Eva Pelk" email="extern@outsite.nl" />
        </template>
      </Footer>
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import BoardMember from '~/components/BoardMember'
import JoinWhatsApp from '~/components/JoinWhatsApp'

export default {
  components: {
    Footer,
    BoardMember,
    JoinWhatsApp
  },
  head() {
    return {
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Outsite' },
        { hid: 'og:name', property: 'og:name', content: 'Outsite' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Outsite' },
        { hid: 'og:description', property: 'og:description', content: 'LHBT+ jongerenvereniging' },
        { hid: 'description', property: 'description', content: 'LHBT+ jongerenvereniging' },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'Outsite' }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.button-pink {
  @apply bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow;
}

.button-pink:hover {
  @apply bg-pink-200;
}

.button-white {
  @apply bg-white px-4 py-2 rounded text-gray-700 uppercase tracking-wider shadow font-semibold;
}

.button-white:hover {
  @apply bg-gray-200;
}
</style>
