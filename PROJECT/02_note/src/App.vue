<script setup>
import { ref } from 'vue';
const showModal = ref(false);
const newNote = ref("hiii");
const notes = ref([])

function randomColor() {
  return "hsl(" + (Math.random() * 360) + ", 100%, 75%)";
}

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 1000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: randomColor()
  })
  showModal.value = false;
  newNote.value = "";
}

</script>
<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"/>
        <div class="footer">
          <button @click="addNote()">Add note</button>
          <button class="color: red;" @click="showModal = false">Close</button>
        </div>
      </div>
    </div>
    <div class="container">
      <p>{{ notes }}</p>
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque earum fuga iste? Culpa dignissimos ea</p>
          <p class="date"></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw
}
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1  {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}
header button {
  border: none;
  padding: 16px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #773bb5;
  border-radius: 100%;
}
.card {
  width: 225px;
  height: 225px;
  background-color: #fd7000;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}
.date {
  font-size: 10px;
  font-style: italic;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(124, 177, 225, 0.16);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.footer {
  margin: 25px 0 25px 0;
}
</style>