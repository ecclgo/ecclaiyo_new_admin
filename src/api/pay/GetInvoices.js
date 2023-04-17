import baseApiInstance from "./PayIndex";

export const GetInvoices = async() => {
  try {
    const response = await baseApiInstance.get("/api/admin/deposit/invoices");
    return response.data.data;
    console.log(response);
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/deposit/invoices");
  }
};
