import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { UserOneProductQuery } from "../../../common/hooks/products/UseProductQuery";
import UseproductMutation from "../../../common/hooks/products/UseproductMutation";
import UsequeryCategory from "../../../common/hooks/categorys/UsequeryCategory";
import { ICategory } from "../../../common/interfaces/Icategory";

const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { data: productData } = UserOneProductQuery(id);
  console.log(productData);
  const { form, onSubmit } = UseproductMutation({
    actions: "UPDATE",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "cập nhập phẩm thành công!",
        position: "top-end",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 5000,
        customClass: {
          popup: "my-toast",
        },
      }).then(() => {
        navigate("/admin/product");
      });
    },
  });
  // console.log(data);
  useEffect(() => {
    if (productData) {
      form.reset(productData);
    }
  }, [id, form, productData]);

  const { data: categoriesData } = UsequeryCategory();

  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl">UPDATE PRODUCT</h1>
      <div className="m-auto w-72">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="namePro"
            type="text"
            {...form.register("name", { required: true })}
          />
          <br />
          {form.formState.errors.name && (
            <span className="text-red-500">Vui lòng nhập namePro !</span>
          )}

          <br />
          <input
            className="border-2 border-black p-2 rounded w-72"
            type="text"
            {...form.register("image", { required: true })}
          />
          <br />
          {form.formState.errors.image && (
            <span className="text-red-500">Vui lòng nhập imgPro !</span>
          )}
          <br />
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="pricePro"
            type="number"
            {...form.register("price", { required: true })}
          />
          <br />
          {form.formState.errors.price && (
            <span className="text-red-500">Vui lòng nhập number !</span>
          )}

          <br />
          <select
            className="border-2 border-black p-2 rounded w-72"
            id=""
            {...form.register("category", { required: true })}
          >
            <option value="">Mời bạn nhập loại</option>
            {categoriesData &&
              categoriesData.map((cate: ICategory) => (
                <option key={cate.id} value={cate.id}>
                  {cate.name}
                </option>
              ))}
          </select>
          {form.formState.errors.category && (
            <span className="text-red-500">Vui lòng nhập loại !</span>
          )}
          <br />
          <button
            className="ml-16 my-4 border-2 bg-black  text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
            type="submit"
          >
            update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
