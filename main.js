const generateBtn = document.getElementById('generate');
const container = document.querySelector('.container')
async function getProfile() {
    const resp = await fetch('https://randomuser.me/api/')
    const respData = await resp.json();
    console.log(respData);
    setProfile(respData)
}
generateBtn.addEventListener('click', () =>{
    getProfile()
})
function setProfile(data){
    container.innerHTML = `
    <div class="profile">
    <img class="profile-picture" src="${data.results[0].picture.medium}">
    <p class="name">${data.results[0].name.first} ${data.results[0].name.last}</p>
    <p class="phone">+${data.results[0].phone}</p><br>
    <p class="email">${data.results[0].email}</p>
    <p class="address">${data.results[0].location.city}, ${data.results[0].location.street.name} ${data.results[0].location.street.number}</p>
    <button id="generate">Generate Profile</button>
</div>`
}
// {
//     "results": [
//         {
//             "gender": "male",
//             "name": {
//                 "title": "Mr",
//                 "first": "Andreas",
//                 "last": "Olsen"
//             },
//             "location": {
//                 "street": {
//                     "number": 9639,
//                     "name": "Kærsangervej"
//                 },
//                 "city": "Oure",
//                 "state": "Sjælland",
//                 "country": "Denmark",
//                 "postcode": 64209,
//                 "coordinates": {
//                     "latitude": "-45.5745",
//                     "longitude": "-179.8775"
//                 },
//                 "timezone": {
//                     "offset": "+5:45",
//                     "description": "Kathmandu"
//                 }
//             },
//             "email": "andreas.olsen@example.com",
//             "login": {
//                 "uuid": "1bcf79b9-1d5b-4ff2-b276-3cdb19cb9e6a",
//                 "username": "heavygorilla304",
//                 "password": "bookie",
//                 "salt": "fYuU89iD",
//                 "md5": "7cd57bde3aa4731e8e83cf18cc86cc9b",
//                 "sha1": "7be6d7013f0f5ad090733a148c7fcab946fa6086",
//                 "sha256": "001368dd4daa7bed2865a62814228f4ba475ea31d1e0bcb24925e90d1a7691fa"
//             },
//             "dob": {
//                 "date": "1987-11-16T12:16:57.098Z",
//                 "age": 34
//             },
//             "registered": {
//                 "date": "2019-01-03T01:42:05.157Z",
//                 "age": 3
//             },
//             "phone": "15775946",
//             "cell": "47319751",
//             "id": {
//                 "name": "CPR",
//                 "value": "161187-3952"
//             },
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/men/74.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
//             },
//             "nat": "DK"
//         }
//     ],
//     "info": {
//         "seed": "722488d0b13cf872",
//         "results": 1,
//         "page": 1,
//         "version": "1.4"
//     }
// }