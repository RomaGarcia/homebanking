var app = new Vue({
    el:"#app",
    data:{
        clientInfo: {},
        errorToats: null,
        errorMsg: null,
    },
    methods:{
        getData: function(){
            axios.get("/api/clients")
                .then((response) => {
                    //get client ifo
                    this.clientInfo = response.data.filter(x => x.email != "admin@admin.com");
                })
                .catch((error)=>{
                    // handle error
                    this.errorMsg = "Error getting data";
                    this.errorToats.show();
                })
        },
        /*setStatus: function(event){
          const urlParams = new URLSearchParams(window.location.search);
          const id = urlParams.get('id');

          console.log(id);
          axios.post(`api/clients/${event.target.id}`)
            .then(response => {
            window.location.reload();
          })
            .catch((error) =>{
                this.errorMsg = error.response.data;
                this.errorToats.show();
              })
         },*/
        formatDate: function(date){
            return new Date(date).toLocaleDateString('en-gb');
        },
        signOut: function(){
            axios.post('/api/logout')
                .then(response => window.location.href="/web/index.html")
                .catch(() =>{
                    this.errorMsg = "Sign out failed"
                    this.errorToats.show();
                })
        },
    },
    mounted: function(){
        this.errorToats = new bootstrap.Toast(document.getElementById('danger-toast'));
        this.getData();
    }
})