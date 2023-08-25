<script>
	import Feelings from './feelings.svelte';
	import Hellouser from './hellouser.svelte';

	let count = 0;

	function add5() {
		count = count + 5;
	}

	function mult5() {
		count = count * 5;
	}
	function pow5() {
		count = count ** 5;
	}
	function div5() {
		count = count / 5;
	}
	function resetcount() {
		count = 0;
	}

	let userProps = {
		name: 'Sanjay',
		age: 27,
		height: 175,
		weight: 70,
		animal: 'tiger',
		color: 'spectreseek red'
	};
</script>

<h1>Count app</h1>
<p>Hey lets make a counter app quickly</p>
<button on:click={add5}> Add 5 to the count</button>
<button on:click={mult5}> Multi 5 to the count</button>
<button on:click={pow5}> Pow 5 to the count</button>
<button on:click={div5}> Div 5 to the count</button>
<button on:click={resetcount}> Reset count to 0 </button>
<p>{count}</p>

<br />
<hr />

<h1>Parent - child User app</h1>
<Hellouser {...userProps} />
<Feelings />
