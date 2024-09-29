const handleLogicperLift = 0;
let liftState = [];
let number = 1;
let count = 0;
let finalLever = 5665;
let nearestLiftIndex = -1;
let lastLift=1;

liftState = [];
[...Array(4)].forEach((e, index) => {
    const eachliftDetail = {
        id: index + 1,
        state: "idle",
        currentFloor: 0,
        direction: "",
    };
    liftState.push(eachliftDetail);
});

for (let i = 16; i > 0; i--) {
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <div class="perFloor" id=${i}>
   
    <button id=${i} class="upButton" onclick="handleMovement(${i},'upButton')">UP</button>
    
    <button class="downButton" onclick="handleMovement(${i},'downButton')">DOWN</button>
    <div>Floor Number: ${i}</div>
    </div>`;
    const newFloors = document.querySelector('.space');
    newFloors.appendChild(newElement);
}

for (let i = 1; i < 5; i++) {
    const newElement = document.createElement('div');
    newElement.innerHTML = `<h1 class="box" id=${i}></h1>`;
    const newLifts = document.querySelector('.elevators');
    newLifts.appendChild(newElement);
}

const handleMovement = (floorcalled, buttonPressed) => {
    if (number > 4)
         number = 1;

    for (let i = 0; i < liftState.length; i++) {
        if (liftState[i].currentFloor === floorcalled && liftState[i].direction === buttonPressed) {
            return;
        }
        
    }

    
    const desiredElevator =nearestElevator(floorcalled,buttonPressed);
   // console.log(`nearest elevator number  ${desiredElevator} `);  

    const lifts = document.querySelector(`.elevators`);
    const singleLift = lifts.querySelector(`[id="${desiredElevator}"]`);
    const currentLiftNumber = desiredElevator; 

    singleLift.addEventListener('click', liftMovementTrack(currentLiftNumber, "moving", floorcalled, `${buttonPressed}`));

    singleLift.style.transform = `translateY(-${floorcalled * 100}px)`;
    singleLift.style.transition = `transform 2s ease`;

    setTimeout(() => {
        liftMovementTrack(currentLiftNumber, "idle", floorcalled, `${buttonPressed}`);
    }, 2000);
     
   
      
    
};

const liftMovementTrack = (liftnumber, state, currentFloor, buttonPressed) => {
    console.log(`updating for lift number ${liftnumber}`);
    const updatedLift = liftState.map((lift) => {
        if (lift.id === liftnumber) {
            return {
                ...lift,
                state: state,
                currentFloor: currentFloor,
                direction: buttonPressed,
            };
        }
        return lift;
    });
    liftState = updatedLift;
    console.log(updatedLift);
};


const nearestElevator=(floorcalled,buttonPressed)=>{

    let nearestLift = null;
    let minDistance = 1000;
    for (let i = 0; i < liftState.length; i++) {
        if (liftState[i].state=="idle"){
        const distance = Math.abs(liftState[i].currentFloor - floorcalled);
     
         if(distance<minDistance){
            minDistance=distance;
            nearestLift=i+1;
         }
         
        }
    }
   return nearestLift;
}