'use client';
import styles from './ScheduleVirtualBuenosAires.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SchedulePopUp } from './SchedulePopUp';
import { classNames, cleanString } from '@root/common/utilities';
import getScheduleGrid from 'system/layout/Grids';

// Palette of light colors for room distinction
const ROOM_COLOR_PALETTE = [
  '#e3f2fd',  // Light Blue
  '#e8f5e9',  // Light Green
  '#fff3e0',  // Light Orange
  '#f3e5f5',  // Light Purple
  '#fff9c4',  // Light Yellow
  '#e0f2f1',  // Light Cyan
  '#fce4ec',  // Light Pink
  '#f1f8e9',  // Light Lime
];

// Generate consistent color for a single room name
const getColorForRoom = (room: string) => {
  let hash = 0;
  for (let i = 0; i < room.length; i++) {
    hash = room.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % ROOM_COLOR_PALETTE.length;
  return ROOM_COLOR_PALETTE[index];
};

// Generate background (solid or diagonal split for multiple rooms)
const getRoomColor = (roomName: any) => {
  if (!roomName) return '#f5f5f5';

  // Handle array of multiple rooms
  if (Array.isArray(roomName)) {
    if (roomName.length === 0) return '#f5f5f5';
    if (roomName.length === 1) return getColorForRoom(String(roomName[0]));

    // Multiple rooms - create diagonal split (corner to corner)
    const color1 = getColorForRoom(String(roomName[0]));
    const color2 = getColorForRoom(String(roomName[1]));
    return `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`;
  }

  // Single room as string
  return getColorForRoom(String(roomName));
};

export default function ScheduleIRLBuenosAires({ calendarData, scheduleId }) {
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

            // Get IRL Sessions track
            const irlTrack = (tracksForDate as any[]).find(t => t.trackDetails?.title === 'IRL Sessions');

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

                {/* Single column for IRL sessions - no stage headers */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Sessions */}
                  {irlTrack?.records?.map((session, sessionIndex) => {
                    const { title, firstName, fullName, roomName, time, capacity } = session ?? '';
                    return (
                      <div className={styles.eventBox} key={sessionIndex} onClick={() => handleEventClick({ ...session, trackDesc: session.desc, trackDate: dateKey, records: [] })} onScroll={handleScroll} style={{ background: getRoomColor(roomName) }}>
                        {title && <p className={styles.eventName}>{title}</p>}
                        <div className={styles.eventDetails}>
                          {time && <p className={styles.time}>{time}</p>}
                          {roomName && <p className={styles.location}>{Array.isArray(roomName) ? roomName.join(' • ') : roomName}</p>}
                          {firstName && <p className={styles.speakers}> {firstName}</p>}
                          {fullName && <p className={styles.speakers}> {fullName}</p>}
                          {capacity && <p className={styles.people}>👤 {capacity}</p>}
                        </div>
                      </div>
                    );
                  })}
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
