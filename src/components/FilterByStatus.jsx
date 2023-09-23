import { AiOutlineDown } from 'react-icons/ai';
const FilterByStatus = ({ selectedStatuses, setSelectedStatuses }) => {
  return (
    <div>
      <div className="ml-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1 btn-primary text-white rounded-none capitalize">Filter By Order Status <AiOutlineDown></AiOutlineDown></label>
          <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-48 mr-1 rounded-none">
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

      </div>
    </div>
  );
};

export default FilterByStatus;