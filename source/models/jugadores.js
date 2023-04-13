const { Schema, model } = require("mongoose");

const JugadoresSchema = new Schema({
  playerName: {
    type: "string",
    required: [true, "El nombre del jugador es obligatorio"],
  },

  playerPosition: {
    type: "string",
    required: [true, "La posición del jugador es obligatoria"],
  },

  playerImgProfile: {
    type: "string",
    required: [true, "La imagen del jugador es obligatoria"],
  },

  playerSize: {
    type: "string",
    required: [true, "El Peso del jugador es obligatorio"],
  },

  playerWight: {
    type: "string",
    required: [true, "El tamaño del jugador es obligatorio"],
  },

  playerTeamActual: {
    type: "string",
    required: [true, "El Equipo actual del jugador es obligatorio"],
  },

  playerNationality: {
    type: "string",
    required: [true, "La nacionalidad del jugador es obligatorio"],
  },

});

module.exports = model("Jugador", JugadoresSchema);
