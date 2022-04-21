
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
            this.items.push({
                id: Math.round(Math.random() * 30),
                avatar: `https://avatars.dicebear.com/api/miniavs/${Date.now()}.svg`,
                body: this.item,
                date: new Date(Date.now()).toLocaleString(),
            });

            //reset
            this.item = "";
        }
    }

}

Vue.createApp(app).mount('#app')