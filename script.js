function showDetails(carId) {
    const carDetails = {
      car1: {
        name: "Sedan X",
        image: "download (1).jpg",
        description: "A sleek and modern sedan with top-notch comfort and performance.",
      },
      car2: {
        name: "SUV Pro",
        image: "2.jpg",
        description: "A rugged and spacious SUV, perfect for off-road adventures and family trips.",
      },
      car3: {
        name: "Coupe Z",
        image: "3.jpg",
        description: "A stylish coupe with an aerodynamic design and powerful engine.",
      },
    };
  
    const modal = document.getElementById("carDetails");
    const carContent = document.getElementById("carContent");
  
    const car = carDetails[carId];
    carContent.innerHTML = `
      <img src="${car.image}" alt="${car.name}" style="width: 100%; border-radius: 8px;">
      <h2>${car.name}</h2>
      <p>${car.description}</p>
    `;
    modal.style.display = "flex";
  }
  
  function closeDetails() {
    const modal = document.getElementById("carDetails");
    modal.style.display = "none";
  }
  