import React from "react";
import info from "./data"

//{props.setup && <h3>{props.setup}</h3>} 

export default function Page(){
    const [currentPage, setCurrentPage] = React.useState(0)
    const mdata = info.map(d =>{
        return d
    })
    const headerText = <h1 className="header-text">Ayomi</h1>

    function changePage(){
        setCurrentPage(prevPage => prevPage + 1)
    }

    return(
        <section className="screen">
            {headerText}

            <p className="mid-text">
                {mdata[currentPage]["id"]}
            </p>

            <button className="btn" onClick={changePage}>
                {mdata[currentPage]["btnText"]}
            </button>
        </section>
    )
}