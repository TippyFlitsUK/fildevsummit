import '@root/global.scss';

import {
  FILECOIN_DEV_SUMMIT_TORONTO_2025_HERO_CONTENT,
  FILECOIN_DEV_SUMMIT_TORONTO_2025_NAVIGATION_CONTENT,
  FILECOIN_DEV_SUMMIT_TORONTO_2025_PAGE_CONTENT,
  FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT,
  FOOTER_FILECOIN_DEV_SUMMIT_CONTENT,
  FIL_DEV_SUMMIT_TORONTO,
  FIL_DEV_SUMMIT_TORONTO_SPEAKERS
} from '@root/content/fildevsummit/filecoin-dev-toronto-2025';
import { headers } from 'next/headers';
import { makeRequest } from '@root/common/utilities';
import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
export default async function Page(props) {
  const blocks = FILECOIN_DEV_SUMMIT_TORONTO_2025_PAGE_CONTENT;
  const currentHeaders = headers();
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  const hero = FILECOIN_DEV_SUMMIT_TORONTO_2025_HERO_CONTENT;
  const host = currentHeaders.get('host');
  const navContent = FILECOIN_DEV_SUMMIT_TORONTO_2025_NAVIGATION_CONTENT;
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
