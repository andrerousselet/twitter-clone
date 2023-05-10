import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { NewTweetForm } from "~/components/NewTweetForm";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 border-b pt-2 bg-white">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
    </>
  );
};

export default Home;
