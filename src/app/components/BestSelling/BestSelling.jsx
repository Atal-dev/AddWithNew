import React from 'react'
import './BestSelling.css'

function BestSelling() {
  return (
    <>
      <div className='bestsell'>
        <div className='bestsell_sec1'>
            <div className='sec1_img shineimg' >
                <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/best-selling-finish-img-1.jpg" alt="" />
            </div>
            <div className='sec1_txt'>
                <p>Best Selling Finishes</p>
                <h1>We use materials only from personally <span>verified suppliers</span></h1>
                <p>Gloss, matte wood texture, 200+ colors to choose from. Environmentally friendly materials, all certificates are available.</p>
            </div>
        </div>
        <div className='bestsell_sec2'>
            <div className='sec2_img shineimg'>
                <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/best-selling-finish-img-2.jpg" alt="" />
            </div>
        </div>
            
      </div>
    </>
  )
}

export default BestSelling
