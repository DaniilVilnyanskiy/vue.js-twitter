
const app = {
    data() {
        return {
            title: "Vue.Js Twitter",
            item: "",
            items: [
                {
                    id: 1,
                    body: "hello people, this is language of Vue 3",
                    avatar: `https://avatars.dicebear.com/api/miniavs/1.svg`,
                    date: new Date(Date.now()).toLocaleString(),
                },
                {
                    id: 2,
                    body: "Hello world!:D",
                    avatar: `https://avatars.dicebear.com/api/miniavs/2.svg`,
                    date: new Date(Date.now()).toLocaleString(),
                }
            ],
        };
    },
    methods: {

        onSubmit () {
            let rand = Math.round(Math.random() * 30),
                avatar = `https://avatars.dicebear.com/api/miniavs/${Date.now()}.svg`,
                date = new Date(Date.now()).toLocaleString(),
                body = this.item;

            this.items.push({
                id: rand,
                avatar: avatar,
                body: body,
                date: date,
            });

            axios.post('../php/check.php', {
                    id: rand,
                    avatar: avatar,
                    body: body,
                    date: date

            })

                /*.then(function(response) {
                    console.log(response.body);
                })*/
                // .catch(function (error) {
                //     console.log(error);
                // });

            //reset
            this.item = "";
        }

        /*axios({
                  method: 'post',
                  url: 'index.php',
                  data: {
                      firstName: 'Fred',
                      lastName: 'Flintstone'
                  }
              })
        .then(function(response) {

            console.log(response);

        })
            .catch(function (error) {
                console.log(error);
            });*/
    }

}


Vue.createApp(app).mount('#app')

