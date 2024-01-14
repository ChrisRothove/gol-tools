import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../services/users.service";

export const useGetUserList = () =>
  useQuery({ queryKey: ["getUserList"], queryFn: getUserList });
