<template>
  <div class="d-inline-flex p-2" v-for="entity in coupons" :key="entity.id">
            <div class="card" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{entity.name}}</h5>
                    <p class="card-text">{{entity.type}} </p>
                    <p class="card-text">Размер скидки: {{entity.size}}%</p>
                    <ul>
                      <li v-for="shop in entity.shops" :key="shop.id" @click="showShops(shop)">
                        {{shops[shop-1].name}}
                      </li>
                    </ul>
                    <p>Промокод: {{entity.code}}</p>
                    <svg @click="deleteCoupons(entity.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                </div>
            </div>
        </div>
</template>

<script>

import {mapState, mapActions} from "vuex"

export default {
    props:{
        coupons:{}
    },


    
    computed: {
        ...mapState({
            shops: state => state.shops.shops,
        })
    },
    methods:{
        showShops(shops){console.log(shops)},
        deleteCoupons(id){this.$emit("deleteCoupons", id);},
        ...mapActions({
            getShops: "shops/getShops",
        }),
    
    },
    mounted(){
        this.getShops();
    }
}
</script>

<style scoped>
.card {
  background: #928df0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}
.card-body {
  background: #d4d2f3;
}

svg:hover{
  cursor: pointer;
  color: grey;
}
</style>