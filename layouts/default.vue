<template>
<div>
   <main id="" class="bg-black small">
        <div class="container-fluid pb-3">
            <top></top>
            <div class="row">
                <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none">
                    <!-- <left></left> -->
                </section>
                <section class="col-sm-12 col-md-6 col-lg-6 col-lg-6">
                    <Nuxt />
                </section>
                <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none">
                    <!-- <right></right> -->
                </section>
            </div>
        </div>
        <Foot />
        <menu-footer></menu-footer>
    </main>
</div>
</template>

<script>
import Foot from '../components/Layouts/Foot'
import Left from '../components/Layouts/Left'
import MenuFooter from '../components/Layouts/MobileFoot'
import Right from '../components/Layouts/Right'
import Top from '../components/Layouts/Top'


export default {
  components: { Left, Right, Top, Foot, MenuFooter },
  name: 'default',
}
</script>

<style scoped>

</style>
