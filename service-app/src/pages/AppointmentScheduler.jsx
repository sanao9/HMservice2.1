import React, { useState } from 'react';

const AppointmentScheduler = ({ availableTimes, checkAvailability, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkAvailability(selectedDate, selectedTime)) {
      onSubmit({ date: selectedDate, time: selectedTime });
      alert('Appointment scheduled successfully!');
    } else {
      alert('This time slot is already booked. Please choose another.');
    }
  };

  return (
    <div>
      <h3>Schedule an Appointment</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={selectedDate} onChange={handleDateChange} required />
        </label>
        <label>
          Time:
          <select value={selectedTime} onChange={handleTimeChange} required>
            <option value="">Select a time</option>
            {availableTimes.map(time => (
              <option key={time} value={time} disabled={!checkAvailability(selectedDate, time)}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;
