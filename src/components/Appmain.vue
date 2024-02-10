<script>
export default{
  data(){
    const products = [
  {
    id: 1,
    frontImage: '1.webp',
    backImage: '1b.webp',
    brand: "Levi's",
    name: 'Relaxed Fit',
    price: 29.99,
    isInFavorites: true,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
      {
        type: 'discount',
        value: '-50%',
      },
    ],
  },
  {
    id: 2,
    frontImage: '2.webp',
    backImage: '2b.webp',
    brand: 'Guess',
    name: 'Roses Tee',
    price: 20.99,
    isInFavorites: true,
    badges: [
      {
        type: 'discount',
        value: '-30%',
      },
    ],
  },
  {
    id: 3,
    frontImage: '3.webp',
    backImage: '3b.webp',
    brand: 'Come Zucchero Filato',
    name: 'Voglia di colori pastello',
    price: 129.99,
    isInFavorites: false,
    badges: [
      {
        type: 'discount',
        value: '-30%',
      },
    ],
  },
  {
    id: 4,
    frontImage: '4.webp',
    backImage: '4b.webp',
    brand: "Levi's",
    name: 'Tee Unisex',
    price: 14.99,
    isInFavorites: false,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
      {
        type: 'discount',
        value: '-50%',
      },
    ],
  },
  {
    id: 5,
    frontImage: '5.webp',
    backImage: '5b.webp',
    brand: 'Maya Deluxe',
    name: 'Stripe Bodice',
    price: 99.99,
    isInFavorites: true,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
      {
        type: 'discount',
        value: '-50%',
      },
    ],
  },
  {
    id: 6,
    frontImage: '6.webp',
    backImage: '6b.webp',
    brand: 'Esprit',
    name: 'Maglione - Black',
    price: 29.99,
    isInFavorites: true,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
    ],
  },
];
    return{ products};
  },
};


</script>

<template>
  <div class="container">
   <div class="card">
    <figure><img src="../assets/img/1.webp" class="card-img-top" alt="..."></figure>
    <div class="card-body py-0">
      <h6 class="card-title ">brand</h6>
      <h5 class="card-title">product name</h5>
      <h6 class="card-title ">price</h6>

     
    </div>
  </div>

  
   <div class="card">1</div>
   <div class="card">1</div>
   <div class="card">1</div>
   <div class="card">1</div>
   <div class="card">1</div>


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
    height: 580px;
    figure{
      height: 480px;
      img{
      height: 100%;
      object-fit: cover;
    }
    }
    
  }
}
</style>
