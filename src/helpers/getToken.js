const getToken = async () => {
  try {
    const response = await fetch(
      "https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin",
      {
        method: "POST",
        body: "uuid=hello",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    window.localStorage.setItem("access_token", data.response.access_token);
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

export default getToken;
