//Magazyn
var food = parseInt(localStorage.getItem("Food"));
var wood = parseInt(localStorage.getItem("Wood"));
var stone = parseInt(localStorage.getItem("Stone"));


//Lvl production
var foodprodLvl = [25,50,125,150,180,210,250,312];
var woodprodLvl = [50,150,225,350,480,510,650,712];
var stoneprodLvl = [70,180,255,350,410,480,650,712];

//Lvl Budynku
var foodbLvl = localStorage.getItem("foodblvl");
var woodbLvl = localStorage.getItem("woodblvl");
var stonebLvl = localStorage.getItem("stoneblvl");


//Produkcja na minute
var foodProd = foodprodLvl[foodbLvl];
var woodProd = woodprodLvl[woodbLvl];
var stoneProd = stoneprodLvl[stonebLvl];



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


    //Dodawanie co 10s surowcow
    setInterval(function(){
        count++;
        console.log(count);
        
        $(".food").html("Food: " + (food += foodProd));
        $(".wood").html("Wood: " + (wood += woodProd));
        $(".stone").html("Stone: " + (stone += stoneProd));

        localStorage.setItem("Food",food);
        localStorage.setItem("Wood",wood);
        localStorage.setItem("Stone",stone);

        

        
        if(food > 1000){
            $(".update-btn-food").show(".update-btn-food");
        }else{
            $(".update-btn-food").hide(".update-btn-food");
        }

        if(wood > 1800){
            $(".update-btn-wood").show(".update-btn-wood");
        }else{
            $(".update-btn-wood").hide(".update-btn-wood");
        }

    },2000)

}


$("#updateFood").click(function () { 
    food-= 1000;
    console.log(food);
    localStorage.setItem("Food",food);
    foodbLvl++
    localStorage.setItem("foodblvl",foodbLvl);
});

$("#updateWood").click(function () { 
    wood-= 1800;
    console.log(wood);
    localStorage.setItem("Wood",wood); 
});
