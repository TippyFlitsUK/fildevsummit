import '@root/global.scss';

import {
  FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_HERO_CONTENT,
  FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_NAVIGATION_CONTENT,
  FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_PAGE_CONTENT,
  FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT,
  FOOTER_FILECOIN_DEV_SUMMIT_CONTENT,
  FIL_DEV_SUMMIT_BUENOS_AIRES,
  FIL_DEV_SUMMIT_BUENOS_AIRES_SPEAKERS
} from '@root/content/fildevsummit/filecoin-dev-buenos-aires-2025';
import { headers } from 'next/headers';
import { makeRequest } from '@root/common/utilities';
import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'FDS-7: Buenos Aires';
  const description =
    'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).';
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
          url: 'https://fil.dev/media/ba5.jpg',
          width: 1200,
          height: 630,
          alt: 'FDS-7: Buenos Aires',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function Page(props) {
  const blocks = FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_PAGE_CONTENT;
  const currentHeaders = headers();
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  const hero = FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_HERO_CONTENT;
  const host = currentHeaders.get('host');
  const navContent = FILECOIN_DEV_SUMMIT_BUENOS_AIRES_2025_NAVIGATION_CONTENT;
  const pageStyle = FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT;

  // Fetch schedule data (your existing code)
const promises = blocks?.flatMap((contentItem) =>
  contentItem?.block?.map(async (blockItem) => {
    // Handle schedule data (existing code)
    if ('scheduleData' in blockItem && blockItem.scheduleData.airtable) {
      try {
        const airtableEndpoint = blockItem.scheduleData.airtable.endPoint;
        const data = await makeRequest({ endpoint: airtableEndpoint, host });
        blockItem.scheduleData.airtable.data = data;
      } catch (error) {
        console.error('Error fetching tableData for blockItem:', blockItem, error);
      }
    }
    
    // Handle speaker data (new code)
    if ('speakersData' in blockItem && blockItem.speakersData.airtable) {
      try {
        const airtableEndpoint = blockItem.speakersData.airtable.endPoint;
        const data = await makeRequest({ endpoint: airtableEndpoint, host });
        blockItem.speakersData.airtable.data = data;
      } catch (error) {
        console.error('Error fetching speakerData for blockItem:', blockItem, error);
      }
    }
  })
);

  await Promise.all(promises);

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