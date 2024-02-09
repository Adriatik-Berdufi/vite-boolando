<script>
import appheader from './components/header.vue';
import appmain from './components/main.vue';
import appfooter from './components/footer.vue';


export default{
  data(){
    return{};
  },
  components:{appheader,appmain,appfooter},
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
  background-color: red;
}
</style>
