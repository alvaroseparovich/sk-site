import React from 'react'
import mainTemplate from '../template'
import Row from '../template/matComponents/row'

const TrabalheNaAlemanhaText = `
  Somos diferente das outras agencias, não você não precisa se preocupar procurando vagas.

  Agilisamos todo o processo pra você.
  Nos informe suas qualificações, e faremos o trabalho sujo por você!
`

const TrabalheNaAlemanha = function () {
  return Row({InnerH:()=>(<>
    <br/>
    <h4 className="card-title">
      Trabalhe na Alemanha! nós te ajudamos.
    </h4>
    <p>{TrabalheNaAlemanhaText}</p>
    <br/>
    <ul className="col s6 left-align ">
      <li>Ajudamos na Documentação</li>
      <li>Procuramos uma boa empresa</li>
      <li>Te conectamos com diversas empresas</li>
      <li>Te ajudamos no processo seletivo</li>
      <li>Você começa a trabalhar na Alemanha!</li>
    </ul>
    <img className="col s6" src="/pngs/floating-to-germany-compressd.png" alt="voando para a alemanha"/>
    <p> - </p>
  </>
  )})
  }

const TaxaZero = function () {
  return Row({InnerH:()=>(<>
    <h4>Custo ZERO!</h4>
    <p>Entendemos que custos iniciais só complicam as coisas</p>
    <p>como queremos que você comece a trabalhar na alemanha o nosso custo é</p>
    <p className="green-text text-lighten-3" style={{fontSize:'18em',margin:'0.1em', lineHeight:'1em'}}>R$ 0</p>
  </>), color:'green'})
}

export default () => mainTemplate(<div className="home">
<TaxaZero/>
<TrabalheNaAlemanha/>
<TaxaZero/>
</div>)