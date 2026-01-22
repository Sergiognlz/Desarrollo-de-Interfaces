export const TYPES = {
  IPersonaRepository: Symbol("IPersonaRepository"),
  IDepartamentoRepository: Symbol("IDepartamentoRepository"),

  GetPersonaUseCase: Symbol("GetPersonaUseCase"),
  AddPersonaUseCase: Symbol("AddPersonaUseCase"),
  UpdatePersonaUseCase: Symbol("UpdatePersonaUseCase"),
  DeletePersonaUseCase: Symbol("DeletePersonaUseCase"),

  GetDepartamentoUseCase: Symbol("GetDepartamentoUseCase"),
  AddDepartamentoUseCase: Symbol("AddDepartamentoUseCase"),
  // No necesitamos Update ni Delete para departamentos
};
