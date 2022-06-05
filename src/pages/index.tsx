import type { NextPage } from "next";
import { prisma } from "../db/client";
import { trpc } from "../utils/trpc";

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(["hi2"]);

  if (isLoading || !data) return <div>Loading...</div>;
  return <div>{data.greeting}</div>;
};

export default Home;
