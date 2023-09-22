import axios from "axios";

const Sorting = ({ setSortedData }) => {
  const handleSortChange = async (event) => {
    const selectedOption = event.target.value;
    let apiUrl;

    if (selectedOption === "ascending") {
      apiUrl = "http://localhost:5000/orders/all-orders-asc";
    } else if (selectedOption === "descending") {
      apiUrl = "http://localhost:5000/orders/all-orders-desc";
    }

    if (apiUrl) {
      try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        console.log(data);
        setSortedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="flex items-center">
        <p>Sort By Date: </p>
      <select
        className="select select-bordered rounded-none ml-2 max-w-xs"
        onChange={handleSortChange}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;