Vue.component("mylist2", {
  props: ["id", "selectedid"],
  template: `
    <ul>
      <li v-for="d in listsource">
        {{d.title}} - {{d.id}}
      </li>
    </ul>
      `,
  data: function() {
    return {
      listsource: []
    };
  },
  watch: {
    selectedid: function(newVal, oldVal) {
      this.loadData(newVal);
    }
  },
  methods: {
    loadData: function(selectedid) {
      var list2 = [];

      for (var i = 0; i < selectedid; i++) {
        list2.push({
          id: i * 10,
          title: "bbb" + i
        });
      }

      this.listsource = list2;
    }
  }
});
