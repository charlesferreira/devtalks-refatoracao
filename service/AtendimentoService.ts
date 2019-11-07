import Atendimento from '../model/Atendimento';

export default class AtendimentoService {
  gravarAtendimento(atendimento: Atendimento) {
    console.info('Gravando atendimento...', atendimento);
  }
}
