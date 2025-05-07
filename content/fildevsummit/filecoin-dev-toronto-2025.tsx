import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_TORONTO_2025_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FDS-6: Toronto',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>This event takes place on May 12th to 13th, 2025, at <a href='https://maps.app.goo.gl/S6TNNbjKc5PUTR2J8' target='_blank'>MaRS Center</a>.",
};
//  description:
//    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than //just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>This event takes place on November 6th to 8th, 2024, at the <a href='https://www.google.com/maps?sca_esv=64f7be2b9ddec3ab&biw=1512&bih=767&output=search&q=Gaysorn+Urban+resort+bangkok&source=lnms&entry=mc&ved=1t:200715&ictx=111' target='_blank'>Gaysorn Urban Resort</a>.",
//};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_TORONTO = {
  airtable: {
    endPoint: 'airtable/toronto',
    data: [],
  },
};

export const FIL_DEV_SUMMIT_TORONTO_SPEAKERS = {
  airtable: {
    endPoint: 'airtable/toronto-speakers',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_TORONTO_2025_PAGE_CONTENT = [
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
            price: '$0',
            name: 'FDS-6: Toronto - Virtual Sessions',
            backgroundColor: 'white',
            textColor: 'black',
            description: '</br></br>Register for FDS-6: Toronto virtual sessions',
//          description: 'Register for ETH Brussels FIL Dev Summit.</br></br><span style="color:maroon;"><b>Early Bird Offer!</b></span> - Expires 20th June, 2024',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://lu.ma/ry15g7r5?tk=Bjsx2a',
            },
          },              
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            price: '$20',
            name: 'FDS-6: Toronto - In-Person Sessions',
            backgroundColor: 'white',
            textColor: 'black',
            description: '</br></br>Register for FDS-6: Toronto in-person sessions',
//          description: 'Register for ETH Brussels FIL Dev Summit.</br></br><span style="color:maroon;"><b>Early Bird Offer!</b></span> - Expires 20th June, 2024',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://lu.ma/eyk46hz0',
            },
          },     

//          {
//            id: 'media',
//            type: BlockTypeEnum.TICKET_CARD,
//            backgroundColor: 'white',
//            textColor: 'black',
//            price: '',
//            name: 'Hosted Builders',
//            description:
//              'This program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit.',
//            cta: {
//              type: CallToActionVariantEnum.BORDER,
//              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
//              textColor: 'white',
//              target: '_blank',
//              text: 'Hosted Builder Application',
//              link: 'https://airtable.com/appqAJpfFCFbm8EaS/shrx8tm7L0yj4lAfB',
//            },
//          },   
                 
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
      text: 'Sponsor FDS-6: Toronto',
      link: 'https://airtable.com/appqAJpfFCFbm8EaS/pagDLskiazFVVDitS/form',
    },
    block: [
      {
        id: 'participating-teams-row1',
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
            src: '/media/glif-long.png',
            href: 'https://www.glif.io/en',
          },          
          {
            src: '/media/secured.png',
            href: 'https://secured.finance/',
          },
          {
            src: '/media/ICN.png',
            href: 'https://www.icn.global/',
          },
          {
            src: '/media/Vana.png',
            href: 'https://www.vana.org/',
          },                    
        ],
      },
