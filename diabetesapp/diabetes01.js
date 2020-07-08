


document.addEventListener('DOMContentLoaded',()  => {


    let diabetesDisplay = {
        foodDisplay: [],

        displayFoodItem: function () {
            if (this.foodDisplay.length === 0 ) {
                alert("Please Enter An Item");

            }else {
                console.log("Food Item : ");

            }

            for (let i = 0; i < this.foodDisplay.length; i++){
                console.log(this.display[i].displayText);
                if(this.display[i].completed === true){
                    console.log(( ' (x) ' ),this.display[i].displayText);
                }else{
                    console.log( '(  )',this.display[i].displayText );
                }
            }
       },


        addCurrentBg: function (displayText) {
            this.foodDisplay.push(displayText)

        },
        
        deleteInfo: function (position) {
            this.foodDisplay.splice(position);
            this.displayInfo();
        }
            

        

    }





})