import { useQuery } from "vue-query";

import { getAll } from "../cake.service";

export const useCakeList = () => {
  return useQuery("cake-list", () => getAll());
};
