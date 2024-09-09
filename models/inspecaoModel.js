const mongoose = require('mongoose');

const InspecaoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  datahora: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plantacao: { type: mongoose.Schema.Types.ObjectId, ref: 'Plantacao', required: true },
});

module.exports = mongoose.model('Inspecao', InspecaoSchema);
