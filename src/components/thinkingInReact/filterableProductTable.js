const { default: ProductTable } = require("./productTable");
const { default: SearchBar } = require("./searchBar");

const FilterableProductTable = ({ products }) => {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
}

export default FilterableProductTable