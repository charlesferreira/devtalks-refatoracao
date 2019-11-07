import Atendimento from '../model/Atendimento';
import PessoaService from '../service/PessoaService';

export default class AtendimentoValidator {
  private erro: string;

  constructor(private pessoaService: PessoaService) {}

  validar(atendimento: Atendimento): boolean {
    this.reset();

    // valida a pessoa: se informou interessado,
    // deve preencher todos os campos obrigatórios
    if (!atendimento.isAnonimo && atendimento.getInteressado().validar()) {
      this.erro = '[pessoa] campos obrigatórios';
      return false;
    }

    // se tem todos os dados obrigatórios, valida
    // se a pessoa ainda não existe no banco
    if (this.pessoaService.pessoaJaCadastrada(atendimento.getInteressado())) {
      this.erro = '[pessoa] pessoa já cadastrada';
      return false;
    }

    // valida o atendimento: se for anônimo e tiver mais de 90 dias
    // corridos desde a ocorrência, ou se não for anônimo e tiver
    // mais de 180 dias desde a ocorrência, exibe mensagem de erro
    if (atendimento.prazoExpirado()) {
      this.erro = '[pessoa] prazo expirado';
      return false;
    }

    return true;
  }

  getErro(): string {
    return this.erro;
  }

  private reset() {
    this.erro = null;
  }
}
