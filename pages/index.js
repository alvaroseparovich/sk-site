import React from 'react'
import mainTemplate from '../template'
import {BRAND_NAME} from '../brand-conf'

const text = `

`

export default () => mainTemplate(<>
  <div className="row blue darken-1 center white-text"> <br/>
    <div className="container">
       <br/>
        <h4 className="card-title">
          Porque escolher a {BRAND_NAME}?
        </h4>
        <p>porque nao cobramos bsta nenhuma</p>
        <br/>
        <img src="/pngs/floating-to-germany-compressd.png" alt=""/>
    </div>
  </div>
</>)