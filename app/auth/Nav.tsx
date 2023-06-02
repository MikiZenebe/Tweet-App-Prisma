import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

export default async function Nav() {
  //Get the user
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-6">
      <Link href={"/"}>
        <h1 className="font-bold">Post it</h1>
      </Link>

      <ul className="flex gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image} />}
      </ul>
    </nav>
  );
}
