const handleLogicperLift=0
let liftState=[];
let number=1;

liftState=[];
[...Array(4)].forEach((e,index) => {
    const eachliftDetail={
        "id":index+1,
        "state":"idle",
        "currentFloor":0,
    }
 liftState.push(eachliftDetail);
});  
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
        newElement.innerHTML = `<h1 class="box" id=${i}  ></h1> `; 
        const newLifts=document.querySelector('.elevators');
         
        newLifts.appendChild(newElement); 
        }
        

    const handleMovement=(floorcalled)=>{
     if(number>4)
        number=1;

    

    for(let i=0;i<liftState.length;i++){
    if (liftState[i].currentFloor==floorcalled){     // 
          return  ;
    }}
    

    const lifts= document.querySelector(`.elevators`); 
    const singleLift = lifts.querySelector(`[id="${number}"]`);

    singleLift.addEventListener('click',liftMovementTrack(number,"moving",floorcalled)); 
    
    singleLift.style.transform= `translateY(-${floorcalled*100}px)`;  
    singleLift.style.transition=`transform 2s ease`; 
    setTimeout (()=>{
    liftMovementTrack(number,"idle",floorcalled);
   },2000);
   number++;  
  

}


   const liftMovementTrack=(liftnumber,state,currentFloor)=>{
    const updatedLift = liftState.map((lift) => {
        if (lift.id === liftnumber) {
          return {
            ...lift,               
            state: state,          
            currentFloor: currentFloor 
          };
        }
        return lift; 
      });
       liftState=updatedLift;
      console.log(updatedLift);

   }
   

                                    
  