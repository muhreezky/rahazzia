import axios from "axios";
import useSWR from "swr";

export default function useMessages (username: string) {
  const url = `/api/messages/${username}`;
  const { data, isLoading, error } = useSWR(url, async (arg) => await axios.get(arg));
  return { data, isLoading, error };
}