import Atendimento from '../model/Atendimento';
import PessoaService from '../service/PessoaService';
import Pessoa from '../model/Pessoa';

export default class AtendimentoValidator {
  private erro: string;

  constructor(private pessoaService: PessoaService) {}

  getErro(): string {
    return this.erro;
  }

  validar(atendimento: Atendimento): boolean {
    this.reset();

    return (
      this.validarDadosInteressado(atendimento) &&
      this.validarPessoaNaoExisteNoBanco(atendimento.getInteressado()) &&
      this.validarAtendimentoNoPrazo(atendimento)
    );
  }

  private validarDadosInteressado(atendimento: Atendimento) {
    if (atendimento.isAnonimo || atendimento.getInteressado().validar()) {
      return true;
    }

    this.erro = '[pessoa] campos obrigatórios';
    return false;
  }

  private validarPessoaNaoExisteNoBanco(pessoa: Pessoa) {
    if (!this.pessoaService.pessoaJaCadastrada(pessoa)) {
      return true;
    }

    this.erro = '[pessoa] pessoa já cadastrada';
    return false;
  }

  private validarAtendimentoNoPrazo(atendimento: Atendimento): boolean {
    if (!atendimento.prazoExpirado()) {
      return true;
    }

    this.erro = '[pessoa] prazo expirado';
    return false;
  }

  private reset() {
    this.erro = null;
  }
}
