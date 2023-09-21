
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

let card = ""; //potrebbe essere la const in un ciclo

// ********************** MAIN *************************//

let memberString = "";
for(member of teamMembers){
  
  for(label in member){
    memberString += ` ${label} ${teamMembers[label]}`;
  }

  console.log(memberString);
}