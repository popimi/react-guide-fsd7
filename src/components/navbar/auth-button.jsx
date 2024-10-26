import { useNavigate } from "react-router-dom";
import Button from "../preset/button";

const AuthButton = ({ setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2">
      <Button
        type="primary"
        handleClick={() => {
          setIsMobileMenuOpen(false);
          navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        type="secondary"
        handleClick={() => {
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
