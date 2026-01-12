
const Main = () =>{
    return(
        <>
        <div id="header">
        <img src="../../assets/logo.png" alt="AgroSense Logo" className="logo" height={60}/>
        <h2>A Farmer's Friend</h2>
        
        <button id="profile_button">
        <img src="../../assets/profile_icon.png" alt="Profile Icon" width="30" height="30"/>
        </button>
    </div>
    
    <div id="navigation_window">
        <button >Crop Advice</button>
        <button >
          Fertilizer Recommendation
        </button> <br></br>
        <button >Weather Today</button> <br></br>
        <button >Market Prices</button> <br></br>
        <button >Cost Calculator</button>
      </div>

    <button id="Logout_button" >Logout</button>
        </>
    );
};

export default Main;