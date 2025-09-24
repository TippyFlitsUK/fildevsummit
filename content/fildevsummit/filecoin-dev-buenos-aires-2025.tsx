import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FDS-7: Buenos Aires',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>In-person sessions: November 13-15, 2025 in Buenos Aires<br>Virtual sessions: October 7-23, 2025 (3 hours daily, UTC)",
};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_BUENOS_AIRES = {
  airtable: {
    endPoint: 'airtable/buenos-aires',
    data: [],
  },
};

export const FIL_DEV_SUMMIT_BUENOS_AIRES_SPEAKERS = {
  airtable: {
    endPoint: 'airtable/buenos-aires-speakers',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_PAGE_CONTENT = [
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
            price: 'Free',
            name: 'FDS-7: Buenos Aires - Virtual Sessions',
            backgroundColor: 'white',
            textColor: 'black',
            description: '</br></br>Register for FDS-7: Buenos Aires virtual sessions<br>October 7-23, 2025 (3 hours daily, UTC)</br>',
            cta: {
              type: CallToActionVariantEnum.BUTTON,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://events.zoom.us/ev/AqlQpbuJ_rxk_SUKcZ8_yHWV0RIjo4Y2Z4lI5QYpaz_uwNK38ikG~AnKGnxGBk2m1zd1NuYJADtpPFJUoxTwCJ4hHHAenUtJq18UIbsESZfjLAA',
            },
          },              
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            price: '$20',
            name: 'FDS-7: Buenos Aires - In-Person Sessions',
            backgroundColor: 'white',
            textColor: 'black',
            description: '</br></br>Register for FDS-7: Buenos Aires in-person sessions</br></br>',
            cta: {
              type: CallToActionVariantEnum.BUTTON,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://lu.ma/lql41ipv',
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
      type: CallToActionVariantEnum.BUTTON,
      target: '_blank',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      text: 'Sponsor FDS-7: Buenos Aires',
      link: 'mailto:sponsorships@fil.org',
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
        ],
      },
    ],
  },
  {
    id: 'buenos-aires',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
          heading: 'FDS-7: Buenos Aires',
          description: 'November 13-15, 2025',
          smallDesc: 'Organized by FilOz & Filecoin Foundation',
          image: {
            alt: 'buenos-aires-fil-dev-summit',
            src: '/media/ba5.jpg',
          },
        },
      },
    ],
  },
{
  id: 'schedule-buenos-aires-virtual',
  direction: BlockDirectionEnum.COLUMN,
  title: 'Virtual Event Schedule',
  description: 'Sessions available for virtual participation',
  cta: {
    type: CallToActionVariantEnum.BORDER,
    textColor: 'var(--color-blue)',
    target: '_blank',
    text: 'View the Schedule in a List',
    buttonColor: 'white',
    link: '/FDS-7/list',
  },
  cta2: {
    type: CallToActionVariantEnum.BUTTON,
    textColor: 'white',
    target: '_blank',
    text: 'Submit a Talk for FDS-7: Buenos Aires',
    buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    link: 'https://airtable.com/apps2ObNl4B1MzBrr/shrNF079S9pwQO3pz',
  },
  block: [
    {
      type: BlockTypeEnum.SCHEDULE_BUENOS_AIRES,
      scheduleData: FIL_DEV_SUMMIT_BUENOS_AIRES,
      capacityFilter: 'Virtual',
    },
  ],
},
{
  id: 'schedule-buenos-aires',
  direction: BlockDirectionEnum.COLUMN,
  title: 'In-Person Event Schedule',
  description: 'Sessions taking place at the venue',
  cta: {
    type: CallToActionVariantEnum.BORDER,
    textColor: 'var(--color-blue)',
    target: '_blank',
    text: 'View the Schedule in a List',
    buttonColor: 'white',
    link: '/FDS-7/list',
  },
  cta2: {
    type: CallToActionVariantEnum.BUTTON,
    textColor: 'white',
    target: '_blank',
    text: 'Submit a Talk for FDS-7: Buenos Aires',
    buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    link: 'https://airtable.com/apps2ObNl4B1MzBrr/shrNF079S9pwQO3pz',
  },
  block: [
    {
      type: BlockTypeEnum.SCHEDULE_BUENOS_AIRES,
      scheduleData: FIL_DEV_SUMMIT_BUENOS_AIRES,
      capacityFilter: 'In Person',
    },
  ],
},
{
  id: 'speakers-buenos-aires',
  direction: BlockDirectionEnum.COLUMN,
  title: 'Event Speakers',
  description: 'Featured speakers at FDS-7: Buenos Aires',
  block: [
    {
      type: BlockTypeEnum.TEXT,
      bigTitle: 'Coming Soon...',
      style: { textAlign: 'center', padding: '3rem', fontSize: '1.5rem', color: '#999' },
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
            title: 'What is FDS-7: Buenos Aires 2025?',
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
            collapsedText: `In-person registration is now open! [Register here](https://lu.ma/lql41ipv) - spaces are limited!</br></br>Virtual session registration is now open! [Register here](https://events.zoom.us/ev/AqlQpbuJ_rxk_SUKcZ8_yHWV0RIjo4Y2Z4lI5QYpaz_uwNK38ikG~AnKGnxGBk2m1zd1NuYJADtpPFJUoxTwCJ4hHHAenUtJq18UIbsESZfjLAA) - free to attend!</br></br>We also offer multiple levels of sponsorship. For sponsorship opportunities, please email [sponsorships@fil.org](mailto:sponsorships@fil.org).</br></br>Finally, add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the venue for FDS-7: Buenos Aires?',
            collapsedText: 'The FDS Buenos Aires in-person event takes place on November 13-15, 2025. Venue details coming soon.<br><br>Virtual sessions will run from October 7-23, 2025 (3 hours daily, UTC) via Zoom.',
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
            collapsedText: `In-person registration is now open! Check the [registration page](https://lu.ma/lql41ipv) for pricing details.</br></br>Virtual sessions are free! [Register here](https://events.zoom.us/ev/AqlQpbuJ_rxk_SUKcZ8_yHWV0RIjo4Y2Z4lI5QYpaz_uwNK38ikG~AnKGnxGBk2m1zd1NuYJADtpPFJUoxTwCJ4hHHAenUtJq18UIbsESZfjLAA) to attend virtually.`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'We offer multiple levels of sponsorship. For sponsorship opportunities, please email [sponsorships@fil.org](mailto:sponsorships@fil.org).',
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

export const FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_NAVIGATION_CONTENT = {
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
      href: '#schedule-buenos-aires',
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
      href: 'https://lu.ma/lql41ipv',
      target: '_blank',
    },
  ],
};

export const FDS_7_LIST_CONTENT = [
  {
    id: 'buenos-aires',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    title: 'FDS-7: Buenos Aires Schedule',
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_LIST_TOGGLE,
        scheduleData: FIL_DEV_SUMMIT_BUENOS_AIRES,
      },
    ],
  },
];
