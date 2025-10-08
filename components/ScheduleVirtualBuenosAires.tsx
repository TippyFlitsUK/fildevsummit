'use client';
import styles from './ScheduleVirtualBuenosAires.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SchedulePopUp } from './SchedulePopUp';
import { classNames, cleanString } from '@root/common/utilities';
import getScheduleGrid from 'system/layout/Grids';

export default function ScheduleVirtualBuenosAires({ calendarData, scheduleId }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  // Determine the number of columns for the schedule based on total event days
  const columnCount = Object.keys(calendarData).length;
  const gridClass = getScheduleGrid(columnCount);

  useEffect(() => {
    function handleHashChange() {
      const currentHash = window.location.hash.substring(1).toLowerCase();

      if (currentHash) {
        const allTracks = Object.values(calendarData).flat();
        const eventData = allTracks.find((track) => {
          const formattedTitle = cleanString((track as any)?.trackDetails?.title).toLowerCase();
          const formattedDate = cleanString((track as any)?.trackDetails?.trackDate).toLowerCase();
          const expectedHash = `${formattedTitle}-${formattedDate}`;
          return expectedHash === currentHash;
        });

        if (eventData) {
          setSelectedEvent({
    		...(eventData as any).trackDetails,
    		records: (eventData as any).records
	   });
          setIsOverlayOpen(true);
          document.getElementById(scheduleId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          return;
        }
      }
    }

    // Call the hash function once initially
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [scheduleId, calendarData]);

  const handleScroll = useCallback((event) => {
    if (isScrolling) return;

    const source = event.target;

    setIsScrolling(true);
    if (tableRef.current && headersRef.current) {
      if (source === tableRef.current) {
        headersRef.current.scrollLeft = source.scrollLeft;
      } else if (source === headersRef.current) {
        tableRef.current.scrollLeft = source.scrollLeft;
      }
    }

    setIsScrolling(false);
  }, []);

  const handleOverlayClick = () => {
    setIsOverlayOpen(false);
  };

  const handleContainerClick = () => {
    setIsOverlayOpen(true);
  };

  const handleEventClick = (e) => {
    setSelectedEvent(e);
    setIsOverlayOpen(true);
    handleOpenPopup(e.title, e.trackDate);
  };

  const handlePopupClose = (e) => {
    setSelectedEvent(null);
    setIsOverlayOpen(false);
    window.history.pushState({}, '', window.location.pathname);
    e.preventDefault();
  };

  const handleOpenPopup = (title, trackDate) => {
    const formattedTitle = cleanString(title).toLowerCase();
    const formattedDate = cleanString(trackDate).toLowerCase();
    window.history.pushState({}, '', `#${formattedTitle}-${formattedDate}`);
  };

  return (
    <div className={styles.container} id={scheduleId}>
      <section className={styles.sectionScrollTooltip}>Click and drag the schedule to navigate</section>

      <div className={styles.scheduleWrapper}>
        <div ref={tableRef} className={classNames(styles.schedule, gridClass)} style={{ overflowX: 'auto' }}>
          {Object.entries(calendarData).map(([dateKey, tracksForDate], index) => {
            // Check if there are any items for the given date
            const hasItems = Array.isArray(tracksForDate) && tracksForDate.length > 0;

            // Get Supernova and Galaxy tracks
            const supernovaTrack = (tracksForDate as any[]).find(t => t.trackDetails?.title === 'Supernova');
            const galaxyTrack = (tracksForDate as any[]).find(t => t.trackDetails?.title === 'Galaxy');

            return (
              <div key={index} className={`${styles.eventStyle} ${hasItems ? '' : styles.hideItems}`}>
                <div
                  className={`${styles.heading} ${hasItems ? '' : styles.hideItems}`}
                  key={index}
                  onScroll={handleScroll}
                  style={{ backgroundColor: hasItems ? 'var(--color-blue)' : 'var(--color-blue-gray' }}
                >
                  <p>{dateKey}</p>
                </div>

                {/* Split tracks into two columns */}
                <div className={styles.twoColumnGrid}>
                  {/* Supernova Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Stage header */}
                    <div className={styles.stageHeading}>
                      <p>Supernova Stage</p>
                    </div>
                    {/* Sessions */}
                    {supernovaTrack?.records?.map((session, sessionIndex) => {
                      const { title, firstName, fullName, roomName, time, capacity } = session ?? '';
                      return (
                        <div className={styles.eventBox} key={sessionIndex} onClick={() => handleEventClick({ ...session, trackDesc: session.desc, trackDate: dateKey, records: [] })} onScroll={handleScroll}>
                          {title && <p className={styles.eventName}>{title}</p>}
                          <div className={styles.eventDetails}>
                            {time && <p className={styles.time}>{time}</p>}
                            {roomName && <p className={styles.location}>{roomName}</p>}
                            {firstName && <p className={styles.speakers}> {firstName}</p>}
                            {fullName && <p className={styles.speakers}> {fullName}</p>}
                            {capacity && <p className={styles.people}>👤 {capacity}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Galaxy Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Stage header */}
                    <div className={styles.stageHeading}>
                      <p>Galaxy Stage</p>
                    </div>
                    {/* Sessions */}
                    {galaxyTrack?.records?.map((session, sessionIndex) => {
                      const { title, firstName, fullName, roomName, time, capacity } = session ?? '';
                      return (
                        <div className={styles.eventBox} key={sessionIndex} onClick={() => handleEventClick({ ...session, trackDesc: session.desc, trackDate: dateKey, records: [] })} onScroll={handleScroll}>
                          {title && <p className={styles.eventName}>{title}</p>}
                          <div className={styles.eventDetails}>
                            {time && <p className={styles.time}>{time}</p>}
                            {roomName && <p className={styles.location}>{roomName}</p>}
                            {firstName && <p className={styles.speakers}> {firstName}</p>}
                            {fullName && <p className={styles.speakers}> {fullName}</p>}
                            {capacity && <p className={styles.people}>👤 {capacity}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <section>
          {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}

          <div className={`${styles.fixedContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
            <SchedulePopUp style={null} selectedEvent={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
          </div>
        </section>
      )}
    </div>
  );
}
