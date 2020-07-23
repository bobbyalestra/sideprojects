document.addEventListener('DOMContentLoaded', () => {


    // HTML DOM Data

    let div1 = document.createElement('div');
    div1.id ='firstDiv';
    document.body.appendChild(div1);

    let title = document.createElement('h1');
     title.id = 'h1Title';
     title.innerText = "Welcome To Doc's Hotel"
     div1.appendChild(title);


    let dropDown = document.createElement('select', 'value = allRooms');
    dropDown.id ='dropDownList';
    //dropDown.innerHTML= allRooms[i][j];
    div1.appendChild(dropDown)

   


    // JS Data
    // make a Hotel Object
    // make an array of allRooms
    let hotelJsData ={
       allRooms : [ [101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404] ],
        selectedRooms : [],
        currentRoomBooked: [],
        currentFloorBooked: [],



        bookRooms: function () {
            

            this.allRooms[this.currentFloorBooked].splice(this.allRooms[this.currentFloorBooked].indexOf(this.currentRoomBooked), 1);
            this.bookedRooms
            
          }
          
          }
          
            linesOfHtml = "<select>"  
          for (i = 0; i < allRooms.lenth; i++)
          linesOfHtml = linesOfHtml + `<option value = '${allRooms[i]}'>${allRooms[i]} </option>`
          
          linesOfHtml = linesOfHtml + "</select>"
          
          document.getElementById('dropDownList').innerHTML = linesOfHtml;



                        //NOT WORKING ///////




//     hotelData: function (){

//     for (let i = 0; i < hotelJsData.allRooms.length; i++){
//         for (let j = 0; j < hotelJsData.allRooms[i].length; j++){
//             console.log(hotelJsData.allRooms[i][j])   
        
//     let optionDrop = document.createElement('option');
//     optionDrop.id = 'options';
//     optionDrop.value = hotelJsData.allRooms[i][j];
//     optionDrop.innerHTML = hotelJsData.allRooms[i][j]
//     dropDown.appendChild(optionDrop)
//         }
//     }
// },

   
//     }
    


   let allRooms = [ [101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404] ];
    let selectedRooms = [];


    for (let i = 0; i < allRooms.length; i++){
        for (let j = 0; j < allRooms[i].length; j++){
            console.log(allRooms[i][j])   
        
    let optionDrop = document.createElement('option');
    optionDrop.id = 'options';
    optionDrop.value = allRooms[i][j];
    optionDrop.innerHTML = allRooms[i][j]
    dropDown.appendChild(optionDrop)
        }
    }


    












})