//      {
//        id: 'participating-teams-row2',
//        type: BlockTypeEnum.LOGO_GRID,
//        logosLarge: [
//          {
//            src: '/media/zetacube.png',
//            href: 'https://www.zetacube.net/',
//          },
//          {
//            src: '/media/glif-long.png',
//            href: 'https://www.glif.io/en',
//          },
//          {
//            src: '/media/lighthouse.png',
//            href: 'https://www.lighthouse.storage/',
//          },          
//          {
//            src: '/media/secured.png',
//            href: 'https://secured.finance/',
//          }
//        ],
//      },
    ],
  },
  {
    id: 'toronto',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
          heading: 'FDS-6: Toronto',
          description: 'May 12-13, 2025',
          smallDesc: 'Organized by FilOz & Filecoin Foundation',
          image: {
            alt: 'toronto-fil-dev-summit',
            src: '/media/Toronto-3.jpg',
          },
        },
      },
    ],
  },
{
  id: 'schedule-toronto-virtual',
  direction: BlockDirectionEnum.COLUMN,
  title: 'Virtual Event Schedule',
  description: 'Sessions available for virtual participation',
  // Add these CTA buttons:
  cta: {
    type: CallToActionVariantEnum.BORDER,
    textColor: 'var(--color-blue)',
    target: '_blank',
    text: 'View the Schedule in a List',
    buttonColor: 'white',
    link: '/FDS-6/list',
  },
  cta2: {
    type: CallToActionVariantEnum.BUTTON,
    textColor: 'white',
    target: '_blank',
    text: 'Submit a Talk for FDS-6: Toronto',
    buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    link: 'https://airtable.com/appqAJpfFCFbm8EaS/shrOwersC8vPKU0fE',
  },
  block: [
    {
      type: BlockTypeEnum.SCHEDULE_TORONTO,
      scheduleData: FIL_DEV_SUMMIT_TORONTO,
      capacityFilter: 'Virtual',
    },
  ],
},
{
  id: 'schedule-toronto',
  direction: BlockDirectionEnum.COLUMN,
  title: 'In-Person Event Schedule', 
  description: 'Sessions taking place at the venue',
  cta: {
    type: CallToActionVariantEnum.BORDER,
    textColor: 'var(--color-blue)',
    target: '_blank',
    text: 'View the Schedule in a List',
    buttonColor: 'white',
    link: '/FDS-6/list',
  },
  cta2: {
    type: CallToActionVariantEnum.BUTTON,
    textColor: 'white',
    target: '_blank',
    text: 'Submit a Talk for FDS-6: Toronto',
    buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    link: 'https://airtable.com/appqAJpfFCFbm8EaS/shrOwersC8vPKU0fE',
  },
  block: [
    {
      type: BlockTypeEnum.SCHEDULE_TORONTO,
      scheduleData: FIL_DEV_SUMMIT_TORONTO,
      capacityFilter: 'In Person',  // Changed from 'Virtual' to 'In-Person'
    },
  ],
},
{
  id: 'speakers-toronto',
  direction: BlockDirectionEnum.COLUMN,
  title: 'Event Speakers',
  description: 'Featured speakers at FDS-6: Toronto',
  block: [
    {
      type: BlockTypeEnum.SPEAKERS_TORONTO,
      speakersData: FIL_DEV_SUMMIT_TORONTO_SPEAKERS,
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
            title: 'What is FDS-6: Toronto 2025?',
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
            collapsedText: `Tickets are available now! Reserve your spot soon as spaces are limited!</br></br>We also offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/appqAJpfFCFbm8EaS/pagDLskiazFVVDitS/form) for more information on what is included in each sponsorship.</br></br>Our Hosted Builders program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit. [Submit your Hosted Builder application](https://airtable.com/appqAJpfFCFbm8EaS/shrx8tm7L0yj4lAfB)</br></br>Finally, add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the venue for FDS-6: Toronto?',
            collapsedText: 'The FDS Toronto event takes place on May 12th to 13th, 2025, at [MaRS Center](https://maps.app.goo.gl/S6TNNbjKc5PUTR2J8).',
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
            collapsedText: `Yes. Check out the registration pang for further details.`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'We offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/appqAJpfFCFbm8EaS/pagDLskiazFVVDitS/form).',
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

export const FILECOIN_DEV_SUMMIT_TORONTO_2025_NAVIGATION_CONTENT = {
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
      href: '#schedule-toronto',
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
      href: 'https://www.fildev.io/FDS-6',
      target: '_blank',
    },
  ],
};

export const FDS_6_LIST_CONTENT = [
  {
    id: 'toronto',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    title: 'FDS-6: Toronto Schedule',
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
        scheduleData: FIL_DEV_SUMMIT_TORONTO,
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
