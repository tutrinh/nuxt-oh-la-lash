<template>
    <div>
        <h1>Fun</h1>
    </div>
</template>

<script>
    export default {
        name: 'Fun',
        data() {
            return {

            }
        },
        methods: {
            async fetchData() {
                try {
                    const response = await fetch('http://www.mocky.io/v2/5cf0317e30000053da3cd54a?mocky-delay=2000ms');
                    const data = await response.json();
                    console.log(data);
                    
                    
                    
                } catch(errors) {
                    console.log(errors);
                } finally {
                    console.log("done");
                    
                }
  
  
            }


        },
        created() {
            this.fetchData();


            const fruits = ['apples', 'grapes', 'bananas'];
            console.log(fruits);
            console.log(fruits.join(','));
            const fruitAlt = [...fruits];
            fruits.push('oranges');
            console.log(fruitAlt);
            console.log(fruits);
        }

    }
</script>

<style lang="scss" scoped>

</style>