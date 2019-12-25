Vue.component("mybutton", {
  props: ["text"],
  template: `
        <button class="btn btn-primary" @click="$emit('mybutton-clicked', buttontext)">{{buttontext}}</button>
    `,
  data: function() {
    return {
      buttontext: this.text
    };
  }
  // methods: {
  //   mybuttonChanged: function() {
  //     this.buttontext = "deneme3";
  //     this.$emit("mybutton-clicked", this.buttontext);
  //   }
  // }
});
