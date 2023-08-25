<script>
	// import { feelings } from '../stores.js';
	import { feelings } from '../stores';
	// const feelings = writable({ current_feeling: 'sad' });
	let inputfeels;

	function updatefeelings() {
		$feelings.current_feels = inputfeels;
	}
</script>

<h1>welcome to the arena of feels</h1>
<p>we are currently feeling : {$feelings.current_feels}</p>
<form>
	<input type="text" placeholder="enter your feeling now" bind:value={inputfeels} />
	<button on:click={updatefeelings}> enter to submit feels</button>
	<button on:click={() => ($feelings.current_feels = inputfeels)}>
		Another button to update the feels</button
	>
</form>
