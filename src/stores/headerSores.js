import { defineStore } from "pinia";
import axios from 'axios'

export const headerStore = defineStore({
    id: "headerStore",
    state: () => ({
      brands: {},
      industry: {},
       
    }),
    actions: {
      async readBrands(){
        try {
          let result = await axios.get("https://localhost:7229/api/Vue/api/GetBrands");
        this.brands = result.data;
        } catch (error) {
          this.brands = {error}
        }
        
       },
       async ReadIndustry(){
        try {
          let result = await axios.get("https://localhost:7229/api/Vue/api/GetType");
          this.industry = result.data;
        } catch (error) {
          this.industry = {error}
        }
        
       }
    },
    getters: {
       GetBrands(state){
        return state.brands;
     },
     GetIndustry(state){
      return state.industry;
     }
    }
    
})