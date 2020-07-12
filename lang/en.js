import barbuddies from '~/lang/en_barbuddies.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Join Outsite', url: localePath => localePath('index') + '#join-outsite' },
    { title: 'Reservations', url: () => '/book' },
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
      we go out together. Outsite is a part of<a href="https://www.dwhdelft.nl" class="text-pink-400">DWH</a>, the LGBT+
      association of Delft. <br>
      <br>
      These activities are all organized by our fantastic committees and members! The best way to become acquainted with
      Outsite is to take part in the introduction groups (which we call KMGs) or through the use of the bar buddy
      system: Where we will make sure there is someone ready to show you around and who could introduce you to others.`,
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Thursday starting at 22:00</strong>'
  },
  activities: {
    title: 'Upcoming activities',
    defaults: {
      bar: {
        banner_title: 'Weekly open bar night',
        banner_subtitle: 'Age limit 28 years',
        title: 'Bar Night',
        date: 'Every Thursday from 10pm'
      },
      eating_out: {
        banner_title: 'Weekly dinner',
        banner_subtitle: 'Members only, registration required',
        title: 'EatingOUT',
        date: 'Every Tuesday at 7pm'
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
      next: `<strong>The next Introduction Group will start in September</strong>, sign up now! The KMG is open
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
      iban: 'IBAN number for payment by direct debit'
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
      iban: 'IBAN number'
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
    }
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
  signup: {
    title: 'Membership Signup',
    main_text: `
      Outsite is a part of the LGBT+-association DWH. By becoming a member you support us in the things
      that we find important, like the introduction groups, education  at secondary schools, the movie night,
      the bar nights and all other activities at DWH.<br />
      <br />
      As a member you receive the magazine from DWH: the Andersblad, and you can join the EatingOUT where you can enjoy
      a cheap and delicious meal.
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
