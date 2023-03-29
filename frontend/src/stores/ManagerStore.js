import axios from 'axios';
import {defineStore} from 'pinia';

const URL = 'http://localhost:3000/registration';
export const managerStore = defineStore('manager', {
  //state
  state: () => ({
    data: {},
    arrayData: null,
    status: 1,
    getPicked: null,
    stage1: ['email', 'picked'],
    stage2pf: ['name', 'cpf', 'dob', 'tel'],
    stage2pj: ['rs', 'cnpj', 'dobi', 'tel'],
    stage3: ['password'],
    validated: null,
    itemValidated: null,
    validArray: [],
  }),
  //action
  actions: {
    getApiData() {
      axios.get(URL).then((response) => {
        this.arrayData = response.data;
        this.arrayData;
      });
    },

    sendApiData(formData) {
      axios
        .post(URL, formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    validationField(level, formData) {
      if (level == 1) {
        this.checkForms(formData, this.stage1);
      } else if (level == 2 && formData.picked == 'PF') {
        this.checkForms(formData, this.stage2pf);
      } else if (level == 2 && formData.picked == 'PJ') {
        this.checkForms(formData, this.stage2pj);
      } else if (level == 3) {
        this.checkForms(formData, this.stage3);
      } else {
        return;
      }
    },

    checkForms(formData, dataStage) {
      let counter = 0;
      this.validArray = [];
      for (let index = 0; index < dataStage.length; index++) {
        const element = formData[dataStage[index]] === null;
        if (element) {
          counter += 1;
          this.validArray.push(dataStage[index]);
        }
      }

      if (counter == 0) {
        this.statusManager(1);
      }
    },

    statusManager(status) {
      this.status += status;
    },
  },

  //getter
  getters: {
    showArrayData() {
      return this.arrayData;
    },
  },
});
