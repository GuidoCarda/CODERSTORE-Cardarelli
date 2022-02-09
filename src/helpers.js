
//Format price
export const formatPrice = (price) =>{ 
  const config = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  return config.format(price)
}