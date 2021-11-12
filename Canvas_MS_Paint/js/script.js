
/*---------- more responsive code start here ------------*/
var canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;     //it gives viewport width
canvas.height = 500;
var shapes = canvas.getContext("2d");  
/*---------- more responsive code start here ------------*/

function drawShapes()
{
    $("#mycanvas").mousedown(function(event)
    {
        shapes.beginPath();
        $("#mycanvas").mousemove(function(event){
            shapes.lineTo(event.pageX, event.pageY);    // return co-ordinate according to mouse
            console.log(event.pageX, event.pageY);
            shapes.stroke();
        })

        $("#mycanvas").mouseup(function(event)
        {
            $("#mycanvas").unbind("mousedown");
        })
    })
}


// window.onload = drawShapes;