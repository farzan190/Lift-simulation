const handleLogicperLift=0
let number=1;
for(let i=16;i>0;i--){
    const newElement = document.createElement('div'); 
    newElement.innerHTML = ` 
    <div class="perFloor" id=${i}>
   
    <button id=${i} class="upButton" onclick="handleMovement(${i})">UP</button>
    
    <button class="downButton" onclick="handleMovement(${i})">DOWN</button>
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
     if(number>4)
        number=1;
    const lifts= document.querySelector(`.elevators`);

    const query = lifts.querySelector(`[id="${number}"]`);
    
    query.style.transform= `translateY(-${e*100}px)`;
    query.style.transition=`transform 2s ease`;
    
    number++;
     

    }

   
   

    
    // if you press updown then lift moves there 
    // agar ye naya floor hai toh same will happen if these existing two are in transition 
    //  if not then these will move to the floor where lifts get called 
    
    
    
      // transform:  translateY(+500px) ;
       // abhi sabse bada task ye hai ki lift kese move karani hai  