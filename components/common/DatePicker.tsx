import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdDateRange } from 'react-icons/md';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date:any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date:any) => {
    setEndDate(date);
  };

  return (
    <div className="container mx-auto my-8">

      <div className="flex items-center gap-3">
        <div className='relative flex items-center'>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="w-full py-1 px-2 border border-gray-300 rounded-md"
            placeholderText='Select Start Date'
          />
          <MdDateRange className='right-2 absolute text-gray-500' />
        </div>
        to
        <div className='relative flex items-center'>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="w-full py-1 px-2 border border-gray-300 rounded-md"
            placeholderText='Select End Date'
          />
          <MdDateRange className='right-2 absolute text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
