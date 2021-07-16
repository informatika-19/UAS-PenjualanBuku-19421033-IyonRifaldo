<template>
    <q-layout class="bg-grey-2">
        <q-page-container>
        <q-page padding class="row items-center justify-center">
            <div class="row full-width">
                <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
                    <q-card flat class="text-blue-grey-14">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-8 offset-2">
                                    <q-img src="icons/login.png"></q-img>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <q-card-section>
                                    <div class="text-h5">buku </div>
                                    <div>Login Akun</div>
                                </q-card-section>
                                <q-form
                                    @submit="login"
                                >
                                    <q-card-section>
                                      <q-input v-model="username" label="username"/>
                                      <q-input type="password" v-model="password" label="password"/>
                                    </q-card-section>
                                       <q-card-section>
                                        <q-btn class="full-width" type="submit" unelevated  color="primary" label="Login"/>
                                        <q-btn class="full-width q-mt-md" :to="{ name: 'registerPage'}"  flat unelevated  color="primary" label="register"/>
                                    </q-card-section>
                                </q-form>
                            </div>
                        </div>
                    </q-card>
                </div>
            </div>
        </q-page>
        </q-page-container>
    </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () {
      this.$axios.post('user/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$q.localStorage.set('dataUser', res.data.data)
          if (res.data.data.level === 1) {
            this.$router.push({ name: 'berandaadmin' })
          } else {
            this.$router.push({ name: 'HomeUser' })
          }
        } else {
          this.$showNotif(res.data.pesan, 'negative')
        }
      })
    }
  }
}
</script>
