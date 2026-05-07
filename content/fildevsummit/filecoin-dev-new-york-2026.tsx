import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_NEW_YORK_2026_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FDS-8: New York',
  description:
    "FIL Dev Summit 8 (FDS-8) brings the Filecoin ecosystem together June 9–11, 2026 in New York City, alongside NY Tech Week and ETHConf. Space is limited, so <a href='mailto:events@fil.org'>apply today</a>. FIL Dev Summit 8 will focus on the <a href='https://fil.org/blog/the-2026-filecoin-network-strategy' target='_blank'>Filecoin Network's 2026 strategy</a>, Product, Client Flows, GTM and Network Revenue, Network Incentives, Cryptoeconomics, Governance, Storage Providers, Protocol & Engineering and Public Goods Funding. Across three days of working sessions, attendees will collaborate side-by-side to surface real takeaways, align on concrete next steps, and drive the continued growth and advancement of the Filecoin network.",
};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FILECOIN_DEV_SUMMIT_NEW_YORK_2026_PAGE_CONTENT = [
  {
    id: 'apply',
    title: 'Apply to Attend',
    direction: BlockDirectionEnum.COLUMN,
    description: 'Space is limited. Email events@fil.org to request access.',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      target: '_blank',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      text: 'Apply Today',
      link: 'mailto:events@fil.org',
    },
    block: [],
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
      text: 'Sponsor FDS-8: New York',
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
    id: 'new-york',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
          heading: 'FDS-8: New York',
          description: 'June 9–11, 2026',
          smallDesc: 'Organized by FilOz & Filecoin Foundation',
          image: {
            alt: 'new-york-fil-dev-summit',
            src: '/media/nyc1.jpg',
          },
        },
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
            title: 'What is FDS-8: New York 2026?',
            collapsedText:
              'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the goal of FIL Dev Summit?',
            collapsedText:
              'What do we want to come out of FIL Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for the rest of this year.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I participate at FIL Dev Summit?',
            collapsedText: `FDS-8 is in-person only and space is limited. Email [events@fil.org](mailto:events@fil.org) to request access.</br></br>We also offer multiple levels of sponsorship. For sponsorship opportunities, please email [sponsorships@fil.org](mailto:sponsorships@fil.org).</br></br>Finally, add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'When and where is FDS-8: New York?',
            collapsedText:
              'FDS-8 takes place June 9–11, 2026 in New York City, alongside NY Tech Week and ETHConf. Venue details will be shared with confirmed attendees.',
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
            collapsedText: `Space is limited and access is by application. Email [events@fil.org](mailto:events@fil.org) to apply.`,
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
              'Recordings, when available, will be uploaded to the [Filecoin Project YouTube channel](https://www.youtube.com/@FilecoinProject). Join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin Slack](https://filecoinproject.slack.com/ssb/redirect) to stay up to date.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Code of Conduct',
            collapsedText: `We will be following the following [Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md).`,
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

export const FILECOIN_DEV_SUMMIT_NEW_YORK_2026_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/fildevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  navItems: [
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ],
  cta: [
    {
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      href: 'mailto:events@fil.org',
      target: '_blank',
    },
  ],
};
