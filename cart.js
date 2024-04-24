


// let main = document.querySelector('.main-div')

// function Samsung(){

//     const data = JSON.parse(localStorage.getItem('cartinfo'));
//     console.log(data)
//     let finaldata = '';

//     finaldata=`
//         <div class="cartitems">
//         <p><span>brand:</span> Samsung</p>
//         <p><span>Model:</span> S20</p>
//         <p><span>Quantity:</span> 8</p>
//         <p><span>Price: </span>15000</p>
//         <p><span>Total Price:</span> 15000</p>
//         <button class="plus-btn" onclick="">+</button>
//         <span>1</span>
//         <button class="minus-btn" onclick="">-</button>
//         <br />
//         <button class="delete-btn" onclick="">Delete</button>
//     </div>`


//     main.innerHTML = finaldata

// }


// display()












// function returntoshop(){
//     window.location = 'index.html'
//     }

function goToHome() {
    window.location = 'index.html'
    localStorage.setItem('cartItem', JSON.stringify(cartArr));
}


const data = localStorage.getItem('cartItem');
const cartArr = JSON.parse(data);

const div = document.querySelector('#main-div');
const totalAmounts = document.querySelector('.total-amount');


function renderCart() {
    let totalAmount = 0;
    totalAmounts.innerHTML = ''
    if (cartArr.length > 0) {
        for (let i = 0; i < cartArr.length; i++) {
            totalAmount += cartArr[i].price * cartArr[i].quantity
            div.innerHTML += `
            <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl mt-5">
                    <p><span class="font-bold text-lg">brand:</span> ${cartArr[i].brand}</p>
                    <p><span class="font-bold text-lg">Model:</span> ${cartArr[i].model}</p>
                    <p><span class="font-bold text-lg">Quantity:</span> ${cartArr[i].quantity}</p>
                    <p><span class="font-bold text-lg">Price:</span> ${cartArr[i].price}</p>
                    <p><span class="font-bold text-lg">Total Price:</span> ${cartArr[i].price * cartArr[i].quantity}</p>
                    <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="increaseQuantity(${i})">+</button>
                    <span>${cartArr[i].quantity}</span>
                    <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="decreaseQuantity(${i})">-</button> <br/>
                    <button  class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="deleteItem(${i})">Delete</button>
            </div>
            `
            totalAmounts.innerHTML = `Total Amount ${totalAmount}`
        }
    } else {
        div.innerHTML = '<h2 class="text-center text-3xl">No item Found..</h2>'
    }

}

renderCart()



function increaseQuantity(index) {
    div.innerHTML = ''
    //console.log(cartArr[index])
    cartArr[index].quantity += 1
    renderCart()
}
function decreaseQuantity(index) {
    div.innerHTML = ''
    //console.log(cartArr[index])
    cartArr[index].quantity -= 1
    renderCart()
    if (cartArr[index].quantity === 0) {
        div.innerHTML = ''
        cartArr.splice(index, 1)
        renderCart()
    }
}



function deleteItem(index) {
    div.innerHTML = '';
    cartArr.splice(index, 1);
    renderCart()
}



window.onbeforeunload = function () {
    localStorage.setItem('cartItem', JSON.stringify(cartArr));
};











