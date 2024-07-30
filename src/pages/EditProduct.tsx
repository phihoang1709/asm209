

const EditProduct = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col py-4">
    <h1 className="text-red-400 text-3xl">Chỉnh sửa sản phẩm </h1>

    <form action="" className="bg-slate-50 border rounded-md p-3 w-1/3 flex flex-col gap-3">
        <div className="flex flex-col px-2">
            <label htmlFor="" className="text-md font-medium">Tên sản phẩm </label>
            <input type="text" className="rounded-md border-none " />
        </div>
        <div className="flex flex-col px-2">
            <label htmlFor="" className="text-md font-medium">Gía tiền</label>
            <input type="number" className="rounded-md border-none " />
        </div>
        <div className="flex flex-col px-2">
            <label htmlFor="" className="text-md font-medium">Ảnh </label>
            <input type="text" className="rounded-md border-none " />
        </div>
        <div className="flex flex-col px-2">
            <label htmlFor="" className="text-md font-medium">Danh mục sản phẩm</label>
            <select name="" id="">
                <option value="alo">Điện thoại</option>
                <option value="alo">ti vi</option>
            </select>
        </div>
        <div className="flex flex-col px-2">
            <button className="bg-blue-400 p-2 rounded-md text-white">Chỉnh sửa sản phẩm</button>
        </div>
    </form>
</div>
  )
}

export default EditProduct