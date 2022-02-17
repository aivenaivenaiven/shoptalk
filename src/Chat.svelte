<script>
  import ChatClient from './ChatClient';

  export let name;

  let chatInputValue;
  let chatMessages = [];

  const client = ChatClient();

  const handleChatInput = (event) => {
    if (event.key === 'Enter') {
      chatMessages.push({ name, message: chatInputValue });
      chatMessages = chatMessages;

      client.emit("message.send", { name, message: chatInputValue });

      chatInputValue = null;
    }
  }

  client.on("message.send", ({ name, message}) => {
    chatMessages.push({ name, message });
    chatMessages = chatMessages;
  })
</script>

<div class="Chat">
  <div class="chat-header">
    <p>Hello {name}!</p>
  </div>
  <ul class="chat-list">
    {#each chatMessages as chat}
      <li>{chat.name}: {chat.message}</li>
    {/each}
  </ul>
  <input
    name="chat-message"
    bind:value={chatInputValue}
    on:keypress={handleChatInput}
  >
</div>

<style>
  .Chat {
    display: flex;
    flex-direction: column;
  }

  .chat-header {
    text-align: center;
    border-bottom: 1px solid black;
  }

  .chat-list {
    flex-grow: 1;
  }

  ul, li {
    list-style-type: none;
    margin: 0;
  }


</style>

