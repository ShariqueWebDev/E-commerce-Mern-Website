"use client";

import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevBtn = false;
  const isNextBtn = true;

  return (
    <div className="flex justify-between gap-10">
      <aside className="w-[17%] space-y-5 p-5 border bg-gray-100 max-h-screen h-screen  ">
        <h2 className="font-semibold">Filter</h2>
        <div className=" w-full">
          <h4 className="text-sm">Sort</h4>
          <select
            name=""
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            id=""
            className="w-full p-1 mt-1"
            style={{ fontSize: "13px" }}
          >
            <option value="" style={{ fontSize: "13px" }}>
              None
            </option>
            <option value="asc" style={{ fontSize: "13px" }}>
              Price (Low to High)
            </option>
            <option value="dsc" style={{ fontSize: "13px" }}>
              Price (High to Low)
            </option>
          </select>
        </div>
        <div className="">
          <h4 className="text-sm ">Max Price: {maxPrice || ""}</h4>
          <input
            name=""
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            id=""
            className="w-full mt-1"
          />
        </div>
        <div className="">
          <h4 className="text-sm">Category</h4>
          <select
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id=""
            className="w-full p-1 mt-1 "
            style={{ fontSize: "13px" }}
          >
            <option value="" style={{ fontSize: "13px" }}>
              All
            </option>
            <option value="game" style={{ fontSize: "13px" }}>
              Game
            </option>
            <option value="laptop" style={{ fontSize: "13px" }}>
              Laptop
            </option>
          </select>
        </div>
      </aside>
      <main className="w-[87%] py-10 px-5">
        <h2 className="font-semibold md:text-4xl text-3xl mb-5 ">Products</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-1  focus:outline-none mb-10 "
        />
        <div className="">
          <ProductCard
            productId="shar8237"
            name="Macbook"
            price={4545}
            stock={100}
            handler={addToCartHandler}
            image="/dummy-images/product.webp"
          />
        </div>
        <article className="mt-10 flex items-center gap-10">
          <button
            className={`${
              isPrevBtn ? "bg-red-500" : "bg-red-300"
            } text-white px-3 py-1.5 rounded-md`}
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!isPrevBtn}
          >
            Prev
          </button>{" "}
          <span className=" gap-5 inline-block">
            {page} {page + 1} {page + 2} {page + 3} of {page + 4}{" "}
          </span>
          <button
            className={`${
              isNextBtn ? "bg-red-500" : "bg-red-300"
            } text-white px-3 py-1.5 rounded-md`}
            onClick={() => setPage((nex) => nex + 1)}
            disabled={!isNextBtn}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default SearchComponent;
