import axios from "axios";
import useSWR from "swr";
import { jsonize } from "@/libs/utils";

const fetcher = ([base, uname, key]: any[]) => axios.get(`${base}/${uname}?after=${key}`).then(res => res.data);
export default function useMessages (username: string, after: string = "") {
  const { data, isLoading, error, mutate } = useSWR(["/api/messages", username, after], fetcher, {
    refreshInterval: 1000
  });
  const hasBefore = data?.data?.messages?.[0]?.id === data?.data?.after;
  const hasNext = !!data?.data?.after;
  return { 
    data: jsonize(data), 
    isLoading, 
    error, 
    before: data?.data?.messages?.[0]?.id,
    after: data?.data?.after,
    hasNext,
    hasBefore,
    mutate
  };
}