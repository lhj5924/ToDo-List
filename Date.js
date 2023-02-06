import React from 'react';
import './Date.css';

function formatDate(date) {
    const year = date.toLocaleDateString('en-US', {
        year: 'numeric',
      });
      const month = date.toLocaleDateString('en-US', {
        month: '2-digit',
      });
      const day = date.toLocaleDateString('en-US', {
        day: '2-digit',
      });
      const weekday = date.toLocaleDateString('en-US', {
        weekday: 'short',
      });
      
      return `${year}/${month}/${day} ${weekday}`;
  }

function Date (props) {
    // console.log(props.date);
    return (
        <h2 className='today__date'>
            {formatDate(props.date)}
        </h2>
    )
}

export default Date;