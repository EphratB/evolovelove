displayTimeDate();

         

// Global array

var aItem = [];
var aCart = [];


//function to display date and time
 function displayTimeDate(){
    var today = new Date();
    document.getElementById("dateTime").innerHTML = "Date: " + today;
}

//Store constructors

function Store(id, product_name, price, color ,quantity_at_hand, maximum_per_customer, category, cost_of_shipping, reviews, description, image){
    this.id = id;
    this.product_name = product_name;
    this.price = price;
    this.color = color;
    this.quantity_at_hand = quantity_at_hand;
    this.maximum_per_customer = maximum_per_customer;
    this.category = category;
    this.cost_of_shipping = cost_of_shipping;
    this.reviews = reviews;
    this.description = description;
    this.image = image;

}

//cart constructors
function Cart(id, price, qty, shipping){
    this.id = id;			
    this.price = price;						
    this.qty = qty;							
    this.shipping = shipping;				
}

function pageloader(){
//Store object

//                     Id          product_name           price    color       qth  maxq  category    shipping     review                 descripton                                        img
aItem.push(new Store('RPBL76','Renew Pacific Blue Leggings', 76 , 'Baby Blue', 33, 5, 'Leggings' , 20.23 , ['has a good ratings'],'Renew Pacific blue leggings', 'images/RenewPacificBlueLeggings.jpg'));
aItem.push(new Store('VLSCT45','Vision Long Sleeve CropTop', 45 , 'GranadaGreen',20, 2, "Crop Top" , 19.99 , ['Love the color'],'Vision Long Sleeve CropTop', 'images/VisionLongSleeveCropTopGranadaGreen.jpg'));
aItem.push(new Store('PBG55','Pause Bralette Studio', 45, 'Green',100, 4 , "Sports Bra" , 13.33 , ['Good hold for running'],'Pause Bralette Studio', 'images/PauseBraletteStudioGreen.jpg'));
aItem.push(new Store('MSBL85','Move Seamless Burton Legging', 85 ,'Burnt Ornage', 55, 6, "Leggings" , 20.23 , ['Popping color'],'Our Move Seamless Burton Legging', 'images/MoveSeamlessBurntOrangeLegging.jpg'));
aItem.push(new Store('PCTB36','Power Crop Top', 36 , 'Black', 36, 9, " Crop Top" , 5.99 , ['Not so great'],'Power Crop Top extra small', 'images/PowerCropTopBlack.jpg'));
aItem.push(new Store('ADOCT30','Adapt Ombre Crop Top', 30 ,'Misty Blue', 75 , 2, "Crop Top" , 5 , ['My fav from all'],'The most wanted ombre crop top', 'images/AdaptOmbreCropTopMistyBlueMarlMistyBlue.jpg'));
aItem.push(new Store('ASCT70','Apex Seamless Crop Top', 70 , 'Black', 180, 10, "Crop Top" , 6.23 , ['I love it!!'],'Apex  Seamless Crop Top in M', 'images/ApexSeamlessCropTop.jpg'));
aItem.push(new Store('ASCC60','Adapt Cameo Seamless Crop Top', 60 , 'Cameo Black', 200, 12, "Crop Top" , 8 , ['10/10 I will buy it again.'],'Cameo Black Crop Top in Size S', 'images/AdaptCamoSeamlessCropTopjpg.jpg'));
aItem.push(new Store('CGCT35','Cameo Graphic Crop Top', 35 , 'Tee Cocount', 80, 10, "Crop Top" , 5 , ['I love it!!'],'Cameo Graphic Crop In Size M', 'images/CamoGraphicInfillCropTeeCoconut.jpg'));
aItem.push(new Store('ASDM20','Apex Seamless Dusty Mauve Crop Top', 20 , 'Dusty Mavue', 10, 3, "Crop Top" , 2 , ['Runs small'],'Seamless Crop Top in Size XS', 'images/ApexSeamlessCropTopDustyMauvePowderedLavender.jpg'));
aItem.push(new Store('VLO95','Vission Legging', 95 , 'Orange', 20, 4, "Leggings" , 12.0 , ['Not so good for my taste!'],'Orange Vission Legging In Size XXL', 'images/VisionLeggingsOrange.jpg'));
aItem.push(new Store('VNTSB60','V Neck Training Sport Bra', 50 , 'Biscoti Brown', 20, 6, "Sports Bra" , 6.23 , ['I would buy it again'],'Super Hold V Neck Sports Bra in Size S', 'images/VNeckTrainingSportsBraBiscottiBrown.jpg'));
aItem.push(new Store('RLMG75','Renew Legging', 75 , 'MudGreen', 50, 12, 'Leggings' , 2.50 , ['Hands down the best from my collection'],'Mud Green Legging In Size S', 'images/RenewLeggingsMudGreen.jpg'));
aItem.push(new Store('PBWLG30','Power Bra', 70 , 'Washed Light Grey', 45, 7, "Sports Bra" , 5.99, ['Love the color'],'White washed Sports Bra In Size L', 'images/PowerBraWashedLightGrey.jpg'));
aItem.push(new Store('SSBEO55','Studio Sports Bra', 55 , 'Earth Orange', 55, 10, "Sports Bra" , 6.23 , ['Great fabric'],'Earth Orange Studio Bra In Size XL', 'images/StudioWSportsBraEarthOrange.jpg'));
aItem.push(new Store('RTSB55','ruched training Sports Bra', 55 , 'Sofit Pink', 80, 6, "Sports Bra" , 11.99 , ['Very exspensive'],' Soft Pink ruched Training Bra In Size M', 'images/RuchedTrainingSportsBra.jpg'));
aItem.push(new Store('VLGG77','Vision Legging', 77 , 'Granda Green', 60, 5, 'Leggings' , 5.99 , ['I would buy it with every color!!'],'Granda Green Cision Legging In size S', 'images/VisionLeggingsGranadaGreen.jpg'));
aItem.push(new Store('SLP55','Studio Legging', 55 , 'Purple', 20, 6, 'Leggings' , 10.99 , ['Not my kind of fabric'],'Purple Studio Legging In Size Xm', 'images/StudioLeggingPurple.jpg'));
aItem.push(new Store('FSSL55','Flaweless Shine Seamless Legging', 55 , 'Soft Pink', 45, 6, 'Leggings' , 10.99 , ['I do not like it!!'],'Soft Pink Flawless Shine Semless Legging In Size XL', 'images/FlawlessShineSeamlessLeggingSoftPink.jpg'));
aItem.push(new Store('HHL95','Hold her Legging', 95 , 'Lilac', 20, 4, 'eggings' , 10.99 , ['So expensive, but so worth it!'],'Lilac Comfy Legging In Size Xm', 'images/HoldHerLeggingsLilac.jpg'));
aItem.push(new Store('PLWG55','Power Leggings', 55 , 'Washed Light Grey', 10, 6, 'Leggings' , 10.99 , ['Love the color.'],'Power Washed Light Grey Legging In Size Xm', 'images/PowerLeggingsWashedLightGrey.jpg'));
aItem.push(new Store('PSLBB55','Pause Seamless Leggings', 55 , 'Biscotti Brown', 20, 6, 'Leggings' , 6.23 , ['Love Love Love'],'Brown Seamless Leggings In Size M', 'images/PauseSeamlessLeggingsBiscottiBrown.jpg'));
aItem.push(new Store('PBLY25','Pause Bralette', 25 , 'Lemonade Yellow', 25, 6, 'Sports Bra' , 5.99 , ['One of the best from my collection'],'Lemonade Yellow Bralette In Size S', 'images/PauseBraletteLemonadeYellow.jpg'));
aItem.push(new Store('HHL25','Hold her Legging', 25 , 'Lilac', 25, 6, 'Leggings' , 5.99 , ['excellent!'],'Hold her Legging In Size S', 'images/HoldHerLeggingsLilac.jpg'));
aItem.push(new Store('MTP25','Move to Purple', 25 , 'Purple', 10, 2, 'Leggings' , 4 , ['Good'],'Purple Legging in Size M', 'images/MoveToPurple.jpg'));
aItem.push(new Store('RDY75','Renew Dried Yellow', 75 , 'Renew Dried Yellow', 15, 8, 'Leggings' , 4 , ['Average'],'RenewDried Yellow in Size L', 'images/RenewDriedYellowLeggings.jpg'));
aItem.push(new Store('GACP30','Graffics Animal Crop Tee', 30 , 'Pebble Grey', 15, 6, 'Crop Top' , 4 , ['Average'],'GFXAnimal Crop Tee Pebble Grey in Size L', 'images/GFXAnimalCropTeePebbleGrey.jpg'));
aItem.push(new Store('PLS30','Long Sleeve Top', 30 , 'Black', 15, 6, 'Crop Top' , 5 , ['very cosy'],'Pause Long Sleeve Top in Size L', 'images/PauseLongSleeveTopBlack.jpg'));
aItem.push(new Store('VSB50','V3 Sports Bra', 50 , 'Pollen Yellow', 15, 6, 'Sports Bra' , 5 , ['Love the color!!!'],'V3 Sports Bra in Size S', 'images/V3SportsBraPollen.jpg'));
aItem.push(new Store('SSB55','Studio Sports Bra', 55 , 'Indian Yellow', 15, 10, 'Sports Bra' , 5 , ['Amazing fabric'],'Studio Sports Bra in Size Xm', 'images/StudioWSportsBraIndianYellow.jpg'));



display_store_items(aItem);

}


