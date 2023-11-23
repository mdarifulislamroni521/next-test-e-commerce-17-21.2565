"use client";
// imports packages
import HomeSlider from "@/app/home/layouts/slider/HomeSlider";
import Superdeals from "@/app/home/layouts/home/Superdeals";
import Terms from "@/app/components/Terms";
import TopCollection from "@/app/home/layouts/home/TopCollection";
import Bestselling from "@/app/home/layouts/home/Bestselling";

// temp data
const { products, topConnection, bestsellings } = require("@/app/data");

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-color-primary">
      <HomeSlider />
      <Superdeals products={products} />
      <Terms />

      <TopCollection collections={topConnection} />

      <Bestselling sellings={bestsellings} />
    </div>
  );
}
