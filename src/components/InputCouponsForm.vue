<template>
  <div>
    <form @sumbit.prevent class="col-md-4 col-sm-12">
        <div class="form-group mt-3">
            <label for="name">Введите название</label>
            <input id="name" class="form-control" v-model="add_coupons.name" type="text" placeholder="Название" >
        </div>
        <div class="form-group mt-3">
            <label for="type">Введите тип</label>
            <input id="type" class="form-control" v-model="add_coupons.type" type="text" placeholder="Тип" >
            </div>
        <div class="form-group mt-3">
            <label for="size">Введите размер скидки</label>
            <input id="size" class="form-control" v-model="add_coupons.size" type="number" min="0" max="80">
        </div>
        <div class="form-group mt-3">
            <p>В каких магазинах доступно?</p> 
            <div v-for="shop in shops" :key="shop.id" class="form-check">
                <label class="form-check-label"  :for="'shop_'+shop.id">{{shop.name}}</label>
                <input class="form-check-input"  type="checkbox" :id="'shop_'+shop.id" :value="`${shop.id}`" v-model="add_coupons.shops">
            </div>
        </div>
        <button class="btn btn-primary mt-3" type="button" @click="sendCoupons">Отправить</button>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {

    data(){
        return{
            add_coupons: {
                name: null, 
                type: null,
                size: null,
                shops:[],

            }
        }
    },
    
     methods: {
        ...mapActions({
            getShops: "shops/getShops",
        }),

        sendCoupons(){
            if(!this.add_coupons.name || !this.add_coupons.type ||  !this.add_coupons.size || this.add_coupons.shops.length == 0){
                alert("Не введены данные!");
            }
            else{
                this.$emit("sendCoupons", this.add_coupons)
            }
        },

    },
    computed: {
        ...mapState({
            shops: state => state.shops.shops,
            shopsIsLoaded: state => state.shops.shopsIsLoaded,
        })
    },
    mounted(){
        this.getShops();
    }

}
</script>

<style>

</style>