console.log(aItem);


// dfunction for displaying  store items
function display_store_items(){

//main div
var maindiv = document.getElementById("mydiv");
maindiv.className = "cards";
//clearing out div
 maindiv.innerHTML = " ";
 
 //getting selected item

var selected_item = document.getElementById('category').value;

for(var i=0; i< aItem.length; i++){
    
    if(selected_item == aItem[i].category){
        
        //creating div/image card
        var imagediv = document.createElement('div');
        imagediv.className = "card";
        
        //creating image tag
         var pics = document.createElement("img");
         pics.src =  aItem[i].image;
         imagediv.appendChild(pics);
         
         //product_name div  plus qty at hand
         var descriptiondiv = document.createElement('div');
         var product_name = document.createElement("h3");

         product_name.className = "description";
         product_name.innerHTML =  aItem[i].product_name + "(" + aItem[i].quantity_at_hand + ")";
         descriptiondiv.appendChild(product_name);
          
          // product color
         var product_color = document.createElement("p");
         product_color.innerHTML= aItem[i].color;
         descriptiondiv.appendChild(product_color);
           
         //product id 
         var product_id = document.createElement("p");
        // var product_price = document.createElement("p");
         product_id.innerHTML= aItem[i].id + "|" +  curreny_sign()+  change_currnecy(aItem[i].price);
         descriptiondiv.appendChild(product_id);

         //maxiumx qty to buy

         var max_per_person = document.createElement("p");
         max_per_person.innerHTML= "maxium perchase per customer (" + aItem[i].maximum_per_customer + ")";
         descriptiondiv.appendChild(max_per_person);


        //appending all the divs 
      
       imagediv.appendChild(descriptiondiv);    
       maindiv.appendChild(imagediv);


    }
}
}


 //Function to add  item to cart
 function addToCart()
 {
     //Retrieve user input of item details selection
     var item_id = document.getElementById("pro_id").value;
     var purchase_qty = parseInt(document.getElementById('qty').value);

     var counter = 0;
     for (var i = 0; i < aItem.length; i++) 
     {
         if (item_id == aItem[i].id) 
         {counter = i
         }  
     }
                 
     //Validate Item ID
     if (item_id== 0) 
     {
        document.getElementById("cartvalidate").innerText = "Please enter your product choice of ID!";
         return;
     }

     //Validate item quantity 		
     for (var x = 0; x < aItem.length; x++)
     {
         if (aItem[x].maximum_per_customer <= purchase_qty - 1)
         {
            document.getElementById("cartvalidate").innerText = "You have exceeded the limit of items per customer!";
             return;
         }
     }

     //check if a valid number quantity is entered
     for (var a = 0; a < aItem.length; a++)
     {
         if (purchase_qty <= 0)
         {
            document.getElementById("cartvalidate").innerText = "Not Valid!";
             return;
         }
     }
     var exists = false;
     for (var i = 0; i < aCart.length; i++) 
     {       
         if (aItem[counter].id == aCart[i].id) 
         {
             exists = true;
             aCart[i].qty += purchase_qty;
             aItem[counter].quantity_at_hand -= purchase_qty ;
         }
     }
     if (!exists) 
     {
         aCart.push(new Cart(aItem[counter].id, aItem[counter].price, purchase_qty, aItem[counter].cost_of_shipping));
         aItem[counter].quantity_at_hand -= purchase_qty; // deducting from the store
         aItem[counter].maximum_per_customer -= purchase_qty; // deducting purchase qty from max perchase that a user can
         alert("Item has been added to the cart!")
     }
     //clering input feilds
     document.getElementById("pro_id").value =" ";
    // document.getElementById('qty').value = " ";

     displayCartItems();
     display_store_items();		
 }


