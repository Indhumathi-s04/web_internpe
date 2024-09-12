const product=[
    {
        id:1,
        image:'./image/1-img.jpg',
        title:'smartwatch',
        price:'$2000',
    },
    {
        id:2,
        image:'image/2-img.jpg',
        title:'samsung Galaxy mobile',
        price:'$30000',
    },
    {
        id:3,
        image:'image/3-img.jpg',
        title:'headset',
        price:'$1000',
    },
    {
        id:4,
        image:'image/4-img.jpg',
        title:'camera',
        price:'$40000',
    },
    {
        id:5,
        image:'image/5-img.jpg',
        title:'airpods',
        price:'$1000',
    },
    {
        id:6,
        image:'image/6-img.jpg',
        title:'laptop',
        price:'$50000'
    },
    {
        id:7,
        image:'image/7-img.jpg',
        title:'LED tv',
        price:'$20000'
    },
    {
        id:8,
        image:'image/8-img.jpg',
        title:'speaker',
        price:'$1000'
    },
]
const Categories=[...new Set(product.map((item)=>
    {return item}))]

let cart=document.getElementById('root')    
cart.innerHTML=Categories.map((item)=>{
    var{image, title, price}=item;
    return(
        /*html*/
        `<div class="box">
            <div class="img-box">
                <img src=${image} width="200px" height="200 px">
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to cart</button>
            </div>
        </div>`
        
    )
}).join('')


