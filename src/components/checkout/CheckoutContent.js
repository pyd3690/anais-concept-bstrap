import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Badge, InputGroup, FormControl, Form } from "react-bootstrap";
import styles from './CheckoutContent.module.css';
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

const CheckoutContent = (props) =>  {
    const appContext = useContext(AppContext);
    const router = useRouter();
    const { cart } = appContext;
    const [data, setData] = useState({
      name: "",
      address: "",
      moreInfo: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      ctype: "",
    });
    const [validated, setValidated] = useState(false);



    function onChange(e) {
      // set the key = to the name property equal to the value typed
      console.log("id: " + e.target.id)
      console.log(data)
      const updateItem = (data[e.target.id] = e.target.value);
      // update the state data object
      setData({ ...data, updateItem });
    }

    async function submitOrder(event){
      const form = event.currentTarget;
      var validForm = true;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        validForm = false;
        //return;
      }

      setValidated(true);
      if (!validForm) {
        return;
      }
      alert("Commande Confirmee!!!")
    }

  return (
    <>
        <div className={styles.container}>
          
          <Link href='/cart'><h4 className={styles.sectionCall} style={{cursor: 'pointer', decorationStyle: 'underline'}}>&#60; Retour au panier</h4></Link>
             
          <p className={styles.sectionTitle}>Vos Informations de Livraison</p>
          <Card style={{ padding: "10px 5px" }} className="cart">
            <Card.Title style={{ margin: '10px' }}>Votre Commande</Card.Title>
            <hr />
            <Card.Body style={{ padding: '10px' }}>
              <div style={{ marginBottom: '20px' }}>
                <h6>Remplissez les champs ci dessous</h6>
              </div>
              <div>
                <Form noValidate validated={validated} onSubmit={submitOrder}>
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Nom</Form.Label>
                      <Form.Control id="name" placeholder="Nom & Prenoms" required type="text" onChange={onChange} /* isInvalid *//>
                      <Form.Control.Feedback type="invalid">
                        Entrer vos nom et prenoms
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Telephone</Form.Label>
                      <Form.Control id="phone" placeholder="Numero de telephone" required type="text" onChange={onChange} /* isInvalid *//>
                      <Form.Control.Feedback type="invalid">
                        Entrer votre numero de telephone
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Email</Form.Label>
                      <Form.Control id="email" placeholder="Email" required type="email" onChange={onChange} /* isInvalid *//>
                      <Form.Control.Feedback type="invalid">
                        Entrer une valide email
                      </Form.Control.Feedback>
                  </Form.Group>                  
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Addresse</Form.Label>
                      <Form.Control id="address" placeholder="Votre addresse (ou indiquez brievement)" as="textarea" rows={3}  required  onChange={onChange} /* isInvalid *//>
                      <Form.Control.Feedback type="invalid">
                        Entrer une addresse
                      </Form.Control.Feedback>
                  </Form.Group>                    
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Details Supplementaire</Form.Label>
                      <Form.Control id="moreInfo" placeholder="des infos supplementaire sur le lieu de livraison (Optionel)" as="textarea" rows={3}  onChange={onChange} /* isInvalid *//>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Ville</Form.Label>                    
                    <Form.Control id="city" placeholder="Ville" required type="text" onChange={onChange} defaultValue="Lome" /* isInvalid *//>
                    <Form.Control.Feedback type="invalid">
                      Entrer votre ville
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Pays</Form.Label>
                    <Form.Control id="country" placeholder="Pays" required type="text" onChange={onChange} defaultValue="TOGO" /* isInvalid *//>
                    <Form.Control.Feedback type="invalid">
                      Entrer Votre Pays
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                      <Form.Label className={styles.label}>Preference</Form.Label>
                    <Form.Control as="select" custom id="country" required onChange={onChange}>
                      <option selected value='delivery'>Je veux me faire Livrer</option>
                      <option value='pickup'>Je veux passer recuperer ma commande</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Choisissez votre preference
                    </Form.Control.Feedback>
                  </Form.Group>
                  <h5 style={{fontWeight: 'normal', marginTop: '20px',}}>Total:  { appContext.getCartTotal(cart.items)} FCFA </h5>
                  <Form.Group style={{fontWeight: 'bold', marginTop: '20px',}}>
                    <Form.Check
                      id="ctype"
                      required
                      label="En cliquant, vous acceptez de payer le montant total de la commande a la reception de la commande"
                      feedback="Vous devez acceptez les conditions avant de confirmer la commande"
                    />
                    <Form.Control.Feedback type="invalid">
                    Vous devez acceptez les conditions avant de confirmer la commande
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button style={{ width: "100%", marginTop: "15px"}} variant="warning" type="submit">
                      <a>Confirmer</a>
                    </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>
    </>
  )
}

export default CheckoutContent