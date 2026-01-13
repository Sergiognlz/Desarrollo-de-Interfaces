import { Repositorio } from "../Model/Data/Repositorio";
import { Persona } from "../Model/Entidades/PersonaModelo";

export class ListadoPersonas{

private _personasList: Persona[]=[];
private _personaSeleccionada: Persona | null = null;

constructor(){
    this._personasList=Repositorio.getPersona();
    this._personaSeleccionada=null;   
}


public get personasList() {
    return this._personasList;
}

public get personaSeleccionada(): Persona | null{
    return this._personaSeleccionada;
}   

public set personaSeleccionada(value: Persona){
    this._personaSeleccionada=value;
    this.alertDatos(this._personaSeleccionada);


}

private alertDatos(_personaSeleccionada:Persona){
    alert("Persona seleccionada: "+this._personaSeleccionada?.Nombre);  
}





}