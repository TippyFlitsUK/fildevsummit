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

          // Filter for IRL (In Person) sessions only
          const irlData = formattedAirtableData.filter(item => {
            if (Array.isArray(item.irlVirtual)) {
              return item.irlVirtual.includes('In Person');
            }
            return false;
          });

          setEventData(irlData);

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

  // Flatten sessions - don't group by tracks, just get individual sessions
  const cleanedAirtableData = getFormattedAirtableFields(eventData, true);

  // Extract all individual sessions and organize by date only
  const flattenedSessions: any = {};

  Object.entries(cleanedAirtableData).forEach(([dateKey, tracksForDate]: [string, any]) => {
    if (Array.isArray(tracksForDate)) {
      flattenedSessions[dateKey] = [];

      // Collect all sessions from all tracks for this date
      tracksForDate.forEach((track: any) => {
        if (track.records && Array.isArray(track.records)) {
          flattenedSessions[dateKey].push(...track.records);
        }
      });
    }
  });

  const formattedAirtableData = sortCalendarDataByDate(flattenedSessions);

  if (!formattedAirtableData) return null;

  return (
    <>
      {Object?.entries(formattedAirtableData)?.map(([date, sessions]: any, dateIndex) => {
        // sessions is now a flat array of individual sessions, not tracks
        if (!sessions || sessions.length === 0) return null;

        return (
          <div key={date} className={styles.list} style={{ marginTop: dateIndex === 0 ? 0 : '3rem' }}>
            {date && (
              <h2 className={styles.date} style={{ marginBottom: '0.25rem' }}>
                {date}
              </h2>
            )}

            <div className={styles.border} style={{ padding: '2rem', display: 'grid', rowGap: '0.75rem' }}>
              {/* Header row */}
              <div className={classNames(styles.grid2Cols, styles.scheduleRow)}>
                <p className={classNames(styles.col20, styles.scheduleRowTitle)}>Time</p>
                <p className={classNames(styles.col25, styles.scheduleRowTitle)}>Title</p>
                <p className={classNames(styles.col15, styles.scheduleRowTitle)}>Speakers</p>
                <p className={classNames(styles.col40, styles.scheduleRowTitle)}>Description</p>
              </div>

              {/* Individual session rows */}
              {sessions.map((session, index) => {
                return (
                  <div key={index}>
                    <div
                      className={classNames(styles.grid2Cols, styles.borderTalksContainer)}
                      style={{ borderBottom: index === sessions.length - 1 ? 'none' : '0.5px solid var(--color-blue-gray)' }}
                    >
                      <p className={classNames(styles.col20, styles.desc, styles.timeCell)}>{session.time || '─'}</p>
                      <p className={classNames(styles.col25, styles.desc)}>{session?.title || '─'}</p>
                      <p className={classNames(styles.col15, styles.desc)}>{session?.firstName || session?.fullName || '─'}</p>
                      <p className={classNames(styles.col40, styles.desc)} style={{ display: 'grid', rowGap: '1rem' }}>
                        {session?.desc && <p>{session.desc}</p>}

                        {session?.videoLink && session?.videoStatus === 'Approved' && (
                          <span>
                            <a target="_blank" href={session.videoLink} style={{ textDecoration: 'none' }}>
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

            {/* COMMENTED OUT: Virtual event display logic
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
            */}
          </div>
        );
      })}
    </>
  );
}
