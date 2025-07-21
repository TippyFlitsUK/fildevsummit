import styles from '@components/CallToActionVariant.module.scss';

import { CallToActionVariantEnum } from '@root/common/types';
import Link from './Link';
import { DisabledButton } from './DisabledButton';

export function CallToActionVariant({ type, cta }) {
  switch (type) {
    case CallToActionVariantEnum.BUTTON:
      return <Button {...cta} />;
    case CallToActionVariantEnum.DISABLED:
      return <DisabledButton {...cta} />;
    case CallToActionVariantEnum.BORDER:
      return (
        <Button
          {...cta}
          textColor={cta?.textColor ?? 'var(--color-black200)'}
          buttonColor={cta?.buttonColor ? cta.buttonColor : 'none'}
          borderColor={cta?.borderColor ? cta.borderColor : '1px solid var(--color-black)'}
        />
      );
    case CallToActionVariantEnum.TEXT:
      return <ButtonText {...cta} />;
    case CallToActionVariantEnum.ICON:
      return (
        <Button
          {...cta}
          textColor={cta?.textColor ?? 'var(--color-black200)'}
          buttonColor={cta?.buttonColor ? cta.buttonColor : 'none'}
          borderColor={cta?.borderColor ? cta.borderColor : '1px solid var(--color-black)'}
        />
      );
    case CallToActionVariantEnum.WHITE:
      return <Button {...cta} buttonColor={'var(--color-white)'} textColor={'var(--color-black200)'} />;
    default:
      return <Button {...cta} />;
  }
}

export function Button({ buttonColor, borderColor, className, variant, target, textColor, text, href, link, title, style }: any) {
  let buttonVariant = styles.button;

  if (variant === CallToActionVariantEnum.BORDER) {
    buttonVariant = styles.borderButton;
  }

  const buttonStyle = {
    background: buttonColor ? buttonColor : 'var(--color-black)',
    color: textColor ? textColor : 'var(--color-white)',
    border: `1px solid ${borderColor}`,
    ...style,
  };

  return (
    <Link className={`${styles.blackLink} ${className}`} href={(href || link) ?? ''} target={target ? target : '_blank'}>
      <button
        style={buttonStyle}
        aria-label={text}
        className={buttonVariant}
        title={title}
      >
        {text}
      </button>
    </Link>
  );
}

export function ButtonText({ cta }) {
  return (
    <Link href={cta.link ?? ''} target={cta?.taget ? cta.taget : '_blank'}>
      <button aria-label={cta.text} className={`${styles.text} ${styles.colorText}`} style={{ border: 'none', background: 'none' }}>
        {cta.text}
      </button>
    </Link>
  );
}

export function ButtonWithLink({ cta }) {
  return (
    <Link className={styles.button} href={cta.link ?? ''} target={cta?.taget ? cta.taget : '_blank'}>
      <button aria-label={cta.text}>{cta.text}</button>
    </Link>
  );
}
