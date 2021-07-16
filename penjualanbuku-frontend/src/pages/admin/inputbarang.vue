<template>
    <q-page padding class="bg-grey-2">
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div  class="col-aotu">
            <div class="left blue"> </div>
          </div>
          <div class="col">
            <q-banner inline-actions class="text-black" >
              <div class="text-h5"> Input Barang </div>
              <div> Data Barang Yang Diinput</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
     <q-card flat class="warna">
      <q-card-section class="row">
        <q-form
         @submit="onSubmit()"
          class="q-gutter-md col-md-6 col-xs-12"
        >
          <q-input
                filled
                v-model="form.namabarang"
                label="Nama Barang "
                :rules="[ val => val && val.length > 0 || 'Mohon Isi Nama Barang']"
            />

             <q-input
                filled
                v-model="form.harga"
                type="number"
                label="harga"
                :rules="[ val => val > 0 || 'Mohon Isi Harga']"
            />

            <q-input
                filled
                v-model="form.super"
                label="Jenis Barang"
                :rules="[ val => val && val.length > 0 || 'Mohon Isi Jenis Barang']"
            />

            <q-select
              filled
              v-model="form.typebarang"
              :options="optiontypebarang"
              label="Type Barang" />

          <div class="flex">
            Pilih Rating
            <q-rating
              v-model="form.rating"
              size="2em"
              :max="5"
              class="q-ml-md"
              color="primary"
            />
          </div>

          <q-input
            v-model="form.deskripsi"
            filled
            type="textarea"
            label="Deskripsi"
          />

          <q-file accept=".jpg, image/*" color="teal" filled v-model="image" label="Upload Gambar">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>

            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
            </q-form>
      </q-card-section>
    </q-card>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      form: {
        namabarang: null,
        harga: 0,
        super: null,
        typebarang: null,
        rating: 0,
        deskripsi: null
      },
      optiontypebarang: [
        'Sekolah',
        'Novel',
        'Sejarah',
        'Dll'
      ],
      image: null
    }
  },
  methods: {
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.post('buku/inputdatabuku', formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'databuku' })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
<style scoped>
.left{
  width: 3px;
  height: 100%;
  background-color: rgb(139, 153, 219);
}
</style>
