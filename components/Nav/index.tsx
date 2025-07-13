"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="flex">
      <li>
        <Link
          href="/boards"
          className={`nav-link ${pathname === "/boards" ? "active" : ""}`}
        >
          자유게시판
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={`nav-link ${pathname === "/products" ? "active" : ""}`}
        >
          중고마켓
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
