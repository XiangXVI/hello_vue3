import {defineStore} from "pinia"
import axios from "axios"
import { nanoid } from "nanoid"

export const useTalkStore = defineStore("talk",{
    actions:{
        async getATalk(){
            // 發請求，下面這行的寫法是:連續解構賦值+重命名
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 把請求回來的字符串，包裝成一個對象
            let obj = {id:nanoid(),title}
            // 放到數組中
            this.talkList.unshift(obj)
        }
    },
    // 真正存儲數據的地方
    state(){
        return {
            talkList:JSON.parse(localStorage.getItem("talkList") as string) || []
        }
    }
})