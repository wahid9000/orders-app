import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import Sorting from "./components/Sorting";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [sortedData, setSortedData] = useState([]);

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

    const dataToRender = sortedData.length > 0 ? sortedData : (searchQuery ? searchResults : allOrders);
    return (
        <div className="min-h-screen">
            <div className="flex justify-end mt-8 px-12">
                <div>
                    <input
                        name="search"
                        autoComplete="off"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Here..." className="input input-bordered input-accent w-full max-w-xs h-8 mt-1" />
                </div>

                <Sorting setSortedData={setSortedData}></Sorting>

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
                            dataToRender.filter(order => order.customer_name.toLowerCase().includes(searchQuery.toLowerCase()))?.map((order) => (
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

        </div>
    );
};

export default App;
