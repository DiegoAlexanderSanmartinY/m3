const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getC = async(req, res) => {

  try {
    const { id } = req.params;
    const { status, name, species, origin, image, gender } = (await axios(URL + id)).data;
    const character = { id, status, name, species, origin, image, gender };

      return character 
        ? res.status(200).json(character)
        : res.status(404).send("Character Not found");
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getC };
