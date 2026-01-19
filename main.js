const productsDiv = document.getElementById("products-div");
productsDiv.style.display = "grid"
productsDiv.style.gridTemplateColumns = "repeat(4, 4fr)"

async function getDatas() {
    const response = await fetch('https://dummyjson.com/products')

    const data = await response.json()

    const productAPI = data.products

    console.log(productAPI)

   productsDiv.innerHTML = productAPI
     .map(
       (item) => `
        <div>
                <img style="width: 200px" src="${item.images}" alt="">
                <h3>${item.title}</h3>
        </div>
    `,
     )
     .join("")

}

getDatas()