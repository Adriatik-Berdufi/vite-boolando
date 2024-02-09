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
  <appheader/>
  <appmain/>
  <appfooter/>
</template>

<style scoped>
</style>
