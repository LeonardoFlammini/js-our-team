
// ********************** DATA *************************//

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  }
  ,
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  }
  ,
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  }
  ,
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  }
  ,
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  }
  ,
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
];

// ********************** CONST *************************//

const membersContainer = document.getElementById("members-container");

// ********************** LET *************************//

let cards = ""; //potrebbe essere la const in un ciclo

// ********************** MAIN *************************//

reset();

printCards();

// ********************** FUNCTIONS *************************//

function reset ()
{
  membersContainer.innerHTML = "";
}

function printCards() 
{
  for(member of teamMembers){
  
    
    cards = 
    `

    <div class="col my-3">
      <div class="card-lf">
        <div class="image-lf">
          <img src="img/${member.image}" alt="">
        </div>
        <div class="info-lf text-center p-3 ">
          <h5>${member.name}</h5>
          <span>${member.role}</span>
        </div>
      </div>
    </div>

    `;
  
    membersContainer.innerHTML += cards;

  
  
    console.log(cards);
  }
}