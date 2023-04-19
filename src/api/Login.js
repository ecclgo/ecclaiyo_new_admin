import baseApiInstance from ".";

export const login = async(data) => {
  try {
    const response = await baseApiInstance.post("/api/admin/auth/login", data);
    return response.data.data.jwtToken;

  } catch (error) {
    alert("Id와 비밀번호를 확인해주세요.");
    window.location.reload();
    console.log("ERROR: ", error);
    throw new Error("ERROR: api/admin/auth/login");
  }
};