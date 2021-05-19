import barbuddies from '~/lang/en_barbuddies.js'
import committees from '~/lang/en_committees.js'
import highlights from '~/lang/en_highlights.js'
import testimonials from '~/lang/en_testimonials.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Join Outsite', url: localePath => localePath('index') + '#join-outsite' },
    { title: 'Reservations', url: () => 'https://outsite.nl/book' },
    { title: 'EatingOUT', url: localePath => localePath('index') + '#eatingout' },
    { title: 'Committees', url: localePath => localePath('committees') },
    { title: 'Testimonials', url: localePath => localePath('testimonials') },
    { title: 'Contact', url: () => '#contact' }
  ],
  hero: {
    title: `Delft's LGBT+ Youth Association`,
    subtitle: `for everyone up to 28 years`,
    leftButton: 'Join Outsite',
    rightButton: 'Watch video'
  },
  description: {
    text: `Outsite is here for everybody 28 and under who identifies as LGBT+. Outsite organises all kinds of
      activities, ranging from drinks every Thursday night and quarterly LGBT+ parties to trips to other cities where
      we go out together. Outsite is a part of <a href="https://www.dwhdelft.nl" class="text-pink-400">DWH</a>, the
      LGBT+ association of Delft. <br>
      <br>
      These activities are all organized by our fantastic committees and members! The best way to become acquainted with
      Outsite is to take part in the introduction groups (which we call KMGs) or through the use of the bar buddy
      system: Where we will make sure there is someone ready to show you around and who could introduce you to others.`,
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Thursday starting at 19:00</strong>'
  },
  bulletPoints: [
    {
      title: 'Drinks',
      description: `We have drinks together every week. Whether it’s a gin and tonic, a beer, or something else,
        it’s always fun!`,
      image: 'drinks'
    },
    {
      title: 'Parties',
      description: `Be there or be square, every so often we transform the bar and organise a big party.`,
      image: 'parties'
    },
    {
      title: 'Activities',
      description: `Throughout the year we organise a lot of activities, such as a karaoke, game
        night, or a cocktail workshop.`,
      image: 'activities'
    },
    {
      title: 'Social Contacts',
      description: `We’re one big family, you get to meet a lot of new people with diverse interests.
        So lots of people to talk to!`,
      image: 'social'
    }
  ],
  activities: {
    title: 'Upcoming activities',
    defaults: {
      bar: {
        banner_title: 'Weekly open bar night',
        banner_subtitle: 'Age limit 28 years',
        title: 'Bar Night',
        date: 'Every Thursday from 7pm'
      },
      eating_out: {
        banner_title: 'Weekly dinner',
        banner_subtitle: 'Members only, registration required',
        title: 'EatingOUT',
        date: 'Every Tuesday at 6.30pm'
      }
    }
  },
  ways_to_join: {
    title: 'Ready to check out <strong>Outsite</strong>?',
    kmg: {
      title: 'Introduction Group',
      description: `Twice a year we organise our introduction groups. These groups are a chance to not only get to know
      the association but also to become close to other LGBT+ youth, all under supervision of two experienced Outsite
      members. During nine Thursday evenings, you will share coming out stories (if you want to), visit queer parties
      together and much more!`,
      action: 'Join the introduction group',
      sign_up: 'Sign up for the introduction group',
      next: `<strong>The next Introduction Group will start in September</strong>, with a bonus pre-Introduction activity in July, so sign up now! The KMG is open
      for young adults between 17 and 28 years.`
    },
    bar_buddy: {
      title: 'Bar Buddies',
      description: `If you are looking to come by on a bar night but you are not yet familiar with the association
      you can make use of our bar buddy system! A bar buddy is someone who will meet up with you before the bar night
      starts and go there with you together. They can introduce you to the people there and tell you anything you want
      to know about Outsite.`,
      sign_up: 'Sign up for a bar buddy',
      action: 'Find a bar buddy',
      meet_up_with: 'Meet up with',
      barbuddies_title: 'Our <strong>Bar Buddies</strong>',
      read_more: 'Read more',
      read_less: 'Collapse'
    },
    membership: {
      title: 'Become an Outsite member',
      description: `
        Outsite is open to everyone up to 28 who identifies as LGBTQ+. A variety of activities are organized by members,
        from weekly drinks on Thursday evenings, to big dance parties every quarter or going out in other cities. Make
        sure to sign up to always get updates about the latest events!
      `,
      button: 'Sign up now',
      advantages: [
        {
          icon: 'factory',
          title: 'Wekelijkse Borrel',
          description: `
            Every Thursday we come together cozy bar night or fun activity.
          `
        },
        {
          icon: 'tablet',
          title: 'Fun WhatsApp Groups',
          description: `
          We have fun WhatsApp groups where you can chat with other members.
          `
        },
        {
          icon: 'travel-walk',
          title: 'Cool Activities',
          description: `
            Our members organise many activities throughout the year.
          `
        },
        {
          icon: 'location-food',
          title: 'Weekly Dinner',
          description: `
            Every Tuesday we enjoy a meal prepared by one of our members.
          `
        },
        {
          icon: 'layers',
          title: 'No Obligations',
          description: `
            No obligations, no hazing, and easy to combine with studies.
          `
        },
        {
          icon: 'target',
          title: 'Personal Development',
          description: `
            Improve you own skills by joining a committee or maybe even the board?
          `
        }
      ]
    }
  },
  video: {
    title: '<strong>Outsite</strong> in 120 seconds'
  },
  owee: {
    title: 'OWee Schedule 2019',
    description: `From the 18th of August till the 22nd of August Delft's student introduction weeek, the OWee, takes
      place. During this week we organise all kinds of activities which will help you get to know Outsite, and see if
      we are a good fit. We have a cool party every night, but also organise a lot of other fun things which you can
      see below. We hope to see you during the OWee!
     `,
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    }
  },
  confidential_counsellor: {
    title: 'Confidential Counsellor',
    description: `
      Outsite has a confidential counsellor who you can approach if you want to talk about any issues you have,
      personal or related to the association and its activities and members.<br>
      <br>
      All contact with the counsellor is strictly confidential and they operate independently from the board of
      Outsite and that of DWH. Only if the situation requires it, and then only with explicit permission from you,
      shall issues be communicated to them.<br>
      <br>
      Don’t be afraid to contact the confidential counsellor about something. The confidential counsellor will take
      every issue seriously, and they're there to help you.
    `
  },
  eating_out: {
    title: 'EatingOUT: Our weekly dinner',
    subtitle: 'Every Tuesday, for just 4 euros',
    button: 'Sign up for the next EatingOUT now',
    notes: ['Members only', 'Sign-up required']
  },
  forms: {
    label: {
      name: 'How should we call you?',
      firstname: 'First Name',
      lastname: 'Last Name',
      initials: 'Initials',
      email: 'Email address',
      language: 'Language',
      languages: {
        dutch: 'Dutch',
        english: 'English',
        no_preference: 'No preference'
      },
      remarks: 'Do you have any further questions?',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City of residence',
      address: 'Address',
      postal_code: 'Postal Code',
      pronouns: 'Pronouns',
      barbuddy: 'Who would you like to meet?',
      membership_fee: 'Membership Fee (see below)',
      iban: 'IBAN number for payment by direct debit',
      availability: `I'm available on`,
      availability_options: {
        thursdays: 'Thursdays',
        saturdays: 'Saturdays',
        both: 'Both Thursdays and Saturdays'
      }
    },
    placeholder: {
      name: 'Name',
      firstname: 'First name',
      lastname: 'Last name',
      initials: 'Initials (for example Q.B.)',
      email: 'Email address',
      remarks: 'Remarks or questions',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City name',
      address: 'Address',
      postal_code: 'Postal code (for example 2611PV)',
      pronouns: 'e.g. she/her, he/him, they/them',
      iban: 'IBAN number (no spaces)'
    },
    buttons: {
      sign_up: 'Sign up',
      loading: 'Loading'
    },
    success: {
      heading: 'The form has been submitted successfully',
      barbuddy: 'The bar buddy you selected will contact you as soon as possible.',
      whatsapp: `We'll add you to the group as soon as possible!`,
      contact_soon: 'We will contact you as soon as possible.',
      membership: 'We will send you an e-mail soon to confirm your membership.'
    },
    validation_message: 'You did not completely or correctly fill out the form. Please check if everything makes sense.'
  },
  footer: {
    whatsapp: {
      description: 'Stay up to date, join the <strong>Outsite Announcements</strong> WhatsApp group',
      button: 'Join now'
    },
    leftTitle: 'Board',
    rightTitle: 'Contact',
    dwhDescription: 'Outsite is a part of',
    board: {
      president: 'President',
      secretary: 'Secretary',
      treasurer: 'Treasurer',
      external_affairs: 'External Affairs'
    }
  },
  barbuddies,
  testimonials: {
    title: 'Testimonials',
    read_more: 'Read more',
    members: testimonials
  },
  committees: {
    title: 'Committees',
    introduction: `
      At Outsite we have many fun and challenging committees. We are of course always looking for new committeemembers,
      so be sure to check out the various committees we have below. Who knows, you might get to organise a fun activity
      this year!
    `,
    list: committees
  },
  highlights: {
    title: 'Our Highlights',
    title_homepage: 'Our <strong>Highlights</strong>',
    more: 'More highlights',
    read_more: 'Read more about this activity',
    list: highlights
  },
  signup: {
    title: 'Membership Signup',
    main_text: `
      Outsite is part of the LGBT+ association DWH. By becoming a member you support us in our actions, such as the
      “kennigsmakingsgroep”, sex education in secondary schools, film nights, bar evenings and other activities at
      DWH.<br />
      <br />
      As a member, you’ll receive the magazine of DWH: “Het Andersblad”, and you can join us at the weekly EatingOUT
      where you can can enjoy nice meal together with other’s from the association.
    `,
    fee_description: `
      The contribution fee of DWH is a minimum of € 48,50 / € 25,00  per year. A higher amount is of course very
      welcome.<br />
      <br />
      In a general assembly meeting, it was decided that the price differentiation for the membership fee is based on
      the ability to pay. In order not to make it too complicated, we use the following rule of thumb: For people aged
      under 25 or from pension age, the reduced fee of at least € 25,00 is applied.
      All other members pay the standard fee of € 48,50.<br />
      <br />
      There are exceptions:
      <ul class="list-disc ml-8">
        <li>People who would get the reduced rate but earn enough to pay for the standard rate, should pay the standard
            rate.</li>
        <li>People who would not get the reduced rate but can’t financially cope with paying the standard rate can
            contact the treasurer.</li>
        <li>When there is a change in the situation that would effect any of the above exceptions, it should be reported
            to the treasurer.</li>
      </ul>
    `,
    fees: {
      full: 'Regular (€ 48,50)',
      discounted: 'Reduced (€ 25,00)'
    }
  }
}
