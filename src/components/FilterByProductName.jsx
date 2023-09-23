import { AiOutlineDown } from "react-icons/ai";

const FilterByProductName = ({ uniqueProducts, selectedProducts, handleProductCheckboxChange }) => {
  return (
    <div className=" relative flex items-center">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1 btn-primary text-white rounded-none capitalize">
          Filter By Product Name <AiOutlineDown></AiOutlineDown>
        </label>
        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-48 mr-1 rounded-none">
          {uniqueProducts?.map((product, index) => (
            <label key={index} className="flex gap-1">
              <input
                type="checkbox"
                value={product}
                checked={selectedProducts?.includes(product)}
                onChange={handleProductCheckboxChange}
              />
              {product}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByProductName;