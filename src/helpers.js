
//Format price
export const formatPrice = (price) =>{ 
  const config = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  return config.format(price)
}

//  Email validation

export const validateEmail = (email) => {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export const formatDate = ( date ) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return [day, month, year].join('-')
}

/*const updateStocks = () => {
    const itemCollection = collection(db, 'items')
    const batch = db.batch()

    cart.forEach( item => {
      batch.update(itemCollection.doc(item.id), {stock: item.stock - item.qty})
    })

    batch
    .commit()
    .then(()=> {
          console.log("Bache ok")
        })
        .catch(e => console.log(e))

  }*/