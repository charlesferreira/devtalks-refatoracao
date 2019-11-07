import Pessoa from './Pessoa';

export default class Atendimento {
  private dataOcorrencia: Date;
  private interessado?: Pessoa;

  get isAnonimo(): boolean {
    return this.interessado === null;
  }

  getInteressado(): Pessoa {
    return this.interessado;
  }

  getDataOcorrencia(): Date {
    return this.dataOcorrencia;
  }
}
