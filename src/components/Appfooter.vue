<script>
export default{
  data(){
  
   const info = [
      {
        title: 'Informazioni legali',
        url: '#'
      },
      {
        title: 'Informativa sulla privacy ',
        url: '#'
      },
      {
        title: 'Diritto di recesso ',
        url: '#'
      },
    ];
   
    return{info};
  },
};


</script>

<template>
  <div class="container ">
    <div>
      <h5>Boolando s.r.l</h5>
      <ul >
        <li v-for="element in info"><a :href="element.url">{{ element.title }}</a></li>
      </ul>
    </div>
    <div>
      <h6>Trovaci anche su</h6>
      <ul class="social">
        <li><a href="#"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'youtube']"/></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'pinterest']"/></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
      </ul>
    </div>
  </div>


</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  ul{
    display: flex;
    padding: 0; 
    li{
        list-style: none;
        margin-right:10px;
        font-size: 12px;
        
        a{
          text-decoration: none;
          color: inherit;
        }
        }
  }
  .social{
    li{
      font-size: 16px;
    }
  }
}


</style>
