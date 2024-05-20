import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import dish from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";
import useMenu from "../../hooks/UseMenu";
import { useParams } from "react-router-dom";

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    console.log(category)


    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Shop</title>
      </Helmet>
      <Cover
        img={dish}
        title={"Our shop"}
        titleBottom={"Would you like to try a dish?"}
      ></Cover>
      <div className="max-w-5xl mx-auto my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {
                salad.map(item => <ShopCard
                key={item._id}
                item={item}
                ></ShopCard>)
            }
       
          </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {
                pizza.map(item => <ShopCard
                key={item._id}
                item={item}
                ></ShopCard>)
            }
          </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {
                soup.map(item => <ShopCard
                key={item._id}
                item={item}
                ></ShopCard>)
            }
          </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {
                dessert.map(item => <ShopCard
                key={item._id}
                item={item}
                ></ShopCard>)
            }
          </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
          {
                drinks.map(item => <ShopCard
                key={item._id}
                item={item}
                ></ShopCard>)
            }
          </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
