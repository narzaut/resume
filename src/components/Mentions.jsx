import React from 'react'

export const Mentions = () => {
	return(
		<div>
			<h2 class="mention_title">Menciones</h2>
    	<div class="mentions">
    		<div class="mention">
    		  <div class="content_mention">
    		    <img src={process.env.PUBLIC_URL + "/assets/p1.png"} alt="" />
    		    <div class="text">
    		      <h3>Mario</h3>
    		      <p>Miles de productos hay en el mercado, pero nada como una caja con gatitos</p>
    		    </div>
    		  </div>
    		</div>
    		<div class="mention">
    		  <div class="content_mention">
    		    <img src={process.env.PUBLIC_URL + "/assets/p2.png"} alt="" />
    		    <div class="text">
    		      <h3>Mario</h3>
    		      <p>Miles de productos hay en el mercado, pero nada como una caja con gatitos</p>
    		    </div>
    		  </div>
    		</div>
    		<div class="mention">
    		  <div class="content_mention">
    		    <img src={process.env.PUBLIC_URL +"/assets/p3.png"} alt="" />
    		    <div class="text">
    		      <h3>Mario</h3>
    		      <p>Miles de productos hay en el mercado, pero nada como una caja con gatitos</p>
    		    </div>
    		  </div>
    		</div>
    		<div class="mention">
    		  <div class="content_mention">
    		    <img src={process.env.PUBLIC_URL + "/assets/p4.png"} alt="" />
    		    <div class="text">
    		      <h3>Mario</h3>
    		      <p>Miles de productos hay en el mercado, pero nada como una caja con gatitos</p>
    		    </div>
    		  </div>
    		</div>
    	</div>
		</div>
	)	
}