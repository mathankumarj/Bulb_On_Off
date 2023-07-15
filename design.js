function changeImage()
{
    var pic = document.getElementById("Bulb");
    if(pic.src.match("on"))
    {
    console.log("on");
    pic.src= "Bulb off.jpeg";
    }
else{
    console.log("off");
    pic.src = "Bulb on.jpeg.webp";
}
}