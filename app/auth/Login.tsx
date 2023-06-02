"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="transition-all duration-[300ms] ease-out bg-teal-600 px-2 py-1 rounded text-white font-medium focus:ring-2 focus:ring-teal-800"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}
