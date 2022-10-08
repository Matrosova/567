<template>

  <h1>Доступные купоны</h1>
  <label style="margin-right:10px" for="selector">Выберите сортировку:</label>
  <my-selector id="selector" :modelValue="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"/>
  <div><coupons-list :coupons="sortedCoupons" v-on:deleteCoupons="deleting"/></div>
  
</template>

<script>
import CouponsList from '@/components/CouponsList.vue'

import {mapState, mapActions, mapMutations, mapGetters} from "vuex"
import MySelector from '@/components/MySelector.vue'
export default {
    
    components: {
    CouponsList,
    MySelector
},


    
    methods: {
        ...mapMutations({

            setSelectedSort: 'coupons/setSelectedSort',
        }),
        ...mapActions({
            getCoupons: "coupons/getCoupons",
            deleteCoupons: "coupons/deleteCoupons"
        }),
        deleting(id){
            this.deleteCoupons(id)
        }
        

    },
    computed: {
        ...mapState({
            coupons: state => state.coupons.coupons,
            selectedSort: state => state.coupons.selectedSort,
            sortOptions: state => state.coupons.sortOptions
        }),

        ...mapGetters({
            sortedCoupons: 'coupons/sortedCoupons',
        }),
    },
    mounted(){
        this.getCoupons();
    }
}
</script>

<style>

</style>