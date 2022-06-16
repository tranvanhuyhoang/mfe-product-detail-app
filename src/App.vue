<template>
  <div id="container-product-detail">
     <div class="column-1">
       <h2 class="title">The Model Store</h2>
       <img class="img-custom" alt="1" src="./assets/images/tractor-blue.jpg">
     </div>
     <div class="column-2">
      <div class="top-content">
        <div class="container-cart">
          <span class="cart">basket: 30 item(s)</span>
        </div>
       
        <div class="name-product">Tractor Porsche-Diesel Master 419</div>
      </div>
      <div class="bottom-content">
         <div class="container-thumnail">
          <img class="img-thumn-custom" alt="1" src="./assets/images/tractor-blue-thumb.jpg">
          <img class="img-thumn-custom" alt="2" src="./assets/images/tractor-green-thumb.jpg">
          <img class="img-thumn-custom" alt="3" src="./assets/images/tractor-red-thumb.jpg">
          </div>
          <button class="buy-btn">
            Buy for 66$
          </button>
      </div>
     </div>
  </div>
  <span></span>
</template>

<style>
#container-product-detail{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

.column-1{
  display: table-cell;
  width: 50%;
}

.column-1 .title{
  padding: 12px;
  margin: 0px;
}

.column-2{
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
}

.column-2 .top-content{
  height: 30%;
  display: flex;
  flex-direction: column;
}

.column-2 .top-content .container-cart{
  text-align: end;
}

.column-2 .top-content .container-cart .cart{
  background: green;
  padding: 8px 15px;
  margin: 12px 12px 0 0;
  border-radius: 4px;
  color: #fff;
  box-sizing: border-box;
  line-height: 52px;
}

.column-2 .top-content .name-product{
  font-size: 23px;
  margin-top: auto;
}

.column-2 .bottom-content{
  height: 40%;
  text-align: center;
}

.column-2 .bottom-content .buy-btn{
  width: 60%;
  margin: 20px auto;
  padding: 15px 25px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #4f4f4f;
  border-radius: 6px;
}

.column-2 .bottom-content .buy-btn:hover{
  background-color: #f6f6f6;
}


.column-2 .img-thumn-custom{
  cursor: pointer;
  border-bottom: 2px solid #fff;
}

.column-2 .img-thumn-custom:hover{
  cursor: pointer;
  border-color: green;
}

</style>
