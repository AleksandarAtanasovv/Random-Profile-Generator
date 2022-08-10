const generateBtn = document.getElementById('generate');
async function getProfile() {
    const resp = await fetch('https://randomuser.me/api/')
    const respData = await resp.json();
    setProfile(respData)
}
generateBtn.addEventListener('click', () =>{
    getProfile()
})
function setProfile(data){

}
