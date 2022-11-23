import React from "react";

const BettingButton = () => {
  return (
    <>

    <div className="row mt-3">
        <div className="col">
            <div style={{textAlign:"center"}}>

                <button style={{backgroundColor:"#4CAF50"}} className="btn">Join Green</button>

            </div>
        </div>
        <div className="col">
            <div style={{textAlign:"center"}}>

                <button  style={{backgroundColor:"#9325A6"}} className="btn btn-primary">Join Violet</button>

            </div>
        </div>
        <div className="col">
            <div style={{textAlign:"center"}}>

                <button style={{backgroundColor:"#F44336"}} className="btn btn-primary">Join Red</button>

            </div>
        </div>
    </div>



    
    
    <div style={{marginLeft:40,marginRight:40}} className="mt-5">
      <div>
        <div className="row">
          <div className="col">
            <div style={{ textAlign: "center",alignSelf:'center',alignItems:"center",alignContent:"center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                className="btn"
              >
                0
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#F44336",
                  color: "white",
                }}
                className="btn"
              >
                1
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                className="btn"
              >
                2
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#F44336",
                  color: "white",
                }}
                className="btn"
              >
                3
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                className="btn"
              >
                4
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div style={{marginLeft:40,marginRight:40}} className="mt-3">
      <div>
        <div className="row">
          <div className="col">
            <div style={{ textAlign: "center",alignSelf:'center',alignItems:"center",alignContent:"center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#F44336",
                  color: "white",
                }}
                className="btn"
              >
                5
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                className="btn"
              >
                6
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#F44336",
                  color: "white",
                }}
                className="btn"
              >
                7
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                className="btn"
              >
                8
              </button>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#F44336",
                  color: "white",
                }}
                className="btn"
              >
                9
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default BettingButton;
