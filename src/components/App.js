import React, { useState, useEffect } from 'react';
import PhotoContainer from './PhotoContainer';

import nasa from '../apis/nasa';

const App = () => {
  const current = new Date();
  const today = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  const [date, setDate] = useState(today);
  const [imgData, setImgData] = useState(null);


  const onDateSelect = (day) => {
    // console.log('-selected date: ', day);
    if (new Date(day) > new Date(today)) {
      return;
    } else {
      setDate(day);
    }
  };

  const fetchPhoto = async (date) => {
    // console.log('-fetchPhoto: ', date);
    const response = await nasa.get('/apod', {
      params: { date },
    });
    
    if (response.data) {
    //  console.log( 'Setting state imgData:', !!response.data);
      setImgData(response.data);
    }
  }

  useEffect(() => {
    fetchPhoto(date);
  }, [date]);

  return (
    <div className="ui raised very padded container segment center aligned">
      <div className="ui container">
        <h2 className="ui header">NASA's Photo of the Day Demo</h2>
        <p>Select a day to fetch a photo: {date}</p>
        <p>
          <label htmlFor="calendar">Date: </label>
          <input 
            name="calendar" 
            type="date" 
            max={today}
            onChange={(e) => onDateSelect(e.target.value)}
          />
          <em> (Date must not be in the future)</em>
        </p>
      </div>
      <PhotoContainer imgData={imgData} />
    </div>
  );
};

export default App;
