import axios from "axios";
// import useSWRInfinite from "swr/infinite";
import useSWR from "swr";
import { jsonize } from "@/libs/utils";

const fetcher = (arg: string) => axios.get(arg).then(res => res.data);

export default function useMessages (username: string) {
  const url = `/api/messages/${username}`;
  // const getKey = (pageIndex: number, prevCursor: any) => {
  //   if (prevCursor && prevCursor.id) return null;
  //   if (pageIndex === 0) return url;
  //   return `${url}?before=${prevCursor.id}`;
  // }
  // const { } = useSWRInfinite(getKey, fetcher);
  const { data, isLoading, error } = useSWR(url, fetcher);
  const hasNext = data?.values && (data?.after !== data?.values[0]?.id);
  return { 
    data: jsonize(data), 
    isLoading, 
    error, 
    hasNext 
  };
}