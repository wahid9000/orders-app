
const FilterByStatus = ({ selectedStatuses, setSelectedStatuses }) => {
    return (
      <div className="flex items-center filter-div">
        <p>Filter: </p>
        <div className="ml-2">
          <label className="flex gap-1">
            <input
              type="checkbox"
              value="Pending"
              checked={selectedStatuses.includes("Pending")}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedStatuses((prev) => [...prev, "Pending"]);
                } else {
                  setSelectedStatuses((prev) =>
                    prev.filter((status) => status !== "Pending")
                  );
                }
              }}
            />
            Pending
          </label>
          <label className="flex gap-1">
            <input
              type="checkbox"
              value="Shipped"
              checked={selectedStatuses.includes("Shipped")}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedStatuses((prev) => [...prev, "Shipped"]);
                } else {
                  setSelectedStatuses((prev) =>
                    prev.filter((status) => status !== "Shipped")
                  );
                }
              }}
            />
            Shipped
          </label>
          <label className="flex gap-1">
            <input
              type="checkbox"
              value="Delivered"
              checked={selectedStatuses.includes("Delivered")}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedStatuses((prev) => [...prev, "Delivered"]);
                } else {
                  setSelectedStatuses((prev) =>
                    prev.filter((status) => status !== "Delivered")
                  );
                }
              }}
            />
            Delivered
          </label>
        </div>
      </div>
    );
  };
  
  export default FilterByStatus;