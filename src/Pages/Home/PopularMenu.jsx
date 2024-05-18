import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle';
import MenuCard from './MenuCard';
import useMenu from '../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
   
    return (
        <div className='max-w-6xl mx-auto'>
            <SectionTitle
            heading={'Check it out'}
            subheading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                   popular.map( (menu)=> <MenuCard
                     key={menu._id}
                     menu={menu}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;