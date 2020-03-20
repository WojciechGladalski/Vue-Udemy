export const fruitMixin = {
    data() {
        return {
            fruits: ['Peach', 'Rasberry', 'Watermelon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText)
            })
        }
    }
}