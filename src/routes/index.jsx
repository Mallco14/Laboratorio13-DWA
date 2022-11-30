import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, BooksView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* ENRUTAMIENTO PARA LOS BOOKS */}
        <Route path="/books" element={<BooksView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
