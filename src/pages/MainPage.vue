<template>
  <div class="row mt-5" style="width:100%">
        
        <div class="col">
            <img src="@/assets/mainpage_logo.png" class="mx-auto d-block" style="width:300px" alt="logo">
        </div>
        <div class="col" style="margin: auto">
            <h2>Сайт скидок</h2>
            <p class="mainpage__text">Мы очень рады видеть Вас на нашем полезном сайте акций и скидок!</p>
            <router-link to="/coupons" class="btn btn-primary mt-3">Перейти к скидкам</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainpage__text {
  max-width: 300px;
  
}
</style>