const fetchPostsApi = async () => {
   try {
      // Api call
      const host = "https://deploy-mern-api-kappa.vercel.app";
      const url = `${host}/api/post/allposts`;
      const response = await fetch(url, {
         method: "GET"
      });
      const json = await response.json();
      return json
   } catch (error) {
      console.log("Some error occured")
   }
}
export default fetchPostsApi;