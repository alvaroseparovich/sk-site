import Footer from './footer'

const mainTamplate = (html)=>(
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />

  <div className="container center ">
    <h1>Our Company</h1>
  </div>
  <div className="main">
  {html}
  </div>
  <Footer/>
</div>
)

export default mainTamplate
