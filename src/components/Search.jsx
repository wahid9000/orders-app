import { useEffect } from "react";
import axios from "axios";

const Search = ({ searchQuery, setSearchQuery, setSearchResults }) => {
    
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
    }, [searchQuery, setSearchResults]);

    return (
        <div>
            <input
                name="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs"
            />
        </div>
    );
};

export default Search;