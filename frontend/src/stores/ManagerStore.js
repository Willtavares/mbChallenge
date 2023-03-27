import axios from 'axios';
import {defineStore} from 'pinia';

const URL = 'http://localhost:3000/registration';
export const managerStore = defineStore('manager', {
  //state
  state: () => ({
    data: {},
    arrayData: null,
  }),
  //action
  actions: {
    getApiData() {
      axios.get(URL).then((response) => {
        this.arrayData = response.data;
        this.arrayData;
        console.log(1, this.arrayData);
      });
    },

    sendApiData(formData) {
      console.log('Chegou aqui ', formData);
      axios
        .post(URL, formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  //getter
  getters: {
    showArrayData() {
      return this.arrayData;
    },

    insertApiData() {
      return null;
    },
  },
});
