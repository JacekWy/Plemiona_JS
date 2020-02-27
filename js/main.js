//Magazyn
var food = parseInt(localStorage.getItem("Food"));
var wood = parseInt(localStorage.getItem("Wood"));
var stone = parseInt(localStorage.getItem("Stone"));


//Koszt budynku next lvl wood,stone
var pricelvlFood = [[250,470],[520,602],[754,900],[960,1100],[1200,1500],[1655,2000],[5000,6588],[12000,15848]];
var pricelvlWood = [[350,450],[540,605],[723,850],[970,1026],[1200,1500],[1655,2000],[5000,6588],[12000,15848]];
var pricelvlStone = [[240,420],[560,630],[745,830],[910,1054],[1200,1500],[1655,2000],[5000,6588],[12000,15848]];

console.log(pricelvlFood[1][0]);


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




//localStorage.setItem("Stone",100);
//localStorage.setItem("Food",100);
//localStorage.setItem("Wood",100);
//localStorage.setItem("foodblvl",0);


function Update_resources(){
    let count = 0;

    //Produkcja update
    $(".data-container-food").html("Produkcja: " + foodProd + "/min");
    $(".data-container-wood").html("Produkcja: " + woodProd + "/min");
    $(".data-container-stone").html("Produkcja: " + stoneProd + "/min");

    $(".nextlvlfood").html('Aktualny lvl: '+ foodbLvl +'</br>'+'Wood: '+ pricelvlFood[foodbLvl][0] +' '+ 'Stone: '+ pricelvlFood[foodbLvl][1]);
    $(".nextlvlwood").html('Aktualny lvl: '+ woodbLvl +'</br>'+'Wood: '+ pricelvlWood[woodbLvl][0] +' '+ 'Stone: '+ pricelvlWood[woodbLvl][1]);
    $(".nextlvlstone").html('Aktualny lvl: '+ stonebLvl +'</br>'+'Wood: '+ pricelvlStone[stonebLvl][0] +' '+ 'Stone: '+ pricelvlStone[stonebLvl][1]);

    //Magazyn
    $(".food").html("Food: " + food);
    $(".wood").html("Wood: " + wood);
    $(".stone").html("Stone: " + stone);
    
    
    //sprawdznie test
    if((pricelvlFood[foodbLvl][0] < wood) && (pricelvlFood[foodbLvl][1] < stone) ){
        $(".update-btn-food").show(".update-btn-food");
    }else{
        $(".update-btn-food").hide(".update-btn-food");
    }

    if((pricelvlWood[woodbLvl][0] < wood) && (pricelvlWood[woodbLvl][1] < stone)){
        $(".update-btn-wood").show(".update-btn-wood");
    }else{
        $(".update-btn-wood").hide(".update-btn-wood");
    }
    if((pricelvlStone[stonebLvl][0] < wood) && (pricelvlStone[stonebLvl][1] < stone)){
        $(".update-btn-stone").show(".update-btn-stone");
    }else{
        $(".update-btn-stone").hide(".update-btn-stone");
    }




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

        
        if((pricelvlFood[foodbLvl][0] < wood) && (pricelvlFood[foodbLvl][1] < stone) ){
            $(".update-btn-food").show(".update-btn-food");
        }else{
            $(".update-btn-food").hide(".update-btn-food");
        }

        if((pricelvlWood[woodbLvl][0] < wood) && (pricelvlWood[woodbLvl][1] < stone)){
            $(".update-btn-wood").show(".update-btn-wood");
        }else{
            $(".update-btn-wood").hide(".update-btn-wood");
        }
        if((pricelvlStone[stonebLvl][0] < wood) && (pricelvlStone[stonebLvl][1] < stone)){
            $(".update-btn-stone").show(".update-btn-stone");
        }else{
            $(".update-btn-stone").hide(".update-btn-stone");
        }

    },10000)

}


$("#updateFood").click(function () {

    wood-=pricelvlFood[foodbLvl][0];
    stone-=pricelvlFood[foodbLvl][1];
    
    localStorage.setItem("Wood",wood);
    localStorage.setItem("Stone",stone);
    foodbLvl++
    localStorage.setItem("foodblvl",foodbLvl);
    location.reload(true);
});

$("#updateWood").click(function () { 
    wood-=pricelvlWood[woodbLvl][0];
    stone-=pricelvlWood[woodbLvl][1];
    
    localStorage.setItem("Wood",wood);
    localStorage.setItem("Stone",stone);
    woodbLvl++
    localStorage.setItem("woodblvl",woodbLvl);
    location.reload(true);
});

$("#updateStone").click(function () { 
    wood-=pricelvlStone[stonebLvl][0];
    stone-=pricelvlStone[stonebLvl][1];
    
    localStorage.setItem("Wood",wood);
    localStorage.setItem("Stone",stone);
    stonebLvl++
    localStorage.setItem("stoneblvl",stonebLvl);
    location.reload(true);
});
