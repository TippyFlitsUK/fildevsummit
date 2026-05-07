import '@root/global.scss';

import {
  FILECOIN_DEV_SUMMIT_NEW_YORK_2026_HERO_CONTENT,
  FILECOIN_DEV_SUMMIT_NEW_YORK_2026_NAVIGATION_CONTENT,
  FILECOIN_DEV_SUMMIT_NEW_YORK_2026_PAGE_CONTENT,
  FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT,
  FOOTER_FILECOIN_DEV_SUMMIT_CONTENT,
} from '@root/content/fildevsummit/filecoin-dev-new-york-2026';
import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'FDS-8: New York';
  const description =
    'FIL Dev Summit 8 (FDS-8) brings the Filecoin ecosystem together June 9–11, 2026 in New York City, alongside NY Tech Week and ETHConf.';
  const url = 'https://fildev.io';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: 'https://fil.dev/media/nyc1.jpg',
          width: 1200,
          height: 630,
          alt: 'FDS-8: New York',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function Page(props) {
  const blocks = FILECOIN_DEV_SUMMIT_NEW_YORK_2026_PAGE_CONTENT;
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  const hero = FILECOIN_DEV_SUMMIT_NEW_YORK_2026_HERO_CONTENT;
  const navContent = FILECOIN_DEV_SUMMIT_NEW_YORK_2026_NAVIGATION_CONTENT;
  const pageStyle = FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT;

  return (
    <div style={{ background: pageStyle.backgroundColor, color: pageStyle.textColor }}>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingBottom: '4rem' }}>
        <Hero {...hero} />
      </div>

      <SectionEventPage blocks={blocks} pageStyle={pageStyle} />

      <FooterTiny {...footerContent} />
    </div>
  );
}
