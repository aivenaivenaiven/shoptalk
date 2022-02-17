<!--
  - render a chat box
  - input a name
  - list of chat message
  - input for chat message
-->

<script>
  let name;
  let nameInputValue;
  let chatInputValue;
  let chatMessages = [];

  const handleNameInput = (event) => {
    if (event.key === 'Enter') {
      name = nameInputValue;
    }
  };

  const handleChatInput = (event) => {
    if (event.key === 'Enter') {
      chatMessages.push({ name, message: chatInputValue });
      chatMessages = chatMessages;
      chatInputValue = null;
    }
  }
</script>

<div class="ShopTalk">
  {#if name}
    <p>Hello {name}!</p>
    <ul>
      {#each chatMessages as chat}
        <li>{chat.name}: {chat.message}</li>
      {/each}
    </ul>
    <input
      name="chat-message"
      bind:value={chatInputValue}
      on:keypress={handleChatInput}
    >
  {:else}
    <label for="name">Hello! Please enter your name.</label>
    <input
      name="name"
      bind:value={nameInputValue}
      on:keypress={handleNameInput}
    />
  {/if}
</div>

<style>
  .ShopTalk {
    height: 500px;
    width: 300px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>