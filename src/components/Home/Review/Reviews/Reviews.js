import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <section>
            <div className="containers" style={{ marginTop: '5%' }}>
                <div className="text-center">
                    <h4 className="mb-3">Customers review</h4>
                    <h1 className="mb-5 pb-5">What's Our Customers Say</h1>
                </div>
                <div>
                    <Review></Review>
                </div>
            </div>
        </section>
    );
};

export default Reviews;