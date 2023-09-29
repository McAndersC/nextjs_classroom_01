import FilterableProductTable from '@/components/thinkingInReact/filterableProductTable';
import styles from './page.module.css';

const Page = () => {  

    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];
     
    return <div className={styles.page}>
   
        <FilterableProductTable products={PRODUCTS}></FilterableProductTable>

    </div>

}

export default Page;