import jsonize from "@/libs/jsonize";
import axios from "axios";
import useSWR from "swr";

const fetcher = (arg:string) => axios.get(arg).then(res => res.data);

export default function useMessages (username: string) {
  const url = `/api/messages/${username}`;
  const { data = {}, isLoading, error } = useSWR(url, fetcher);
  const hasNext = data?.values && (data?.after !== data?.values[0]?.id);
  console.log(jsonize(data));
  return { 
    data: jsonize(data), 
    isLoading, 
    error, 
    hasNext 
  };
}