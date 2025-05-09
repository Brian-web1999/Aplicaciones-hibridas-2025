import mongoose from "mongoose"; // Importo mongoose
const Schema = mongoose.Schema; // Creo el esquema

// Defino el Esquema
const userSchema = new Schema({
    name: String,
    email: String,
    legajo: Number,
    password: String
}); 

// Creo el usuario
const User = mongoose.model('user', userSchema); 

export default User;
