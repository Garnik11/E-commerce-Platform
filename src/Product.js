import { useParams } from "react-router-dom";
import {data} from "./data"

export default function Product(){
    const {id} = useParams()
    const prod = data[id]
    return(
        <div className="thisProduct">
            <div className="thisProductImg">
                <img src={prod.img} />
            </div>
            <div className="thisProductText">
                <h1 className="txt"><del>{prod.oldPrice}$</del> </h1>
                <h1 className="txt">{prod.newPrice}$</h1>
                <h3 className="txt">{prod.brand}</h3>
                <h5 className="txt">{prod.text}</h5>
                <p className="txt">{prod.about}</p>

            </div>
        </div>
    )
}