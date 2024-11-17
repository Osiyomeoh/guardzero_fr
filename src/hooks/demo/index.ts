import { IDemo } from "@/src/lib/types/demo.type";

import Service from "@/src/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRequestDemoMutation = () => {
  return useMutation({
    mutationFn: (data: IDemo) => {
      return Service.DemoServices.joinDemo(data);
    },
    onSuccess: (data, variables, context) => {
      if (!data) return;
      toast.success("Demo request sent successfully");
    },
  });
};
