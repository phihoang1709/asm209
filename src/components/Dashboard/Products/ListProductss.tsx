import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductAdmin } from "../../../common/hooks/products/UseProductQuery";
import UseproductMutation from "../../../common/hooks/products/UseproductMutation";
import UsequeryCategory from "../../../common/hooks/categorys/UsequeryCategory";
import { ICategory } from "../../../common/interfaces/Icategory";
import { IProduct } from "../../../common/interfaces/Iproduct";

const Listproductsss: React.FC = () => {
  const { data: products } = getProductAdmin();
  const { data: categories } = UsequeryCategory();
  // console.log("thông tin id của product nhé", products)

  const categoryMap = categories?.reduce(
    (acc: Record<string, string>, category: ICategory) => {
      acc[category.id as string] = category.name;
      return acc;
    },
    {}
  );

  const { mutate: deleteProduct } = UseproductMutation({
    actions: "DELETE",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Xoá thành công!",
        position: "top-end",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 1000,
        customClass: {
          popup: "my-toast",
        },
      }).then(() => {
        // Refresh the data
        window.location.reload();
      });
    },
  });

  const handleDelete = (id: any) => {
    console.log("Deleting product with ID:", id);
    if (window.confirm("Bạn có chắc muốn xoá không?")) {
      deleteProduct(id);
    }
  };
  

  return (
    <div className="Category">
      <h1 className="font-bold text-center my-10 text-4xl">PRODUCTS</h1>
      <div>
        <table className="border-2 border-black m-auto w-full">
          <thead>
            <tr className="border-2 border-black text-xs">
              <th className="border-2 border-black p-3">STT</th>
              <th className="border-2 border-black p-3">Name</th>
              <th className="border-2 border-black p-3">Price</th>
              <th className="border-2 border-black p-3">Image</th>
              <th className="border-2 border-black p-3">Category</th>
              <th className="border-2 border-black p-3">
                <Link
                  className="border-2 border-blue-700 px-2 py-1 mx-2 rounded font-bold bg-blue-700 text-white"
                  to="/admin/product/add"
                >
                  Add
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item: IProduct, index: number) => (
              <tr className="border-2 border-black" key={item.id}>
                <td className="border-2 border-black p-3">{index + 1}</td>
                <td className="border-2 border-black p-3">{item.name}</td>
                <td className="border-2 border-black p-3">{item.price}</td>
                <td className="border-2 border-black p-3">
                  <img
                    src={item.image}
                    className="w-[150px] h-[100px]"
                    alt={item.name}
                  />
                </td>
                <td className="border-2 border-black p-3">
                  {categoryMap?.[item.category as string]}
                </td>
                <td className="border-2 text-center border-black p-3">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="border-2 border-black px-2 py-1 text-white rounded font-bold bg-black"
                  >
                    Delete
                  </button>
                  <Link
                    className="text-white border-2 border-black m-1 px-2 py-1 rounded font-bold bg-black"
                    to={`/admin/product/update/${item.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listproductsss;
