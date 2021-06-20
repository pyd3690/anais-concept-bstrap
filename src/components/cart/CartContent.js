import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Badge } from "react-bootstrap";
import styles from './CartContent.module.css';
import AppContext from "../../../context/AppContext";

const cart1 = {
  'items': [
    {
      'id': 1,
      'quantity': 1,
      'price': 1000,
      'name': 'Cadeau 1 Cadeau 1Cadeau 1Cadeau',
      'image': '/pictures/shop/shop1.jpeg',
    },
    {
      'id': 2,
      'quantity': 500,
      'price': 1500,
      'name': 'BMW 1',
      'image': '/pictures/shop/shop1.jpeg',
    },
  ],
}

const CartContent = (props) =>  {
    const appContext = useContext(AppContext);
    const router = useRouter();

  const { cart } = appContext;

  return (
    <>
        <div className={styles.container}>
          
          <h4 className={styles.sectionCall} onClick={() => router.back()} style={{cursor: 'pointer', decorationStyle: 'underline'}}>&#60; Retour</h4>
             
          <p className={styles.sectionTitle}>Votre Panier</p>
          <Card style={{ padding: "10px 5px" }} className="cart">
            <Card.Title style={{ margin: '10px' }}>Votre Commande</Card.Title>
            <hr />
            <Card.Body style={{ padding: '10px' }}>
              <div style={{ marginBottom: '20px' }}>
                <h6>Articles Ajoutés:</h6>
              </div>
              <div>
                {cart.items
                  ? cart.items.map((item) => {
                      if (item.quantity > 0) {
                        return (
                          <div className={styles.itemRow}
                            style={{ marginBottom: 15 }}
                            key={item.id}
                          >
                            <div className={styles.cover}>
                              <img src={item.image}
                                  width="100%"
                                  height="100%"             
                              /> 
                          </div>
                            <div className={styles.itemLabel}>
                              <div className={styles.itemName}>{item.name}</div>
                              <div className={styles.itemPrice}>&nbsp; {item.price} FCFA</div>
                            </div>
                            <div>
                              
                            </div>
                            <div className={styles.itemNumber}>
                              <div className={styles.itemQuantity}>
                                <span style={{ marginLeft: 5 }} >
                                  {item.quantity}x
                                </span>
                              </div>
                              <div className={styles.itemButton}>
                                <Button variant="warning" style={{height: 25, padding: 0, width: '40%',}}
                                  onClick={() => { appContext.decreaseItem(item) }}
                                  color="link">
                                  -
                                </Button>
                                <Button variant="warning" style={{height: 25, padding: 0, width: '40%',}}
                                  onClick={() => { appContext.increaseItem(item) }}
                                  color="link">
                                  +
                                </Button>
                              </div>
                              <div className={styles.iconC}>
                                <Button variant="secondary" style={{height: 25, padding: 0, width: '100%',}}
                                    onClick={() => { appContext.deleteItem(item) }}
                                    color="link">
                                    X
                                </Button>
                              </div>
                              
                            </div>
                          </div>
                        );
                      }
                    })
                  : null}
                {
                
                  cart.items.length > 0 ? (
                    <div>
                      <Badge style={{ width: 200, padding: 10 }} color="light">
                        <h5 style={{ fontWeight: 100, color: "gray" }}>Total:</h5>
                        <h3>{ appContext.getCartTotal(cart.items)} FCFA </h3>
                      </Badge>
                      {
                        <div
                          style={{
                            marginTop: 10,
                            marginRight: 10,
                          }}
                        >
                          <Link href="/checkout">
                            <Button style={{ width: "100%" }} variant="warning">
                              <a>Commander</a>
                            </Button>
                          </Link>
                        </div>
                      }
                    </div>
                  ) : (
                    <>
                      {
                        <h3
                          className={styles.sectionEmpty}
                          onClick={() => window.history.back()}
                        >
                          Votre Panier est vide
                        </h3>
                      }
                    </>
                  )
                }
              </div>
              {/* console.log(router.pathname) */}
            </Card.Body>
          </Card>
        </div>
    </>
  )
}

export default CartContent