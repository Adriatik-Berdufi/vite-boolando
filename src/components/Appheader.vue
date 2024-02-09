<script>
export default{
  data(){
     const headerNavbar = [
      {
      title: 'Uomo',
      url: '#'
      },
      {
      title: 'Donna',
      url: '#'
      },
      {
      title: 'Bambino',
      url: '#'
      },
  ]
    return{headerNavbar};
  },
};


</script>

<template>
  <div class="container ">
    <div class="nav-container">
      <ul v-for="element in headerNavbar">
        <li><a :href="element.url">{{element.title}}</a></li>
      </ul>
    </div>
    <figure>
      <img src="../assets/logo/boolean-logo.png" alt="logo boolean">
    </figure>
    <div>
      <ul>
        <li><font-awesome-icon :icon="['far', 'user']"/></li>
      </ul>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: space-between;
  align-items:center;
  li{
      list-style: none;
      a{
        text-decoration: none;
      }
      }
  .nav-container{
      display: flex;
      align-items: center;
      height: 70px;
    
    }
  figure{
    display: flex;
    align-items: center;
    height: 70px;
    img{
      height: 50%;
      object-fit:contain;
    }
  }
    
  
}

</style>
