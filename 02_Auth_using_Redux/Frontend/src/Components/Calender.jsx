import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import './Attendance.css'; // Optional custom styles

interface AttendanceValue {
  date: string;
  count: number;
}

const AttendanceTracker: React.FC = () => {
  const getAttendanceData = (): AttendanceValue[] => {
    const data: AttendanceValue[] = [];
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 4); // 4 months ago

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      const count = Math.floor(Math.random() * 4); // Random attendance count (0-3)
      data.push({ date: d.toISOString().split('T')[0], count });
    }

    return data;
  };

  const attendanceData = getAttendanceData();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Attendance Tracker (Last 4 Months)
      </h2>
      <Heatmap
        startDate={new Date(new Date().setMonth(new Date().getMonth() - 4))} // 4 months ago
        endDate={new Date()}
        values={attendanceData}
        classForValue={(value: AttendanceValue | null) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value: AttendanceValue | null) => {
          if (!value) {
            return {};
          }
          return {
            'data-tooltip-id': 'attendance-tooltip',
            'data-tooltip-content': `${value.date}: ${value.count} attendance(s)`,
          };
        }}
        showWeekdayLabels
      />
      <ReactTooltip id="attendance-tooltip" />
    </div>
  );
};

export default AttendanceTracker;
