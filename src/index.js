// write your code here
const url = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector("#ramen-menu")
const ramenMainInfo = document.querySelector("#ramen-detail")
const ramenMainRating = document.querySelector("#rating-display")
const ramenMainComment = document.querySelector("#comment-display")
const ramenForm = document.querySelector("#new-ramen")
const basicGetConfig = {method: "GET", headers: {"Content-Type": "application/json"}}

function renderRamen(obj){
    ramenMainInfo.querySelector("img").src = obj.image
    ramenMainInfo.querySelector("h2").textContent = obj.name
    ramenMainInfo.querySelector("h3").textContent = obj.restaurant
    ramenMainRating.textContent = obj.rating
    ramenMainComment.textContent = obj.comment
}
function addToList(obj){
  const img = document.createElement("img")
  img.src = obj.image
  ramenMenu.append(img)
  img.addEventListener("click",()=>{renderRamen(obj)})
}
fetch(url,basicGetConfig)
  .then(response=>response.json())
  .then(data=>{data.forEach(ramen => {
    addToList(ramen)
    renderRamen(ramen)
});})
ramenForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  console.log(e)
  const newRamenObj = {
    name: e.target[0].value,
    restaurant: e.target[1].value,
    image: e.target[2].value,
    rating: e.target[3].value,
    comment: e.target[4].value,
  }
  addToList(newRamenObj)
})