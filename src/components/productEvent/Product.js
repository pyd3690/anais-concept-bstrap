import {React, useState, useContext} from 'react';
import Link from 'next/link';
import {Badge, Image, Button, InputGroup, FormControl, Alert} from 'react-bootstrap'
import styles from './Product.module.css'
import ReactMarkdown from "react-markdown";
import AppContext from "../../../context/AppContext";

const Product = (props) => {
    const appContext = useContext(AppContext);
    const [count, setCount] = useState(1);
    const [showConfirmation, setshowConfirmation] = useState(false);
    const [showNoPrice, setshowNoPrice] = useState(false);

    const product_data = props.product
    const categoryID = props.categoryID
    const price = (product_data.price === undefined || product_data.price === null) ? ' ---' : ' ' + product_data.price.toString() + " FCFA";
    const hasNoPrice = (product_data.price === undefined || product_data.price === null);

    //console.log(price);
    return (
        <div className={styles.container}>
            <Link href={"/categories-event/" + categoryID.toString()} passHref>
                <a>
                    <h4 className={styles.sectionCall}>&#60; Retour</h4>
                </a>
            </Link>
            <div ><Image src={product_data.image} fluid className={styles.cover}/></div>
            <h3 className={styles.sectionTitle}>
                <ReactMarkdown>{product_data.name}</ReactMarkdown> 
            </h3>                
            <Link href="#cart">
                <h3 style={{cursor: 'pointer'}}>
                    <Badge variant="secondary">{product_data.category}</Badge>
                </h3>
            </Link>
            <div className={styles.content}>
                Prix: {price} 
            </div>
            <div className={styles.quant}>
                <InputGroup className="mb-3" >
                    <InputGroup.Prepend>
                        <Button variant="warning" style={{backgroundColor: '#F2CF63'}} onClick={() => setCount((count>1)?count - 1:1)}>-</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" placeholder="1" value={count} onChange = {() => {}}/>
                    <InputGroup.Append>
                        <Button variant="warning" style={{backgroundColor: '#F2CF63'}} onClick={() => setCount(count + 1)}>+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div className={styles.contentDesc}>
                <h4>Description:</h4>
                <ReactMarkdown>{"" + product_data.description}</ReactMarkdown>
            </div>
            <Link href="#cart">
                <Button variant="warning" style={{backgroundColor: '#F2CF63'}}
                onClick={() => {   
                        const cartItem = Object.assign(product_data, {'sentQuantity': count});
                        const isAdded = appContext.addItem(cartItem);
                        if (!isAdded && hasNoPrice) {setshowNoPrice(true)}
                        setshowConfirmation(isAdded);
                    }
                }>
                        Ajouter Au Panier
                </Button>
            </Link>
            {showConfirmation && 
                <Alert variant="warning" onClose={() => setshowConfirmation(false)} dismissible autoFocus style={{marginTop: '10px', textAlign: 'center'}}>
                    <Alert.Heading>Ce produit a bien ete ajoute a votre commande</Alert.Heading>
                    <Link href="/cart">
                        <p style={{cursor: 'pointer', textDecoration: 'underline'}}>Voir la commande &#62;</p>
                    </Link>
                </Alert>
            }
            {showNoPrice && 
                <Alert variant="warning" onClose={() => setshowNoPrice(false)} dismissible autoFocus style={{marginTop: '10px', textAlign: 'center'}}>
                    <Alert.Heading>Ce Produit n'a pas de prix listé. Contactez Nous via notre page contact pour plus the details</Alert.Heading>
                    <p style={{cursor: 'pointer', textDecoration: 'underline'}}>Merci &#62;</p>
                </Alert>
            }
        </div>
    )
}

export default Product