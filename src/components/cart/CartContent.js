import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Badge } from "react-bootstrap";
import styles from './CartContent.module.css';
//import AppContext from "../../../context/AppContext";

const CartContent = (props) =>  {
    //const appContext = useContext(AppContext);
    const router = useRouter();

  /* const { cart, isAuthenticated } = appContext; */

  return (
    <>
        <div className={styles.container}>
          
                    <h4 className={styles.sectionCall} onClick={() => router.back()} style={{cursor: 'pointer', decorationStyle: 'underline'}}>&#60; Retour</h4>
             
          <p className={styles.sectionTitle}>Votre Panier</p>
          <Card style={{ padding: "10px 5px" }} className="cart">
            <Card.Title style={{ margin: '10px' }}>Votre Commande</Card.Title>
            <hr />
            <Card.Body style={{ padding: '10px' }}>
              <div style={{ marginBottom: '6px' }}>
                <small>Items:</small>
              </div>
              {/* console.log(router.pathname) */}
            </Card.Body>
          </Card>
        </div>
    </>
  )
}

export default CartContent