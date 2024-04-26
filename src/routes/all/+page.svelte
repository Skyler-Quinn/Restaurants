<script>
    import {scale, slide} from 'svelte/transition';
    import '/src/routes/app.css';
    const titles = ['Mei Kong', 'NY212', 'Bundu Khan'];
    const address = ['1-D Abul Hassan Isfahani Rd, Block D Faisal Town, Lahore, Punjab', '9C Mall, MM Alam Rd, Block C 2 Gulberg III, Lahore', 'CCA, 209, Sector FF Dha Phase 4, Lahore'];
    const number = ['0320 4007100', '(042) 111 169 212', '(042) 35723300'];
</script>
  
<style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 30px;
    }
  
    .resturant {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    width: 450px;

}

.resturant:hover {
    border: 1px solid #475059;
}

.resturant img {
    width: 150px;
    height: calc(150px * 2 / 3);
    object-fit: cover;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 20px;
}

.resturant-details {
    flex: 1;
}

.resturant-title {
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: white;
}

.resturant-description {
    font-size: 16px;
    color: white;
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
    <a href="/" class="button">Go Back</a>
    {#each titles as title, i}
    <div class="resturant" in:slide|local>       
            <img src="src/imgs/{titles[i]}.jpg" alt="{titles[i]}">
            <div class="resturant-details">
                <p class="resturant-title">{titles[i]}</p>
                <p class="resturant-description">{number[i]}</p>
                <p class="resturant-description">{address[i]}</p>
            </div>
    </div>
    {/each}
</div>
  


<!--Background color: 1F1F1F
    Button color: 475059
    Form input color: 1A1C20
-->
