function doRegex(){var e=string.value,t=new RegExp(regex.value,flag.value);text.value="";var n=e.match(t);if(console.log(n),!n)return text.value="Not matches :(";for(match in n){var g=n[match]+"\n";text.value+=g}}function burgerIt(){burger.classList.toggle("active"),func.classList.toggle("active"),btn.classList.toggle("active")}var string=document.getElementById("string"),regex=document.getElementById("regex"),flag=document.getElementById("flag"),btn=document.getElementById("btn"),text=document.getElementById("text"),burger=document.getElementById("burger"),func=document.getElementById("functions");