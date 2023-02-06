import React from 'react';
import './TodayContainer.css';
import Date from './Date';
import SelectEmoji from './SelectEmoji';
import Weather from './Weather';


function TodayContainer (props) {
    return (
        <div className='TodayContainer--inner'>
            <span className='TodayContainer--inner__left'>
                <Date date={props.date}/>   
            </span>
            <span className='TodayContainer--inner__right'>
                <SelectEmoji />
                <Weather />
            </span>
        </div>
    )
}

export default TodayContainer;