<template>
  <div>
    <b-container>
      <b-row
        class="align-items-center justify-content-between"
        style="height: 100vh"
      >
        <!--CELLPHONE MOCKUP-->
        <b-col lg="6"
          ><div>
            <img
              style="float: right"
              src="https://cdn.discordapp.com/attachments/987378128106168403/1162223452120416386/image.png?ex=653b27f0&is=6528b2f0&hm=254d879225233753706d83bcc8535475405912207155af5e248854b607c2387a&"
              alt="mockup"
            />
          </div>
        </b-col>
        <!--LOGIN FORM-->
        <b-col lg="6">
          <div class="login-form border">
            <div class="py-4">
              <Icon icon="logos:instagram" width="11rem" />
            </div>
            <template>
              <FormulateForm
                @submit="doSignIn"
                class="w-100"
                v-model="loginForm"
              >
                <FormulateInput
                  name="user"
                  type="text"
                  label=""
                  placeholder="Télefono, usuario o correo electrónico"
                  validation="required"
                />
                <FormulateInput
                  name="password"
                  type="password"
                  label=""
                  placeholder="Contraseña"
                  validation="required||min:8"
                />

                <input type="submit" class="primary-btn small" value="Entrar" />
              </FormulateForm>
            </template>
            <div class="divider">
              <hr />
              <span class="px-3 small text-secondary">O</span>
              <hr />
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <Icon width="18" class="mr-2" icon="devicon:facebook" />
              <p class="small m-0" style="color: #385185; font-weight: 600">
                Iniciar sesión con facebook
              </p>
            </div>
            <a class="mt-3" style="font-size: small; cursor: pointer"
              >¿Has olvidado la contraseña?</a
            >
          </div>
          <div class="login-form border mt-3">
            <span class="small"
              >¿No tienes una cuenta?
              <a style="font-weight: 600; color: #4cb5f9; cursor: pointer"
                >Registrate</a
              ></span
            >
          </div>
        </b-col>
        <footer>
          <div
            class="d-flex align-items-center justify-content-center flex-wrap"
          >
            <div v-for="item in footerItems" :key="item" class="m-2">
              <p class="m-0 text-secondary" style="font-size: 12px">
                {{ item }}
              </p>
            </div>
            <div class="d-flex align-items-center">
              <p style="font-size: 12px" class="m-0 pr-4 text-secondary">
                Español (España)
              </p>
              <p style="font-size: 12px" class="m-0 text-secondary">
                © 2023 Instagram from Meta
              </p>
            </div>
          </div>
        </footer>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "empty",
  name: "IndexPage",

  data() {
    return {
      footerItems: [
        "Meta",
        "Información",
        "Blog",
        "Empleo",
        "Ayuda",
        "API",
        "Privacidad",
        "Condiciones",
        "Ubicaciones",
        "Instagram Lite",
        "Threads",
        "Subir contactos y personas no usuarias",
        "Meta Verified",
      ],

      loginForm: {},
    };
  },

  methods: {
    doSignIn() {
      localStorage.setItem("user", JSON.stringify(this.loginForm));
      this.$router.push("/feed");
    },
  },
};
</script>
<style>
.login-form {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.75rem;
}

.divider {
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;
}

.divider > hr {
  margin: 0px;
  height: 1px;
  border: none;
  flex: 1 1 0%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
