import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle';
import MenuCard from './MenuCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const filterMenu = data.filter(item => item.category === 'popular')
            setMenu(filterMenu)
        })
    },[])
    return (
        <div>
            <SectionTitle
            heading={'Check it out'}
            subheading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map( (menu)=> <MenuCard
                     key={menu._id}
                     menu={menu}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;