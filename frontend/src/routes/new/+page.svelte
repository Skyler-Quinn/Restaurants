<script>
  import {scale} from 'svelte/transition';
  import '/src/routes/app.css';


  let API_URL="http://localhost:3000/";
  
  import {onMount} from 'svelte';

  let base64String = '';
  let name = '';
  let address = '';
  let phone = '';
  let file = null;
  let errorMessage = '';

  async function handleSubmit() {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phoneNumber', phone);
    formData.append('img', base64String); 

    try {
        const response = await fetch(API_URL + 'restaurants', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Data saved successfully:', data);
            //window.location.href = '/'; // Redirect to the homepage
        } else {
            throw new Error('Error saving data');
        }
    } catch (error) {
        console.error('Error saving data:', error);
        errorMessage = 'Error saving data. Please try again.';
    }
}

function handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        base64String = reader.result;
      };
  
      reader.readAsDataURL(file);
      console.log(base64String);
}

  onMount(() => {
    
  });

  export { handleSubmit };

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
    <form on:submit|preventDefault={handleSubmit} class="form-container" method="post">
      <label for="name">Restaurant Name:</label>
      <input type="text" id="name" bind:value={name} required>
  
      <label for="phone">Contact Number:</label>
      <input type="text" id="phone" bind:value={phone} required>
  
      <label for="address">Location:</label>
      <input type="text" id="address" bind:value={address} required>
  
      <label for="image">Upload Image:</label>
      <input type="file" id="file" accept="image/*" bind:files={file} on:change={handleFileChange} required>
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
