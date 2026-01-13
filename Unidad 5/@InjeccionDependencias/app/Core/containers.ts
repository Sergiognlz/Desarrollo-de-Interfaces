import { Container } from "inversify";
import "reflect-metadata";
import { IRepositoryPersonas, PersonasRepository } from "../Model/Data/personasRepository";
import { IRepositoryPersonas as IRepositoryPersonasEmpty, PersonasRepositoryEmpty } from "../Model/Data/personasRepositoryEmpty";  
import { IRepositoryPersonas as IRepositoryPersonas100, PersonasRepository100 } from "../Model/Data/personasRepository100";
import { PeopleListVM } from "../ViewModel/indexVM";
import { TYPES } from "./types";


const container = new Container();


// Vinculamos la interfaz con su implementación concreta
//container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository);
//container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
//export { container };

// Si queremos usar el repositorio vacío, descomenta la siguiente línea y comenta la línea anterior
// container.bind<IRepositoryPersonasEmpty>(TYPES.IRepositoryPersonas).to(PersonasRepositoryEmpty);
// container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
// export { container };        

// Si queremos usar el repositorio con 100 personas, descomenta la siguiente línea y comenta la línea anterior
 container.bind<IRepositoryPersonas100>(TYPES.IRepositoryPersonas).to(PersonasRepository100);
 container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
export { container };