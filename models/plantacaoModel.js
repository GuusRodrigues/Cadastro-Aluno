const mongoose = require('mongoose');

const PlantacaoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  localizacao: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Plantacao', PlantacaoSchema);
