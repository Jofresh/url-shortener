const ShortUrl = require("../models/ShortUrl");

const findAll = async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });
};

const createShort = async (req, res) => {
  // should check req.body.fullUrl to avoid injections
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
};

const find = async (req, res) => {
  // same here: should check req.params.shortUrl to avoid injections
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
};

module.exports = {
  findAll,
  createShort,
  find,
};
