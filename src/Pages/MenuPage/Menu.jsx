import React from 'react';
import Cover from '../../shared/Cover';
import { Helmet } from 'react-helmet-async';
import cover from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu';
import desert from '../../assets/menu/dessert-bg.jpeg'
import Pizza from '../../assets/menu/pizza-bg.jpg'
import Salad from '../../assets/menu/salad-bg.jpg'
import Soup from '../../assets/menu/soup-bg.jpg'
import MenuCategory from './MenuCategory';
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../shared/SectionTitle';
const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
             <Helmet>
                 <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={cover} title={'Our menu'} titleBottom={'Would you like to try a dish?'}></Cover>
            <SectionTitle heading={'Dont miss'} subheading={'Todays offer'}></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
           
            {/*  */}
            <MenuCategory items={dessert} img={desert} title={'dessert'}></MenuCategory> 
            {/*  */}
             <MenuCategory items={pizza} img={Pizza} title={'pizza'}></MenuCategory> 
            {/*  */}
            <MenuCategory items={salad} img={Salad} title={'salad'}></MenuCategory> 
            {/*  */}
             <MenuCategory items={soup} img={Soup} title={'soup'} ></MenuCategory> 
        </div>
    );
};

export default Menu;