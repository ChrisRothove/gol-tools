import { useMutation } from "@tanstack/react-query";
import { updateUserAttribute } from "../services/users.service";

export const useUpdateUserAttribute = () =>
  useMutation({
    mutationFn: ({ id, updateObj }) => updateUserAttribute(id, updateObj),
  });
