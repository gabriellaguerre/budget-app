import  React, { useEffect }from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as CategoryActions from '../../store/bank_category'
import './BankCategories.css'


function BankCategories() {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(CategoryActions.getCategory())
    }, [dispatch])

    const categories = useSelector(state => Object.values(state.bank_category))
   
    return(
        <>
        <h1>Bank Categories</h1>
        {categories[0]?.map(category =>
            <div key={category?.id} id='main'>
            <div>Category: {category?.PrimaryCategoryName}</div>
            <div>Description: {category?.Description}</div>
            <div>SubCategory: {category?.Subcategories}</div>
            {category.SubCategories?.map(sub =>
                <div key={sub?.id} id='sub'>
                    <div>Sub Category Name: {sub?.SubCategoryName}</div>
                    <div>Sub Category Description: {sub?.Description}</div>
                </div>)}

            </div>)}
    </>
    )
}

export default BankCategories;
