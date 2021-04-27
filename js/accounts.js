
Vue.component('accounts', {
	template: `

	<div>
	<h2>Accounts</h2>
	<table id="example" class="table  table-bordered  " style="width:100%"> </table>
	<button v-on:click="count++">You clicked me {{ count }} times.</button>
	</div>
  `,
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
 
  }
});