//fucntion for removing cart 

function remove_cart(){
    var item_id = document.getElementById("pro_id").value;
     var purchase_qty = parseInt(document.getElementById('qty').value);
	
		var counter = 0;
		for(var i = 0; i < aCart.length; i++)
		{
			if(aCart[i].id == item_id)
			{
				counter = i;
			} 
        }
		if(purchase_qty >= aCart[counter].qty)
		{
			aItem.quantity_at_hand += aCart[counter].qty;
			aCart.splice(counter,1);
		} 
		else if (purchase_qty <= aCart[counter].qty)
		{
			aCart[counter].qty -= purchase_qty;	
			aCart.quantity_at_hand += purchase_qty;
		}
		alert("Item removed!")
        //clering input feilds
        document.getElementById("pro_id").value =" ";
        document.getElementById('qty').value = " ";

		displayCartItems();
       
    }
    
    


//Function for displaying cart items 

function displayCartItems() {
   
    //div output
    var divcart = document.getElementById('cartOutput');
    divcart.innerHTML = " ";
 
     for (var x = 0; x < aCart.length; x++) 
     {
         
        if (aCart.length < 1) 
        {
			//output if there is no items in the cart
            div_shopping.innerHTML = "No Items In Cart";
		}
        product_id_in_cart = aCart[x].id; //id
        product_price_in_cart = aCart[x].price; //price
        product_qty_in_cart = aCart[x].qty; //qty

        //displaying cart onto div
        
        divcart.innerHTML+= "|";
        divcart.innerHTML+= product_id_in_cart + "   |   ";                  //id

        divcart.innerHTML+= curreny_sign(); //currency sign
        divcart.innerHTML+= change_currnecy(aCart[x].price) +"|    ";        //price
        divcart.innerHTML+= product_qty_in_cart + "|";                             //qty
        
        var item_total = 0;
        divcart.innerHTML+= curreny_sign(); //currency sign
        item_total = change_currnecy(aCart[x].price) * product_qty_in_cart;      //subtotal
        divcart.innerHTML += item_total + "</br>";   
    }
       cart_total();


}



