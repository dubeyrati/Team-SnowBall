import React from "react";
import { Problem } from "@/app/utils/types/problem";
import Battle from "../../components/Battleground/Battle";

type ProblemPageProps = {
  problem: Problem;
  pid:String
};

const Page = ({params}:{params:{pid:string}}) => {
  const pId = params.pid
  return <>
    <>
    <Battle pid={pId}/>
    </>
  </>;
};

export default Page;