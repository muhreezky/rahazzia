import axios from "axios";
import useSWR from "swr";

const fetcher = (arg:string) => axios.get(arg).then(res => res.data);

export default function useMessages (username: string) {
  const url = `/api/messages/${username}`;
  const { data, isLoading, error } = useSWR(url, fetcher);
  return { data, isLoading, error };
}