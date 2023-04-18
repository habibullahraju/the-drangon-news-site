import React from 'react';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary py-4 px-4 my-4'>
            <h4>Q-Zone</h4>
            <div>
                <img className='w-100' src={QZone1} alt="" />
                <img className='w-100' src={QZone2} alt="" />
                <img className='w-100' src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;