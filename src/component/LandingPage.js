import React, {useState} from 'react';


export default function LandingPage(){
    const [next, setNext] = useState(false)

    const headerText = <h1 className="header-text">Ayomi</h1>
    const mid_text1 = <p>
        This is our 3rd val’s day together 
        and I was thinking of a way to 
        make it feel different from the 
        previous ones, so I came up with 
        this game!
    </p>
    const mid_text2 = <p>
        5 or 10 questions in total and you 
        are to answer all of them may the 
        ancestors be with you :)
    </p>

    function toogleNext(){
        setNext(prevSate => !prevSate)
    }

    return(
        <section className="landing-page screen">
            {headerText}

            <p className="mid-text">
                {!next ? mid_text1 : mid_text2}
            </p>

            <button className="btn" onClick={toogleNext}>
                {!next ? 'Continue' : 'Start Game'}
            </button>
        </section>
    )
}