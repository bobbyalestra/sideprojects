document.addEventListener('DOMContentLoaded', () => {


    // HTML DOM Data

    let div1 = document.createElement('div');
    div1.id ='firstDiv';
    document.body.appendChild(div1);

    let title = document.createElement('h1');
     title.id = 'h1Title';
     title.innerText = "Welcome To Doc's Hotel"
     div1.appendChild(title);


    let dropDown = document.createElement('select', 'value = availRooms');
    dropDown.id ='dropDownList';
    //dropDown.innerHTML= availRooms[i][j];
    div1.appendChild(dropDown)

   


    // JS Data

    let availRooms = [ [101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404] ];
    let selectedRooms = []



    for (let i = 0; i < availRooms.length; i++){
        for (let j = 0; j < availRooms[i].length; j++){
            console.log(availRooms[i][j])   
        
    let optionDrop = document.createElement('option');
    optionDrop.id = 'options';
    optionDrop.value = availRooms[i][j];
    optionDrop.innerHTML = availRooms[i][j]
    dropDown.appendChild(optionDrop)


        function removeRoom (e){
           // document.addEventListener('submit')
     selectedRooms.push(availRooms[i][j])
        }
        removeRoom()

        }
    }

  



















})