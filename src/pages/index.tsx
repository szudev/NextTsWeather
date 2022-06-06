import type { NextPage } from "next";
import { prisma } from "../db/client";
import { trpc } from "../utils/trpc";

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(["GetAllQuestions"]);
  console.log(data);

  if (isLoading || !data) return <div>Loading...</div>;
  return <div>{data[0]?.question}</div>;
};

export default Home;
