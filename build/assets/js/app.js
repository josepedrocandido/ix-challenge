var app = new Vue({
  el: "#app",
  data: {
    company_name: "Hotel ACME",
    email: "hello@hotelacme.com",
    phone: "+351 91 666 53 52",
    adress: {
      street: "Av. Duque d’Ávila 46",
      number: "3A",
      zip_code: "1050-053 Lisboa",
    },
    nif: "",
    showNifCompleted: !1,
    selectedCountry: "Portugal",
    stepOne: 1,
    stepTwo: !1,
    backgroundColorTag: "background-color : #",
    color: '20B397',
  },
  methods: {
    verifyNif: function(e) {
      var t = e.target.value;
      9 == t.length && /^\d+$/.test(t) ? this.showNifCompleted = !this.showNifCompleted : this.showNifCompleted = !1
    },
    submitForm: function () {
      this.stepOne = !this.stepOne
      this.stepTwo = !this.stepTwo
    }
  }
});
