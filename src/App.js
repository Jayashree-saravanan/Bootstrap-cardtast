
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App row col-lg-4">
      {/* <Greeting/> */}
         <Details
           sim="FREE"
           offer="$0"  
           period="/month"
           user="✓ single User"      
           storage="✓ 5GB Storage"
          l1="✓ Unlimited Public Projects"
          l2="✓ Community Access"    
          l3="✕ Unlimited Private Projects"
          l4="✕ Dedicated Phone Support"
          l5="✕ Free Subdomain"
          l6="✕ Monthly Status Reports"
      />

      <Details
           sim="PLUS"
           offer="$9"  
           period="/month"
           user="✓ 5 Users"      
           storage="✓ 50GB Storage"
          l1="✓ Unlimited Public Projects"
          l2="✓ Community Access"    
          l3="✓ Unlimited Private Projects"
          l4="✓ Dedicated Phone Support"
          l5="✓ Free Subdomain"
          l6="✕ Monthly Status Reports"
      
      />

      <Details
           sim="PRO"
           offer="$49"  
           period="/month"
           user="✓ Unlimited Users"      
           storage="✓ 150GB Storage"
          l1="✓ Unlimited Public Projects"
          l2="✓ Community Access"    
          l3="✓  Unlimited Private Projects"
          l4="✓  Dedicated Phone Support"
          l5="✓  Unlimited Free Subdomain"
          l6="✓  Monthly Status Reports"
   
      />
    </div>
  );
}

export default App;

function Details(props) {
  return (
    <div class="container">
    <div class="row">
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
      <h2>{props.sim}</h2>
      <h1 class="card-price text-center"><label>{props.offer}</label> <span class='period' >{props.period}</span> </h1> <hr></hr>
      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.l1}</p>
      <p>{props.l2}</p>
      <p>{props.l3}</p>
      <p>{props.l4}</p>
      <p>{props.l5}</p>
      <p>{props.l6}</p>
      <button type="button" class="btn btn-primary">Button</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
