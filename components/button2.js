Vue.component("mybutton2", {
  props: ["title"],
  template: `
          <button class="btn btn-primary">{{title}}</button>
      `
  // data: function() {
  //   return {
  //     text: "aaa"
  //   };
  // }
});
