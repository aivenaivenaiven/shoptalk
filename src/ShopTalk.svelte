<!--
  - render a chat box
  - input a name
  - list of chat message
  - input for chat message
-->

<script>
  import Chat from './Chat.svelte';

  let name;
  let nameInputValue;

  const handleNameInput = (event) => {
    if (event.key === 'Enter') {
      name = nameInputValue;
    }
  };
</script>

<div class="ShopTalk">
  {#if name}
    <Chat {name} />
  {:else}
    <div class="name-container">
      <label for="name">Hello! Please enter your name.</label>
      <input
        name="name"
        bind:value={nameInputValue}
        on:keypress={handleNameInput}
      />
    </div>
  {/if}
</div>

<style>
  .ShopTalk {
    height: 500px;
    width: 300px;
    border: 1px solid black;
    border-radius: 5px;
  }

  .name-container {
    text-align: center;
  }
</style>