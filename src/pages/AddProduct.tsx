import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export type ProductForm = {
    name: string,
    price: number,
    image: string,
    category: string,

}

export type CategoryForm = {
    name: string
}

const AddProduct = () => {
    const [statusProduct, setStatusAddProduct] = useState(true);
    const [statusCate, setStatusAddCate] = useState(true);
    const [product, setProduct] = useState([]);
    const [cate, setCate] = useState([])
    const productForm = useForm<ProductForm>();
    const categoryForm = useForm<CategoryForm>();
    const onAddProduct = async (data: any) => {
        console.log(data);
        if (statusProduct) {
            await addProduct(data);
            alert("thêm sản phẩm thành công");
            productForm.reset();
        } else {
            if (window.confirm("bạn có chắc muốn sửa sản phẩm này ")) {
                await editProduct(data)
                alert("chỉnh sửa sản phẩm thành công")
                productForm.reset()
                setStatusAddProduct(true)
            }
        }
    }

    const onAddCategory = async (data: any) => {
        console.log(data);
        if (statusCate) {
            await addCate(data)
            alert("thêm danh mục thành công")
            categoryForm.reset()
        } else {
            if (window.confirm("bạn có chắc muốn sửa sản phẩm này ")) {
                await editCate(data)
                alert("chỉnh sửa danh mục thành công")
                categoryForm.reset()
                setStatusAddCate(true)
            }
        }

    }

    const addProduct = async (data: any) => {
        try {
            const res = await fetch('http://localhost:3000/products', {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data)
            })

        } catch (error) {
            console.log(error);

        }
    }
    const editProduct = async (data: any) => {
        try {
            const res = await fetch(`http://localhost:3000/products/${data.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data)
            })

        } catch (error) {
            console.log(error);

        }
    }
    const DeleteP = async (id: any) => {
        try {
            const res = await fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE"
            })

            alert("xóa sản phẩm thành công")

        } catch (error) {
            console.log(error);

        }
    }

    const editCate = async (data: any) => {
        try {
            const res = await fetch(`http://localhost:3000/categories/${data.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data)
            })

        } catch (error) {
            console.log(error);

        }
    }



    const getDetailP = async (id: any) => {
        try {
            const res = await fetch(`http://localhost:3000/products/${id}`)
            const data = await res.json();

            productForm.reset(data)
            setStatusAddProduct(false)

        } catch (error) {
            console.log(error);

        }
    }

    const addCate = async (data: any) => {
        try {
            const res = await fetch('http://localhost:3000/categories', {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data)
            })

        } catch (error) {
            console.log(error);

        }
    }

    const getDetailC = async (id: any) => {
        try {
            const res = await fetch(`http://localhost:3000/categories/${id}`)
            const data = await res.json();

            categoryForm.reset(data)
            setStatusAddCate(false)

        } catch (error) {
            console.log(error);

        }
    }

    const DeleteC = async (id: any) => {
        try {
            const res = await fetch(`http://localhost:3000/categories/${id}`, {
                method: "DELETE"
            })

            alert("xóa danh mục thành công")

        } catch (error) {
            console.log(error);

        }
    }



    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:3000/products');
                const data = await res.json();
                setProduct(data)
            }
        )();
        (
            async () => {
                const res = await fetch('http://localhost:3000/categories');
                const data = await res.json();
                setCate(data)
            }
        )();


    }, [product, cate])

    return (
        <div className="w-full h-screen flex justify-between p-4 gap-6">
            <div className="w-2/3 h-screen overflow-auto ">
                <div className="w-full h-1/2 overflow-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ảnh
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    danh mục
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product?.map((p: any, index: number) => (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {p.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {p.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src={p.image} alt="" className="w-[50px] h-[50px]" />
                                        </td>
                                        <td className="px-6 py-4">
                                            {p.category}
                                        </td>
                                        <td className="px-6 py-4 flex flex-col gap-2">
                                            <a onClick={() => {
                                                getDetailP(p.id)
                                            }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            <a onClick={() => {
                                                if (window.confirm("bạn có chắc là muốn xóa sản phẩm này ? ")) {
                                                    DeleteP(p.id)
                                                }
                                            }} className="font-medium text-red-600 dark:text-blue-500 hover:underline">delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="w-full h-1/2 overflow-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tên danh mục
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cate?.map((p: any, index: number) => (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {p.name}
                                        </th>
                                        <td className="px-6 py-4 flex flex-col gap-2">
                                            <a onClick={() => {
                                                getDetailC(p.id)
                                            }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            <a onClick={() => {
                                                if (window.confirm("bạn muốn xóa danh mục này")) {
                                                    DeleteC(p.id)
                                                }
                                            }} className="font-medium text-red-600 dark:text-blue-500 hover:underline">delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col w-1/3 gap-3 h-screen">
                <div className="flex items-center flex-col py-1 w-full">
                    <h1 className="text-red-400 text-3xl">Thêm mới sản phẩm </h1>

                    <form action="" onSubmit={productForm.handleSubmit(onAddProduct)} className="bg-slate-50 border rounded-md p-3 w-full flex flex-col gap-3">
                        <div className="flex flex-col px-2">
                            <label htmlFor="" className="text-md font-medium">Tên sản phẩm </label>
                            <input type="text" className="rounded-md border-none " {...productForm.register("name", { required: true, minLength: 9 })} />
                            {productForm.formState.errors.name ? <span className="text-red-300 text-sm">Tên không được để trống và ít nhất 9 ký tự</span> : ""}

                        </div>
                        <div className="flex flex-col px-2">
                            <label htmlFor="" className="text-md font-medium">Gía tiền</label>
                            <input type="number" className="rounded-md border-none " {...productForm.register("price", { required: true, min: 1 })} />
                            {productForm.formState.errors.price ? <span className="text-red-300 text-sm">Giá không được để trống và phải lớn hơn 0</span> : ""}
                        </div>
                        <div className="flex flex-col px-2">
                            <label htmlFor="" className="text-md font-medium">Ảnh </label>
                            <input type="text" className="rounded-md border-none " {...productForm.register("image", { required: true })} />
                            {productForm.formState.errors.image ? <span className="text-red-300 text-sm">Ảnh là bắt buộc </span> : ""}
                        </div>
                        <div className="flex flex-col px-2">
                            <label htmlFor="" className="text-md font-medium">Danh mục sản phẩm</label>
                            <select {...productForm.register("category")} >
                                {
                                    cate?.map((c: any, index) => (
                                        <option key={index} value={c.name}>{c.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex-col px-2">
                            {
                                statusProduct ?
                                    <button className="bg-blue-400 p-2 rounded-md text-white">Thêm sản phẩm</button>
                                    : <button className="bg-yellow-300 p-2 rounded-md text-white">Sửa sản phẩm</button>
                            }
                        </div>
                    </form>
                </div>

                <div className="flex items-center flex-col py-4 w-full">
                    <h1 className="text-red-400 text-3xl">Thêm mới danh mục </h1>

                    <form action=""
                        className="bg-slate-50 border rounded-md p-3 w-full flex flex-col gap-3"
                        onSubmit={categoryForm.handleSubmit(onAddCategory)}
                    >
                        <div className="flex flex-col px-2">
                            <label htmlFor="" className="text-md font-medium">Tên danh mục</label>
                            <input type="text" className="rounded-md border-none " {...categoryForm.register("name", { required: true })} />
                            {categoryForm.formState.errors.name ? <span className="text-red-300 text-sm">Tên danh mục là bắt buộc </span> : ""}
                        </div>
                        <div className="flex flex-col px-2">
                            {
                                statusCate ?
                                    <button className="bg-blue-400 p-2 rounded-md text-white">Thêm danh mục</button>
                                    : <button className="bg-yellow-300 p-2 rounded-md text-white">Sửa danh mục</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct