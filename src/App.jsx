import "./App.css";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login-page";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register-page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-dvh flex justify-center items-center bg-slate-700 text-white">
              Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
