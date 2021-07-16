<template>
  <q-layout view="lHh Lpr lFf">
   <q-header class="bg-white text-blue-grey-14">
      <q-toolbar>
                  <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu"/>
                  <q-space> </q-space>
                  <q-btn flat round>
                    <q-avatar>
                      <img src="icons/buku1.jpg">
                    </q-avatar>
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup>
                        <q-item-section>Profile</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="logout">
                        <q-item-section>Logout</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                  </q-btn>
                  <template>
            <div class="q-pa-md">
              <q-toolbar class="bg-primary text-white">
                <q-btn flat round dense icon="menu" />

                <q-space />

                <q-btn flat round dense icon="apps" class="q-mr-xs" />
                <q-btn flat round dense icon="more_vert" />
              </q-toolbar>

              <div class="row no-wrap items-center q-mt-md q-pa-sm bg-grey-3 rounded-borders">
                <q-avatar>
                  <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                </q-avatar>

                <q-space />

              </div>
            </div>
          </template>
      </q-toolbar>
    </q-header>

   <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="500"
      class="text-white bg-primary"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="justify-center text-center q-mt-md">
                <div>
                  <q-avatar size="120px">
                    <img src="icons/buku1.jpg">
                  </q-avatar>
                  <div class="text-weight-bold q-mt-md">{{ $q.localStorage.getItem('dataUser').namaLengkap}}</div>
                  <div>Aplikasi Penjualan Buku</div>
                </div>
              </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'berandaadmin' }">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Beranda Admin</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'databuku' }">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data Barang</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'inputbarang' }">
            <q-item-section avatar>
              <q-icon name="input"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Input Barang</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'dataUser' }">
            <q-item-section avatar>
              <q-icon name="supervisor_account"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data User</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
<style scoped>
.active {
  color: #000000;
  background-color: #f7efef;
  padding-right: 10px;
}
</style>
