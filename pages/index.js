import React from 'react'
import mainTemplate from '../template'
import Row from '../template/matComponents/row'

const TrabalheNaAlemanhaText = `
  Somos diferente das outras agencias, você não precisa se preocupar procurando vagas.

  Agilisamos todo o processo pra você.
  Nos informe suas qualificações, e faremos o trabalho sujo por você!
`

const TrabalheNaAlemanha = function () {
  return Row({InnerH:()=>(<div className="TrabalheNaAlemanha">
    <div className="text-content col s6 left-align ">
      <h4 className="card-title">
        Trabalhe na Alemanha! nós te ajudamos.
      </h4>
      <p>{TrabalheNaAlemanhaText}</p>
      <button class="btn orange lighten-2 deep-orange-text text-darken-4 waves-effect waves-light btn-large" type="submit" name="action">
        <b>Cadastre-se</b>
        <i class="material-icons right">send</i>
      </button>
    </div>
    <img className="col s6" src="/pngs/floating-to-germany-compressd.png" alt="voando para a alemanha"/>
  </div>
  )})
  }

const TaxaZero = function () {
  return Row({InnerH:()=>(<div className="TaxaZero">
    <div className='right col s6 text-content'>
      <h4>Custo ZERO!</h4>
      <p>Entendemos que custos iniciais só complicam as coisas</p>
      <p>como queremos que você comece a trabalhar na alemanha o nosso custo é</p>
    </div>
    <img className="col s5" src="/pngs/taxa-zero.png" alt="R$ 0"/>
  </div>), color:'blue'})
}

const Calculando = function () {
  return Row({InnerH:()=>(<div className="Calculando">
    <div className='left col s6 text-content'>
      <h4>Qual o Processo?</h4>
      <br/>
      <ul>
        <li>Ajudamos na Documentação</li>
        <li>Procuramos uma boa empresa</li>
        <li>Te conectamos com diversas empresas</li>
        <li>Te ajudamos no processo seletivo</li>
        <li>Você começa a trabalhar na Alemanha!</li>
      </ul>

    </div>
    <img className="col s6" src="/pngs/calculando.png" alt="Calculando o Risco"/>
  </div>), color:'blue lighten-2',})
}

const AindaComDuvida = function () {
  return Row({InnerH:()=>(<div className="AindaComDuvida">
    <div className='text-content left'>
      <h4>Ainda com Duvida?</h4>
      <p>Veja alguns de nossos artigos e vídeos logo abaixo</p>
    </div>
    <img className="col s10 right" src="/pngs/duvida.png" alt="Calculando o Risco"/>
  </div>), color:'white', textColor:'gray'})
}

const Artigos = function () {
  return Row({InnerH:()=>(<div className="Artigos">
    <div className='col s12 text-content'>
      <h4>Artigos</h4>
      <ul>
        <li>Ajudamos na Documentação</li>
        <li>Procuramos uma boa empresa</li>
        <li>Te conectamos com diversas empresas</li>
        <li>Te ajudamos no processo seletivo</li>
        <li>Você começa a trabalhar na Alemanha!</li>
        <li>Ajudamos na Documentação</li>
        <li>Procuramos uma boa empresa</li>
        <li>Te conectamos com diversas empresas</li>
        <li>Te ajudamos no processo seletivo</li>
        <li>Você começa a trabalhar na Alemanha!</li>
      </ul>
    </div>
  </div>), color:'grey lighten-2',textColor:'grey darken-2'})
}
export default () => mainTemplate(<div className="home">
<TrabalheNaAlemanha/>
<TaxaZero/>
<Calculando/>
<AindaComDuvida/>
<Artigos/>
</div>)