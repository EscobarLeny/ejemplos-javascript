

const _private=new WeakMap();
class Libros{
    constructor(autor,nombre,numerodepaginas){
    const propiedades={ 
    _autor:autor,
    _nombre:nombre,
    _numerodepaginas:numerodepaginas
    }
    _private.set(this,{propiedades})
}
    set nombrelibro(nombre1){
        return _private.get(this).propiedades['_nombre']=nombre1

    }
    get mostrarlibro(){
        return _private.get(this).propiedades['-nombre'];

    }
}
 let libro1 =new Libros("Gabriel Garcia Marquez","cien años de soledad","350")
 console.log(libro1)