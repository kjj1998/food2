import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Luan9n7Fl9xhSk4FjjyInPYG0RE8qKHzACltgk3KG_m-c5Gu8cT9bMemshZPh806qD5CSjNKiJEi2tZX4L71ksYFpFPEaDs4ny7ut47535kTshPd10eq48KtAW4vYHYx",
  },
});
