import React from "react";
import "./Plans.css";
function Plans() {
    const pricingData =[
        {
            title:'Regular Member',
            price:'$0',
            duration:'/month',
            color:'#fff',
            features:[
                'Unlimited acess to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Clases per Week'
            ]
        },
        {
            title:'Premium  Member',
            price:'$100',
            duration:'/month',
            color:'#6f55f2',
            features:[
                'Unlimited acess to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Clases per Week'
            ]
        },
        {
            title:'Standard Member',
            price:'$10',
            duration:'/month',
            color:'#fff',
            features:[
                'Unlimited acess to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Clases per Week'
            ]
        },
    ]
  return (
    <div className="container">
      <div className="price-top">
        <h2 className="section-title">Premium Pricing Plan</h2>
        <p>
          Unlock elite tech services with our Premium Pricing plan and soar
          ahead of the competition
        </p>
      </div>
      <div className="price-wrapper">
        {pricingData.map((pricingItem,index)=>(
            <div className="pricing-item" key={index}>
                <div className="pricingcard-top" style={{background:pricingItem.color}}>
                   <h2 className="section-title">{pricingItem.title}</h2>
                   <h2 className="pricing-section-title">
                    {pricingItem.price} <span>{pricingItem.duration}</span>
                   </h2>
                </div>
                <div className="services">
                    <ul>
                        {pricingItem.features.map((feature,index)=>(
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <button className="register-btn">Join</button>
                </div>
            </div>
        ))

        }
      </div>
    </div>
  );
}

export default Plans;
