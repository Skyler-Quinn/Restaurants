<script>
    import {scale} from 'svelte/transition';
    import '/src/routes/app.css';
</script>
  
<style>
    
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      
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
    <a href="new" class="button" >Add Resturent</a>
    <a href="all" class="button" >Show Resturents</a>
</div>
  


<!--Background color: 1F1F1F
    Button color: 475059
    Form input color: 1A1C20
-->
