import Button from "../preset/button";
import { useNavigate } from "react-router-dom";

const AuthButton = ({ setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2">
      <Button
        type="primary"
        onClick={() => {
          setIsMobileMenuOpen(false);
          navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        type="secondary"
        onClick={() => {
          setIsMobileMenuOpen(false);
          navigate("/register");
        }}
      >
        Register
      </Button>
    </div>
  );
};

export default AuthButton;
