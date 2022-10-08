import {createStore} from "vuex";
import { couponsModule} from "./couponsModule";
import { shopsModule } from "./shopsModule";

export default createStore({
    modules : {
        coupons : couponsModule,
        shops: shopsModule
    }
})