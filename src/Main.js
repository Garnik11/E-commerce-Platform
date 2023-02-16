import imgJones from "./Img/jones"

export default function Main(){

    const data = [
        {img:{imgJones}, brand:"jones",oldPrice:"500" ,newPrice:"299"},
        {img:"nkar", brand:"jones",oldPrice:"500" ,newPrice:"299"},
        {img:"nkar", brand:"jones",oldPrice:"500" ,newPrice:"299"},
        {img:"nkar", brand:"jones",oldPrice:"500" ,newPrice:"299"},
        {img:"nkar", brand:"jones",oldPrice:"500" ,newPrice:"299"},
        {img:"nkar", brand:"jones",oldPrice:"500" ,newPrice:"299"},
    ]

    

    return (
        <main>
            <div className="mainImg">
                <h1>RUN OVER <br/>
                     EVERYTHING</h1>
            </div>

            <div className="MainProducts">
                {data.map((el, i) => {
                    return(
                        <div>

                        </div>
                    )
                })}
            </div>
        </main>
    )
}