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
      <ul>
        <li v-for="element in headerNavbar"><a :href="element.url">{{element.title}}</a></li>
      </ul>
    </div>
    <figure>
      <img src="../assets/logo/boolean-logo.png" alt="logo boolean">
    </figure>
    <div class="icons">
      <ul>
        <li><font-awesome-icon :icon="['far', 'user']" /></li>
        <li><font-awesome-icon :icon="['far', 'heart']" /></li>
        <li><font-awesome-icon :icon="['fas', 'bag-shopping']" /></li>
      </ul>
    </div>
  </div>


</template>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items:center;
  li{
      list-style: none;
      a{
        text-decoration: none;
        color: inherit;
      }
      }
  .nav-container{
    ul{
      display: flex;
      align-items: center;
      li{
        margin-right: 15px;
        font-size: 20px;
      }
    }
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
  .icons{
    ul{
      display: flex;
      gap:0 20px;
      font-size: 20px;
    }
  }   
}
</style>
