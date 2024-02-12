<script>
import { store } from "../store/index";
export default{
  data(){

    store.products.forEach(product => {
    product.currentImage = product.frontImage;
    product.heartIcon = product.isInFavorites ? 'fas' : 'far';
    });
    
    return{ 
      store,
      heartIcon: '',
    };
  },
  
  methods:{
    getImagePath: function(img){
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
    toggleImage: function(product) {
      product.currentImage = (product.currentImage === product.frontImage) ? product.backImage : product.frontImage;
    },
    toggleheart: function(product){
      product.isInFavorites = !product.isInFavorites;
      product.heartIcon = product.isInFavorites ? 'fas' : 'far';
    },
  },
  
};


</script>

<template>
  <div class="container">
   <div class="card" v-for="product in store.products">
    <div @click="toggleheart(product)" class="favorites"><font-awesome-icon :icon="[product.heartIcon , 'heart']" /></div>
    
    
    <figure @click="toggleImage(product)"  ><img :src="getImagePath(product.currentImage)" class="card-img-top" alt="..."></figure>
    <div class="card-body py-0">
      <h6 class="card-title ">{{product.brand}}</h6>
      <h5 class="card-title">{{product.name}}</h5>
      <h6 class="card-title ">{{product.price}}</h6>    
    </div>
  </div> 

  </div>


</template>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding-top: 50px;
  padding-bottom: 50px;
  
  .card{
    width: calc(1321px / 3 - 25px );
    height: 670px;
    .favorites{
      position: absolute;
      right: 15px;
      top: 15px;
     
      width: 35px;
      aspect-ratio: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 24px;
      color: red;

    }
    figure{
      height: 560px;
      img{
      height: 100%;
      object-fit: cover;
    
    }
    }
    
  }
}
</style>
