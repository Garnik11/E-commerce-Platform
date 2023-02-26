import {Link} from "react-router-dom";
import { data } from "./data";


export default function Main(){

    return (
        <>
            <main>
                <div className="mainImg">
                    <h1>RUN OVER <br/>
                        EVERYTHING</h1>
                </div>

                <div className="mainProducts">
                    
                    {data.map((el, i) => {
                        return(
                            
                            <div className="product" key={i} id ={i}>
                                <Link to={"/" + i}> <img src={el.img} /></Link>
                                <h3>{el.brand}</h3>
                                <p>{el.text}</p>
                                <span className="sale">{el.oldPrice}$</span>
                                <span>{el.newPrice}$</span>
                                <button>ADD TO CARD</button>
                            </div>
                        )
                    })}
                </div>

                <div className="about">
                    <div className="aboutTxtDiv">
                    <h1>THE MOUNTAINS <br/> SNOWBOARDING</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
                        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum 
                        dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio.
                    </p>
                    </div>
                </div>

            </main>
            <footer>
                <div className="footDepartments">

                    <div className="footProducts">

                        <h4>PRODUCTS</h4>

                        <p>Mens</p>
                        <p>Womens</p>
                        <p>Youth</p>
                    </div>
                    <div className="footAbout">

                        <h4>ABOUT</h4>

                        <p>Careers and internships</p>
                        <p>Sponserships</p>
                        <p>Team</p>
                    </div>
                    <div className="footSuport">

                        <h4>CUSTOMER SUPPORT</h4>

                        <p>Shipping and Order Tracking</p>
                        <p>Contact Us</p>
                        <p>Easy Returns</p>
                        <p></p>
                    </div>
                    <div className="footNewsletter">

                        <h4>NEWSLETTER</h4>

                        <input type="email" placeholder="Enter your email" /> <br/>

                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>

                    </div>
                </div>
                <p>© 2023 - All Rights Reserved | Design by Andrey S. Rodrigues & Garnik Enoqyan Daviti Coded by MOZG Garnik</p>
            </footer>
        </>
    )
}