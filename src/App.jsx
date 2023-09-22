import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import Sorting from "./components/Sorting";
import { FaSearch } from 'react-icons/fa';
import FilterByStatus from "./components/FilterByStatus";
import OrderStat from "./components/OrderStat";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;

    const { data: allOrders } = useQuery({
        queryKey: ['all-orders'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/orders/all-orders');
            return res.data;
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/orders/search?search=${searchQuery}`
                );
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };
        fetchData();
    }, [searchQuery]);


    const dataToRender = sortedData?.length > 0 ? sortedData : (searchQuery ? searchResults : allOrders);
    const filteredData = selectedStatuses.length === 0
        ? dataToRender
        : dataToRender?.filter((order) => selectedStatuses.includes(order.order_status));

    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;

    const paginatedData = filteredData
        ?.filter(
            (order) =>
                order?.customer_name?.toLowerCase().includes(searchQuery?.toLowerCase())
        )
        .slice(startIndex, endIndex);

    return (
        <div className="min-h-screen">
            <OrderStat></OrderStat>
            <div className="flex justify-between items-center mt-8 px-12">
                <div className="flex items-center">
                    <FaSearch className='absolute left-[5%] top-[61px] text-gray-500'></FaSearch>
                    <input
                        name="search"
                        autoComplete="off"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search By..." className="pl-10 placeholder:italic rounded-none shadow-lg input input-bordered w-full max-w-xs" />
                </div>

                <div className="flex items-center gap-8">
                    <Sorting setSortedData={setSortedData}></Sorting>

                    <FilterByStatus
                        selectedStatuses={selectedStatuses}
                        setSelectedStatuses={setSelectedStatuses}>
                    </FilterByStatus>

                </div>
            </div>
            <div className="overflow-x-auto mt-4 px-12">
                <table className="table lg:table-sm table-xs border">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Ordered Date</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedData?.map((order) => (
                                <tr key={order?._id}>
                                    <th>{order?.order_id}</th>
                                    <td>{order?.customer_name}</td>
                                    <td>{order?.product.product_name}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.total_amount}</td>
                                    <td>{moment(order?.order_date).format('LLL')}</td>
                                    <td>{order?.order_status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="join grid grid-cols-2 w-1/6 ml-auto pr-12  mt-5 pagination">
                <button
                    className="join-item btn btn-outline"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous page
                </button>
                <button
                    className="join-item btn btn-outline"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= filteredData?.length}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default App;
