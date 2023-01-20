import { useEffect, useState } from "react";
import axios from "./api/axios";
import Product from "./components/Product";
import Ably from "ably";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const ably = new Ably.Realtime({
    key: import.meta.env.VITE_APP_API_KEY,
  });
  const channel = ably.channels.get("products");
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    channel.subscribe("new-product", (message) => {
      console.log(message.data);
      toast.success(`New product Received `, {
        position: "bottom-right",
        autoClose: 5000,
      });
      setProducts((prevProducts) => [message.data, ...prevProducts]);
    });

    axios("/api/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });

    return () => {
      channel.unsubscribe();
    };
  }, []);
  return (
    <div id="app" className="font-roboto ">
      <ToastContainer />
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.table {\n\t\tborder-spacing: 0 15px;\n\t}\n\n\ti {\n\t\tfont-size: 1rem !important;\n\t}\n\n\t.table tr {\n\t\tborder-radius: 20px;\n\t}\n\n\ttr td:nth-child(n+5),\n\ttr th:nth-child(n+5) {\n\t\tborder-radius: 0 .625rem .625rem 0;\n\t}\n\n\ttr td:nth-child(1),\n\ttr th:nth-child(1) {\n\t\tborder-radius: .625rem 0 0 .625rem;\n\t}\n",
          }}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center">
          <div className="bg-gary-100 text-white flex flex-col items-center">
            <code className="w-fit mb-3">
              Open <span>Postman</span> or any request manager and push to this
              route <span>https://server-test-jade.vercel.app/api/insert</span>{" "}
              using <span>POST</span> and this data below ⬇️ <br />
            </code>

            <code className="bg-gray-100 text-gray-800 p-3 w-fit  text-medium">
              {JSON.stringify({
                Category: "Technology",
                Price: "200$",
                Brand: "Samsung",
                Name: "Galaxy S8+",
                Status: "Available",
                Img: "https://bit.ly/img09",
              })}
            </code>
          </div>
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
              <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                  <tr>
                    <th className="p-3">Brand</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <div role="status w-full flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-purple-700 fill-purple-700"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    Products.map((prd) => {
                      return <Product product={prd} key={prd._id} />;
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
