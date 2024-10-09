<template>
    <h3>{{counter}}</h3>
    <p>We'll do more</p>
    </template>
    
    <script>
    export default{
        computed: {
            counter() {
                return this.$store.getters.normalizedCounter; //* just point at getter, not call/execute
            }
        }
    }
    </script>
    