import {defineStore} from "pinia"

export const useCountStore = defineStore("count",{
    // actions 裡面放置的是一個一個的方法，用於響應組件中的"動作"
    actions:{
        increment(value:number){
            console.log("increment 被調用了",value)
            // 修改數據(this 是當前的 store)
            this.sum += value 
        }
    },
    // 真正存儲數據的地方
    state(){
        return {
            sum:6,
            school:"ISU",
            address:"宏福科技園"
        }
    }
})