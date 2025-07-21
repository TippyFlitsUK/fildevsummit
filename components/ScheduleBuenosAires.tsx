'use client';
import styles from '@components/Schedule.module.scss';
import { ensureMinimumEntries, formatAirtableMetaData, getFormattedAirtableFields, getSpeakers, sortCalendarDataByDate } from '@root/resolvers/airtable-import';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import Speakers from './Speakers';
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
      setSpeakers(fetchedSpeakers);
    };

    organizeData();
  }
}, [scheduleData?.airtable, capacityFilter]);

  const scheduleSettings = {
    dateFilter: 'DISABLED',
    trackFilter: 'ON',
    tagDisplay: 'DISABLED',
    tableMaxHeight: 2700,
    searchBar: 'ON',
    eventDetailPopUp: 'ON',
    daysToggleBar: 'DISABLED',
    talksTable: 'DISABLED',
  };

  return (
    <section className={styles.container}>
      {buenosAiresData && <Schedule calendarData={buenosAiresData} scheduleId="buenos-aires-schedule" />}
      {buenosAiresData && speakers && <Speakers speakers={speakers} />}
    </section>
  );
}