//function for calculating cart total
function cart_total(){
   
    for (var x = 0; x < aCart.length; x++) {


        shipping = aCart[x].shipping;
        totalOrder = 0;
        var tax = 0.13;
        subtotal = 0;
        itemtotal = 0;
        subtotal = (itemtotal + shipping) * change_currnecy(aItem[x].price);
        estimatedTax = subtotal * tax ;
        totalOrder = subtotal + estimatedTax;

        // div for output shopping cart 
        var div_shopping = document.getElementById('subtotal');
        div_shopping.innerHTML = " ";

   //appending total to the DOM
      items_subtotal =  change_currnecy(aCart[x].price) * product_qty_in_cart;
      div_shopping.innerHTML += "Items Subtotal: " + curreny_sign() + items_subtotal.toFixed(2) + "</br>";
            
      estimated_shipping = change_currnecy(aCart[x].price) * shipping +"<br>";
      div_shopping.innerHTML += "Estimated Shipping: " + curreny_sign() + estimated_shipping + "</br>";
      
      subtotal = (itemtotal + shipping) * change_currnecy(aCart[x].price);
      div_shopping.innerHTML += "Subtotal: " + curreny_sign() + subtotal.toFixed(2) + "</br>";

      estimatedTax = subtotal * tax ;
      div_shopping.innerHTML +=  "Estimated Tax: " + curreny_sign() + estimatedTax.toFixed(2)  + "</br>";
      
      totalOrder = subtotal + estimatedTax;
      div_shopping.innerHTML += "Order Total: " + curreny_sign() + totalOrder.toFixed(2)  + "</br>";
      div_shopping.innerHTML += "</br>";

     }

}
              

