<template>
  <div id="registrer">
    <main>

      <section class="content">

        <!--Section: Main info-->
        <section class="mt-5 wow fadeIn">
               <!--Grid column-->
          <div class=" mask rgba-red-light-custom-registrer justify-content-center align-items-center">

            <div class="container">
              <div class="d-flex">
                <div class="my-5">
                  <div class="row wow fadeIn">
                    <div class="col-md-6 mb-4 white-text text-center text-md-left">

                      <img class="display-4 font-weight-bold" src="../../assets/img/logo.png">

                      <hr class="hr-light">

                      <p>
                        <strong>Vamos juntos levar seu serviço para todos!</strong>
                      </p>

                      <p class="mb-4 d-none d-md-block">
                        <strong>Você não paga nada para usar a nossa plataforma e poder cadastrar seu serviço para que todos possam ve-lo!!!</strong>
                      </p>
                      <b><h3 class="mb-4 d-none d-md-block"><strong>Não perca tempo faça parte do EuAgendei! </strong></h3></b>

                      <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-indigo btn-lg">Ir para minha plataforma
                          <i class="fa fa-chalkboard"></i>
                      </a>

                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6 col-xl-5 mb-4">

                      <!--Card-->
                      <div class="card">

                        <!--Card content-->
                        <div class="card-body">

                          <!-- Form -->
                            <!-- Heading -->
                            <h3 class="dark-grey-text text-center">
                              <strong>Cadastra-se:</strong>
                            </h3>
                             <div v-if="messagemSucess==true" class="alert alert-success" role="alert">
                                <p class="messagem">Empresa cadastrada com sucesso! Bem vindo ao EuAgendei</p>
                              </div>
                              <div v-if="mensagemError==true" class="alert alert-danger" role="alert">
                                <p class="messagem">Error ao cadastrar sua empresa...</p>
                              </div>
                            <hr>
                            <div class="md-form">
                              <i class="fa fa-user prefix grey-text"></i>
                              <input type="text" v-model="razsocial" class="form-control" placeholder="Razão Social da sua Empresa">
                              <div v-if="razsocial==false" class="alert alert-danger" role="alert">
                                Por favor informe a razão social...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-pencil prefix grey-text"></i>
                              <input type="text" v-model="fantasia" class="form-control" placeholder="Nome Fantasia">
                              <div v-if="fantasia==false" class="alert alert-danger" role="alert">
                                Por favor informe o nome fantasia...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-pencil prefix grey-text"></i>
                              <input type="text" v-model="cnpj" class="form-control" placeholder="CNPJ">
                              <div v-if="cnpj==false" class="alert alert-danger" role="alert">
                                Por favor informe o CNPJ...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-home  prefix grey-text"></i>
                              <input type="text" v-model="cep" class="form-control" placeholder="CEP">
                              <div v-if="cep==false" class="alert alert-danger" role="alert">
                                Por favor informe o CEP...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-home  prefix grey-text"></i>
                              <input type="text" v-model="rua" class="form-control" placeholder="Rua">
                              <div v-if="rua==false" class="alert alert-danger" role="alert">
                                Por favor informe endereço de rua...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-home  prefix grey-text"></i>
                              <input type="text" v-model="numero" class="form-control" placeholder="Numero">
                              <div v-if="numero==false" class="alert alert-danger" role="alert">
                                Por favor informe o numero de endereço...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-home  prefix grey-text"></i>
                              <input type="text" v-model="cidade" class="form-control" placeholder="Cidade">
                              <div v-if="cidade==false" class="alert alert-danger" role="alert">
                                Por favor informe a cidade...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-home  prefix grey-text"></i>
                              <input type="text" v-model="estado" class="form-control" placeholder="Estado">
                              <div v-if="estado==false" class="alert alert-danger" role="alert">
                                Por favor informe o estado...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-phone prefix grey-text"></i>
                              <input type="text" v-model="contato" class="form-control" placeholder="Telefone Principal Contato">
                              <div v-if="contato==false" class="alert alert-danger" role="alert">
                                Por favor informe um telefone de contato...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-envelope prefix grey-text"></i>
                              <input type="email" v-model="email" class="form-control" placeholder="Email">
                              <div v-if="email==false" class="alert alert-danger" role="alert">
                                Por favor informe um e-mail valido...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-pencil prefix grey-text"></i>
                              <input type="password" v-model="senha" class="form-control" placeholder="Senha">
                              <div v-if="senha==false" class="alert alert-danger" role="alert">
                                Por favor informe uma senha...
                              </div>
                            </div>
                            <div class="md-form">
                              <i class="fa fa-pencil prefix grey-text"></i>
                              <input type="password" v-model="confirme_senha" class="form-control" placeholder="Confirme sua Senha">
                              <div v-if="confirme_senha==false" class="alert alert-danger" role="alert">
                                Por favor confirme sua senha...
                              </div>
                              <div v-if="senha!=confirme_senha" class="alert alert-danger" role="alert">
                                As senhas não correspondem...
                              </div>
                            </div>
                            <div class="text-center">
                              <button v-on:click="confirmeRegistro" class="btn btn-indigo">Confirmar</button>
                            </div>
                          <!-- Form -->

                        </div>

                      </div>
                      <!--/.Card-->

                    </div>
                <!--Grid column-->

                  </div>
                </div>
              </div>

              <!--Grid row-->

            </div>
          <router-view/>

          </div>

            <!--Grid column-->
        </section>
        <!--Section: More-->

      </section>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      razsocial: this.razsocial,
      fantasia: this.fantasia,
      cnpj: this.cnpj,
      cep: this.cep,
      rua: this.rua,
      numero: this.numero,
      cidade: this.cidade,
      estado: this.estado,
      contato: this.contato,
      email: this.email,
      senha: this.senha,
      confirme_senha: this.senha,
      messagem: this.messagem,
      messagemSucess: this.messagemSucess,
      mensagemError: this.mensagemError
    }
  },
  methods: {
    confirmeRegistro: function (event) {
      if (this.validaRegistro() !== false) {
        this.$http.post('http://localhost:8000/api/company/', {
          razsocial: this.razsocial,
          fantasia: this.fantasia,
          cnpj: this.cnpj,
          cep: this.email,
          endereco: this.rua,
          numero: this.numero,
          cidade: this.cidade,
          uf: this.uf,
          complemento: null,
          contato: this.contato,
          email: this.email,
          password: this.senha,
          password_digest: this.confirme_senha
        }).then(response => {
          this.messagem = response.body.message
          this.messagemSucess = true
        }, response => {
          this.mensagem = response.body.error
          this.mensagemError = true
        })
      }
    },
    validaRegistro: function () {
      if (this.razsocial === undefined) {
        this.razsocial = ''
        return false
      }
      if (this.fantasia === undefined) {
        this.fantasia = ''
        return false
      }
      if (this.cnpj === undefined) {
        this.cnpj = ''
        return false
      }
      if (this.cep === undefined) {
        this.cep = ''
        return false
      }
      if (this.rua === undefined) {
        this.rua = ''
        return false
      }
      if (this.numero === undefined) {
        this.numero = ''
        return false
      }
      if (this.cidade === undefined) {
        this.cidade = ''
        return false
      }
      if (this.estado === undefined) {
        this.estado = ''
        return false
      }
      if (this.contato === undefined) {
        this.contato = ''
        return false
      }
      if (this.email === undefined) {
        this.email = ''
        return false
      }
      if (this.senha === undefined) {
        this.senha = ''
        return false
      }
      if (this.confirme_senha === undefined || this.senha !== this.confirme_senha) {
        this.confirme_senha = ''
        return false
      }
    }
  }
}

</script>
<style>
.view-registrer, #registrer, #app, body, html {
    height: 100%;
}
.view-registrer {
    background-color: rgba(245, 25, 8, 0.72);
    position: relative;
    cursor: default;
}
.view-registrer, .view .mask, .waves-effect {
    overflow: hidden;
}

.view-registrer .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
}
.view-registrer .mask, .waves-effect {
    overflow: hidden;
}

p.menssagem {
  text-align: center;
}
</style>
