<script>
    let selectedFile = null;
    let base64String = '';
  
    function handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        base64String = reader.result;
      };
  
      reader.readAsDataURL(file);
    }
  </script>
  
  <h2>Convert Image to Base64</h2>
  
  <input type="file" accept="image/*" on:change={handleFileChange}>
  
  {#if base64String}
    <div>
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={base64String} alt="Uploaded Image">
      <p>Base64 String:</p>
      <textarea rows="10" cols="50">{base64String}</textarea>
    </div>
  {/if}
  