import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='text-center max-w-96 mx-auto mb-10'>
            <p className='text-orange-400 pt-10 pb-5'>----{heading}----</p>
            <h3 className='text-4xl font-light py-4 border-t-2 border-b-2 border-gray-300'>{subheading}</h3>
        </div>
    );
};

export default SectionTitle;