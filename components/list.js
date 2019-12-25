Vue.component("mylist", {
  props: ["id", "selectedid"],
  template: `
  <ul>
    <li v-for="d in listsource">
      <span>{{d.title}} - {{d.id}}</span>
      <span>
        <button @click="$emit('list-item-changed',d.id)">select</button>
      </span>
    </li>
  </ul>
    `,
  data: function() {
    return {
      listsource: [
        { id: 1, title: "aa1" },
        { id: 2, title: "aa2" },
        { id: 3, title: "aa3" },
        { id: 4, title: "aa4" }
      ]
    };
  }
});
