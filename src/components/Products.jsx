import React from 'react'

export const Products = () => {
	return(
		<div class="products">
      <div class="product fadeInUp">
        <div class="content">
          <div class="image-product">
						<img src={process.env.PUBLIC_URL + "/assets/box1.png"} alt="" />
          </div>
          <h3>Producto 1</h3>
          <p>Miles de productos hay en el mercado, pero nada como una caja con gatitos</p>
          <button class="main_btn">
            Lo quiero
          </button>
        </div>
      </div>
      <div class="product fadeInUp">
        <div class="content">
          <div class="image-product">
						<img src={process.env.PUBLIC_URL + "/assets/box2.png"} alt="" />
          </div>
          <h3>Producto 1</h3>
          <p>Miles de productos hay en el mercado, pero nada como una caja con gatitos</p>
          <button class="main_btn">
            Lo quiero
          </button>
        </div>
      </div>
    </div>
	)
}
