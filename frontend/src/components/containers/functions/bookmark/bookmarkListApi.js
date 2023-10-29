const bookmarkListApi = async () => {
   try {
      // Api call
      const host = "https://deploy-mern-api-kappa.vercel.app";
      const url = `${host}/api/post/bookmarked`;
      const auth_token = localStorage.authToken;
      const response = await fetch(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "auth-token": auth_token
         },
      });
      const json = await response.json();
      return json;
   } catch (error) {
      console.log("Some error occured");
   }
}
module.exports = bookmarkListApi;