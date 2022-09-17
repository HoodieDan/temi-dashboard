<template>
  <div class="menu">
        <div class="nav-group">
            <div class="top-nav">
                <div class="link home text-center">
                    <p class="navi"><i class="fa fa-solid fa-house"></i>Home</p>
                </div>
                <div class="link dashboard text-center active">
                    <p class="navi"><i class="fa fa-solid fa-chart-line"></i>Dashboard</p>
                </div>
                <div class="link calendar text-center">
                    <p class="navi"><i class="fa fa-regular fa-address-book"></i>Calendar</p>
                </div>
                <div class="link settings text-center">
                    <p class="navi"><i class="fa fa-solid fa-gear"></i>Settings</p>
                </div>
            </div>
            <div class="bottom-nav">
                <div class="link sign-out text-center">
                    <p class="navi"><i class="fa fa-solid fa-right-from-bracket"></i>Sign Out</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
}
</script>

<style>

</style>