const express = require("express");
const app = express();

app.use(express.json());
// Root routes; mainly used for Elastic Beanstalk health report

app.use("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: {
      message: "here we go",
    },
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
