"use client";
import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");

  return (
    <div className="max-w-[1000px] py-12">
      <form className="flex flex-col gap-4 max-w-[400px] sm:max-w-[550px] md:max-w-[800px] mx-auto bg-white rounded-lg py-12 px-8">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="Share your tought"
          rows={2}
          className="transition-all duration-[300ms] ease-out p-2 outline-none outline-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="transition-all duration-[300ms] ease-out bg-teal-600 w-[150px] py-1 mx-auto my-5 text-white rounded-lg shadow  "
        >
          Post
        </button>
      </form>
    </div>
  );
}
