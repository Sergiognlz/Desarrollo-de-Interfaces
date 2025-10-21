import { injectable } from "inversify";
import { Persona } from "../Entities/Persona";


export interface IRepositoryPersonas {
     getListadoCompletoPersonas(): Persona[];
}


@injectable()
export class PersonasRepositoryEmpty implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
        
        ];
    }
}
