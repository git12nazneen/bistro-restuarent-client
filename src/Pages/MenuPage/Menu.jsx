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
            <SectionTitle heading={'Dont miss'} subheading={'Todays Offer'}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/*  */}
            <Cover img={desert} title={'DESERTS'} titleBottom={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={dessert}></MenuCategory> 
            <Cover img={Pizza} title={'PIZZA'} titleBottom={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={pizza}></MenuCategory> 
            <Cover img={Salad} title={'SALADS'} titleBottom={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={salad}></MenuCategory> 
            <Cover img={Soup} title={'SOUPS'} titleBottom={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={soup}></MenuCategory> 
        </div>
    );
};

export default Menu;