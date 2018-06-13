<template>
<div class="list">
  <main>
    <hr class="my-5">
    <hr class="my-5">
    <div class="my-5">
      <div class="container">
        <!--Section: Main info-->
        <section class="mt-5 wow fadeIn">

          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-12">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Razão Social</th>
                    <th>Fantasia</th>
                    <th class="text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="company in companies" :key="company._id">
                    <td>{{ company._id }}</td>
                    <td>{{ company.razsocial }}</td>
                    <td>{{ company.fantasia }}</td>
                    <td class="text-center">
                     <router-link :to="{ name: 'Edit', params: { companyId: company._id }}" class="btn btn-info">Edit</router-link>
                     <a class="btn btn-danger" href="#" @click.prevent="deletePost(company._id)">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--Grid row-->
        </section>
        <!--Section: Main info-->
      </div>
    </div>
  </main>
  <router-view/>
</div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      companies: [],
      model: {},
      message: this.message
    }
  },
  mounted () {
  	this.$http.get('http://localhost:8000/api/companies').then(res => {
      this.companies = res.body.todasCompany
    })
  },
  methods: {
    getCompaniesMethod: function () {
      this.$http.get('http://localhost:8000/api/companies').then(res => {
        this.companies = res.body.todasCompany
        return res.body.todasCompany
      })
    },
    deletePost: function (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        this.$http.delete('http://localhost:8000/api/company/'+id).then(res => {
          this.message = res.body.message
        })
      }
      this.getCompaniesMethod()
    }
  }
}
</script>
<style>
</style>
