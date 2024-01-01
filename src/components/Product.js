import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
    <div className="product">
        <div className='product_info'>
            <p className='product_sku'>#CA25</p>
            <img src='https://drive.google.com/file/d/1rDF2z5LLbl8J2LazHGJeDMxnyZVbAo9C/view?usp=drive_link' alt='product 01'/>
            <p className='product_name'>Product 01</p>
            <p className='product_quantity'></p>
            <div>
                <Link to={'/delete-product'} className='delete_button'><img src='https://drive.google.com/file/d/1Ad8G5p-IOkykmDXW3kUj8I8H6sYvZBua/view?usp=drive_link'/></Link>
                <Link to={'/edit-product/:id'} className='edit_button'><img src='https://drive.google.com/file/d/1wGen8fGF_SmI3rtIdEkLq9PuhWmobkYd/view?usp=drive_link'/></Link>
                <Link to={`/product/${4444}`} className='favourite_button'><img src='https://drive.google.com/file/d/1Sp4adVHiL8OJhsL4jsJptgCCxRwPb-Le/view?usp=drive_link'/></Link>
            </div>
        </div>
    </div>
    )
};

export default Product;