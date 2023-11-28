var SlidItem=1;
ShowQuots(SlidItem)

function Clicked(direction)
{
	ShowQuots(SlidItem+=direction)
	 console.log("direction +1 = "+direction+" + "+SlidItem);
}

function ShowQuots(index)
{ 
// console.log("index "+index);
	var elementshowy ="";
	var x = document.getElementsByClassName("MyQuotes");
	if(index>x.length)
		{
			SlidItem=1;
		}
		if(index<1)
		{
			SlidItem=x.length;
		}
	for ( var i = 0; i < x.length; i++) 
	{
		x[i].style.display="none";
	
	}
	x[SlidItem-1].style.display="block";
	// document.getElementById("reult").value=x[SlidItem-1].innerHTML;

}





































// document.addEventListener("DOMContentLoaded", function() {
	// var slideIndex = 1;
	// showDivs(slideIndex);
	// console.log("adare3");
	// function plusDivs(n) {
	  // showDivs(slideIndex += n);
	  // console.log("hey plusddiv"+n);
	// }

	// function showDivs(n) 
	// {
	  // console.log("show div" +n );
	  // var x = document.getElementsByClassName("mySlides");
		// if (n > x.length) 
		// {
			// slideIndex = 1;
			// Console.log("xlenf: "+slideIndex);
		// }
		// if (n < 1)
		// {
			// slideIndex = x.length;
			// console.log("xlenf2: "+slideIndex);
		// }
	  
		// for ( var i = 0; i < x.length; i++) {
		// x[i].style.display = "none";  
		// }
		// x[slideIndex-1].style.display = "block";  
	// }
// });
// document.addEventListener("DOMContentLoaded", function() {
  // var slideIndex = 1;
  // showDivs(slideIndex);
	// console.log("awaday");
  // document.querySelector(".display-left").addEventListener("click", function() {
    // plusDivs(-1);
  // });

  // document.querySelector(".display-right").addEventListener("click", function() {
    // plusDivs(1);
  // });
// });
