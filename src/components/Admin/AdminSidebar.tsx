"use client";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const location = usePathname();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(false); // ✅ Initial state set to false

  useEffect(() => {
    // ✅ This ensures "window" is only accessed on the client
    const checkScreenSize = () => {
      setPhoneActive(window.innerWidth < 1100);
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={{
          width: "20rem",
          height: "100vh",
          position: phoneActive ? "fixed" : "relative",
          top: 0,
          left: phoneActive && !showModal ? "-20rem" : "0",
          transition: "all 0.5s",
        }}
      >
        <h2>Logo.</h2>
        <NavSection location={location} />
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const NavSection = ({ location }: { location: string }) => (
  <nav>
    <ul>
      <NavItem url="/admin/dashboard" text="Dashboard" location={location} />
      <NavItem url="/admin/products" text="Products" location={location} />
      <NavItem url="/admin/customers" text="Customers" location={location} />
      <NavItem url="/admin/transaction" text="Transaction" location={location} />
    </ul>
  </nav>
);

const NavItem = ({ url, text, location }: { url: string; text: string; location: string }) => (
  <li style={{ background: location.includes(url) ? "#0073ff22" : "white" }}>
    <Link href={url} style={{ color: location.includes(url) ? "#0073ff" : "black" }}>
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
