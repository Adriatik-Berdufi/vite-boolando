<script>
import axios from 'axios';
import appheader from './components/Appheader.vue';
import appmain from './components/Appmain.vue';
import appfooter from './components/Appfooter.vue';


export default{
  data(){
    return{
      
    };
    
  },
  components:{appheader,appmain,appfooter},
  created(){
    console.log(axios);
  }

};

</script>

<template>
  
  <header>
    <appheader/>
  </header>

  
  <main>
    <appmain/>
  </main>
  
  <footer>
    <appfooter/>
  </footer>
  
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
header{
  background-color: rgb(246, 105, 5);
  height: 70px;
  box-shadow: 0px 3px 10px 1px rgb(173, 80, 12);
  color: white;
  
}
main{
  background-color: rgb(245, 238, 228);
  
}
footer{
  background-color:rgb(26, 26, 26);
  height: 80px;
  color: white;
}
</style>
