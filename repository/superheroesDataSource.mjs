export default class SuperheroesDataSource {
    //Método abstracto para obtener todos los superhéroes
    obtenerTodos(){
        throw new Error('Este metodo debe ser implementado por la subclase');
    }
}

