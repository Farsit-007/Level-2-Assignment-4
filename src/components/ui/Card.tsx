import { Link } from "react-router-dom";

const Card = ({ p }) => {
  return (
    <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
      <div className="flex flex-col space-y-1.5">
        <h3 className="text-2xl font-semibold ">{p?.name}</h3>
        <p className="text-sm text-gray-500 dark:text-white/60">
          {p.description}
        </p>
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-center text-2xl font-medium">${p.price}</h2>
        <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">
          Category: {p.category}
        </p>
      </div>
      <img
        width={400}
        height={300}
        className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
        src="https://images.unsplash.com/photo-1525428262024-54ab5fbe3b5c?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="card navigate ui"
      />
      <div className="w-full">
        <Link
          to={`/product-details/${p._id}`}
          className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
