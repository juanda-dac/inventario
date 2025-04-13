import getConnection from "../db/database.js";

export async function getCategories(req, res){
    
    const connection = await getConnection();

    const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen from categorias");

    return res.json(result)

}

