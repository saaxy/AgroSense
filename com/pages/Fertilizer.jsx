const Fertilizer = () =>{
    return(
        <div id="fertilizer-screen">
        <h1>Fertilizer Recommendations</h1>
        <p id="welcome-message">Welcome to the Fertilizer screen.</p>
            <div className="container-for-input">
                <label htmlFor="crop-type">Select Crop Type:</label>
                <select id = "crop-type">
                    <option value="">--Select--</option>
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                    <option value="maize">Maize</option>
                    <option value="cotton">Cotton</option>
                </select>
            </div>
            <button type="button" >Get Fertilizer Recommendations</button> <br></br>

        <button id="back-button" >Back to Main Page</button>
    </div>

    );

};

export default Fertilizer;
