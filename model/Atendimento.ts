import Pessoa from './Pessoa';

export default class Atendimento {
  private dataOcorrencia: Date;
  private interessado?: Pessoa;

  get isAnonimo(): boolean {
    return this.interessado === null;
  }

  prazoExpirado(): boolean {
    const dateDiff = Date.now() - this.getDataOcorrencia().getTime();
    const numDiasOcorrencia = dateDiff / 1000 / 3600 / 24;
    return (
      numDiasOcorrencia > 180 || (this.isAnonimo && numDiasOcorrencia > 90)
    );
  }

  getInteressado(): Pessoa {
    return this.interessado;
  }

  getDataOcorrencia(): Date {
    return this.dataOcorrencia;
  }
}
