import axios from "axios";

export const downloadFile = (data) => {
  const token = localStorage.getItem("TOKEN");
  axios({
    url: `https://dev-api.ecclaiyo.com/api/admin/waiting-partner/${data}/download-zip`,
    method: 'GET',
    responseType: 'blob',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${data}info.zip`);
    document.body.appendChild(link);
    link.click();
  });
};