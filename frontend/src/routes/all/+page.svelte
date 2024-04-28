<script>
    import {scale, slide} from 'svelte/transition';
    import '/src/routes/app.css';
    import { onMount } from 'svelte';
    let API_URL="http://localhost:3000/";
    let restaurants = [];

    onMount(async () => {
        try {
            const response = await fetch(API_URL + 'getRestaurants');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            restaurants = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
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
    {#each restaurants as restaurant}
    <div class="resturant" in:slide|local>       
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={restaurant.img} alt="Restaurant Image">
            <div class="resturant-details">
                <p class="resturant-title">{restaurant.name}</p>
                <p class="resturant-description">{restaurant.phoneNumber}</p>
                <p class="resturant-description">{restaurant.address}</p>
            </div>
    </div>
    {/each}
</div>
  


<!--Background color: 1F1F1F
    Button color: 475059
    Form input color: 1A1C20
-->
