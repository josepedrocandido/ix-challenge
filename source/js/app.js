var app = new Vue({
el: '#app',
data: {
  company_name: 'Hotel ACME',
  email: 'hello@hotelacme.com',
  phone: '+351 91 666 53 52',
  adress: {
    street: 'Av. Duque d’Ávila 46',
    number: '3A',
    zip_code: '1050-053 Lisboa',
    country: 'Portugal'
  },
  nif: '',
  showNifCompleted: false
},
methods: {
  verifyNif: function (event) {
    var nif = event.target.value;
    if (nif.length == 9 && (/^\d+$/.test(nif))) {
      this.showNifCompleted = !this.showNifCompleted
    }
    else {
      this.showNifCompleted = false
    }
  }
  }
})
