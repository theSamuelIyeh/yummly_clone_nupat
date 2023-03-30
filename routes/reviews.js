const express = require("express");
const axios = require("axios").default;
const router = express.Router();

//get list of reviews
router.get("/list", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const params = req.query;
  console.log(params);
  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/reviews/list/",
      {
        params: params,
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.RAPID_API_HOST,
        },
      }
    );
    res.send(JSON.stringify(response.data, null, 3));
  } catch (error) {
    res.send(JSON.stringify(error, NULL, 3));
  }
});

module.exports = router;
