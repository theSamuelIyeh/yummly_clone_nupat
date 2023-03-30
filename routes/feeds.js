const express = require("express");
const axios = require("axios").default;
const router = express.Router();

//get all ingredients and searches containing the parameter q

router.get("/auto-complete", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const params = req.query;
  console.log(params);
  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/feeds/auto-complete/",
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
    res.send(JSON.stringify(error, null, 3));
  }
});

//get all items containing the search parameter

router.get("/search", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const params = req.query;
  console.log(params);
  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/feeds/search/",
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
    res.send(JSON.stringify(error, null, 3));
  }
});

//get list

router.get("/list", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const params = req.query;
  console.log(params);
  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/feeds/list/",
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
    res.send(JSON.stringify(error, null, 3));
  }
});

// get list similarities

router.get("/list-similarities", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const params = req.query;
  console.log(params);
  try {
    const response = await axios.get(
      "https://yummly2.p.rapidapi.com/feeds/list-similarities/",
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
    res.send(JSON.stringify(error, null, 3));
  }
});

module.exports = router;
