import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "home": return <Home />;
      case "about": return <About />;
      case "courses": return <Courses />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <main className="main-content">
            {renderPage()}
          </main>
        </>
      )}
    </div>
  );
}
