export default class Pessoa {
  private nome?: string;
  private nomeDaMae?: string;
  private dataDeNascimento?: Date;

  validar(): boolean {
    return (
      this.getNome() !== null &&
      this.getNomeDaMae() !== null &&
      this.getDataDeNascimento() !== null
    );
  }

  getNome(): string {
    return this.nome;
  }

  getNomeDaMae(): string {
    return this.nomeDaMae;
  }

  getDataDeNascimento(): Date {
    return this.dataDeNascimento;
  }
}
