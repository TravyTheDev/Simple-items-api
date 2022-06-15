const search = document.querySelector('#search')
search.addEventListener('click', getItem)
const price = document.querySelector('#price')
const image = document.querySelector('#image')
const worth = document.querySelector('#worth')
const notWorth = document.querySelector('#not-worth')

async function getItem(){
    const searched = document.querySelector('input').value
    try{
        const response = await fetch(`localhost:8000/api/${searched}`)
        const data = await response.json()

        console.log(data)
        image.src = data['image']
        price.textContent = data['price']
        worth.textContent = data['worth']
        notWorth.textContent = data['not worth']
    }catch(error){
        console.log(error)
    }
}