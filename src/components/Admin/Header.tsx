"use client";

import { MenuItem, MenuItemProps } from "@/utils/menuItems";
import { LogIn, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [translateScrollY, setTranslateScrollY] = useState<number>(0);
  const [translateHeader, setTranslateHeader] =
    useState<string>("translate-y-0");

  const prevScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setTranslateScrollY(window.scrollY);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };
  // This ensures setTranslateScrollY only fires at the frame rate (~60fps max), not dozens of times more.

  console.log(isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // menuRef.current If this is null (not mounted yet), the check prevents errors.
      // !menuRef.current.contains  if the click did not happen inside the dropdown, this condition is true.
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // React to scroll position
  useEffect(() => {
    const current = translateScrollY;
    const previous = prevScrollY.current;

    if (current < 100 || current < previous) {
      setTranslateHeader("translate-y-0"); // Near top or scrolling up → show
    } else if (current > previous && current > 300) {
      setTranslateHeader("-translate-y-full"); // Scrolling down past 300 → hide
    }

    prevScrollY.current = current; // Update previous
  }, [translateScrollY]);

  const user = { _id: "sharique", role: "admin" };

  return (
    <nav
      className={`z-50 border
         transition-transform duration-300 border-gray-100 ${translateHeader} h-[65px] fixed top-0 text-[15px] font-inria font-semibold bg-white w-full items-center px-20 flex justify-between `}
    >
      <div className="w-[120px]">
        <Link href={"/"}>
          <Image
            src={"/logo/my-company.webp"}
            width={500}
            height={300}
            alt="My Company Logo"
          />
        </Link>
      </div>

      <div className="flex gap-10">
        {MenuItem?.map((item: MenuItemProps, index: number) => (
          <div key={index}>
            {item?.name && <Link href={item?.link}>{item?.name}</Link>}

            {item?.icon && <Link href={item.link}>{item?.icon}</Link>}
          </div>
        ))}
      </div>

      {user?._id ? (
        <div className="!flex !gap-10 font-medium relative" ref={menuRef}>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <User size={18} />
          </button>
          {isOpen && (
            <div className="absolute right-0 top-9 mt-2 border p-1 rounded-md bg-white z-[500] ">
              <div className="flex gap-1 flex-col">
                {user.role === "admin" && (
                  <Link
                    href={"/admin/dashboard"}
                    className="hover:bg-gray-800 px-5 py-1 hover:text-white rounded-md"
                  >
                    Admin
                  </Link>
                )}
                <Link
                  href={"/orders"}
                  className="hover:bg-gray-800 px-5 py-1 hover:text-white rounded-md"
                >
                  Orders
                </Link>
                <Link
                  href={"/login"}
                  className="hover:bg-gray-800 px-5 py-1 hover:text-white rounded-md"
                >
                  <button className="">
                    <LogOut size={18} />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <LogIn size={18} />
        </div>
      )}
    </nav>
  );
};

export default Header;
