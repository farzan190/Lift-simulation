

for(let i=16;i>0;i--){
    const newElement = document.createElement('div'); 
    newElement.innerHTML = `  <hr/>
    <div class="perFloor" id=${i}>
    <button id=${i} onclick="handleMovement(${i})">UP</button>
    <button >DOWN</button>
    <div>Floor Number: ${i}</div>
    </div>`
    ;     
    const newFloors=document.querySelector('.space');
     
    newFloors.appendChild(newElement); 
    
    }
    
    
    for(let i=1;i<5;i++){
        const newElement = document.createElement('div'); 
        newElement.innerHTML = `<h1 class="box" id=${i} ></h1> `;
    
        const newLifts=document.querySelector('.elevators');
         
        newLifts.appendChild(newElement); 
          
        
        }
        
    const handleMovement=(e)=>{
    console.log(e);
    const lifts= document.querySelector(`.elevators`);
    console.log(lifts);

    const query = lifts.querySelector('[id="1"]');
    console.log(query);
    // we need to know the number of floor and not the lift so that i can move to that particular floor
    console.log(e);  
    query.style.transform= `translateY(-${e*110}px)`;
    lifts.style.transition=`transform 2s ease`;
    
     // we need to 
     

    }

   
       




    
    // if you press updown then lift moves there 
    // agar ye naya floor hai toh same will happen if these existing two are in transition 
    //  if not then these will move to the floor where lifts get called 
    
    
    
      // transform:  translateY(+500px) ;
       // abhi sabse bada task ye hai ki lift kese move karani hai  