import {
  useGetUsersQuery,
  useUpdateUsersMutation,
} from "../../../redux/features/admin/userManagement/userManagement.api";

const UserManagement = () => {
  const { data: users, refetch } = useGetUsersQuery(undefined);
  const [updateUser] = useUpdateUsersMutation();

  const handleBlockToggle = async (userId: string, currentStatus: boolean) => {
    try {
      const update = {
        id: userId,
        data: !currentStatus,
      };
      console.log(update);
      const res = await updateUser(update).unwrap();
      console.log(res);
      refetch();
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#0095FF] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">
                Customer Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Customer Email
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Status</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((u) => (
              <tr
                key={u?._id}
                className="hover:bg-gray-50 border-b transition duration-300"
              >
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {u?.name}
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {u?.email}
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  {u?.isBlock === true ? "Blocked" : "Active"}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleBlockToggle(u._id, u.isBlock)}
                    className={`${
                      u.isBlock ? "bg-red-500" : "bg-blue-500"
                    } hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md`}
                  >
                    {u.isBlock ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
