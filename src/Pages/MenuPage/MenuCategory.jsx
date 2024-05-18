
import MenuCard from '../Home/MenuCard';

const MenuCategory = ({items}) => {
    return (
        <div className='max-w-5xl mx-auto my-10'>
             <div className='grid md:grid-cols-2 gap-4'>
                {
                   items.map( (menu)=> <MenuCard
                     key={menu._id}
                     menu={menu}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;