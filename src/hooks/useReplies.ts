import axios from "axios";
import useSWR from "swr";

const fetcher = (e: any[]) => axios.get(`${e[0]}/${e[1]}`).then(res => res.data);
export default function useReplies(msgId: string) {
  const { data, error, isLoading, mutate } = useSWR(["/api/messages/replies", msgId], fetcher);
  return { data, error, isLoading, mutate };
}