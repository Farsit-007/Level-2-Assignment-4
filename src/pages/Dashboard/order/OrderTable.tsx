import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/features/hooks";
import { useGetOrdersQuery } from "../../../redux/features/orders/order.api";

const OrderTable = () => {
  const user = useAppSelector(useCurrentUser);
  console.log(user?.userEmail);
  const { data: orders } = useGetOrdersQuery(user?.userEmail);
  console.log(orders);

  return (
    <div>
      {" "}
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-4 px-6 text-sm text-center border-b">
                  Product Image
                </th>
                <th className="py-4 px-6 text-sm text-center border-b">
                  Product Name
                </th>
                <th className="py-4 px-6 text-sm text-center border-b">
                  Product Quantity
                </th>
                <th className="py-4 px-6 text-sm text-center border-b">
                  Buyer Name
                </th>
                <th className="py-4 px-6 text-sm text-center border-b">
                  Total Paid ($)
                </th>

                <th className="py-4 px-6 text-sm text-center border-b">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((u, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b text-center transition duration-300"
                >
                  <td className="py-4 px-6 border-b text-xl font-medium">
                    <figure className="rounded-xl w-16 h-16 overflow-hidden">
                      <img
                        src={u.productImage as string}
                        alt="Product"
                        className="object-cover h-full w-full"
                      />
                    </figure>
                  </td>
                  <td className="py-4 px-6 border-b text-xl font-medium">
                    {u?.productName}
                  </td>
                  <td className="py-4 px-6 border-b text-sm font-medium">
                    {u?.quantity}
                  </td>

                  <td className="py-4 px-6 border-b text-sm font-medium">
                    {u?.name}
                  </td>
                  <td className="py-4 px-6 border-b text-sm font-medium">
                    {u?.totalPrice}
                  </td>
                  <td className="py-4 px-6 border-b text-sm font-medium">
                    {u?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
