import axios from "axios";
import useSWR from "swr";
import { jsonize } from "@/libs/utils";

const fetcher = ([base, uname, key]: any[]) => axios.get(`${base}/${uname}?after=${key}`).then(res => res.data);
export default function useMessages (username: string, after: string = "") {
  const { data, isLoading, error } = useSWR(["/api/messages", username, after], fetcher);
  const hasNext = data?.data?.after !== "";
  return { 
    data: jsonize(data), 
    isLoading, 
    error, 
    after: data?.data?.after,
    hasNext,
  };
}