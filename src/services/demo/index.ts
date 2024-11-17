import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";
import { Iwaitlist } from "@/src/lib/types/waitlist.type";
import { IDemo } from "@/src/lib/types/demo.type";

class DemoServices {
  async joinDemo(data: IDemo) {
    try {
      const response = await CLIENT.post("/api/demo-requests", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new DemoServices();
