
<template>
 <div class="root-element content">
  <div class="content">
    <div class="boxes">
      <div class="box">
        <h1> Checklist oplevering </h1>
        <p>Iedere periode zullen er een aantal zaken moeten worden opgeleverd. Hieronder vind je een handig overzicht van wat er allemaal wanneer opgeleverd moet worden:
        </p>
      </div>
      <div class="box">
        <h3>Algemeen</h3>
        <p>De volgende zaken moeten iedere week bijgewerkt en ge-update zijn:</p>
        <ul>
          <li>Urenoverzicht</li>
          <li>Logboek</li>
        </ul>
      </div>
      <div class="box">
        <h3>Terugkomdag week 4</h3>
        <ul>
          <li> <router-link :to="{name: 'Orientatie'}">Oriëntatieopdracht </router-link></li>
          <li>Leer-werkhoudingslijst</li>
        </ul>
      </div>
      <div class="box">
        <h3>Terugkomdag week 8 (Evaluatieweek)</h3>
        <ul>
          <li> 2 <router-link :to="{name: 'Stagekaarten'}"> Stagekaarten </router-link> naar keuze</li>
          <li> Leer-werkhoudingslijst </li>
        </ul>
      </div>
      <div class="box">
        <h3>Terugkomdag week 12 </h3>
        <ul>
          <li> 2 <router-link :to="{name: 'Stagekaarten'}"> Stagekaarten </router-link> naar keuze</li>
          <li>Leer-werkhoudingslijst</li>
        </ul>
      </div>
      <div class="box">
        <h3>Terugkomdag week 16 (Evaluatieweek) </h3>
        <ul>
          <li> 2 <router-link :to="{name: 'Stagekaarten'}"> Stagekaarten </router-link> naar keuze</li>
          <li> Leer-werkhoudingslijst </li>
        </ul>
      </div>
    </div>
    <div class="sidebar">

    </div>
  </div>
 </div>
</template>


<script>
export default {

}
</script>


<style scoped>
  .content {
    display: flex;

  }

  .sidebar{
    width: 35%;
  }
</style>
