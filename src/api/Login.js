import baseApiInstance from ".";

export const login = async(data) => {
  try {
    const response = await baseApiInstance.post("/api/admin/auth/login", data);
    return response.data.data.jwtToken;

  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: api/admin/auth/login");
  }
};