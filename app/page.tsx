import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { HOMEPAGE_CONTENT } from '@root/content/homepage-content';
import { NAVIGATION_CONTENT, NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-content';
import DefaultLayout from '@components/DefaultLayout';
import FooterTiny from '@root/components/FooterTiny';
import GutterContainer from '@root/components/GutterContainer';
import NavbarLogoMiddle from '@root/components/NavbarLogoMiddle';
import SectionHomepage from '@root/components/SectionHomepage';
import ArrowCurvedSVG from '@root/components/svgs/ArrowCurvedSVG';
import ArrowCurvedSVG2 from '@root/components/svgs/ArrowBoldSVG';
import ArrowSVG from '@root/components/svgs/ArrowSVG';
import ArrowBoldSVG from '@root/components/svgs/ArrowBoldSVG';

export default async function Page(props) {
  const footerContent = FOOTER_TINY_CONTENT;
  const homepage = HOMEPAGE_CONTENT;
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;

  return (
    <DefaultLayout>
      <ArrowCurvedSVG />
      <ArrowBoldSVG />
      <ArrowSVG />
      <NavbarLogoMiddle navContent={navContent} />
      <GutterContainer>
        <SectionHomepage {...homepage} />
      </GutterContainer>

      <FooterTiny {...footerContent} />
    </DefaultLayout>
  );
}
