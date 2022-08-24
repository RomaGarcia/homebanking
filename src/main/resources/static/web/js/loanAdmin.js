  var app = new Vue({
      el:"#app",
      data:{

          name: "",
          payment: 0,
          payments: [],
          errorToats: null,
          errorMsg: null,
          maxAmount: 0,
          fees: []
      },
      methods:{
          apply: function(event){
              axios.post("/api/loansType",{name: this.name, maxAmount: this.maxAmount, payments: this.payments})
              .then(response => {
                window.location.reload();

              })
              .catch((error) =>{
                  this.errorMsg = error.response.data;
                  this.errorToats.show();
              })
          },
          addPayment: function(){
            this.payments.push(this.payment);



          },
          signOut: function(){
              axios.post('/api/logout')
              .then(response => window.location.href="/web/index.html")
              .catch(() =>{
                  this.errorMsg = "Sign out failed"
                  this.errorToats.show();
              })
              },

         finish: function(){
              window.location.reload();

          },

      mounted: function(){
          this.errorToats = new bootstrap.Toast(document.getElementById('danger-toast'));
          this.modal = new bootstrap.Modal(document.getElementById('confirModal'));
          this.okmodal = new bootstrap.Modal(document.getElementById('okModal'));


      }
  }

  })