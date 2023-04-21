import baseApiInstance from "./PartnerIndex"

export const DroppedPartnerSearch = async() => {
  try {
    const response = await baseApiInstance.get("/api/admin/unregister-partners");
    return response.data.data;
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/unregister-partners");
  }
};

