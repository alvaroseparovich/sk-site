const Row = function ({InnerH, color="blue darken-1", textColor="white", align="center", classN}) {
  return (<>
    <div className={`row ${color} ${textColor}-text ${align} ${classN}`} style={{marginBottom:0}}> <br/>
      <div className="container">
        <InnerH />
      </div>
    </div>
  </>)
  }

export default Row