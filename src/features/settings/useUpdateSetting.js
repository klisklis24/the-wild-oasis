import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("setting successfully edited");
      queryClient.invalidateQueries(["settings"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
