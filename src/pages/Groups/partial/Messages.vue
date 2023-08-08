<template>
    <v-app>
      <v-card>
        <VueElementLoading
          :active="loading"
          :text="loading_text"
          spinner="line-scale"
          color="var(--primary)"
        />
        <v-card-title>
          <div class="chat-header">{{ group }}</div>
        </v-card-title>
        <div class="chat-container">
          <div class="chat-messages">
            <div
              v-for="(msg, i) in messages"
              :key="i"
              :class="['chat-message', msg.user === user ? 'current-user' : '']"
            >
              <div class="message-avatar">
                <img v-if="msg.user !== user" :src="msg.avatar" alt="Avatar" />
              </div>
              <div class="message-content-wrapper">
                <div v-if="msg.user === user" class="message-sender">You</div>
                <div v-else class="message-sender">{{ msg.user }}</div>
                <div :class="msg.user === user ? 'my-message' : 'other-message'">
                  <span class="message-content">{{ msg.message }}</span>
                </div>
              </div>
            </div>
          </div>
          <form @submit.prevent="sendMessage" class="chat-form">
            <input
              v-model="message"
              type="text"
              class="chat-input"
              placeholder="Type a message..."
              required
            />
            <v-btn type="submit" class="chat-btn" color="primary">
              <v-icon color="darken-3">mdi-forum</v-icon>
            </v-btn>
          </form>
        </div>
  
        <!-- Button to toggle the emoji picker -->
        <button class="emoji-picker-button" @click="toggleEmojiPicker">😀</button>
  
        <!-- Emoji Picker -->
        <Picker v-if="showEmojiPicker" :set="set" @select="handleEmojiSelect" ref="emojiPicker" class="emoji-picker" />
      </v-card>
    </v-app>
</template>
  
  
<script>
import Pusher from 'pusher-js';
import VueElementLoading from "vue-element-loading";
import { Picker } from "emoji-mart-vue";


export default {
    components:{
        VueElementLoading,
        Picker,
    },
    data() {
        return {
            user: '',
            loading: false,
            loading_text:'',
            message: '',
            groupId: '',
            messages: [],
            form:{},
            showEmojiPicker: false,
            set: "apple",
        };
    },
    methods: {
        async fetchMessages() {
            this.loading = true
            this.loading_text = 'Fetching Messages'
            try {
                const response = await this.$api.get(this.dynamic_route(`group/${this.groupId}/messages`));
                this.messages = response.data;
                this.loading = false
                this.loading_text = ''
            } catch (error) {
                console.error('Error fetching messages:', error);
                this.loading = true
                this.loading_text = 'Fetching Messages'
            }
        },
        sendMessage() {
            if (this.user.trim() === '' || this.message.trim() === '') return;
            const data = { groupId: this.groupId, user: this.user, message: this.message, avatar:this.form.avatar}
            this.$api.post(this.dynamic_route('group/messages'), data).then(() => { });
            this.message = '';
        },
        getUser() {
        this.$api.get(this.dynamic_auth_route("me")).then((res) => {
            this.form = res.data.patient;
        });
        },
        handleIncomingMessage(data) {
            this.messages.push(data);
        },

        isMessageFromCurrentUser(msg) {
            return msg.user === this.user;
        },
        handleEmojiSelect(emoji) {
            this.message += emoji.native; // Append the selected emoji to the input field value
        },
        toggleEmojiPicker() {
            this.showEmojiPicker = !this.showEmojiPicker; // Toggle the visibility of the emoji picker
        },
        handleOutsideClick(event) {
      const emojiPicker = this.$refs.emojiPicker; // Get a reference to the emoji picker element
      if (!emojiPicker.contains(event.target)) {
        // If the click event target is not inside the emoji picker element, hide the emoji picker
        this.showEmojiPicker = false;
      }
    },
    },
    async created() {
        this.getUser()
        this.group = this.$route.query.name
        this.groupId = this.$route.params.groupid
        this.user = JSON.parse(localStorage.getItem('auth_info')).auth_user.username
        // Fetch initial messages from the database (if you have stored messages in the backend)
        // Replace this with your actual backend endpoint to fetch messages
        // Example: axios.get('/api/messages')
        // After fetching, update this.messages with the fetched data

        // Set up Pusher to listen for new messages
        this.pusher = new Pusher('23770585f05335a622d6', {
            cluster: 'mt1',
            encrypted: true,
        });
        // Fetch existing messages for the group from the server and populate the chat

        this.chatChannel = this.pusher.subscribe(this.groupId);
        // Bind new messages for the specific group
        this.chatChannel.bind('new-message', (data) => this.handleIncomingMessage(data));
        this.fetchMessages();
    },
    mounted(){
        window.addEventListener("click", this.handleOutsideClick);
    },
    beforeDestroy() {
    // Remove the click event listener when the component is about to be destroyed
    window.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>
  
<style>
.chat-message.current-user {
    text-align: right;
}
  .emoji-picker-button {
    font-size: 20px;
    cursor: pointer;
    padding: 8px;
    border: none;
    background: transparent;
  }

  /* Style for the emoji picker */
  .emoji-picker {
    position: absolute;
    bottom: 50px;
    right: 20px;
    z-index: 999;
    background-color: black !important;
  }

.chat-messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    overflow-y: auto;
}
.emoji-mart-category-label span[data-v-376cda0e]{
    display: block;
    width: 100%;
    font-weight: 500;
    padding: 5px 6px;
    background-color: black !important;
    color: white;
}

/* CSS */
.chat-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.message-avatar {
  margin-right: 10px;
}

.message-avatar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.message-content-wrapper {
  display: flex;
  flex-direction: column;
}

.my-message {
  align-self: flex-end;
  background-color: #3f51b5;
  color: #fff;
  border-radius: 10px;
  padding: 8px;
}

.other-message {
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 8px;
}


.my-message {
    align-self: flex-end;
    background-color: #dcf8c6;
    border-radius: 10px 0 10px 10px;
    padding: 8px 12px;
    margin-bottom: 4px;
    color: #333;
    max-width: 200px;
}

.other-message {
    align-self: flex-start;
    background-color: #f5f5f5;
    border-radius: 0 10px 10px 10px;
    padding: 8px 12px;
    margin-bottom: 4px;
    color: #333;
    max-width: 200px;
}

.chat-form {
    display: flex;
    margin-top: 10px;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 5px;
}

.chat-input {
    flex: 1;
    padding: 8px;
    margin-right: 5px;
    border: none;
    outline: none;
    font-size: 14px;
}

.chat-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
}

.chat-btn:hover {
    background-color: #0056b3;
}

.chat-container {
    /* max-width: 450px; */
    margin: 0 auto;
    padding: 20px;
    /* border: 1px solid #ddd; */
    border-radius: 5px;
    font-family: 'Arial', sans-serif;
}

.chat-header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #007bff;
}

.chat-messages {
    max-height: 300px;
    overflow-y: auto;
}

.chat-message {
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.current-user {
    color: #fff;
    align-self: flex-end;
}

.message-sender {
    font-size: 12px;
    font-weight: bold;
    color: #333;
    margin-bottom: 4px;
}

.message-content {
    font-size: 14px;
}

.chat-form {
    display: flex;
    margin-top: 20px;
}

.chat-input {
    flex: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.chat-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.chat-btn:hover {
    background-color: #0056b3;
}
</style>
  
  