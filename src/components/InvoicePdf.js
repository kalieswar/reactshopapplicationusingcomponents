import React,{useState, useEffect} from "react";
import {Page, Text, View, Document, StyleSheet, Image} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page:{
        flexDirection:'column',
        backgroundColor:'#E4E4E4',
        padding:'20'
    },
    section:{
        margin: 10,
        padding:10,
        flexGrow:1
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
    },
    subtitle:{
        fontSize: 18,
        fontWeight:'bold',
        marginBottom:5
    },
    text:{
        fontSize:14,
        marginBottom:5
    }
})

function InvoicePdf(){
    const [add,setAdd]= useState({})
    const [cartItems, setCartitems] = useState([])
  
  
  
    useEffect(()=>{
      const address = JSON.parse(localStorage.getItem("shipping-info"))
      setAdd(address);
    },[])
    useEffect(()=>{
      const items = JSON.parse(localStorage.getItem("cart-items") || [])
      setCartitems(items)
    },[])
  
    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Order Details</Text>
                    <Text style={styles.subtitle}>Shipping Details</Text>
                    <Text style={styles.subtitle}>Address: {add.address}, {add.city}, {add.postalCode}, {add.state},{add.country}</Text>
                    <Text style={styles.subtitle}>Phone: {add.phone}</Text>
                    <Text></Text>
                </View>
            </Page>
        </Document>
    )
}

export default InvoicePdf;