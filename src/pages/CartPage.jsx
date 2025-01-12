import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { allRemove, singleDelete } from "../Redux/bookSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"; // Import Link for navigation

const CartPage = () => {
  const cart = useSelector((state) => state.book.cart);
  const dispatch = useDispatch();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <SectionTitle title="Cart Page" />

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-3xl font-semibold">Your cart is empty.</p>
          <Link to="/" className="text-red-500 underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Product</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Quantity</th>
                  <th className="px-4 py-2 border">Subtotal</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-4 py-2 border flex items-center space-x-4">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="px-4 py-2 border">${item.price}</td>
                    <td className="px-4 py-2 border">
                      <div className="flex items-center space-x-2">
                        <button className="px-2 py-1 bg-gray-200 rounded">
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="px-2 py-1 bg-gray-200 rounded">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 border">
                      ${item.price * item.quantity}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() =>
                          dispatch(
                            singleDelete(item.id),
                            toast.success("Deleted your book")
                          )
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Total */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <button
                onClick={() =>
                  dispatch(allRemove(), toast("Removed all shopping"))
                }
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
              >
                Remove All Shopping
              </button>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded">
              <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
              <div className="flex justify-between border-b py-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span>Shipping:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between py-2 font-semibold text-lg">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