//display detail
function display_detail(){
   
//retreiving  user detail

var product_id = document.getElementById('pro_id').value;
var detail_output_div = document.getElementById('cartdiv');
var img_div = document.getElementById('imgdiv');

 //clearing div 
 detail_output_div.innerHTML=" ";

 //clear out image div
 img_div.innerHTML=" ";
 
for(var i=0; i<aItem.length; i++){
if(product_id == aItem[i].id){
    var prodct_id = aItem[i].id;
    var product_name = aItem[i].product_name;
    var product_price = aItem[i].price;
    var product_color = aItem[i].color;
    var qty_Available = aItem[i].quantity_at_hand;
    var max_per_customer = aItem[i].maximum_per_customer;
    var cost_of_shipping = aItem[i].cost_of_shipping;
    var product_description = aItem[i].description;
    var product_review = aItem[i].reviews;
    var product_image = document.createElement('img');
    product_image.setAttribute("src",aItem[i].image);

    //appending details to the DOM
    detail_output_div.innerHTML+= "<h3> Product In Detail </h3> </br> ";
    detail_output_div.innerHTML+= "ID: " + prodct_id + "</br>"; 
    detail_output_div.innerHTML+= "Product Name: " + product_name + "</br>"; 
    detail_output_div.innerHTML+= "Pice: " + curreny_sign()+  change_currnecy(aItem[i].price)+ "</br> "; 
    detail_output_div.innerHTML+= "Color: " + product_color + " </br>";
    detail_output_div.innerHTML+= "Qty Available: " + qty_Available+ "</br>"; 
    detail_output_div.innerHTML+= "Max Purchase Per Person: " + max_per_customer+ "</br>"; 
    detail_output_div.innerHTML+= "Cost of Shipping: " + cost_of_shipping + "</br>"; 
    detail_output_div.innerHTML+= "Description:" + product_description + "</br>"; 
    detail_output_div.innerHTML+= "What people say about " + product_name + " ?" + " " + product_review; 
    img_div.appendChild(product_image) + "</br>";

    //clering input feilds
    document.getElementById("pro_id").value =" ";
    document.getElementById('qty').value = " ";


}

}
}

    //function for currency change

function change_currnecy(price){
    var selectedcurr = document.getElementById('currencySelector').value;
    if(selectedcurr == "USD"){
        price = (price/0.78).toFixed(2);
        
    }else if (selectedcurr == "GBP"){
        price = (price/0.59).toFixed(2);
      
    }else{
        price = price;
     
    }
    return price;

 }
//function for currency sign

 function curreny_sign(){
    var selectedcurr = document.getElementById('currencySelector').value;
    if(selectedcurr == "USD"){
        sign= "USD$ "
        
    }else if (selectedcurr == "GBP"){
        sign = "GBP ";
      
    }else{

        sign= "CAD$ ";
     
    }
    return sign;

 }


 //fucntion for revwing a product

function review(){
    var reviewId = document.getElementById('reviewId').value;
    var user_review = document.getElementById("reviewinput").value;
    for(var i=0; i<aItem.length; i++){
        product_id = aItem[i].id;
        if(product_id == reviewId){
            aItem[i].reviews.push("</br>" + "User Review: " + user_review );
            window.alert("thank you for your review!");

            //clearing input feild
            document.getElementById('reviewId').value = " ";
            document.getElementById("reviewinput").value = " ";
            break;
            
        }
    }
 }
    