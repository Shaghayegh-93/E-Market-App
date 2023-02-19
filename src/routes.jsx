import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const routes = [
  { path: "/", element: <HomePage />, id: Date.now() },
  { path: "/products/:id", element: <ProductsPage />, id: Date.now() },
];
export default routes;
