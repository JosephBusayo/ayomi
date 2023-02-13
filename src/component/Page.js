import React from "react";
import data from "./data"

//{props.setup && <h3>{props.setup}</h3>} 

export default function Page(){
    const [currentPage, setCurrentPage] = React.useState(0)
    const pageData = data.map(page =>{
        return page
    })

    function changePage(){
        setCurrentPage(prevPage => prevPage + 1)
    }

    return(
        <section className="screen">
            <div className="screen-text-wrapper">
                <h1 className="header-text">Ayomi</h1>

                {
                    pageData[currentPage]["img"]  &&
                    <img 
                    src={`../img/${pageData[currentPage]["img"]}`}
                    className = "img"
                    alt = "fun"
                    />
                }

                <p className="mid-text">
                    {pageData[currentPage]["midText"]}
                </p>
                {
                    pageData[currentPage]["placeholder"]  &&
                    <input placeholder={pageData[currentPage]["placeholder"]} />
                }
            </div>
            
            {
                currentPage == pageData.length - 1 ?
                <button className="btn">
                    {pageData[currentPage]["btnText"]}
                </button> :
                <button className="btn" onClick={changePage}>
                    {pageData[currentPage]["btnText"]}
                </button>
            }

        </section>
    )
}