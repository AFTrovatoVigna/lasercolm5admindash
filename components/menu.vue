<script setup>

</script>

<template>
  <nav>
    <div class="header" >
      <img src="../assets/images/lasercol-logo.png" alt="">
    </div>
    <div class="main-container">
      <ul>
        <li>
          <NuxtLink to ="/" class="">
            <img src="../assets/Icons/home.svg" alt=""> 
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to ="/orders" class="">
            <img src="../assets/Icons/inbox.svg" alt="">
            Ordenes
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to ="/users" class="">
            <img src="../assets/Icons/group.svg" alt="">
            Clientes
            </NuxtLink>
        </li>
        <li>
          <NuxtLink to ="/products" class="">
            <img src="../assets/Icons/sell.svg" alt="">
            Productos
            </NuxtLink>
        </li>
        <li>
          <NuxtLink to ="/categories" class="">
            <img src="../assets/Icons/category.svg" alt="">
            Categorias
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>



<style scoped>
nav {
  background: linear-gradient(180deg, rgba(252,230,242,1) 65%, rgba(244,246,165,1) 0%);
}
.header{
  display: flex;
  justify-content: center;
  padding: 20px 0;
  /* background-color: rgb(209, 209, 172); */
}
.header img {
  width: 80%;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px 0;
  /* background-color: #fce6f2; */
}
.main-container ul li {

  margin: 5px 0;
  padding: 15px ;
  list-style: none;

}
.main-container ul li a {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
}
</style>