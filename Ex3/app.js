export default {  
    data() {  
        return {  
            number : [
                12,
                35,
                56,
                67,
                42,
                93
            ]  
        }  
    },  
    methods : {  
          number()
          {
              this.number = this.number & 2;
          },
          numbers()
          {
              this.number = this.number 
          }
          
    }  
}