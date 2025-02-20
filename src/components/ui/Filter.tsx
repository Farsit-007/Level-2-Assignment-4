import React, { useState } from "react";

const FilterButton = ({ setFilters, filters }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    setOpenModal(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Filter
      </button>

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50 transition-opacity duration-300 ${
          openModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenModal(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-96 rounded-lg bg-white p-6 shadow-lg transform transition-all duration-300 ${
            openModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">Filter Products</h3>

          <div className="mb-4">
            <label className="block text-sm mb-2">Brand</label>
            <input
              type="text"
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              placeholder="e.g., Nike"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Price Range</label>
            <input
              type="number"
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              placeholder="e.g., 10 - 50"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="space-y-2 text-sm">
            <label
              htmlFor="category"
              className="block text-zinc-700 font-medium"
            >
              Category
            </label>
            <select
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">Choose Category</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div className="space-y-2 text-sm">
            <label
              htmlFor="category"
              className="block text-zinc-700 font-medium"
            >
              Availability
            </label>
            <select
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              id="category"
              name="category"
              value={filters.inStock}
              onChange={handleFilterChange}
            >
              <option value={true}>In Stock</option>
              <option value={false}>Out of stock</option>
            </select>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setOpenModal(false)}
              className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md"
            >
              Close
            </button>
            <button
              onClick={handleApplyFilters}
              className="px-6 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
