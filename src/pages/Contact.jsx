import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      date: startDate.toLocaleDateString(),
      time,
    };

    emailjs
      .send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then(
        (result) => {
          alert('Booking sent successfully!');
        },
        (error) => {
          alert('Error sending booking. Please try again.');
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="booking-form">
      <div>
        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label>Your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label>Select Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          required
        />
      </div>

      <div>
        <label>Select Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter any additional details"
        />
      </div>

      <button type="submit">Book Now</button>

     
    </form>
  );
};

export default BookingForm;
