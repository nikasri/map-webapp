import React from "react";

// just access the store from here

function RecentComponent(props){
    const recentSearch = Array.from(props.recent);
    console.log("Recent: " ,recentSearch)
    const renderRecent = recentSearch.map(i=><li>{i}</li>);  
    return (
        // <div class="dropdown">
        //     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        //         Recent search
        //     </button>
        //     <ul>{renderRecent}</ul>
        // </div>
        <div>
            <ul>
                {renderRecent}
            </ul>
        </div>
  );
}

export default RecentComponent;