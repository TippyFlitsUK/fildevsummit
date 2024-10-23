import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_BANGKOK_2024_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FDS-5: Bangkok',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>This event takes place on November 6th to 8th, 2024, at the <a href='https://www.google.com/maps?sca_esv=64f7be2b9ddec3ab&biw=1512&bih=767&output=search&q=Gaysorn+Urban+resort+bangkok&source=lnms&entry=mc&ved=1t:200715&ictx=111' target='_blank'>Gaysorn Urban Resort</a>.",
};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_BANGKOK = {
  airtable: {
    endPoint: 'airtable/bangkok',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_BANGKOK_2024_PAGE_CONTENT = [
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
            price: '$25',
            name: 'FDS-5: Bangkok',
            backgroundColor: 'white',
            textColor: 'black',
            description: 'Register for FDS-5: Bangkok',
//          description: 'Register for ETH Brussels FIL Dev Summit.</br></br><span style="color:maroon;"><b>Early Bird Offer!</b></span> - Expires 20th June, 2024',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://lu.ma/vcdjb8pl',
            },
          },
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            backgroundColor: 'white',
            textColor: 'black',
            price: '',
            name: 'Sponsors',
            description:
              'Apoly to sponsor FDS-5: Bangkok',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              target: '_blank',
              text: 'Sponsor Application',
              link: 'https://airtable.com/appKIjmahritzRPpv/pagXT2hdMoid8mtIv/form',
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
      text: 'Sponsor FDS-5: Bangkok',
      link: 'https://airtable.com/appKIjmahritzRPpv/pagXT2hdMoid8mtIv/form',
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
            src: '/media/LWWeb3.png',
            href: 'https://24.labweek.io/24-web3',
          }   
        ],
      },
    ],
  },
  {
    id: 'eth-bangkok',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
          heading: 'FDS-5: Bangkok',
          description: 'November 6-8, 2024',
          smallDesc: 'Organized by FilOz & Filecoin Foundation',
          image: {
            alt: 'bangkok-fil-dev-summit',
            src: '/media/bangkok-full.jpg',
          },
        },
      },
    ],
  },
  {
    id: 'schedule-bangkok',
    direction: BlockDirectionEnum.COLUMN,
    title: 'Event Schedule',
    description: '',
    cta: {
      type: CallToActionVariantEnum.BORDER,
      textColor: 'var(--color-blue)',
      target: '_blank',
      text: 'View the Schedule in a List',
      buttonColor: 'white',
      link: '/FDS-5/list',
    },
 //   cta2: {
 //     type: CallToActionVariantEnum.BUTTON,
 //     textColor: 'white',
 //     target: '_blank',
 //     text: 'Submit a Talk for FDS @ ETH Brussels',
 //     buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
 //     link: 'https://airtable.com/applHziZwJRdE1BK2/shrPRcDUUXfGIdYIn',
 //   },
    

    block: [
      {
        type: BlockTypeEnum.SCHEDULE_BANGKOK,
        scheduleData: FIL_DEV_SUMMIT_BANGKOK,
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
            title: 'What is FDS-5: Bangkok 2024?',
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
            collapsedText: `Tickets are available now! Reserve your spot soon as spaces are limited! [Register here](https://lu.ma/vcdjb8pl)</br></br>We also offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/appKIjmahritzRPpv/pagXT2hdMoid8mtIv/form).</br></br>Our Scholars program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit. <strong>Scholar applications are now closed</strong>.</br></br>Finally, add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the venue for FDS-5: Bangkok?',
            collapsedText: 'Gaysorn Urban Resort, 127 Gaysorn Tower, 19th-20th Floor, Ratchaprasong Road, Lumphini, Pathum Wan, Bangkok 10330, Thailand. Don’t forget to register to attend. You’ll be able to register at check-in',
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
            collapsedText: `Yes. Check out the [registration page](https://lu.ma/vcdjb8pl) for further details.`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'We offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/appKIjmahritzRPpv/pagXT2hdMoid8mtIv/form).',
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
      href: 'https://github.com/filecoin-project/lotus',
    },
  ],
};

export const FILECOIN_DEV_SUMMIT_BANGKOK_2024_NAVIGATION_CONTENT = {
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
      href: '#schedule-bangkok',
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
      href: 'https://lu.ma/vcdjb8pl',
      target: '_blank',
    },
  ],
};

export const FDS_5_LIST_CONTENT = [
  {
    id: 'eth-bangkok',
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
        scheduleData: FIL_DEV_SUMMIT_BANGKOK,
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
