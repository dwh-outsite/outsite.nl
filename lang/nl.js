import barbuddies from '~/lang/nl_barbuddies.js'

export default {
  hero: {
    title: 'Delftse LHBT+ jongerenvereniging',
    subtitle: `voor iedereen t/m 28 jaar`,
    leftButton: 'Kom naar Outsite',
    rightButton: 'Bekijk video'
  },
  description: {
    text: `Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBT+. Er worden allerlei
      activiteiten georganiseerd door vrijwilligers: van een borrel elke donderdagavond en grote LHBT+ feesten elk
      kwartaal tot gezamenlijk uitgaan in andere steden. Outsite is onderdeel van
      <a href="https://www.dwhdelft.nl" class="text-pink-400">DWH</a>, de LHBT+ vereniging van Delft.<br>
      <br>
      Al deze activiteiten worden mogelijk gemaakt door onze fantastische commissies en leden! De voornaamste manier om
      kennis te maken met de vereniging is door deel te nemen aan de KennisMakingsGroepen (KMG) of door gebruik te maken
      van het bar buddy systeem: Wij zorgen er dan voor dat er iemand klaar staat wanneer jij langskomt.`,
    invitation: 'Kom gerust langs op onze baravond: <br> <strong>Elke donderdag vanaf 22:00</strong>'
  },
  activities: {
    title: 'Aankomende activiteiten',
    defaults: {
      bar: {
        banner_title: 'Wekelijkse open baravond',
        banner_subtitle: 'Leeftijdsgrens 28 jaar',
        title: 'Baravond',
        date: 'Elke donderdag vanaf 22.00 uur'
      },
      eating_out: {
        banner_title: 'Wekelijkse eettafel',
        banner_subtitle: 'Alleen voor leden, aanmelden verplicht',
        title: 'EatingOUT',
        date: 'Elke dinsdag om 19.00 uur'
      }
    }
  },
  ways_to_join: {
    title: 'Kennismaken met <strong>Outsite</strong>?',
    kmg: {
      title: 'Kennismakingsgroepen (KMG)',
      description: `Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding
        van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Op negen donderdagavonden deel je met
        elkaar je coming-out verhalen (als je dat wil), je gaat langs een gay feest en nog veel meer! De KMG is bedoeld 
        voor jongeren van 17 tot 28 jaar.`,
      action: 'Doe mee aan de KMG',
      sign_up: 'Aanmelden voor de KMG',
      next: `<strong>De KennisMakingsGroep van februari gaat binnenkort van start</strong>, meld je nu aan!`
    },
    bar_buddy: {
      title: `Barbuddy's`,
      description: `Wil jij een keertje langskomen op een baravond maar ben je nog niet bekend met de vereniging? Meld
        je dan aan voor een barbuddy! Een barbuddy is iemand die van tevoren met je afspreekt zodat je samen naar de
        baravond kunt gaan. Die kan je voorstellen aan de andere bezoekers en alles vertellen wat je maar wilt weten
        over Outsite.`,
      action: 'Vind een barbuddy',
      sign_up: 'Aanmelden voor een barbuddy',
      meet_up_with: 'Afspreken met',
      barbuddies_title: 'Onze <strong>Barbuddies</strong>',
      read_more: 'Lees meer',
      read_less: 'Inklappen'
    }
  },
  video: {
    title: '<strong>Outsite</strong> in 120 seconden'
  },
  owee: {
    title: 'OWee Programma 2019',
    description: `Van 18 t/m 22 augustus vindt de Delftse introductieweek, de OWee, plaats. Tijdens deze week
      organiseren wij allerlei activiteiten om te laten zien wat voor vereniging wij zijn. Hierdoor kun jij erachter
      komen of Outsite de vereniging is die bij je past. We hebben sowieso elke avond een leuk feestje, maar doen ook
      andere leuke dingen die je hieronder in het schema kunt zien! We hopen je te zien tijdens de OWee!`,
    days: {
      monday: 'Maandag',
      tuesday: 'Dinsdag',
      wednesday: 'Woensdag',
      thursday: 'Donderdag',
      friday: 'Vrijdag',
      saturday: 'Zaterdag',
      sunday: 'Zondag'
    }
  },
  confidential_counsellor: {
    title: 'Vertrouwenspersoon',
    description: `
    Outsite heeft een vertrouwenspersoon met wie je contact kunt opnemen om over vereniging-gerelateerde en
    persoonlijke problemen te praten indien je daar behoefte aan hebt.<br>
    <br>
    Alles wat besproken wordt met de vertrouwenspersoon is strikt vertrouwelijk. De vertrouwenspersoon opereert volledig
    onafhankelijk van het Outsite en DWH bestuur. Alleen als de situatie het noodzaakt, en dan alleen met expliciete
    persoonlijke toestemming, worden kwesties aan hen voorgelegd.<br>
    <br>
    Wees niet bang om contact op te nemen. De vertrouwenspersoon zal elke kwestie serieus behandelen en is er om je te
    helpen.
    `
  },
  forms: {
    label: {
      name: 'Hoe mogen we je noemen?',
      email: 'E-mailadres',
      language: 'Taal',
      languages: {
        dutch: 'Nederlands',
        english: 'Engels',
        no_preference: 'Geen voorkeur'
      },
      remarks: 'Heb je verder nog vragen?',
      date_of_birth: 'Geboortedatum',
      phone_number: 'Telefoonnummer',
      residence: 'Woonplaats',
      pronouns: 'Pronouns',
      barbuddy: 'Met wie wil je afspreken?'
    },
    placeholder: {
      name: 'Naam',
      email: 'E-mailadres',
      remarks: 'Opmerkingen of vragen',
      date_of_birth: 'Geboortedatum',
      phone_number: 'Telefoonnummer',
      residence: 'Naam van stad',
      pronouns: 'bv. zij/haar, hij/hem, hen/hun'
    },
    buttons: {
      sign_up: 'Aanmelden',
      loading: 'Laden'
    },
    success: {
      heading: 'Het formulier is succesvol verstuurd',
      barbuddy: 'Je barbuddy neemt zo snel mogelijk contact met je op.',
      whatsapp: 'We voegen je zo snel mogelijk toe aan de groep!'
    }
  },
  footer: {
    whatsapp: {
      description: 'Blijf op de hoogte, join de <strong>Outsite Announcements</strong> WhatsApp groep',
      button: 'Deelnemen'
    },
    leftTitle: 'Bestuur',
    rightTitle: 'Contact',
    dwhDescription: 'Outsite is onderdeel van',
    board: {
      president: 'Voorzitter',
      secretary: 'Secretaris',
      treasurer: 'Penningmeester',
      external_affairs: 'Extern'
    }
  },
  barbuddies
}
