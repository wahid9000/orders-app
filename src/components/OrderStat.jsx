
const OrderStat = ({allOrders}) => {
    const totalAmount = allOrders?.reduce((total, order) => total + order.total_amount, 0);
    return (
        <div className="flex items-center gap-5 w-1/3 px-10 py-6 border border-primary">
            <div>
                <div className="text-center font-bold">Total Orders: {allOrders?.length}</div>
            </div>
            <div className="divider text-primary lg:divider-horizontal"></div>
            <di>
                <div className="text-center font-bold">Total Amount: ${totalAmount?.toFixed(2)}</div>
            </di>
        </div>
    );
};

export default OrderStat;