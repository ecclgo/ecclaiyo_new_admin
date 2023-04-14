import baseApiInstance from "./PartnerIndex"

export const ChangeStatus = async(data) => {
  try {
    await baseApiInstance.put("/api/admin/waiting-partner/update", data);
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/waiting-partner/update");
  }
};

export const ChangeActiveStatus = async(data) => {
  try {
    await baseApiInstance.put(`/api/admin/status`, data);
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/waiting-partner/update");
  }
}