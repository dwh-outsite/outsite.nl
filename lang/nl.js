import barbuddies from '~/lang/nl_barbuddies.js'
import committees from '~/lang/nl_committees.js'
import testimonials from '~/lang/nl_testimonials.js'
import highlights from '~/lang/nl_highlights.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Join Outsite', url: localePath => localePath('index') + '#join-outsite' },
    { title: 'Reserveren', url: () => '/reserveer' },
    { title: 'EatingOUT', url: localePath => localePath('index') + '#eatingout' },
    { title: 'Commissies', url: localePath => localePath('committees') },
    { title: 'Ervaringen', url: localePath => localePath('testimonials') },
    { title: 'Contact', url: () => '#contact' }
  ],
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
    invitation: 'Kom gerust langs op onze baravond: <br> <strong>Elke donderdag vanaf 19:00</strong>'
  },
  bulletPoints: [
    {
      title: 'Borrels',
      description: `Elke week borrelen we met plezier met z’n allen. Of het nou een gin tonic is, een biertje, of
        een frisje, het is altijd gezellig.`,
      image: 'drinks'
    },
    {
      title: 'Feesten',
      description: `Wees bij of wees vierkant, af en toe transformeren wij de bar en organiseren wij een groots
        feest in ons pand.`,
      image: 'parties'
    },
    {
      title: 'Activiteiten',
      description: `Door het jaar heen organiseren we allerlei activiteiten, zoals een karaoke,
        spelletjesavond, of cocktailworkshop`,
      image: 'activities'
    },
    {
      title: 'Sociale Contacten',
      description: `Uiteindelijk zijn wij een grote familie, je leert in korte tijd vele mensen kennen, altijd wel
        iemand om mee te praten dus!`,
      image: 'social'
    }
  ],
  activities: {
    title: 'Aankomende activiteiten',
    defaults: {
      bar: {
        banner_title: 'Wekelijkse open baravond',
        banner_subtitle: 'Leeftijdsgrens 28 jaar',
        title: 'Baravond',
        date: 'Elke donderdag vanaf 19.00 uur'
      },
      eating_out: {
        banner_title: 'Wekelijkse eettafel',
        banner_subtitle: 'Alleen voor leden, aanmelden verplicht',
        title: 'EatingOUT',
        date: 'Elke dinsdag om 18.30 uur'
      }
    }
  },
  ways_to_join: {
    title: 'Kennismaken met <strong>Outsite</strong>?',
    kmg: {
      title: 'Kennismakingsgroepen (KMG)',
      description: `Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding
        van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Op negen donderdagavonden deel je
        met elkaar je coming-out verhalen (als je dat wil), je gaat langs een gay feest en nog veel meer!`,
      action: 'Doe mee aan de KMG',
      sign_up: 'Aanmelden voor de KMG',
      next: `<strong>De volgende KennisMakingsGroep start in September</strong>, meld je nu aan!
        De KMG is bedoeld voor jongeren van 17 tot 28 jaar.`
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
    },
    membership: {
      title: 'Lid worden bij Outsite',
      description: `
        Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBT+. Er worden allerlei
        activiteiten georganiseerd, van wekelijkse borrels op de donderdagavond, tot grote dansfeesten en uitgaan in
        andere steden. Schrijf je in zodat je altijd op de hoogte bent van alle activiteiten!
      `,
      button: 'Schrijf je nu in',
      advantages: [
        {
          icon: 'factory',
          title: 'Wekelijkse Borrel',
          description: `
            Iedere donderdag komen we samen voor een gezellige borrel of leuke activiteit.
          `
        },
        {
          icon: 'tablet',
          title: 'Gezellige WhatsAppgroepen',
          description: `
            We hebben leuke WhatsAppgroepen waar je gezellig kan chatten.
          `
        },
        {
          icon: 'travel-walk',
          title: 'Leuke activiteiten',
          description: `
            Onze leden organiseren vele leuke activiteiten door het jaar heen.
          `
        },
        {
          icon: 'location-food',
          title: 'Wekelijkse Eettafel',
          description: `
            Iedere dinsdag eten wij gezamenlijk een maaltijd bereid door een lid.
          `
        },
        {
          icon: 'layers',
          title: 'Geen verplichtingen',
          description: `
            Geen verplichtingen, geen ontgroening, en te combineren met studie.
          `
        },
        {
          icon: 'target',
          title: 'Persoonlijke ontwikkeling',
          description: `
            Werk aan jezelf door een commissie te joinen of misschien wel het bestuur?
          `
        }
      ]
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
  eating_out: {
    title: 'EatingOUT: Onze wekelijkse eettafel',
    subtitle: 'Elke dinsdag eten voor maar 4 euro',
    button: 'Meld je aan voor aankomende dinsdag',
    notes: ['Alleen voor leden', 'Aanmelden verplicht']
  },
  forms: {
    label: {
      name: 'Hoe mogen we je noemen?',
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      initials: 'Voorletters',
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
      address: 'Straat en Huisnummer',
      postal_code: 'Postcode',
      pronouns: 'Pronouns',
      barbuddy: 'Met wie wil je afspreken?',
      membership_fee: 'Contributie (zie onderaan deze pagina)',
      iban: 'IBAN nummer voor betaling via automatisch incasso'
    },
    placeholder: {
      name: 'Naam',
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      initials: 'Voorletters (bijvoorbeeld Q.B.)',
      email: 'E-mailadres',
      remarks: 'Opmerkingen of vragen',
      date_of_birth: 'Geboortedatum',
      phone_number: 'Telefoonnummer',
      residence: 'Naam van stad',
      address: 'Straat en Huisnummer',
      postal_code: 'Postcode (bijvoorbeeld 2611PV)',
      pronouns: 'bv. zij/haar, hij/hem, hen/hun',
      iban: 'IBAN nummer'
    },
    buttons: {
      sign_up: 'Aanmelden',
      loading: 'Laden'
    },
    success: {
      heading: 'Het formulier is succesvol verstuurd',
      barbuddy: 'Je barbuddy neemt zo snel mogelijk contact met je op.',
      whatsapp: 'We voegen je zo snel mogelijk toe aan de groep!',
      contact_soon: 'We nemen zo snel mogelijk contact met je op!',
      membership: 'We sturen je binnenkort een bevestiging van je lidmaatschap.'
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
  barbuddies,
  testimonials: {
    title: 'Testimonials',
    read_more: 'Lees meer',
    members: testimonials
  },
  committees: {
    title: 'Commissies',
    introduction: `
      Bij Outsite hebben we veel commissies en die zijn natuurlijk allemaal hartstikke leuk en
      gezellig. Uiteraard kan jij je ook aansluiten bij een commissie. Hieronder vind je een
      mooi overzicht van alle commissies. Kijk maar een beetje rond en zie wat bij je past, wie
      weet organiseer jij wat leuks komend jaar!
    `,
    list: committees
  },
  highlights: {
    title: 'Onze Hoogtepunten',
    title_homepage: 'Onze <strong>Hoogtepunten</strong>',
    more: 'Meer hoogtepunten',
    read_more: 'Lees meer over deze activiteit',
    list: highlights
  },
  signup: {
    title: 'Inschrijven als DWH lid',
    main_text: `
      Outsite is onderdeel van de LHBT+ vereniging DWH. Door lid te worden steun je ons in dingen die we belangrijk
      vinden, zoals de kennismakingsgroep, voorlichting op middelbare scholen, filmavonden, baravonden en alle
      andere activiteiten bij de vereniging.<br />
      <br />
      Als lid ontvang je het blad van DWH: Het Andersblad en mag bij de EatingOUT aanschuiven waar je lekker, gezellig
      en goedkoop kan eten.
    `,
    fee_description: `
      De contributie van DWH bedraagt minimaal € 48,50 / € 25,00 per jaar. Een hogere bijdrage is natuurlijk van harte
      welkom.<br />
      <br />
      In de algemene ledenvergadering is besloten dat DWH prijsdifferentiatie voor de contributie gebruikt, op basis van
      draagkracht. Om het niet al te ingewikkeld te maken, is er een vuistregel opgesteld: Voor mensen met een leeftijd
      tot en met 25 jaar, of vanaf de pensioengerechtigde leeftijd, geldt een gereduceerd tarief van tenminste € 25,00.
      Alle andere leden betalen de normale contributie van € 48,50.<br />
      <br />
      Er zijn uitzonderingen:
      <ul class="list-disc ml-8">
        <li>Mensen die aan de hand van de vuistregel korting op de contributie zouden krijgen, doch genoeg verdienen
            voor het normale tarief, behoren dat normale tarief ook te betalen.</li>
        <li>Mensen die aan de hand van de vuistregel geen korting op de contributie krijgen doch het financieel niet
            kunnen bolwerken om het (normale) tarief te betalen, kunnen zich wenden tot de penningmeester.</li>
        <li>Wanneer een verandering optreedt in de situatie die effect heeft op een van bovenstaande uitzonderingen,
            dient dit aan de penningmeester gemeld te worden.</li>
      </ul>
    `,
    fees: {
      full: 'Normaal (€ 48,50)',
      discounted: `
        Gereduceerd (€ 25,00) <strong>| OWee deal:</strong> voor de rest van dit jaar betaal je slechts 10 euro!
        Vanaf volgend kalenderjaar geldt het normale tarief 
      `
    }
  }
}
