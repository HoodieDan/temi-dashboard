<template>
  <div class="menu">
        <div class="nav-group">
            <div class="top-nav">
                <div class="link home text-center">
                    <p class="navi"><i class="fa fa-solid fa-house"></i><span>Home</span></p>
                </div>
                <div class="link dashboard text-center active">
                    <p class="navi"><i class="fa fa-solid fa-chart-line"></i><span>Dashboard</span></p>
                </div>
                <div class="link calendar text-center">
                    <p class="navi"><i class="fa fa-regular fa-address-book"></i><span>Calendar</span></p>
                </div>
                <div class="link settings text-center">
                    <p class="navi"><i class="fa fa-solid fa-gear"></i><span>Settings</span></p>
                </div>
            </div>
            <div class="bottom-nav">
                <div class="link sign-out text-center">
                    <p class="navi"><i class="fa fa-solid fa-right-from-bracket"></i><span>Sign Out</span></p>
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