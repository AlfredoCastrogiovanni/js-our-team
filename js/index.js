
const team = [
    {name: "Wayne Barnett", role: "Founder & CEO", picture: "wayne-barnett-founder-ceo.jpg"},
    {name: "Angela Caroll", role: "Chief Editor", picture: "angela-caroll-chief-editor.jpg"},
    {name: "Walter Gordon", role: "Office Manager", picture: "walter-gordon-office-manager.jpg"},
    {name: "Angela Lopez", role: "Social Media Manager", picture: "angela-lopez-social-media-manager.jpg"},
    {name: "Scott Estrada", role: "Developer", picture: "scott-estrada-developer.jpg"},
    {name: "Barbara Ramos", role: "Graphic Designer", picture: "barbara-ramos-graphic-designer.jpg"},
];

const wrapper = document.querySelector(".cardWrapper");
createCard(team, wrapper);

// ==================== Functions ====================

function createCard(cardInfo, cardWrapper) {
    for(let i=0; i < cardInfo.length; i++) {
        const member = cardInfo[i];
        cardWrapper.innerHTML += 
        `
        <!-- Article ${i} -->
        <article class="card">
            <div class="imgWrapper">
                <img src="img/${member.picture}" alt="Picture of ${member.name}">
            </div>
            <div class="infoWrapper">
                <h2>${member.name}</h2>
                <p>${member.role}</p>
            </div>
        </article>
        `;
    }
}