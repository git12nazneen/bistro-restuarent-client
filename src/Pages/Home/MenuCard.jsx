import React from 'react';

const MenuCard = ({menu}) => {
    const {recipe,category, name, image, price} = menu;
    return (
        <div className='flex space-x-4  my-5'>
            <img style={{borderRadius : '0 200px 200px 200px'}} className='w-[100px]' src={image}  alt="" />
            <div>
                <h3 className='uppercase '>{name}-----</h3>
                <p className='font-light'>{recipe}</p>
            </div>
            <p className='text-orange-500'>{price}</p>
        </div>
    );
};

export default MenuCard;