export default class Pessoa {
  private nomePessoa?: string;
  private nomeDaMae?: string;
  private dataDeNascimento?: Date;

  getNomePessoa(): string {
    return this.nomePessoa;
  }

  getNomeDaMae(): string {
    return this.nomeDaMae;
  }

  getDataDeNascimento(): Date {
    return this.dataDeNascimento;
  }
}
