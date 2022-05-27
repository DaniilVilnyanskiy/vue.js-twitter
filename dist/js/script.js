
const app = {
    data() {
        axios.get('../php/database.php')
            .then((response) => {
                console.log('Тип данных:' + typeof (response.data), response.data);

                // JSON.parse(response.data);
                this.items = response.data;
                console.log(response.data.img);
            })
            .catch((error) => {
                console.error(error)
            })

        return {
            title: "Vue.Js Twitter",
            item: "",
            items: [

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
            this.item = "";
        }
    }
}

Vue.createApp(app).mount('#app')

