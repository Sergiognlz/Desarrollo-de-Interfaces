export class Connection {
  private static apiUrl: string = "https://ui20251201143140-c2fhavepcaeje4c7.francecentral-01.azurewebsites.net/api/";
 // private static apiUrl: string = "http://localhost:5068/api/";

  static getConnectionString(): string {
    return this.apiUrl;
  }
}
