import axios from "axios";
import { AiOutlineDown } from "react-icons/ai";

const Sorting = ({ setSortedData }) => {

    const handleAscending = async () => {
        const res = await axios.get('http://localhost:5000/orders/all-orders-asc');
        const data = res.data;
        setSortedData(data);
    };

    const handleDescending = async () => {
        const res = await axios.get('http://localhost:5000/orders/all-orders-desc');
        const data = res.data;
        setSortedData(data);
    };

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm m-1">Sort By Date <AiOutlineDown></AiOutlineDown> </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className="cursor-pointer" onClick={handleAscending}>Ascending</li>
                <li className="cursor-pointer" onClick={handleDescending}>Descending</li>
            </ul>
        </div>
    );
};

export default Sorting;