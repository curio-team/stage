<template>
  <div class="root-element content">
    <h1> Downloads </h1>
    <h3> Algemeen </h3>
    <nav class="panel">
      <a download target="_blank" href="https://radiuscollege.nl/upload/documenten/17/Handboek%20BPV%202017-2018.pdf" class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book"> </i>
        </span>
        Algemene BPV Handleiding
      </a>
       <a download target="_blank" href="https://radiuscollege.nl/upload/documenten/17/NEW%20Invulbaar%20Melding%20BPV.pdf" class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book"> </i>
        </span>
        Meldingsformulier BPV
      </a>
    </nav>
    <h3> Voortgang/Beoordeling </h3>
    <nav class="panel">
     <a href="" class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book"> </i>
        </span>
        Voortgangsregistratie (Excel bestand) | Nog te ontwikkelen
      </a>
      <a download target="_blank" href="https://github.com/Radiuscollege/stage/blob/master/docs/STAGEKAART.docx?raw=true" class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book"></i>
        </span>
         Stagekaart Template
      </a>
      <router-link :to="{name: 'Orientatie'}" class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book"> </i>
        </span>
        Oriëntatie opdracht
      </router-link>
      <router-link :to="{name: 'Checklist'}" class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book"> </i>
        </span>
        Checklist oplevering
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  methods: {
    test () {
      alert('test')
    }
  }
}
</script>
