export class Connection {
  private static apiUrl: string = "ui20251201143140-c2fhavepcaeje4c7.francecentral-01.azurewebsites.net/api/";

  static getConnectionString(): string {
    return this.apiUrl;
  }
}
