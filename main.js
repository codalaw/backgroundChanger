const btn = document.getElementById("btn");

function colorChanger() {
    const colors = [
        "#FF5733",  // Red-Orange
        "#33FF57",  // Green
        "#3357FF",  // Blue
        "#FF33A1",  // Pink
        "#FFB833",  // Yellow-Orange
        "#8A2BE2",  // Blue-Violet
        "#FFD700",  // Gold
        "#D2691E",  // Chocolate
        "#00FF7F",  // Spring Green
        "#00BFFF",  // Deep Sky Blue
        "#FF4500",  // Orange-Red
        "#32CD32",  // Lime Green
        "#FFD700",  // Gold
        "#ADFF2F",  // Green Yellow
        "#800080"   // Purple
    ];  

    
    const containerColor = colors[Math.floor(Math.random() * colors.length)];

    
    let bodyColor = colors[Math.floor(Math.random() * colors.length)];
    while (bodyColor === containerColor) {
        bodyColor = colors[Math.floor(Math.random() * colors.length)];  s
    }

    
    document.getElementById("container").style.backgroundColor = containerColor;

   
    document.body.style.backgroundColor = bodyColor;
}


btn.addEventListener("click", colorChanger);
