<template>
  <div>
    <header>
      <Header>
        <h1 class="text-4xl text-white font-normal">
          {{ $t('hero.title') }}
        </h1>
        <h2 class="text-2xl text-white mt-2 w-1/2 font-light">
          {{ $t('hero.subtitle') }}
        </h2>
        <div class="mt-8 flex">
          <button class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow">
            Join Outsite
          </button>
          <button
            class="block ml-4 bg-white px-4 py-2 rounded text-gray-700 uppercase tracking-wider shadow font-semibold"
          >
            Watch video
          </button>
        </div>
      </Header>
    </header>

    <section>
      <form class="w-2/3 mx-auto my-12" name="kmg" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <p class="form-element">
          <label class="required">Naam</label>
          <input type="text" name="name" placeholder="Naam" required />
        </p>
        <p class="form-element">
          <label class="required">E-mailadres</label>
          <input type="email" name="email" placeholder="E-mailadres" required />
        </p>
        <p class="form-element">
          <label class="required">Geboortedatum</label>
          <input type="text" name="dateofbirth" placeholder="Geboortedatum" required />
        </p>
        <p class="form-element">
          <label>Telefoonnummer</label>
          <input type="text" name="phonenumber" placeholder="Telefoonnummer" />
        </p>
        <p class="form-element">
          <label>Woonplaats</label>
          <input type="text" name="city" placeholder="Woonplaats" />
        </p>
        <p class="form-element">
          <label>Heb je verder nog vragen?</label>
          <textarea name="remarks" placeholder="Opmerkingen of vragen"></textarea>
        </p>
        <p class="my-8 text-right">
          <button type="submit" class="button-pink">
            Aanmelden
          </button>
        </p>
      </form>
    </section>

    <footer class="bg-gray-700">
      <JoinWhatsApp />
      <Footer
        left-title="Bestuur"
        link-title="Vertrouwenspersoon"
        link-destination="#"
        right-title="Contact"
        contact-email="bestuur@outsite.nl"
        contact-address="Lange Geer 22<br />2611PV Delft"
        dwh-description="Outsite is onderdeel van"
      >
        <template v-slot:board-members>
          <BoardMember name="Casper Boone" role="Voorzitter" email="voorzitter@outsite.nl" />
          <BoardMember name="Daan Verrer" role="Secretaris" email="secretaris@outsite.nl" />
          <BoardMember name="Joël Abrahams" role="Penningmeester" email="penningmeester@outsite.nl" />
        </template>
      </Footer>
    </footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BoardMember from '~/components/BoardMember'
import JoinWhatsApp from '~/components/JoinWhatsApp'

export default {
  components: {
    Header,
    Footer,
    BoardMember,
    JoinWhatsApp
  }
}
</script>

<style>
.information {
  @apply relative;
}

.information::before {
  @apply bg-gray-200 absolute w-full;
  height: 250%;
  transform: skewY(-13deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
