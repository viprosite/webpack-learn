<template>
    <div class="header__container">
        header 123 {{ a }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 1
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
.header__container {
    color: gray;
}
</style>