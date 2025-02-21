import { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TProduct } from "../../types/product.type";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/admin/productManagement/productManagement.api";
import { uploadFile } from "../../utils/ImageUpload";
import toast from "react-hot-toast";
import { useAppSelector } from "../../redux/features/hooks";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { JwtPayload } from "jwt-decode";
import { TError } from "../../types/global.type";

const ProductUpdate = () => {
  const token = useAppSelector(useCurrentToken);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [updateProduct, { isLoading: loading }] = useUpdateProductMutation();
  const { data: product, isLoading, error } = useGetProductQuery(productId);
  const [formData, setFormData] = useState<TProduct>({
    name: "",
    brand: "",
    price: 0,
    category: "",
    quantity: 0,
    inStock: true,
    description: "",
    image: "",
  });
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        brand: product.brand || "",
        price: product.price || 0,
        category: product.category || "",
        quantity: product.quantity || 0,
        inStock: product.inStock ?? true,
        description: product.description || "",
        image: product.image || "",
      });
      setImagePreview(product?.image as string);
    }
  }, [product]);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    (product?.image as string) || ""
  );

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    if (name === "price" || name === "quantity") {
      setFormData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev: TProduct) => ({
          ...prev,
          image: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setImagePreview("");
    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
  };

  let user: JwtPayload;
  if (token) {
    user = verifyToken(token);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      let imageUrl = "";
      if (formData.image) {
        imageUrl = await uploadFile(formData.image);
      }
      const productData = {
        ...formData,
        image: imageUrl,
      };
      const updateData: { id: string | undefined; data: TProduct } = {
        id: productId,
        data: productData,
      };
      const res = await updateProduct(updateData).unwrap();
      if (res.success === true) {
        toast.success(res.message);
        navigate(`/${(user as TUser)?.role}/manage-product`);
      }
    } catch (error) {
      const typedError = error as TError;
      const errorMessage =
        typedError?.data?.errorSource?.[0]?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
      </div>
    );
  if (error) return <div>Error loading product data</div>;

  return (
    <div className="mx-auto w-full space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Create Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2 text-sm">
            <label htmlFor="name" className="block text-zinc-700 font-medium">
              Product Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="brand" className="block text-zinc-700 font-medium">
              Brand
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              id="brand"
              name="brand"
              type="text"
              value={formData.brand}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2 text-sm">
            <label htmlFor="price" className="block text-zinc-700 font-medium">
              Price ($)
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              required
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
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose Category</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2 text-sm">
            <label
              htmlFor="quantity"
              className="block text-zinc-700 font-medium"
            >
              Quantity
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2 text-sm">
            <label htmlFor="inStock" className="block text-sm font-medium">
              Stock Status
            </label>
            <select
              id="inStock"
              name="inStock"
              value={formData.inStock ? "true" : "false"}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  inStock: e.target.value === "true",
                }))
              }
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <label
            htmlFor="description"
            className="block text-zinc-700 font-medium"
          >
            Description
          </label>
          <textarea
            className="flex w-full rounded-md border px-3 py-2 text-sm"
            id="description"
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2 text-sm">
            <label htmlFor="image" className="block text-zinc-700 font-medium">
              Product Image
            </label>
            <div className="border border-dashed border-black rounded-lg p-4 flex flex-col items-center gap-3">
              {imagePreview ? (
                <div className="relative rounded-lg overflow-hidden w-32 h-32">
                  <img
                    src={imagePreview as string}
                    alt="Image preview"
                    className="w-full h-full object-cover rounded-md"
                  />

                  <button
                    type="button"
                    className="absolute top-1 cursor-pointer right-1 bg-white text-red-500 rounded-full p-1 shadow-md"
                    onClick={handleRemoveFile}
                  >
                    <RxCross2 className="text-lg" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <div className="text-center text-gray-500">
                    <FaCloudUploadAlt size={30} />
                  </div>
                  <button
                    type="button"
                    className="bg-black text-white py-2 px-4 rounded-full"
                    onClick={() =>
                      document.getElementById("file-input")?.click()
                    }
                  >
                    Choose Image
                  </button>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-2">Max. File Size: 2 MB.</p>
          </div>
        </div>

        <button
          disabled={loading}
          className="flex mt-5 font-medium bg-black text-white transition-all duration-300 p-2 px-6 hover:bg-[#f7c788] hover:text-black rounded-md items-center cursor-pointer gap-2"
        >
          {loading ? (
            <div className="w-7 h-7 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
          ) : (
            "Update Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductUpdate;
