<template>
  <div id="app">

  <nav class="navbar" role="banner">
    <div class="container">
   <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button> -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
       <router-link to="/" class="navbar-brand"><img src="./assets/images/milletsLogo.png" alt="logo" class="imgmillet"></router-link> 
      </div>
      <div class="navbar-collapse navbar-right in" style="height: auto;">
        <ul class="nav navbar-nav">
          <li> <router-link to="/" class="navbar-brand">Home</router-link></li>
          <li> <router-link to="/aboutus" class="navbar-brand">About us</router-link></li>
          <li><router-link to="/millets" class="navbar-brand">Millets</router-link></li>
          <li><router-link to="/Contact" class="navbar-brand">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>


       <transition name="moveInUp">
         <router-view/>
       </transition>
        
  <footer id="footer" class="midnight-blue" style="margin-top:60px;background-color:green;">
  <div class="container">
    <div class="row">
    <div class="col-md-12 col-sm-12">
          <!--  <div class="col-sm-2">
            	<h3 class="fttitle">KYN</h3>
                <ul class="pull-left">
                  <li><a href="#">Nutrition Comparison</a></li>
                  <li><a href="#">Micro Nutrients</a></li>
                  <li><a href="#">Macro Nutrients</a></li>
                </ul>
            </div>  -->
            <div class="col-sm-2">
            	<h3 class="fttitle">Products</h3>
                <ul class="pull-left">
                  <li><a href="#">Finger Millet</a></li>
                  <li><a href="#">Pearl Millet</a></li> 
                  <li><a href="#">Sorghum</a></li>
                  <li><a href="#">Foxtail Millet</a></li>
                </ul>
            </div>

             <div class="col-sm-10">
            	<h3 class="fttitle">Need to add more details. </h3>
               
            </div>
            
         <!--   <div class="col-sm-2">
            	<h3 class="fttitle">LIVE HEALTHY</h3>
                <ul class="pull-left">
                  <li><a href="#">Think Smart</a></li>
                  <li><a href="#">Eat Smart</a></li>
                  <li><a href="#">Live Smart</a></li>
                  <li><a href="#">Start Moving</a></li>
                </ul>
            </div> -->
            
       <!--   <div class="col-sm-3">
            	<h3 class="fttitle">MILLET CAMPAIGN</h3>
                <ul class="pull-left">
                  <li><a href="#">Corporate Alliance</a></li>
                  <li><a href="#">Empower Young People</a></li>
                  <li><a href="#">Government Initiative </a></li>
                
                </ul>
            </div> -->
            
       <!--     <div class="col-sm-3">
            	<h3 class="fttitle">MILLETPEDIA</h3>
                <ul class="pull-left">
                  <li><a href="#">Millet History</a></li>
                  <li><a href="#">Millet Relevance</a></li>
                  <li><a href="#">Rainfed Agriculture</a></li>
                  <li><a href="#">Food Security</a></li>
                </ul>
            </div> -->
            
        
    </div>
     <div class="col-md-12 col-sm-12 gap">
      </div>
    </div>
  </div>
</footer>


  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hi Sowjitha'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.navbar {
    border-radius: 0;
    margin-bottom: 0;
    background: #faf8ed;
    padding: 15px 0 15px 0;
}

.imgmillet{
  width:263px;
  height:70px;
  margin-top:-21px;
}

.sliderimg{
  height:100%;
}
</style>
