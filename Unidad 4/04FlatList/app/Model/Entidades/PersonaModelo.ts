

export class Persona{
 private id:number
 private nombre:String   

constructor(id:number, nombre:String){
    this.id=id;
    this.nombre=nombre;
}

public get Id():number{
    return this.id; 
}

public get Nombre():String{
    return this.nombre; 
}

}