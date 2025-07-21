'use client';
import { useState, useEffect } from 'react';
import styles from '@components/Speakers.module.scss';

// LinkedIn SVG with explicit size
function LinkedInSVG() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      width="24px" 
      height="24px" 
      style={{ minWidth: '24px', minHeight: '24px' }}
    >
      <path fill="#0077B5" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface Speaker {
  fullName: string;
  spkrTitle: string;
  linkedinUrl: string;
  headshot: string;
}

export default function SPEAKERS_BUENOS_AIRES({ speakersData }: any) {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  
  useEffect(() => {
    if (speakersData?.airtable?.data?.records) {
      const mappedSpeakers = speakersData.airtable.data.records.map(record => {
        const fields = record.fields;
        
        // Extract headshot URL from the attachment object
        let headShotUrl = '/media/placeholder.png';
        const headshot = fields['Speaker Headshot '];
        
        if (Array.isArray(headshot) && headshot.length > 0 && headshot[0].url) {
          headShotUrl = headshot[0].url;
        }
        
        return {
          fullName: fields['Speaker Full Name'] || '',
          spkrTitle: fields['Speaker Job Title'] ? 
                    `${fields['Speaker Job Title']}${fields['Speaker\'s Company'] ? ', ' + fields['Speaker\'s Company'] : ''}` : 
                    fields['Speaker\'s Company'] || '',
          linkedinUrl: fields['Speaker Linkedin'] || '',
          headshot: headShotUrl
        };
      });
      
      setSpeakers(mappedSpeakers);
    }
  }, [speakersData]);
  
  if (speakers.length === 0) return null;

  return (
    <section className={styles.speakersSection}>
      <div className={styles.speakersGrid}>
        {speakers.map((speaker, index) => (
          <div key={index} className={styles.speakerCard}>
            <div className={styles.speakerImageWrapper}>
              <img 
                src={speaker.headshot} 
                alt={speaker.fullName}
                className={styles.speakerImage}
              />
            </div>
            <div className={styles.speakerInfo}>
              <h3 className={styles.speakerName}>{speaker.fullName}</h3>
              <p className={styles.speakerTitle}>{speaker.spkrTitle}</p>
              {speaker.linkedinUrl && (
                <a 
                  href={speaker.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.linkedinLink}
                >
                  <LinkedInSVG />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}