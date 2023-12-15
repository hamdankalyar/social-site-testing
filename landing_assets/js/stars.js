document.addEventListener("mousemove", (event) => {
    const starsContainer = document.createElement("div");
    starsContainer.className = "stars-container";
  
    for (let i = 0; i < 10; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = event.pageX + "px";
      star.style.top = event.pageY + "px";
      starsContainer.appendChild(star);
    }
  
    document.body.appendChild(starsContainer);
  
    setTimeout(() => {
      starsContainer.remove();
    }, 1000);
  });
  