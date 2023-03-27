<script setup>
  import {storeToRefs} from 'pinia';
  import {useRouter} from 'vue-router';
  import {managerStore} from '../stores/ManagerStore.js';

  const manager = managerStore();
  const listin = storeToRefs(manager);

  const router = useRouter();

  const getApiData = () => {
    manager.getApiData();
  };

  getApiData();

  const back = () => {
    router.push('/');
  };
</script>

<template>
  <div class="container">
    <h2>Listagem dos registros realizados</h2>
    <table>
      <tr>
        <th>Email</th>
        <th>Categoria</th>
        <th>Nome</th>
        <th>CPF</th>
        <th>CNPJ</th>
        <th>DT Nascimento</th>
        <th>DT Criação</th>
        <th>Razão Social</th>
        <th>Telefone</th>
        <th>Senha</th>
      </tr>
      <tr v-for="item in listin.arrayData.value">
        <td>{{ item.email }}</td>
        <td>{{ item.picked }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.cpf }}</td>
        <td>{{ item.cnpj }}</td>
        <td>{{ item.dob }}</td>
        <td>{{ item.dobi }}</td>
        <td>{{ item.rs }}</td>
        <td>{{ item.tel }}</td>
        <td>{{ item.password }}</td>
      </tr>
    </table>
    <div>
      <button class="btn" @click="back()">Voltar</button>
    </div>
  </div>
</template>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  .container {
    text-align: center;
  }
  .btn {
    margin-top: 15px;
    width: 48%;
    color: #fff;
    background-color: #ff9900;
    padding: 6px;
    border: none;
    border-radius: 4px;
  }
</style>
