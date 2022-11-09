function ShoppingCart({cartItems,onAdd,onRemove}){
    return (
      <aside style={{margin:'auto'}}>
       <h2>Cart Items</h2>
       <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
       <ul style={{display:'block',padding:'10px',margin:'10px',listStyle:'none'}}></ul>
       {
                   cartItems.map(cart=>{
                       return(
                       <div style={{marginRight:'0px'}} key={cart.id}>
                       <li style={{fontSize:'30px'}}>{cart.name}</li>
                       <li><img src={cart.image_url}/></li>
                       <li>{cart.price}</li>
                       <li>{cart.category}</li>
                       <button onClick={()=>{onAdd(cart)}} style={{backgroundColor:'red'}}>Add</button>
                       <button onClick={()=>{onRemove(cart)}} style={{backgroundColor:'red'}}>Remove</button>
                        </div>
                       );
                   })
               }
               {cartItems.length !== 0 && (
                   <div>
                   <hr></hr>
                   <div>
                       <h2>Total Price</h2>
                       <h3>
                        
                       </h3>
                   </div>
                   </div>
               )}
      </aside>
    );
   }
   export default ShoppingCart;