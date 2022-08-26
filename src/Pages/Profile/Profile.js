import './ProfileStyle.css';
import {useEffect, useState} from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const Profile = () => {

    const [orders, setOrders] = useState([]);

    useEffect(( ) => {
        getOrdersHandler();
    }, []);

    function getOrdersHandler() {
        fetch('http://localhost:3000/Orders')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setOrders(data.orderItems);
            });
    }

    return(
        <div className="profile_items">
            <div style={{fontSize: 35, paddingTop: 20, marginRight: 850}}>Your Orders' History</div>
            <div className= "orderCard">
                {orders.map((order) => {
                    return <Order
                        key = {order.orderId}
                        order = {order}
                        />
                    })
                }
            </div>
        </div>
    );
}

const Order = ({ order }) => {
    return(
        <Card style={{marginBottom: 10, width: 400}}>
            <CardContent>
                <div style={{fontSize: 20, marginRight: 230, marginBottom: 15}}><b> Order no. {order.orderId} </b></div>
                <div>{order.items.map((item) => {
                    return <Item
                        key = {item.id}
                        item = {item}
                        />
                    })
                }
                </div>
                <div style={{marginLeft: 230, marginTop: 15}}><b>Total Amount {order.totalAmountOfCart.toFixed(2)} $ </b></div>
            </CardContent>
        </Card>
    );
};

const Item = ({item}) => {
    return(
        <div>
            <div className="itemCard">
                <div style={{marginLeft: 10, paddingRight: 50, textAlign: 'left'}}>{item.name}</div>
                <div style={{paddingRight: 35, textAlign: 'left'}}> x {item.quantity}</div>
                <div>{item.totalPriceForItem} $ </div>
            </div>
        </div>
    );
};

export default Profile;