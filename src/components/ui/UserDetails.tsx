const UserDetails = () => {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="w-full mx-auto my-6">
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6 font-semibold text-center">Name </td>
              <td className="py-4 px-6  font-semibold text-center">:</td>
              <td className="py-4 px-6  ">Mirpur 15, Dhaka</td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6  font-semibold text-center">Email </td>
              <td className="py-4 px-6  font-semibold text-center">:</td>
              <td className="py-4 px-6  ">Bagerhat, Khulna</td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6  font-semibold text-center">Role </td>
              <td className="py-4 px-6  font-semibold text-center">:</td>
              <td className="py-4 px-6  ">Bagerhat, Khulna</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
