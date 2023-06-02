"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <div>
      <li className=" flex items-center gap-5">
        <button
          className="transition-all duration-[300ms] ease-out bg-teal-950 px-2 py-1 rounded text-white font-medium focus:ring-2 focus:ring-red-800"
          onClick={() => signOut()}
        >
          Sign Out
        </button>

        <Link href={"/dashboard"}>
          <Image
            className="w-12 rounded-full"
            width={64}
            height={64}
            src={image}
            alt="profile"
            priority
          />
        </Link>
      </li>
    </div>
  );
}
