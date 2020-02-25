const Row = function ({InnerH, color="blue darken-1", textColor="white", align="center"}) {
  return (<>
    <div className={`row ${color} ${textColor}-text ${align}`}> <br/>
      <div className="container">
        <InnerH />
      </div>
    </div>
  </>)
  }

export default Row