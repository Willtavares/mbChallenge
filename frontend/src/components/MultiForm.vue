<script setup>
  import {storeToRefs} from 'pinia';
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

  let disabled = ref(false);

  const manager = managerStore();
  const informations = storeToRefs(manager);

  //Methods
  function validator(level, formData, e) {
    e.preventDefault();
    manager.validationField(level, formData);
  }

  const stageMinus = () => {
    manager.statusManager(-1);
  };

  const onSubmit = (formData) => {
    manager.sendApiData(formData);
    router.push('/list');
  };
</script>

<template>
  <div class="container">
    <form @submit.prevent="onSubmit(formData)">
      <div v-if="informations.status.value === 1">
        <p>Etapa <span>1</span> de 4</p>
        <h2>Seja Bem Vindo(a)</h2>
        <label class="label" for="email"> Endereço de e-mail </label>
        <input
          class="input_text"
          name="email"
          type="email"
          v-model="formData.email"
        />
        <span for="email" v-if="informations.validArray.value.includes('email')"
          >Preenchimento Obrigatório</span
        >

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
          <label for="two">Pessoa Juridica</label><br />
          <span
            for="email"
            v-if="informations.validArray.value.includes('picked')"
            >Preenchimento Obrigatório</span
          >
        </div>
        <div class="btn_box">
          <button
            :disabled="disabled"
            class="btn_plus"
            @click="validator(1, formData, $event)"
          >
            Continuar
          </button>
        </div>
      </div>

      <div>
        <p>{{ formData.picked }}</p>
        <div v-if="informations.status.value === 2 && formData.picked === 'PF'">
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
          <span v-if="informations.validArray.value.includes('name')"
            >Preenchimento Obrigatório</span
          >

          <label class="label" for="cpf"> CPF: </label>
          <input
            class="input_text"
            name="cpf"
            id="cpf"
            type="text"
            v-model="formData.cpf"
          />
          <span v-if="informations.validArray.value.includes('cpf')"
            >Preenchimento Obrigatório</span
          >

          <label class="label" for="dob"> Data de Nascimento: </label>
          <input
            class="input_text"
            name="dob"
            id="dob"
            type="date"
            v-model="formData.dob"
          />
          <span v-if="informations.validArray.value.includes('dob')"
            >Preenchimento Obrigatório</span
          >

          <label class="label" for="tel"> Telefone: </label>
          <input
            class="input_text"
            name="tel"
            id="tel"
            type="tel"
            v-model="formData.tel"
          />
          <span v-if="informations.validArray.value.includes('tel')"
            >Preenchimento Obrigatório</span
          >

          <div class="btn_box">
            <button class="btn_minus" @click="stageMinus()">Voltar</button>
            <button class="btn_plus" @click="validator(2, formData, $event)">
              Continuar
            </button>
          </div>
        </div>

        <div v-if="formData.picked === 'PJ' && informations.status.value === 2">
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
          <span v-if="informations.validArray.value.includes('rs')"
            >Preenchimento Obrigatório</span
          >

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
          <span v-if="informations.validArray.value.includes('dobi')"
            >Preenchimento Obrigatório</span
          >

          <label class="label" for="tel"> Telefone: </label>
          <input
            class="input_text"
            name="tel"
            id="tel"
            type="tel"
            v-model="formData.tel"
          />
          <span v-if="informations.validArray.value.includes('tel')"
            >Preenchimento Obrigatório</span
          >

          <div class="btn_box">
            <button class="btn_minus" @click="stageMinus()">Voltar</button>
            <button class="btn_plus" @click="validator(2, formData, $event)">
              Continuar
            </button>
          </div>
        </div>
      </div>

      <div v-if="informations.status.value === 3">
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
        <span v-if="informations.validArray.value.includes('password')"
          >Preenchimento Obrigatório</span
        >
        <div class="btn_box">
          <button class="btn_minus" @click="stageMinus()">Voltar</button>
          <button class="btn_plus" @click="validator(3, formData, $event)">
            Continuar
          </button>
        </div>
      </div>

      <div v-if="informations.status.value === 4">
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
