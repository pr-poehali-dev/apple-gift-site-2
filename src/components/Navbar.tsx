import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-medium text-xl">
          Donate Cards
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            to="/products" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Привилегии
          </Link>
          <Link 
            to="/instructions" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Инструкция
          </Link>
          <Button variant="secondary" size="sm">
            Корзина
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
