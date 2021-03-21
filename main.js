menulist_array  = [" chicken tandori pizza","veg supreme pizza","paneer tikaa pizza","deluxe veggie pizza","veg extravanza pizza"]
function  getmenu(){
    var htmldata;
    htmldata ="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+'<li>' + menu_list_array [i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item)
    menu_list_array.sort(item)
    htmldata ="<section class='cards'>"
    for(var i=0;i<menu_list_array.lenght;i++)
    
     htmldata=htmldata+'<div class="card">'+'img src="pizza.jfif"/>'+menu_list_array
    }
     htmldata=htmldata+"</section>"
     document.getElementById("display_addmenu").innerHTML = htmldata;