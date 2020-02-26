//Magazyn
var food = 100;
var wood = 150;
var stone = 300;

//Produkcja na minute
var foodProd = 25;
var woodProd = 40;
var stoneProd = 50;



function Update_resources(){
    let count = 0;
    //Produkcja update
    $(".data-container-food").html("Produkcja: " + foodProd + "/min");
    $(".data-container-wood").html("Produkcja: " + woodProd + "/min");
    $(".data-container-stone").html("Produkcja: " + stoneProd + "/min");

    //Magazyn
    $(".food").html("Food: " + food);
    $(".wood").html("Wood: " + wood);
    $(".stone").html("Stone: " + stone);


    setInterval(function(){
        count++;
        console.log(count);
        
        $(".food").html("Food:" + (food += foodProd));
        $(".wood").html("Wood: " + (wood += woodProd));
        $(".stone").html("Stone: " + (stone += stoneProd));

    },100000)
}