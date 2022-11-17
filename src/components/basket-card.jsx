import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBasket } from "../redux/actions/actionCreaters";



const BasketCard = (props) => {
    const totalPrice = props.basket.reduce((total,product) => (total +=product.price),0 )

    return (
        <div>
            <h2>
                <Link to='/'>&#10094;Alınacaklar Listem</Link>
                <span>Faturam</span>

            </h2>
            { props.basket.map((product,idx) => (
                    <div key={idx} className="product">
                        <img style={{ height: "25em", width: "25em" }} src={product.image} alt={product.name} />
                        <div>
                            <h4>{product.name}</h4>
                            <p>{product.price} &#8378;</p>
                            <button onClick={() => props.deleteBasket(product)}>Siler Misin lütfen</button>
                            <h3>Toplam Sepet: {totalPrice}</h3>
                        </div>
                    </div>
            ))
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        basket: state.basket,

    }
}


export default connect(mapStateToProps,{deleteBasket})(BasketCard);