"use client";
import Link from "next/link";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
function Header() {
  return (
    <div>
      <div className="w-full  flex items-center justify space-x-2 px-10 py-3 justify-between bg-slate-100">
        <div className="flex items-center space-x-2">
          <TravelExploreIcon />
          <p className="text-2xl">Roamify</p>
        </div>

        <div className="flex items-center space-x-10 p-3">
          <div className="flex items-center space-x-10 p-3">
            <Link href="/">Home</Link>
            <Link href="/getDestination">Find Location</Link>
            <Link href="/signup">Add Location</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
