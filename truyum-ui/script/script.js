

 function alertmessage()
 {
 	alert("item has been deleted");
 }
	

	function add()
	{
alert("Item has been added to cart");
	}


	 function validate()
 {
 	var name1=document.getElementById("name1").value;
 	var price=document.getElementById("price1").value;
 	var dol=document.getElementById("dol").value;
 	if(name1=="" && price!="" && dol!="")
 		alert("name is required field");
 	if(price=="" && dol!="" && name1!="")
 		alert("price is required field");
 	if(dol=="" && price!="" && name1!="")
 		alert("date of launch is required field");

 }	