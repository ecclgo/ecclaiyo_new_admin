import baseApiInstance from "./PartnerIndex";

export const WaitingPartnerSearch = async(data) => {
  try {
    const response = await baseApiInstance.get(`/api/admin/waiting-partner/get-all?${data}`);
    return response.data.data;
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/waiting-partner/get-all");
  }
};