'use client';
import styles from '@components/Collapsable.module.scss';
import { useState } from 'react';
import PlusSVG from './svgs/PlusSVG';
import SCHEDULE_BUENOS_AIRES from './ScheduleBuenosAires';
import { CallToActionVariant } from './CallToActionVariant';

export function CollapsableSchedule({ id, title, backgroundColor, textColor, scheduleData, capacityFilter, description, cta, cta2 }) {
  const [isExpanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!isExpanded);
  }

  return (
    <div id={id ?? ''} style={{ display: 'grid', rowGap: '1rem', marginTop: '-5rem' }}>
      <div
        className={styles.container}
        onClick={toggleExpanded}
        style={{ background: backgroundColor ? backgroundColor : 'var(--color-black200)', color: textColor ? textColor : 'var(--text-white)', display: 'grid', rowGap: '1rem', cursor: 'pointer' }}
      >
        <div className={styles.heading}>
          <p>{title}</p>
          <PlusSVG className={styles.plusIcon} props={{ width: '2rem' }} />
        </div>
      </div>

      {isExpanded && (
        <div style={{ display: 'grid', rowGap: '1.5rem' }}>
          <section style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'start', gap: '2rem' }}>
            <div style={{ display: 'grid', rowGap: '1rem' }}>
              {description && <p>{description}</p>}
            </div>

            {(cta || cta2) && (
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {cta && <CallToActionVariant cta={cta} type={cta.type} />}
                {cta2 && <CallToActionVariant cta={cta2} type={cta2.type} />}
              </div>
            )}
          </section>

          <SCHEDULE_BUENOS_AIRES scheduleData={scheduleData} capacityFilter={capacityFilter} />
        </div>
      )}
    </div>
  );
}
