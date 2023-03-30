const express = require("express");
const axios = require("axios").default;
const router = express.Router();


//get list of all tags according to params
router.get("/list", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const params = req.query;

  axiosOptions = {
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/tags/list/",
      axiosOptions
    );

    res.send(JSON.stringify(response.data, null, 3));
  } catch (error) {
    res.send(JSON.stringify(error, null, 3));
  }
});

module.exports = router;
