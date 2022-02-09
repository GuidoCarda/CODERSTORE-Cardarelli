import React, { useState } from 'react'
import './AddItem.css'
import { AiOutlineCloudUpload } from 'react-icons/ai'
 
//Firebase
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

const AddItem = () => {
  const [image, setImage] = useState('')

  const onSubmit = (event) =>{
    event.preventDefault()

    const title = event.target.elements.title.value
    const description = event.target.elements.description.value
    const price = event.target.elements.price.value
    const stock = event.target.elements.stock.value
    const category = event.target.elements.category.value

    const props = {title, description, price,stock,category}

    //Checkea que ningun campo este vacio
    const isEmpty = Object.values(props).some(x => x === null || x === '');

    if (isEmpty) return alert('Campos vacios, complete todos los campos para poder cargar el producto')

    // Subo la imagen firebase storage
    if(typeof image !== 'undefined'){
      const storage = getStorage()
      const storageRef = ref(storage, `items/${title}`)
      
      uploadBytes(storageRef, image).then(snapshot=>{
        console.log(`Archivo subido ${snapshot}`)
      })
    }

    //Creo el documento del producto cargado en firestore en la collecion de items
    const addToFirebase = async (props) =>{
      const {title, description, price, stock, category} = props

      addDoc(collection(db,"items"), {
        title: title,
        description: description,
        price: price,
        stock: stock,
        category: category
      }).then( doc => {
        console.log(`Se creo el documento con el id ${doc.id}`)
      }).catch( err => console.log(err))
    }

    addToFirebase(props)
  }

  return (
    <section className='container addItem'>
      <form className='item-upload-form' onSubmit={onSubmit}>

        <h2 className='addItem-title'>Cargar producto</h2>

        <div className="form-field">
          <h3>Nombre del producto</h3>
          <input type="text" name='title' id='title'/>
        </div>

        <div className="form-field">
          <h3>Descripción</h3>
          <textarea id="description" name='description'></textarea>
        </div>

        <div className="form-field">
          <h3>Precio</h3>
          <input type="number" id='price' name='price'/>
        </div>

        <div className="form-field">
          <h3>Stock</h3>
          <input type="number" id='stock' name='stock'/>
        </div>

        <div className="form-field">
          <h3>Categoria</h3>
          <input type="text" id='category' name='category'/>
        </div>

        <label className="form-field file-upload">
            <AiOutlineCloudUpload/>
            <span>Subir Imagen</span>
            <input 
              type="file" 
              onChange={(e)=>(setImage(e.target.files[0]))} 
              id='image' 
            />
        </label>

        <button className="btn btn-span" type='submit'>Agregar</button>
      </form>
    </section>
  )
}

export default AddItem
