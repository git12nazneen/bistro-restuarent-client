
import { Link } from 'react-router-dom';
import MenuCard from '../Home/MenuCard';
import Cover from '../../shared/Cover';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className=' mb-10'>
            {title && <Cover img={img} title={title} ></Cover>}
             <div className='grid md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                {
                    items.map( (menu)=> <MenuCard
                     key={menu._id}
                     menu={menu}></MenuCard>)
                }
            </div>
           <div className='max-w-xl mx-auto justify-center items-center text-center'>
           <Link to={`/shop/${title}`}>
            <button className='btn  bg-orange-600 border-b-4 border-black hover:bg-black hover:text-white'>Order your favourite food</button>
            </Link>
           </div>
        </div>
    );
};

export default MenuCategory;