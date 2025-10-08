'use client';
import styles from '@components/Schedule.module.scss';
import { ensureMinimumEntries, formatAirtableMetaData, getFormattedAirtableFields, getSpeakers, sortCalendarDataByDate } from '@root/resolvers/airtable-import';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import ScheduleVirtualBuenosAires from './ScheduleVirtualBuenosAires';
const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';
if (!IS_PRODUCTION) {
  require('dotenv').config();
}
export default function SCHEDULE_BUENOS_AIRES({ scheduleData, capacityFilter = null }: any) {
  // Add capacityFilter with a default value of null
  const [buenosAiresData, setBuenosAiresData] = useState<any[] | null>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  

useEffect(() => {
  if (scheduleData?.airtable) {
    const organizeData = async () => {
      const formattedAirtableData = formatAirtableMetaData(scheduleData?.airtable?.data);
      
      // Filter based on 'IRL/Virtual' field
      let filteredData: any[] = [];
      
      // Add null check before filtering
      if (formattedAirtableData) {
        if (capacityFilter === 'Virtual') {
          // Handle array values - check if the array contains 'Virtual' or 'Pre-Record'
          filteredData = formattedAirtableData.filter(item => {
            if (Array.isArray(item.irlVirtual)) {
              return item.irlVirtual.includes('Virtual') || item.irlVirtual.includes('Pre-Record');
            }
            return false; // Not an array or doesn't contain the values
          });
        } else {
          // Handle array values - check if the array contains 'In Person'
          filteredData = formattedAirtableData.filter(item => {
            if (Array.isArray(item.irlVirtual)) {
              return item.irlVirtual.includes('In Person');
            }
            return false; // Not an array or doesn't contain 'In Person'
          });
        }
      }
      
      // Rest of your existing code
      const fetchedSpeakers = getSpeakers(filteredData);
      setBuenosAiresData(filteredData);
      setSpeakers(fetchedSpeakers.filter((speaker, index, self) => 
        index === self.findIndex(s => s.fullName === speaker.fullName)
      ));
    };
    organizeData();
  }
}, [scheduleData, capacityFilter]);

  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  if (!buenosAiresData) return null;
  
  // For virtual schedule, we need to transform the data differently
  let processedCalendarData;

  if (capacityFilter === 'Virtual') {
    // For virtual schedule: group sessions into Supernova and Galaxy stages per date
    const formattedAirtableData = getFormattedAirtableFields(buenosAiresData);

    // Create a new structure with 2 tracks per date: Supernova and Galaxy
    const virtualCalendarData: any = {};

    Object.entries(formattedAirtableData).forEach(([dateKey, tracksForDate]: [string, any]) => {
      if (Array.isArray(tracksForDate)) {
        virtualCalendarData[dateKey] = [];

        // Collect all sessions from all tracks for this date
        const allSessions: any[] = [];
        tracksForDate.forEach((track: any) => {
          if (track.records && Array.isArray(track.records)) {
            allSessions.push(...track.records);
          }
        });

        // Separate sessions into Supernova (Mainstage) and Galaxy (Side Stage)
        const supernovaSessions = allSessions.filter(session => {
          const categories = session.tracks || [];
          return categories.some((cat: string) => cat.includes('Mainstage'));
        });

        const galaxySessions = allSessions.filter(session => {
          const categories = session.tracks || [];
          return categories.some((cat: string) => cat.includes('Side Stage'));
        });

        // Create Supernova track
        if (supernovaSessions.length > 0) {
          virtualCalendarData[dateKey].push({
            trackDetails: {
              title: 'Supernova',
              roomName: 'Supernova Stage',
              trackDate: dateKey,
              order: 1,
            },
            records: supernovaSessions
          });
        }

        // Create Galaxy track
        if (galaxySessions.length > 0) {
          virtualCalendarData[dateKey].push({
            trackDetails: {
              title: 'Galaxy',
              roomName: 'Galaxy Stage',
              trackDate: dateKey,
              order: 2,
            },
            records: galaxySessions
          });
        }
      }
    });

    processedCalendarData = sortCalendarDataByDate(virtualCalendarData);
  } else {
    // For in-person schedule: keep the original track-based structure
    const formattedAirtableData = getFormattedAirtableFields(buenosAiresData);
    processedCalendarData = sortCalendarDataByDate(formattedAirtableData);
  }

  const startPlaceholder = 'Thu, Oct 7';
  const endPlaceholder = 'Fri, Nov 15';
  const ensuredCalendarData = ensureMinimumEntries(processedCalendarData, startPlaceholder, endPlaceholder);

  // Use custom virtual schedule component for virtual events
  if (capacityFilter === 'Virtual') {
    return (
      <>
        <div style={{ paddingBottom: '2rem', display: 'grid', rowGap: '3rem' }}>
          <ScheduleVirtualBuenosAires calendarData={ensuredCalendarData} scheduleId={'schedule-buenos-aires'} />
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ paddingBottom: '2rem', display: 'grid', rowGap: '3rem' }}>
        <Schedule calendarData={ensuredCalendarData} scheduleId={'schedule-buenos-aires'} />
      </div>
    </>
  );
}