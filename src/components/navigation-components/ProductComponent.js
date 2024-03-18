import { product_links } from '@/constants/productcomponent-constant'
import Link from 'next/link'
import React from 'react'

const ProductComponent = ({ closeModal, color }) => {
  return (
    <>
    <div>
        <div className="w-full flex gap-8 modal">
        <div className="w-[20%]">
            <h3 className="text-2xl text-white font-semibold my-3">Our Product</h3>
            <p className="text-white text-lg">
              BFG Global Consulting, LLC. ediﬁes your business and organisation
              to growth. We are at the intersection of research, strategy,
              workforce training, and information technology.
            </p>
            
          </div>
          <div className="w-[40%]">
          {product_links.map(({id, label, link}) =>(
              <>
              <Link key={id} href={link}>
              <p className={`mx-4 py-4 border-t border-b border-white text-lg font-semibold ${color ? `hover:bg-white hover:text-${color}` : ''}`}>
                {label}
                </p>
                </Link>
                </>
            ))}
          </div>
          <div className="w-[40%]"></div>
        </div>

    </div>
    </>
  )
}

export default ProductComponent