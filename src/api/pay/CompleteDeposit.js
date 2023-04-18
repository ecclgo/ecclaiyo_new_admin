import baseApiInstance from "./PayIndex";

export const CompleteDeposit = (data) => {
  try {
    const response = baseApiInstance.post("/api/user/payment/complete", data);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log("ERROR : ", error);
    throw new Error("ERROR: /api/user/payment/complete");
  }
};