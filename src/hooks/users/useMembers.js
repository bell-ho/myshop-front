import { useQuery } from "react-query";
import { queryKeys } from "@/react-query/constants";
import { getMembers } from "@/apis/users";
import { commentOptions } from "@/react-query/queryOptions";

export function useMembersQuery() {
  const { data = [] } = useQuery([queryKeys.users], getMembers, {
    ...commentOptions(5000, 600000),
  });
}
