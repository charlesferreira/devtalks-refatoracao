import Pessoa from './Pessoa';

export default class Atendimento {
  dataOcorrencia: Date;
  interessado?: Pessoa;

  get isAnonimo(): boolean {
    return this.interessado === null;
  }
}
