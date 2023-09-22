
const OrderStat = ({allOrders}) => {
    const totalAmount = allOrders?.reduce((total, order) => total + order.total_amount, 0);
    return (
        <div className="flex items-center gap-5 w-1/3 px-12 py-6 border">
            <div>
                <div className="text-center">Total Orders: {allOrders?.length}</div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <di>
                <div className="text-center">Total Amount: ${totalAmount.toFixed(2)}</div>
            </di>
        </div>
    );
};

export default OrderStat;