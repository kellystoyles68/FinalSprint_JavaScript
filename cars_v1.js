 //Constants
 const AIR_EXCISE_TAX = 100;
 const TIRE_TAX = 215;
 const PROTECTION = 259;
 const RUST_PROOFING = 899;
 const DOCUMENTATION_FEE = 599;
 const HST = 0.15;
 const LICENSE_FEE = 180;
 const VENDOR_FEE = 162.36;


// FETCH and READ the cars.json disk file 
fetch('./cars.json')
  .then(response => response.json())
  .then(cars  => {
    const carArray = []; //empty array to store the car objects
    cars.forEach(car => {
        carArray.push (car); });//push each car objects into the array
        console.log(carArray)}); //output array to console

     

// FETCH and READ the cars.json disk file 
fetch('./cars.json')
  .then(response => response.json())
  .then(cars  => {
// Loop through an array in the JSON data
    cars.forEach(car => { 
        displayStory1 (car);
        finalCost (car);
        monthlyPayments (car);
        commission (car);
        displayStory (car);
      });
})

.catch(error => {
  // Handle any errors that occur while fetching the file
  console.error(error);
});


      function displayStory1(car) {
          console.log (` Wayne, the salesman, has a client who is looking for a ${car.year} ${car.make} ${car.model}. `); 
          console.log (` ${car.make}'s ${car.color} ${car.model}  is in high demand.`);
        };
        
      function finalCost (car)  {
          const totalExtraFees = AIR_EXCISE_TAX + TIRE_TAX + PROTECTION + RUST_PROOFING + DOCUMENTATION_FEE
          const finalCost =(( car.vprice + totalExtraFees) * HST )+ car.vprice + LICENSE_FEE + VENDOR_FEE
          console.log (`The final cost is ${finalCost.toFixed(2)}.`);
          return finalCost.toFixed(2);
        };

      function monthlyPayments(car)  {
        const monthlyPayments =  ((finalCost(car) * 0.499) / 60)
        console.log ( `The client's monthly payments is ${monthlyPayments.toFixed(2)}.`);
        return monthlyPayments.toFixed(2);
        };

      function commission(car) {
        const commission = (finalCost(car) * 0.15 )
        console.log (`The salesman's commission is ${commission.toFixed(2)}.`);
        return commission.toFixed(2);
        };


  function displayStory (car) {
      const storyContainer = document.getElementById ('storyContainer');
      const storyText = `
      Wayne, the salesman, has a client who is looking for a ${car.year} ${car.make} ${car.model}.  
      This ${car.color} , ${car.model} ${car.trim}  car is in high demand.
      If the potential owner does not get a car soon, she will look somewhere else.
      Wayne is worried he will lose his commission which is worth $ ${commission(car)}. 
      The final price on the car is $ ${finalCost(car)} .  The monthly payments on the ${car.model} are ${monthlyPayments(car)} for 60 months.`;

      // Create a new paragraph and append the story text to it
    const paragraph = document.createElement('p');
      paragraph.textContent = storyText;
        
      // Append the paragraph to the storyContainer
      storyContainer.appendChild(paragraph);}


//Create HTML element
const container = document.createElement('div');
container.id = 'carContainer';

 // FETCH and READ the cars.json disk file 

 fetch('./cars.json')
  .then (response  => response.json()) 
  .then (cars  => {
    container.innerHTML = `
      <h2> Fetching different objects from each Array </h2>
      <p> Make: ${cars[3].make }</p>
      <p> Model: ${cars[0].model}</p>
      <p> Year: ${cars[2].year}</p>
      <p> Trim: ${cars[3].trim}</p>
      <p> Color: ${cars[4].color}</p>
      <p> Price: $ ${cars[1].vprice}</p> 
      <br>
      <br>
      <br>
      <p> </p>}
    `;
    document.body.appendChild (container);
  })

  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

const carListDiv = document.getElementById('carList');

// Fetch the data from cars.json file
fetch('cars.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each car record
    data.forEach(car => {
      // Create a new div element for each car
      const carDiv = document.createElement('div');
      
      // Set the innerHTML of the carDiv with car details
      carDiv.innerHTML = `
        <h2>Car Inventory  </h2>
        <p>Make: ${car.make}</p>
        <p>Model: ${car.model}</p>
        <p>Year: ${car.year}</p>
        <p>Trim: ${car.trim}</p>
        <p>Color: ${car.color}</p>
        <p>Price:$ ${car.vprice}</p>
        <hr>
      `;
      
      // Append the carDiv to the carListDiv
      carListDiv.appendChild(carDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });




 
 