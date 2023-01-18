export default {  
    data() {  
        return {  
            animal : "Dogs"
        }  
    },  
    methods : {  
        changeAnimals()
        {
            this.animal = this.animal + 1;
        }
          
    }  
}

export { App };