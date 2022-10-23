const express = require("express");
const path = require("path");
const twitterClient = require("./twitterClient");

const app = express();

// ! PRODUCTION
// app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.status(200).json({
    status: 200,
    statusTxt: "OK",
    info: {
      text: "There are three endpoints available for use in this API.",
      examples: {
        keywords: "/search?keywords=${keywords_here}",
        search: "/search?username=${username_here}",
        random: "/random?username=${username_here}",
      },
    },
  });
});

app.get("/api/tweets/search", async function (req, res) {
  if (Object.keys(req.query).length === 0) {
    res.status(200).json({
      status: 200,
      statusTxt: "OK",
      info: {
        text: "The search endpoint requires additional parameters.",
        examples: {
          username: "/search?username=${username_here}",
          keywords: "/search?keywords=${keywords_here}",
        },
      },
    });
  } else if (req.query.username) {
    const isValidTwitterHandle = /^(\w){1,15}$/.test(req.query.username);

    if (isValidTwitterHandle) {
      const response = await twitterClient.get(req.query.username, "username");

      if (response.status === 200) {
        res
          .status(200)
          .json({ status: 200, statusTxt: "OK", data: response.data });
      } else if (response.status === 400) {
        res.status(400).json({ status: 400, statusTxt: "Bad Request" });
      } else if (response.status === 404) {
        res.status(404).json({ status: 404, statusTxt: "Not Found" });
      }
    } else {
      res.status(400).json({ status: 400, statusTxt: "Bad Request" });
    }
  } else if (req.query.keywords) {
    const response = await twitterClient.get(req.query.keywords, "keywords");

    if (response.status === 200) {
      res
        .status(200)
        .json({ status: 200, statusTxt: "OK", data: response.data });
    } else if (response.status === 400) {
      res.status(400).json({ status: 400, statusTxt: "Bad Request" });
    } else if (response.status === 404) {
      res.status(404).json({ status: 404, statusTxt: "Not Found" });
    }
  } else {
    res.status(400).json({ status: 400, statusTxt: "Bad Request" });
  }
});

app.get("/api/tweets/random", async function (req, res) {
  if (Object.keys(req.query).length === 0) {
    const response = await twitterClient.getRandom();

    // response is a collection of responses, which are handled in twitterClient
    return res
      .status(200)
      .json({ status: 200, statusTxt: "OK", data: response });
  } else return res.status(400).json({ status: 400, statusTxt: "Bad Request" });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    info: {
      text: "There are three endpoints available for use in this API.",
      examples: {
        keywords: "/search?keywords=${keywords_here}",
        search: "/search?username=${username_here}",
        random: "/random",
      },
    },
    status: 404,
    statusTxt: "Not Found",
  });
});

app.listen(3080);
