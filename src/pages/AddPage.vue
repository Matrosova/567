<template>
  <h1 >Добавить купон</h1>
  <input-coupons-form class="input_form" v-on:sendCoupons="adding"/>
</template>

<script>
import InputCouponsForm from '@/components/InputCouponsForm.vue'
import {mapState, mapActions, mapMutations} from "vuex"
export default {
  components: { InputCouponsForm },

 methods: {
        ...mapMutations({
            setCoupons: "coupons/setCoupons",
        }),
        ...mapActions({
            addCoupons: "coupons/addCoupons",
        }),

        adding(coupons){
          this.setCoupons(coupons)
          this.addCoupons()
        }

    },
    computed: {
        ...mapState({
            coupons: state => state.coupons.coupons,

    }),
},
}


</script>

<style>
  .input_form form{
    margin-left:auto;
    margin-right:auto;
  }
</style>