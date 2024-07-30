import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Skeleton } from "antd";
import UsequeryCategory from "../../../common/hooks/categorys/UsequeryCategory";
import UsemutationCategory from "../../../common/hooks/categorys/UsemutationCategory";
const Editcate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const { data, isLoading } = UsequeryCategory(id);
  const { form, onSubmit } = UsemutationCategory({
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
        navigate("/admin/category");
      });
    },
  });
  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [id, form, data]);

  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl ">
        UPDATE CATEGORYS
      </h1>
      <div className="m-auto w-72">
        <Skeleton loading={isLoading}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <input
              className="border-2 border-black p-2 rounded w-72"
              placeholder="name"
              type="text"
              {...form.register("name", { required: true })}
            />{" "}
            <br></br>
            {form.formState.errors.name && (
              <span className="text-red-500">Vui lòng nhập name !</span>
            )}
            <br></br>
            <button
              className="ml-16 my-4 border-2 bg-black  text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
              type="submit"
            >
              Update category
            </button>
          </form>
        </Skeleton>
      </div>
    </div>
  );
};

export default Editcate;
