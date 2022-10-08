import axios from "axios"

export const couponsModule = {
    state: () => ({
        coupons: [],

        selectedSort: 'default',
        sortOptions: [
            {value:'name', name: 'По названию'},
            {value:'size', name: 'По размеру скидки'},
        ]

    }),
    getters : {
        sortedCoupons(state){
            if (state.selectedSort == 'default'){
                return state.coupons;
            }
            if (state.selectedSort == 'name'){
                return [...state.coupons].sort((coupons1, coupons2) => coupons1[state.selectedSort]?.localeCompare(coupons2[state.selectedSort]))
            }
            else if (state.selectedSort =='size'){
                return [...state.coupons].sort((coupons1, coupons2) => coupons1.size-coupons2.size)
            }
        }
    },
    mutations: {
        setCoupons(state, coupons){
            state.coupons = coupons;
        },

        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
    },
    actions: {
        async getCoupons({commit}){
            
            try{
                const response = await axios.get("https://matrosova-django-api.herokuapp.com/api/coupon/")
                console.log(response)
                commit("setCoupons", response.data)
            }
            catch(error){
                console.log(error)
            }
        },
        async addCoupons(state){
            let config = { 
              headers : {
                'Content-Type' : 'multipart/form-data'
              }
            }
            let fd = new FormData();
            fd.append('name',state.state.coupons.name)
            fd.append('type',state.state.coupons.type)
            fd.append('size',state.state.coupons.size)
            fd.append('code',state.state.coupons.code)
            for (var i = 0; i<state.state.coupons.shops.length; i++){
              fd.append('shops',state.state.coupons.shops[i]);
            }
              axios.post('https://matrosova-django-api.herokuapp.com/api/coupon/', fd, config)
              .then(response => {
                if(response.status == 201){
                location.pathname="/coupons"}
              })
              .catch(function(error){
                console.log(error)
                alert(error.response.request.response)
              })
          },
          async deleteCoupons({dispatch},id){

            try{
                
                axios.delete('https://matrosova-django-api.herokuapp.com/api/coupon/'+id+'/').then(()=>dispatch('getCoupons'))
                
            }
            catch(error){
                console.log(error)
            }

        },
    },
    
    namespaced: true
}