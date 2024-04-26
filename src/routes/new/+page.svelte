<script>
  import {scale} from 'svelte/transition';
  import '/src/routes/app.css';
  let restaurantName = '';
  let contactNumber = '';
  let location = '';
  let imageFile = null;

  function handleSubmit() {
    console.log({
      restaurantName,
      contactNumber,
      location,
      imageFile
    });
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    imageFile = file;
  }
</script>

  
<style>
    
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      color: white;

    }
  
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  
  .form-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
 
  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="file"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
  }

  .button {
     padding: 10px 20px;
      margin: 0 10px;
      font-size: 16px;
      cursor: pointer;
      background-color: transparent;
      text-decoration: none;
      border: 2px solid #475059;
      border-radius: 5px;
      color: white;
      transition: background-color 0.3s ease;
    }

    .button:hover 
    {
        background-color: #3a4049;
    }
</style>

  
<div class="container" in:scale|global>
    <h2 class="form-title">Add New Restaurant</h2>
    <form on:submit|preventDefault={handleSubmit} class="form-container">
      <label for="restaurantName">Restaurant Name:</label>
      <input type="text" id="restaurantName" bind:value={restaurantName} required>
  
      <label for="contactNumber">Contact Number:</label>
      <input type="text" id="contactNumber" bind:value={contactNumber} required>
  
      <label for="location">Location:</label>
      <input type="text" id="location" bind:value={location} required>
  
      <label for="image">Upload Image:</label>
      <input type="file" id="image" accept="image/*" on:change={handleFileChange} required>
      <div class="button-container">
        <button type="submit" class="button">Submit</button>
        <a href="/"><button class="button">Go Back</button></a>
      </div>
      
    </form>
    
</div>
  


<!--Background color: 1F1F1F
    Button color: 475059
    Form input color: 1A1C20
-->
