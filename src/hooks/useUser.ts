import axios from "axios";
import useSWR from "swr";

const fetcher = (arg: string) => axios.get(arg).then(res => res.data);

export default function useUser (username: string) {
  const url = `/api/u/${username}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
}