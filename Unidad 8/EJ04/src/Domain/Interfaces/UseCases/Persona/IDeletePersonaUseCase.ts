export interface IDeletePersonaUseCase {
  execute(id: number): Promise<number>;
}
