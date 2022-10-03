import { httpClient } from "../../core/http/http.client";
import { Cake } from "./cake.model";

export const getAll = async () => {
  const { data } = await httpClient.get<{ cakes: Cake[] }>("/cake/list");

  return data.cakes;
};
