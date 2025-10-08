'use client';
import styles from 'components/ScheduleListByTrack.module.scss';

import { classNames } from '@root/common/utilities';
import { formatAirtableMetaData, getFormattedAirtableFields, sortCalendarDataByDate, sortTracksByOrder } from '@root/resolvers/airtable-import';
import { useEffect, useState } from 'react';
import Loading from './Loading';

import VideoPlayerSVG from './svgs/VideoPlayerSVG';

export default function ScheduleListBuenosAires({ scheduleData }) {
  const [eventData, setEventData] = useState<any[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (scheduleData?.airtable) {
      const fetchData = async () => {
        try {
          const formattedAirtableData = formatAirtableMetaData(scheduleData?.airtable?.data);

          setEventData(formattedAirtableData);

          setLoading(false);
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [scheduleData]);
  if (isLoading != false) return <Loading />;

  if (!eventData) return null;

  const cleanedAirtableData = getFormattedAirtableFields(eventData);
  const formattedAirtableData = sortCalendarDataByDate(cleanedAirtableData);

  if (!formattedAirtableData) return null;

  return (
    <>
      {Object?.entries(formattedAirtableData)?.map(([date, events]: any, dateIndex) => {

        return (
          <div key={date} className={styles.list} style={{ marginTop: dateIndex === 0 ? 0 : '3rem' }}>
            {date && (
              <h2 className={styles.date} style={{ marginBottom: '0.25rem' }}>
                {date}
              </h2>
            )}

            {events &&
              (events as any).map((event, index) => {
                // Skip "Virtual FIL Dev Summit Day" container tracks
                if (event.title?.includes('Virtual FIL Dev Summit Day')) {
                  return null;
                }

                const displayTitle = event.title?.includes('Mainstage')
                  ? 'Supernova Stage'
                  : event.title?.includes('Side Stage')
                  ? 'Galaxy Stage'
                  : event.title;

                return (
                  <div key={index}>
                    <div className={styles.border} style={{ padding: '2rem', display: 'grid', rowGap: '0.75rem' }}>
                      {displayTitle && <h3 className={styles.title}>{displayTitle}</h3>}
                      {event.trackDetails ? (
                        <div className={classNames(styles.row)}>
                          {event.trackDetails.time && <p className={styles.time}>{event.trackDetails.time}</p>}
                          {event.trackDetails.roomName && <p> Room: {event.trackDetails.roomName}</p>}
                          {event.trackDetails.capacity && <p> Capacity: {event.trackDetails.capacity}</p>}
                        </div>
                      ) : null}
                      {event?.records.length > 1 && <h4 style={{ padding: '0.5rem 0rem' }}>Scheduled Talks</h4>}

                      {event.records?.map((record, index) => {
                        return (
                          <div key={index}>
                            {index === 0 && (record?.firstName || record?.desc || record?.fullName) && (
                              <div className={classNames(styles.grid2Cols, styles.scheduleRow)}>
                                <p className={classNames(styles.col20, styles.scheduleRowTitle)}>Time</p>
                                <p className={classNames(styles.col25, styles.scheduleRowTitle)}>Title</p>
                                <p className={classNames(styles.col15, styles.scheduleRowTitle)}>Speakers</p>
                                <p className={classNames(styles.col40, styles.scheduleRowTitle)}>Description</p>
                              </div>
                            )}
                            <div
                              className={classNames(styles.grid2Cols, styles.borderTalksContainer)}
                              style={{ borderBottom: index === event.records.length - 1 ? 'none' : '0.5px solid var(--color-blue-gray)' }}
                            >
                              <p className={classNames(styles.col20, styles.desc, styles.timeCell)}>{record.time || '─'}</p>
                              <p className={classNames(styles.col25, styles.desc)}>{record?.title || '─'}</p>
                              <p className={classNames(styles.col15, styles.desc)}>{record?.firstName || record?.fullName || '─'}</p>
                              <p className={classNames(styles.col40, styles.desc)} style={{ display: 'grid', rowGap: '1rem' }}>
                                {record?.desc && <p>{record.desc}</p>}

                                {record?.videoLink && record?.videoStatus === 'Approved' && (
                                  <span>
                                    <a target="_blank" href={record.videoLink} style={{ textDecoration: 'none' }}>
                                      <button className={styles.videoLinkButton}>
                                        <VideoPlayerSVG className={styles.videoLinkSVG} />
                                        View Video
                                      </button>
                                    </a>
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </>
  );
}
