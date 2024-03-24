<script>
export default {
    name: "AppHeader",
    data() {
        return {
            listHeader: ["Donna", "Uomo", "Bambino"],
            iconsHeader: ["fa-solid fa-user", "fa-regular fa-heart" , "fa-solid fa-bag-shopping"]
        }
    },
}
</script>

<template>
    <!--Header with 3 parts, containter for center-->
    <header>
        <nav class="header_container d-flex container_75">

            <!--left-->
            <div class="nav_left">
                <ul>
                    <li v-for="item in listHeader">{{ item }}</li>
                </ul>
            </div>
            <!--/left-->

            <!--middle-->
            <img class="nav_logo" src="/public/img/boolean-logo.png" alt="">
            <!--/middle-->

            <!--right-->
            <div class="nav_right">
                <i v-for="icon in iconsHeader" :class="icon"></i>
            </div>
            <!--/right-->

        </nav>
    </header>
    <!--end of the header-->
</template>

<style lang="scss"></style>
