<template>
    <div class="footer font-alata">
        <div class="container">
            <p class="small">
           Copyright &copy; {{year}} tinytouchgames.com & hellotu.com | All rights reserved.
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                //year: ''
            }
        },
        computed: {
            year() {
                return new Date().getFullYear();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>