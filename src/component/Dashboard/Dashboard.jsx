import React from "react";
import logo from "../../assests/image/Vector.jpg";

export default function Dashboard() {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div className="dashboard_container"></div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            background: "white",

            display: "flex",
            gap: "15px",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "30px",
            borderRadius: '15px'
          }}
        >
          <div style={{ width: "35px" , flexShrink: 0 }}>
            <img src={logo} alt="image" width="100%"></img>
          </div>
          <div>
          <p>HR & Manager Access</p>
          <p>Manage who can have view and edit access</p>
          </div>
         
        </div>
        <div
          style={{
            width: "50%",
            background: "white",

            display: "flex",
            gap: "15px",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "30px",
            borderRadius: '15px'
          }}
        >
          <div style={{ width: "35px" ,flexShrink: 0  }}>
            <img src={logo} alt="image" width="100%"></img>
          </div>
          <div>
          <p>Control Center</p>
          <p>Manage who can have view and edit access</p>
          </div>
        </div>
      </div>

    
    </div>
  );
}
