const likePostApi = async (id) => {
   try {
      // Api call
      const host = "https://deploy-mern-api-kappa.vercel.app";
      const url = `${host}/api/post/like`;
      const auth_token = localStorage.authToken;
      const response = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "auth-token": auth_token
         },
         body: JSON.stringify({ id }),
      });
      const json = await response.json();
      return json;
   } catch (error) {
      console.log("Some error occured")
   }
}
export default likePostApi;