export class Connection {
  private connectionString = "https://pokeapi.co/api/v2/pokemon";

  get ConnectionString(): string {
    return this.connectionString;
  }

  set ConnectionString(value: string) {
    this.connectionString = value;
  }

  async get(): Promise<any> {
    const response = await fetch(this.connectionString);
    return response.json();
  }
}
