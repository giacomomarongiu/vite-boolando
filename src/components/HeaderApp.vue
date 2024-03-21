<script>
export default {
    name: "AppHeader",
    data() {
        return {
            listHeader: ["Donna", "Uomo", "Bambino"],
            iconsHeader: ["fa-solid fa-user", "fa-regular fa-heart", "fa-solid fa-bag-shopping"]
        }
    }
}


</script>

<template>
    <!--Header with 3 parts, containter for center-->
    <header>
        <nav class="header_container d-flex container_75">
            <div class="nav_left">
                <ul>
                    <li v-for="item in listHeader">{{ item }}</li>
                </ul>
            </div>
            <img class="nav_logo" src="/public/img/boolean-logo.png" alt="">
            <div class="nav_right">
                <i v-for="icon in iconsHeader" :class="icon"></i>
            </div>
        </nav>
    </header>
    <!--end of the header-->
</template>

<style lang="scss"></style>
