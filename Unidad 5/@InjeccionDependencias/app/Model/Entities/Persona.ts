

export class Persona{
 private id:number
 private nombre:String   
 private apellidos:String  

constructor(id:number, nombre:String, apellidos:String){
    this.id=id;
    this.nombre=nombre;
    this.apellidos=apellidos;
}

public get Id():number{
    return this.id; 
}

public get Nombre():String{
    return this.nombre; 
}
public get Apellidos():String{
    return this.apellidos;  
}


}