const express = require("express");
const axios = require("axios").default;
const router = express.Router();

//get list of tags
router.get("/list", async (req, res) => {
  const params = req.query;
  console.log(params);
  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/tags/list/",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.RAPID_API_HOST,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
