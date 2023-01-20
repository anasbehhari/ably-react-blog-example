
function Product({product}) {
  return (
    <tr className="bg-gray-800">
      <td className="p-3">
        <div className="flex align-items-center">
          <img
            className="rounded-full h-12 w-12   object-cover"
            src={product.Img}
            alt="unsplash image"
          />
          <div className="ml-3">
            <div className>{product.Brand}</div>
            <div className="text-gray-500">{product.Name}</div>
          </div>
        </div>
      </td>
      <td className="p-3">{product.Category}</td>
      <td className="p-3 font-bold">{product.Price}</td>
      <td className="p-3">
        <span className="bg-blue-400 text-gray-50  rounded-md px-2">
        {product.Status}
        </span>
      </td>
      <td className="p-3">
        <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
          <i className="material-icons-outlined text-base">visibility</i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
          <i className="material-icons-outlined text-base">edit</i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
          <i className="material-icons-round text-base">delete_outline</i>
        </a>
      </td>
    </tr>
  );
}

export default Product;
