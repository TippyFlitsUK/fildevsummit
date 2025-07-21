import styles from '@components/CallToActionVariant.module.scss';
import Link from './Link';

export function DisabledButton({ buttonColor, borderColor, className, variant, target, textColor, text, href, link }: any) {
  return (
    <Link className={`${styles.blackLink} ${className}`} href="#" target={target ? target : '_blank'}>
      <button
        style={{
          background: buttonColor ? buttonColor : 'var(--color-black)',
          color: textColor ? textColor : 'var(--color-white)', 
          border: `1px solid ${borderColor}`,
          opacity: 0.4,
          cursor: 'not-allowed',
        }}
        aria-label={text}
        className={styles.button}
        title="Coming Soon"
        disabled
      >
        {text}
      </button>
    </Link>
  );
}