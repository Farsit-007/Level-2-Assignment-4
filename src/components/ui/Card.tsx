import { Link } from "react-router-dom";
import { TProduct } from "../../types/product.type";

interface CardProps {
  p: TProduct;
}

const Card: React.FC<CardProps> = ({ p }) => {
  return (
    <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg ">
      <div className="flex flex-col space-y-1.5">
        <h3 className="text-2xl font-semibold ">{p?.name}</h3>
        <p className="rounded-lg w-[40%] bg-gray-700 p-2 text-center text-sm ">
          {p.brand}
        </p>
        <p className="text-sm text-gray-500 dark:/60">
          {p?.description?.slice(0, 50)}...
        </p>
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-center text-2xl font-medium">${p.price}</h2>
        <p className="rounded-lg bg-gray-700 p-2 text-center text-sm ">
          Category: {p.category}
        </p>
      </div>
      <img
        width={400}
        height={300}
        className="h-[200px] w-full rounded-lg bg-gray-600 object-cover"
        src={`${p?.image}`}
        alt="card navigate ui"
      />
      <div className="w-full">
        <Link
          to={`/product-details/${p?._id}`}
          className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
