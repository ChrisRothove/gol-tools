import { useMutation } from "@tanstack/react-query";
import { login, register } from "../services/auth.service";

export const useTryLogin = () =>
  useMutation({
    mutationFn: (body) => login(body),
  });

export const useTryRegister = () =>
  useMutation({
    mutationFn: (body) => register(body),
  });
