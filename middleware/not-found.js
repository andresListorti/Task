const notFound = (req, res) => res.status(404).send("Route is not Found");

module.exports = notFound;
