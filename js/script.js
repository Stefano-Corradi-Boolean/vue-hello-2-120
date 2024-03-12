const { createApp } = Vue;

createApp({

  data(){
    return{
      isClicked: false,
      counter: 0,
      isLoading: true,
      colori: ['giallo','rosso', 'verde', 'blu'],
      nuovoColore: null,
      pizze:[
        {
          nome: 'margherita',
          prezzo: 10,
          ingredienti: ['pomodoro', 'mozzarella', 'basilico', 'Olio EVO']
        },
        {
          nome: 'diavola',
          prezzo: 12,
          ingredienti: ['pomodoro', 'mozzarella', 'salame']
        },
        {
          nome: 'marinara',
          prezzo: 8,
          ingredienti: ['pomodoro', 'aglio', 'origano']
        },
      ]
    }
  },

  methods:{
    endLoading(){
      setTimeout(() => this.isLoading = false, 100 )
    },
    aggiungiColore(){
      if(this.nuovoColore !== '' && !this.colori.includes(this.nuovoColore)){
        // aggiungo nuovoColore all'array colori
        this.colori.push(this.nuovoColore)
      }
      // resetto nuovocolore
      this.nuovoColore = null;
    }
  },

  mounted(){
    this.endLoading();
    console.log(this.pizze);
    console.log(this.colori);
  }


}).mount('#app')