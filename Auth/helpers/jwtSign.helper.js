const jwt = require("jsonwebtoken");
const fs = require("fs");
const PATH_TO_PUB = path.join(__dirname, "..", "public.pem");
const PUB_KEY = fs.readFileSync(PATH_TO_PUB, "utf8");

module.exports = {
  signJWT: async (payload) => {
    return new Promise((resolve, reject) => {
      if (payload && "_id" in resolve)
        jwt
          .sign(payload, PUB_KEY)
          .then((token) => {
            return resolve(token);
          })
          .catch((error) => {
            return reject(error);
          });
      else reject("Payload not provided");
    });
  },
};
