import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_ETH_BRUSSELS_2024_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FIL Dev Summit - ETH Brussels',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>This event takes place on July 9th to 11th, 2024, at the <a href='https://www.radissonhotels.com/en-us/hotels/radisson-collection-grand-place-brussels'>Radisson, Grand Place</a> Brussels.<br> <br>A room block at the <a href='https://www.radissonhotels.com/en-us/hotels/radisson-collection-grand-place-brussels'>Radisson, Grand Place</a> will be available on a first-come, first-served basis until June 10, 2024 so act fast. Rooms can be reserved for the period from July 7 to July 14, 2024. To book your stay, use the promo code <b>FDS2407</b>.",
};

export const FIL_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_ETH_BRUSSELS = {
  airtable: {
    endPoint: 'airtable/ethbrussels',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_ETH_BRUSSELS_2024_PAGE_CONTENT = [
  {
    id: 'tickets',
    title: 'Register to Attend',
    direction: 'row',
    block: [
      {
        type: BlockTypeEnum.TICKET_CARD,
        backgroundColor: 'white',
        textColor: 'black',
        tickets: [
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            price: '$115',
            name: 'FIL Dev Summit ETH Brussels',
            backgroundColor: 'white',
            textColor: 'black',
            description: 'Register for ETH Brussels FIL Dev Summit.',
//          description: 'Register for ETH Brussels FIL Dev Summit.</br></br><span style="color:maroon;"><b>Early Bird Offer!</b></span> - Expires 20th June, 2024',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://lu.ma/FDS-4',
            },
          },
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            backgroundColor: 'white',
            textColor: 'black',
            price: '',
            name: 'Scholars',
            description:
              'This program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit.',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              target: '_blank',
              text: 'Scholar Application',
              link: 'https://airtable.com/applHziZwJRdE1BK2/pagoVB7atYQxRpgUR/form',
            },
          },          
        ],
      },
    ],
  },
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: BlockDirectionEnum.COLUMN,
    cta: {
      type: CallToActionVariantEnum.BORDER,
      target: '_blank',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      text: 'Sponsor FIL Dev Summit ETH Brussels',
      link: 'https://airtable.com/applHziZwJRdE1BK2/shrHobDUod0KGE1Nv',
    },
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logosLarge: [
          {
            src: '/media/protocollabs.png',
            href: 'https://protocol.ai',
          },
          {
            src: '/media/ff-logo2.png',
            href: 'https://fil.org',
          },
          {
            src: '/media/ramo.png',
            href: 'https://www.web3mine.io',
          },                   
          {
            src: '/media/fluence.png',
            href: 'https://fluence.network'
          },
          {
            src: '/media/secured.png',
            href: 'https://secured.finance'
          },            
          {
            src: '/media/swan.png',
            href: 'https://www.swanchain.io'
          }        
        ],
      },
    ],
  },
  {
    id: 'eth-brussels',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
          heading: 'ETH Brussels',
          description: 'July 9 - 11th, 2024 ',
          smallDesc: 'Organized by Miwa',
          image: {
            alt: 'eth-brussels-fil-dev-summit',
            src: '/media/brussels-full.jpg',
          },
        },
      },
    ],
  },
  {
    id: 'schedule-ethbrussels',
    direction: BlockDirectionEnum.COLUMN,
    title: 'Event Schedule',
    description: 'Please submit a talk if you would like to speak!',
    cta: {
      type: CallToActionVariantEnum.BORDER,
      textColor: 'var(--color-blue)',
      target: '_blank',
      text: 'View the Schedule in a List',
      buttonColor: 'white',
      link: '/FDS-4/list',
    },
    cta2: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Submit a Talk for FDS @ ETH Brussels',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: 'https://airtable.com/applHziZwJRdE1BK2/shrPRcDUUXfGIdYIn',
    },
    

    block: [
      {
        type: BlockTypeEnum.SCHEDULE_ETHBRUSSELS,
        scheduleData: FIL_DEV_SUMMIT_ETH_BRUSSELS,
      },
    ],
  },

  {
    id: 'faqs',
    title: 'FAQs',
    direction: BlockDirectionEnum.TWO_COLUMN,
    block: [
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is FIL Dev Summit @ ETH Brussels 2024?',
            collapsedText:
              'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the goal of FIL Dev Summit?',
            collapsedText:
              'What do we want to come out of FIL Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for the rest of this year. ',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I participate at FIL Dev Summit?',
            collapsedText: `Tickets are available now! Reserve your spot soon as spaces are limited! [Register here](https://lu.ma/FDS-4)</br></br>We also offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/applHziZwJRdE1BK2/shrHobDUod0KGE1Nv) for more information on what is included in each sponsorship and check out the sponsorship deck [here!](https://www.canva.com/design/DAGC4j5Bmg0/yNsu-oRnrhNjyzJTBWQ9gQ/view?utm_content=DAGC4j5Bmg0&utm_campaign=designshare&utm_medium=link&utm_source=editor).</br></br>Our Scholars program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit. [Submit your scholar application](https://airtable.com/applHziZwJRdE1BK2/pagoVB7atYQxRpgUR/form)</br></br>Finally, add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the venue FIL Dev Summit @ Eth Brussels?',
            collapsedText: 'Radisson Collection Hotel, Grand Place Brussels: Rue du Fossé aux Loups 47, 1000 Bruxelles, Belgium. Don’t forget to register to attend. You’ll be able to register at check-in',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
        ],
      },
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Is there a cost to attend?',
            collapsedText: `Yes. Check out the [registration page](https://lu.ma/FDS-4) for further details.`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'We offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/applHziZwJRdE1BK2/shrHobDUod0KGE1Nv) for more information on what is included in each sponsorship and check out the sponsorship deck [here!](https://www.canva.com/design/DAGC4j5Bmg0/yNsu-oRnrhNjyzJTBWQ9gQ/view?utm_content=DAGC4j5Bmg0&utm_campaign=designshare&utm_medium=link&utm_source=editor)',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Will the sessions be recorded?',
            collapsedText:
              'All sessions will be recorded and uploaded to [Youtube channel](https://www.youtube.com/@FilecoinProject) ASAP. We are also encouraging everyone to join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin](https://filecoinproject.slack.com/ssb/redirect) slack to stay up to date with all hallway track conversations.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Code of Conduct',
            collapsedText: ` We will be following the following [Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
        ],
      },
    ],
  },
];

export const FOOTER_FILECOIN_DEV_SUMMIT_CONTENT = {
  links: [
    {
      href: 'https://discuss.ipfs.tech/privacy',
      name: 'Privacy Policy',
    },
    {
      href: 'https://discuss.ipfs.tech/tos',
      name: 'Terms & Conditions',
    },
    {
      href: 'https://ipfs.tech/legal/',
      name: 'DMCA Policy',
    },
  ],
  source: [
    {
      href: 'https://github.com/application-research/fildevsummit',
    },
  ],
};

export const FIL_DEV_SUMMIT_ETH_BRUSSELS_2024_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/fildevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  navItems: [
    {
      name: 'Schedule',
      href: '#schedule-ethbrussels',
    },
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ],
  cta: [
    {
      text: 'Register to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      href: 'https://lu.ma/FDS-4',
      target: '_blank',
    },
  ],
};

export const FDS_4_LIST_CONTENT = [
  {
    id: 'eth-brussels',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    title: 'FDS-4: ETH Brussels Schedule',
    // cta: {
    //   type: CallToActionVariantEnum.BUTTON,
    //   textColor: 'white',
    //   target: '_blank',
    //   text: 'Showcase Your Project at the EXPO',
    //   buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    //   link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
    // },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_LIST_TOGGLE,
        scheduleData: FIL_DEV_SUMMIT_ETH_BRUSSELS,
        // airtable: {
        //   // tableName: 'Asia Talk Track Submissions + Forms',
        //   endPoint: 'airtable/eth',
        //   host: 'internet-apis.onrender.com',
        //   data: [],
        // },
      },
    ],
  },
];
