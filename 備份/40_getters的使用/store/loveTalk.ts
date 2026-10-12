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
            talkList:[
                {id:'ftrfasdf01',title:'今天你有點怪，哪裡怪？怪好看的！'},
                {id:'ftrfasdf02',title:'草莓、藍莓、蔓越莓，今天想我了沒？'},
                {id:'ftrfasdf03',title:'心裡給你留了一塊地，我的死心塌地'}
            ]
        }
    }
})