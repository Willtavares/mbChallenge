<script setup>
  import {reactive, ref} from 'vue';
  import {useRouter} from 'vue-router';
  import {managerStore} from '../stores/ManagerStore.js';

  const formData = reactive({
    email: null,
    picked: null,
    name: null,
    cpf: null,
    dob: null,
    rs: null,
    cnpj: null,
    dobi: null,
    tel: null,
    password: null,
  });

  const router = useRouter();

  const stage1 = [formData.email, formData.picked];

  let stage = ref(1);
  let error = ref(false);

  const data = ref([]);

  const manager = managerStore();

  const stagePlus = () => {
    // error.value = false;
    // console.log(88, stage1.includes(null));
    // if (stage1.includes(null)) {
    //   console.log(11, error.value);
    //   error.value = true;
    //   console.log(12, error.value);
    // } else {
    //   stage.value++;
    // }
    stage.value++;
  };

  const stageMinus = () => {
    stage.value--;
  };

  const onSubmit = (formData) => {
    console.log(54, formData);
    // if (e && e.preventDefault) {
    // }
    manager.sendApiData(formData);

    sendList();
  };

  const sendList = () => {
    router.push('/list');
  };
</script>

<template>
  <div class="container">
    <form @submit.prevent="onSubmit(formData)">
      <div v-if="stage === 1">
        <p>Etapa <span>1</span> de 4</p>
        <h2>Seja Bem Vindo(a)</h2>
        <label class="label" for="email"> Endereço de e-mail </label>
        <input
          class="input_text"
          name="email"
          type="email"
          v-model="formData.email"
        />
        <span v-if="error === true">E-mail é requerido</span>

        <div>
          <input
            name="pf"
            type="radio"
            id="one"
            value="PF"
            v-model="formData.picked"
          />
          <label for="one">Pessoa Fisica</label>
          <input
            name="pj"
            type="radio"
            id="two"
            value="PJ"
            v-model="formData.picked"
          />
          <label for="two">Pessoa Juridica</label>
          <span v-if="error === true">Marque uma opção</span>
        </div>
        <div class="btn_box">
          <button class="btn_plus" @click="stagePlus()">Continuar</button>
        </div>
      </div>

      <div>
        <p>{{ formData.picked }}</p>
        <div v-if="formData.picked === 'PF' && stage === 2">
          <p>Etapa <span>2</span> de 4</p>
          <h2>Pessoa Fisica</h2>
          <label class="label" for="name"> Nome: </label>
          <input
            class="input_text"
            name="name"
            id="name"
            type="text"
            v-model="formData.name"
          />

          <label class="label" for="cpf"> CPF: </label>
          <input
            class="input_text"
            name="cpf"
            id="cpf"
            type="text"
            v-model="formData.cpf"
          />

          <label class="label" for="dob"> Data de Nascimento: </label>
          <input
            class="input_text"
            name="dob"
            id="dob"
            type="date"
            v-model="formData.dob"
          />

          <label class="label" for="tel"> Telefone: </label>
          <input
            class="input_text"
            name="tel"
            id="tel"
            type="tel"
            v-model="formData.tel"
          />
          <div class="btn_box">
            <button class="btn_minus" @click="stageMinus()">Voltar</button>
            <button class="btn_plus" @click="stagePlus()">Continuar</button>
          </div>
        </div>

        <div v-if="formData.picked === 'PJ' && stage === 2">
          <p>Etapa <span>2</span> de 4</p>
          <h2>Pessoa Juridica</h2>
          <label class="label" for="rs"> Razão Social: </label>
          <input
            class="input_text"
            name="rs"
            id="rs"
            type="text"
            v-model="formData.rs"
          />

          <label class="label" for="cnpj"> CNPJ: </label>
          <input name="cnpj" id="cnpj" type="text" v-model="formData.cnpj" />

          <label class="label" for="dobi"> Data de Abertura: </label>
          <input
            class="input_text"
            name="dobi"
            id="dobi"
            type="date"
            v-model="formData.dobi"
          />

          <label class="label" for="tel"> Telefone: </label>
          <input
            class="input_text"
            name="tel"
            id="tel"
            type="tel"
            v-model="formData.tel"
          />
          <div class="btn_box">
            <button class="btn_minus" @click="stageMinus()">Voltar</button>
            <button class="btn_plus" @click="stagePlus()">Continuar</button>
          </div>
        </div>
      </div>

      <div v-if="stage === 3">
        <p>Etapa <span>3</span> de 4</p>
        <h2>Senha de Acesso</h2>
        <label class="label" for="password"> Senha: </label>
        <input
          class="input_text"
          name="password"
          id="password"
          type="password"
          v-model="formData.password"
        />
        <div class="btn_box">
          <button class="btn_minus" @click="stageMinus()">Voltar</button>
          <button class="btn_plus" @click="stagePlus()">Continuar</button>
        </div>
      </div>

      <div v-if="stage === 4">
        <div>
          <p>Etapa <span>4</span> de 4</p>
          <h2>Revise as suas Informações</h2>
          <label class="label" for="email"> Email: </label>
          <input
            class="input_text"
            type="email"
            id="email"
            v-model="formData.email"
            readonly
          />
        </div>

        <div v-if="formData.picked === 'PF'">
          <label class="label" for="name"> Nome: </label>
          <input
            class="input_text"
            type="text"
            id="name"
            v-model="formData.name"
            readonly
          />

          <label class="label" for="cpf"> CPF: </label>
          <input
            class="input_text"
            type="text"
            id="cpf"
            v-model="formData.cpf"
            readonly
          />

          <label class="label" for="dob"> Data de Nascimento: </label>
          <input
            class="input_text"
            type="date"
            id="dob"
            v-model="formData.dob"
            readonly
          />

          <label class="label" for="tel"> Telefone: </label>
          <input
            class="input_text"
            type="tel"
            id="tel"
            v-model="formData.tel"
            readonly
          />
        </div>

        <div v-if="formData.picked === 'PJ'">
          <label class="label" for="rs"> Razão Social: </label>
          <input
            class="input_text"
            type="text"
            id="rs"
            v-model="formData.rs"
            readonly
          />

          <label class="label" for="cnpj"> CNPJ: </label>
          <input
            class="input_text"
            type="text"
            id="cnpj"
            v-model="formData.cnpj"
            readonly
          />

          <label class="label" for="dobi"> Data de Abertura: </label>
          <input
            class="input_text"
            type="date"
            id="dobi"
            v-model="formData.dobi"
            readonly
          />

          <label class="label" for="tel"> Telefone: </label>
          <input
            class="input_text"
            type="tel"
            id="tel"
            v-model="formData.tel"
            readonly
          />
        </div>

        <div>
          <label class="label" for="password"> Senha: </label>
          <input
            class="input_text"
            type="text"
            id="password"
            v-model="formData.password"
            readonly
          />
        </div>

        <div class="btn_box">
          <button class="btn_minus" @click="stageMinus()">Voltar</button>
          <button class="btn_plus" type="submit">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .input_text {
    width: 100%;
  }
  .container {
    display: flex;
    justify-content: center;
  }

  .btn_box {
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
  }
  .btn_plus {
    width: 48%;
    color: #fff;
    background-color: #ff9900;
    padding: 6px;
    border: none;
    border-radius: 4px;
  }

  .btn_minus {
    width: 48%;
    color: #ff9900;
    background-color: #ffffff;
    padding: 6px;
    border: 1px solid #ff9900;
    border-radius: 4px;
  }

  .label {
    display: block;
  }

  span {
    color: #ff9900;
  }
</style>
