

for(let i=9;i>0;i--){
    const newElement = document.createElement('div'); 
    newElement.innerHTML = `  <hr/>
    <div class="perFloor" id=${i}>
    <button>UP</button>
    <button>DOWN</button>
    <div>Floor Number: ${i}</div>
    </div>`
    ;     
    const newFloors=document.querySelector('.space');
     
    newFloors.appendChild(newElement); 
    
    }
    
    
    for(let i=1;i<5;i++){
        const newElement = document.createElement('div'); 
        newElement.innerHTML = `<h1 class="box" ></h1> `;
    
        const newLifts=document.querySelector('.elevators');
         
        newLifts.appendChild(newElement); 
        
        }
        
    
    
    // if you press updown then lift moves there 
    // agar ye naya floor hai toh same will happen if these existing two are in transition 
    //  if not then these will move to the floor where lifts get called 
    
    
    
      // transform:  translateY(+500px) ;
       // abhi sabse bada task ye hai ki lift kese move karani hai  