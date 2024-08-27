// Sample data for demonstration purposes
const farmers = [
         {
           name: "John Doe",
           location: "New York",
           wheatPrice: 200,
           wheatQuantity: 100
         },
         {
           name: "Jane Smith",
           location: "California",
           wheatPrice: 250,
           wheatQuantity: 50
         },
         {
           name: "Bob Johnson",
           location: "Illinois",
           wheatPrice: 220,
           wheatQuantity: 150
         }
       ];
       
       // Function to generate cards
       function generateCards(farmers) {
         const cardsContainer = document.querySelector(".cards-container");
         farmers.forEach((farmer) => {
           const card = document.createElement("div");
           card.classList.add("card");
           const cardContent = document.createElement("div");
           cardContent.classList.add("card-content");
           const h2 = document.createElement("h2");
           h2.textContent = farmer.name;
           const p = document.createElement("p");
           p.textContent = `Wheat Price: $${farmer.wheatPrice} per bushel`;
           const location = document.createElement("p");
           location.classList.add("location");
           location.textContent = farmer.location;
           const img = document.createElement("img");
           img.src = "https://picsum.photos/200/300"; // placeholder image
           card.appendChild(img);
           cardContent.appendChild(h2);
           cardContent.appendChild(p);
           cardContent.appendChild(location);
           card.appendChild(cardContent);
           cardsContainer.appendChild(card);
         });
       }
       
       // Generate cards on page load
       generateCards(farmers);
       function handleCardCLick(event){
        const cardId = event.currentTardet.id;
        const urls = {
          card1 : 'Details_Wheat.html'
        };
        window.location.href = urls[cardId] ||'default.html';
       }
       document.querySelectorAll('.cards').forEach(card =>{
        card.addEventListener('click',handleCardClick);
       });
