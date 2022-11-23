import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#009688",
        padding: 25,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
      }}
    >
      <h5 className="text-white">Available balance: ₹ 0.00</h5>

      <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
        <button
          style={{
            backgroundColor: "#2196F3",
            borderRadius: 10,
            color: "white",
            boxShadow:"black 0px 0px 2px 0px"
          }}
          className="btn "
        >
          Recharge
        </button>
        <button
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            color: "black",
            boxShadow:"black 0px 0px 2px 0px"
          }}
          className="btn"
        >
          Read Rule
        </button>
      </div>
      {/* F5F5F5 */}
    </div>
  );
};

export default Header;
