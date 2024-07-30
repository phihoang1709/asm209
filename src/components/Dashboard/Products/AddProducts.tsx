import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseproductMutation from "../../../common/hooks/products/UseproductMutation";
import UsequeryCategory from "../../../common/hooks/categorys/UsequeryCategory";
import { ICategory } from "../../../common/interfaces/Icategory";

const AddProducts = () => {
  const navigate = useNavigate();
  const { form, onSubmit } = UseproductMutation({
    actions: "CREATE",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Thêm sản phẩm thành công!",
        position: "top-end",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 1000,
        customClass: {
          popup: "my-toast",
        },
      }).then(() => {
        navigate("/admin/product");
      });
    },
  });

  const { data: categories } = UsequeryCategory();

  return (
    <div className="add-product">
      <h1 className="font-bold text-center my-10 text-4xl dark:text-white">
        ADD PRODUCTS
      </h1>
      <div className="m-auto w-72">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="Product Name"
            type="text"
            {...form.register("name", {
              required: "Vui lòng nhập name !",
            })}
          />
          <br />
          {form.formState.errors.name && (
            <span className="text-red-500">
              {form.formState.errors.name.message}
            </span>
          )}
          <br />

          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="Product price"
            type="text"
            {...form.register("price", {
              required: "Vui Lòng nhập giá !",
            })}
          />
          <br />
          {form.formState.errors.price && (
            <span className="text-red-500">
              {form.formState.errors.price.message}
            </span>
          )}
          <br />
          <input
            type="text"
            className="border-2 border-black p-2 rounded w-72"
            placeholder="Product image"
            {...form.register("image", { required: "Vui lòng nhập image !" })}
          />
          <br />
          {form.formState.errors.image && (
            <span className="text-red-500">
              {form.formState.errors.image.message}
            </span>
          )}
          <br />
          <select
            className="border-2 border-black p-2 rounded w-72"
            {...form.register("category", {
              required: "Vui lòng nhập category !",
            })}
          >
            <option value="">Select a category</option>
            {categories?.map((cate: ICategory) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </select>
          <br />
          {form.formState.errors.category && (
            <span className="text-red-500">
              {form.formState.errors.category.message}
            </span>
          )}
          <br />
          <button
            className="ml-16 my-4 border-2 bg-black text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
