const form = document.getElementById('searchProfile');
const input = document.getElementById('input');
const main = document.querySelector('.main');
const API_Url = "https://api.github.com/users/";
let profile;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = input.value;
    // let user = "Deepak-Chaudhary20";
    console.log(user);
    getUserDetails(user);
});

async function getUserDetails(user){
    const response = await fetch(API_Url + user);
    const data = await response.json();
    createUserProfile(data);
}

function createUserProfile(data){
    console.log(data);
    if(data.name === null){
        profile = "User not found";
        main.innerHTML = profile;
        input.value = "";
    }else{
        profile = `
        <div class="section">
        <div id="image">
            <img src="${data.avatar_url}" alt="e">
        </div>
        <div id="bio">
            <h4>${data.name}</h4>
            <div class="bio">${data.bio}</div>
            <ul class="attr">
                <li><i class="fa-solid fa-heart"></i>${data.followers}</li>
                <li><i class="fa-solid fa-face-smile"></i>${data.following}</li>
                <li><i class="fa-solid fa-bolt"></i>${data.location}</li>
            </ul>
        </div>
        </div>
        `;
        console.log(profile);
        main.innerHTML = profile;
        input.value = "";
    }
}

