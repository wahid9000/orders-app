import axios from "axios";

const Sorting = ({ setSortedData }) => {
  const handleSortChange = async (event) => {
    const selectedOption = event.target.value;
    let url;

    if (selectedOption === "ascending") {
      url = "https://orders-app-server.vercel.app/orders/all-orders-asc";
    } else if (selectedOption === "descending") {
      url = "https://orders-app-server.vercel.app/orders/all-orders-desc";
    }

    if (url) {
      try {
        const res = await axios.get(url);
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
        <p className="font-semibold">Sort By Date: </p>
      <select
        className="select select-bordered select-primary rounded-none ml-2 max-w-xs"
        onChange={handleSortChange}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;