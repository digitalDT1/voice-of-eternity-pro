import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="text-center container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-gradient mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            The page you're looking for seems to have wandered off. Let's get you back on the right path.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button className="btn-hero">
                Return to Home
              </Button>
            </Link>
            <Link to="/episodes">
              <Button variant="outline">
                Browse Episodes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
