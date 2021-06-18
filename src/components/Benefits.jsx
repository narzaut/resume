import React from 'react'

export const Benefits = () => {
	return(
		<div class="beneficios">
    	<div class="beneficio">
    	  <div class="content_beneficio">
    	    <img src={process.env.PUBLIC_URL + "/assets/b1.png"} alt="" />
    	    <h3>Los mas suavecitos</h3>
    	    <p class="text_beneficio">
    	      Miles de productos hay en el mercado, pero nada como una caja con gatitos
    	    </p>
    	  </div>
    	</div>
    	<div class="beneficio">
    	  <div class="content_beneficio">
    	    <img src={process.env.PUBLIC_URL + "/assets/b2.png"} alt="" />
    	    <h3>Lo más increíble</h3>
    	    <p class="text_beneficio">
    	      Miles de productos hay en el mercado, pero nada como una caja con gatitos
    	    </p>
    	  </div>
    	</div>
    	<div class="beneficio">
    	  <div class="content_beneficio">
    	    <img src={process.env.PUBLIC_URL + "/assets/b3.png"} alt="" />
    	    <h3>Lo mas confiable</h3>
    	    <p class="text_beneficio">
    	      Miles de productos hay en el mercado, pero nada como una caja con gatitos
    	    </p>
    	  </div>
    	</div>
    </div>
	)
}