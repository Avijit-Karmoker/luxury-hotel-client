import React from 'react';

const Amenitie = ({facility}) => {
    const {logo, quote, name} = facility;
    return (
        <div className='col-md-4'>
            <div className='text-center mb-5 amenie-cart shadow rounded-3'>
                <img style={{height: '100px'}} src={logo} alt=""/>
                <h3 className='mb-3 mt-5'>{name}</h3>
                <p>{quote}</p>
                <button className="button bg-brand text-white rounded-2">Read More</button>
            </div>
        </div>
    );
};

export default Amenitie;