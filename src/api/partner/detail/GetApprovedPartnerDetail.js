import baseApiInstance from "./PartnerDetailIndex"

export const GetApprovedPartnerDetail = async(data) => {
  try {
    const response = await baseApiInstance.get(`/api/admin/approved-partners/${data}`);
    return response.data.data;
  } catch (error) {
    console.log("ERROR : ", error);
    throw new Error("/api/admin/approved-partners");
  }
};

