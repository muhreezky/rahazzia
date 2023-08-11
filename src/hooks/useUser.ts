import axios from "axios";
import useSWR from "swr";

export default function useUser (username: string) {
  const url = `/api/u/${username}`;
  const { data, error, isLoading } = useSWR(url, async (arg) => await axios.get(arg));
  return { data, error, isLoading };
}