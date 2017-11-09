<template>
  <div class="root-element content">
    <h1 style="text-align: center; text-transform: uppercase">opdrachtkaarten stage</h1>
    <div class="boards">
        <div class="columns">
          <div class="column is-3 board" id="b1">
            <div class="box is-gray">
              <div class="head">
                <div class="name">Kerntaak 1</div>
                <h4>Voorbereiding</h4>
                <p class="sub-title">Levert een bijdrage aan het ontwikkeltraject.</p>


              </div>
              <div class="items">
                <div :key="opdracht.wp"class="box"  id="b1c1" v-if="opdracht.kt == 1" v-for="opdracht in opdrachten">
                  <p>{{opdracht.wp}} <span class="title">{{ opdracht.naam }}</span></p>
                  <p class="meta">
                    <button @click="setActive(opdracht)" class="button is-info"> <i class="fa fa-eye"></i> Openen   </button>
                  </p>
                </div>
                <div class="add-card">
                 <div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 board" id="b2">
          <div class="box is-gray">
            <div class="head">
              <div class="name">Kerntaak 2</div>
              <h4>Realisatie</h4>
              <p class="sub-title">Realiseert en test (onderdelen van) een project.</p>

            </div>
            <div class="items">
              <div class="box" id="b2c1" v-if="opdracht.kt == 2" v-for="opdracht, key in opdrachten">
               <p>{{opdracht.wp}} <span class="title">{{ opdracht.naam }}</span></p>
                  <p class="meta">
                    <button class="button is-info"><i class="fa fa-eye"></i> Openen  </button>
                  </p>
              </div>
              <div class="add-card">

              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 board" id="b3">
          <div class="box is-gray">
            <div class="head">
              <div class="name">Kerntaak 3</div>
              <h4>Oplevering</h4>
              <p class="sub-title">Levert een product op.</p>

            </div>
            <div class="items">
              <div class="box" id="b3c1"  v-if="opdracht.kt == 3" v-for="opdracht in opdrachten">
               <p>{{opdracht.wp}} <span class="title">{{ opdracht.naam }}</span></p>
                  <p class="meta">
                    <button class="button is-info"><i class="fa fa-eye"></i> Openen  </button>
                  </p>
              </div>
              <div class="add-card">

              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 board" id="b4">
          <div class="box is-gray">
            <div class="head">
              <div class="name">Kerntaak 4</div>
              <h4>Beheer en Optimalisatie</h4>
              <p class="sub-title">Onderhoudt en beheert de applicatie.</p>
            </div>
            <div class="items">
              <div class="box" id="b4c1" v-if="opdracht.kt == 4" v-for="opdracht in opdrachten">
                <p>{{opdracht.wp}} <span class="title">{{ opdracht.naam }}</span></p>
                  <p class="meta">
                    <button class="button is-info"><i class="fa fa-eye"></i> Openen  </button>
                  </p>
              </div>
              <div class="add-card">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" :class="{'is-active' : modalOpen}">
      <div @click="modalOpen = false" class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{activeOpdracht.wp}} - {{ activeOpdracht.naam }} </p>
          <button @click="modalOpen = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <h3>Opdracht omschrijving</h3>
          <p v-html="activeOpdracht.beschrijving"></p>

          <h3>Resultaat</h3>
          <p v-html="activeOpdracht.resultaat"> </p>

          <h3>Op te leveren documenten</h3>
          <nav class="panel">

            <div v-for="doc in activeOpdracht.oplevering" :key="doc.document" class="panel-block">
              <p @click="doc.clicked = !doc.clicked">
                <span class="panel-icon">
                  <i class="fa fa-book"></i>
                </span>
                <b> {{doc.document}} </b>
              </p>
              <div v-show="doc.clicked">
                <p v-html="doc.beschrijving"></p>
              </div>
            </div>

          </nav>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dClicked: false,
      name: 'Stageopdrachten',
      modalOpen: false,
      opdrachten: [
        {
          kt: 1,
          wp: '1.1',
          naam: 'Stelt de opdracht vast',
          keyword: 'Voorbereiding',
          beschrijving: `Voor deze opdracht ga je samen met jouw opdrachtgever
                        (in de meeste gevallen jouw stagebegeleider, of een andere medewerker)
                        komen tot een technische opdracht om later uit te voeren. Om tot een duidelijke
                        afbakening van de opdracht te komen ga je overleggen met jouw
                        opdrachtgever. Je maakt daarbij notities en/of schetsen, stelt inhoudelijke vragen
                        ter verduidelijking van de opdracht en laat zien dat je meedenkt aan de opdracht
                        door tijdens het gesprek aanvullingen te geven of ideeën op te gooien.
                        `,
          resultaat: `Het resultaat is een door de opdrachtgever goedgekeurde opdracht waarin de beschikbare
                      informatie en de eisen en behoeften van de opdrachtgever zijn verwerkt. Voor het vaststellen
                      van de opdracht is gebruik gemaakt van de <a href="https://nl.wikipedia.org/wiki/MoSCoW-methode"> MoSCoW-methode</a>`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Gespreksverslag',
              'beschrijving': `
               Een gedetailleerd gespreksverslag waarin de volgende punten worden beschreven:
               <ul>
                 <li> tijdstip gesprek </li>
                 <li> betrokkenen </li>
                 <li> locatie </li>
                 <li> een verslag over de gemaakte voorbereiding voor dit gesprek. </li>
                 <li> een verslag over het daadwerkelijk gehouden gesprek. (welke punten zijn er besproken?
                   waar heb je op doorgevraagd? welke suggesties heb je zelf aangedragen? ) </li>
                 <li> reflectie op het gehouden gesprek. (Als je de volgende keer nog eens zo'n interview moet houden,
                 wat ga je dan anders aanpakken? Welke vragen heb je uiteindelijk niet meer gesteld, en waarom niet?
                 Ging het gesprek zoals je dacht dat het zou verlopen, of liep het uiteindelijk helemaal anders? Wat zou je
                 de volgende keer anders doen in de voorbereiding van zo'n gesprek? ) </li>
              </ul>
              `
            },
            {
              'clicked': false,
              'document': 'Programma van eisen',
              'beschrijving': `
                Het <a href="https://www.computable.nl/artikel/opinie/ict-branche/5718571/1509029/programma-van-eisen-kent-enkele-basisprincipes.html"> programma van eisen </a>
                is een overzicht van wat de functionaliteiten binnen de applicatie zijn. Dit is vaak een 'officieel' document
                waar een opdrachtgever van te voren voor tekent. Dit zijn de afspraken die je met de opdrachtgever hebt gemaakt over
                de functionaliteiten van de applicatie.  Handig is om hierbij gebruik te maken van de <a href="https://nl.wikipedia.org/wiki/MoSCoW-methode"> MoSCoW-methode</a>.
                Wees in het programma van eisen heel duidelijk in het beschrijven van de functionaliteiten. wie moet wat kunnen doen in het systeem?
              `
            }
          ]
        },
        {
          kt: 1,
          wp: '1.2',
          naam: 'Levert een bijdrage aan het projectplan',
          beschrijving: `Je gaat op basis van een gekregen (deel)opdracht de werkzaamheden inventariseren
                        die hierbij horen. Je beschrijft de activiteiten die bij deze opdracht komen kijken
                        en geeft daarbij een zo realistisch mogelijke schatting aan van de duur van deze activiteiten.
                       `,
          resultaat: `Een realistische planning volgens de werkwijze van het stagebedrijf (planningstool zoals Asana,
                      of Microsoft Project) die waar nodig wordt bijgesteld.
                     `,
          oplevering: [
            {
              'clicked': false,
              'document': 'Verantwoording planning',
              'beschrijving': `Beschrijf in eigen woorden (half a4) hoe er binnen het team wordt omgegaan met de planning rondom
              een project. Wat voor planningstool wordt er gebruikt, en waarom? Wie wijst taken toe?
              wie bepaalt het tijdspad? Hoe wordt bepaald hoe lang een bepaalde taak gaat duren?`
            },
            {
              'clicked': false,
              'document': `Activiteiten planning`,
              'beschrijving': `Maak van de taken die je hebt toegewezen gekregen in een planningstool
              (liefst die op jouw stage wordt gebruikt), een onderverdeling in subtaken. Geef hierbij per subtaak aan:
              <ul>
                <li> titel</li>
                <li> omschrijving </li>
                <li> prioriteit </li>
                <li> opvolging </li>
                <li> geschatte tijdsduur</li>
              </ul>
              Maak screenshots van de gemaakte projectplanning en geef daar waar nodig uitleg bij de gemaakte screenshots.
              `

            }

          ]
        },
        {
          kt: 1,
          wp: '1.3',
          naam: 'Levert een bijdrage aan het ontwerp',
          beschrijving: `In deze opdracht laat je zien dat je een bijdrage kan leveren aan de totstandkoming
                        van het design van een (web)applicatie. Denk hierbij aan het maken van layout
                        prototypes, responsive designs, kleurgebruik, lettertypes.
                        Je kunt echter ook ervoor kiezen om een deel van technische kant van een applicatie
                        te designen. Denk hierbij aan het maken van UML diagrammen (klassendiagram, sequentiediagram)
                        die de interne werking van de applicatie verduidelijkt. Daarnaast kun je ook denken aan
                        een schets voor het structureren van (een deel van) de data in een database, dmv een ERD.
                       `,
          resultaat: `Een product wat laat zien dat je een bijdrage hebt geleverd aan het functioneel of technisch
                      ontwerp van een applicatie. Dit kunnen prototypes zijn, diagrammen, schetsen of moodboards.
                      Deze producten zijn gepresenteerd aan de opdrachtgever of jouw projectteam.`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Functioneel ontwerp',
              'beschrijving': `
                <p> Je gaat voor de te bouwen applicatie een (deel van) een functioneel ontwerp maken. Dit betekent
                dat er verschillende documenten opgeleverd moeten worden die behoren bij een functioneel ontwerp. Een
                functioneel ontwerp zijn alle ontwerpen of diagrammen waarin de functionaliteit van (een deel van) een
                applicatie wordt beschreven. Over het algemeen zijn dit ontwerpen die als discussie materiaal dienen bij
                de communicatie met een opdrachtgever. <p>
                <p> Voor deze opdracht ga je onderstaande onderdelen van een functioneel
                ontwerp uitvoeren. </p>
                <p> Onderdelen van een functioneel ontwerp </p>
                <ul>
                  <li> (digitale) gedetailleerde schetsen/prototypes van de te maken schermen</li>
                  <li> UML Use Case Diagram inclusief Use Case Templates </li>
                </ul>
              `
            },
            {
              'clicked': false,
              'document': `Technisch ontwerp`,
              'beschrijving': `
                <p> Je gaat voor de te bouwen applicatie een (deel van) een technisch ontwerp maken. Voor het maken
                van een technisch ontwerp kun je gebruik maken van onderstaande documenten en diagrammen die het
                technische aspect van de te ontwikkelen applicatie laat zien, zoals hoe de data in de database
                gestructureerd kan gaan worden, welke klassen er ontwikkelt moeten worden of wat de code flow is van
                complexere use-cases. </p>
                <p>
                Deze documenten en diagrammen worden met name gebruikt als leidraad voor de ontwikkelaars om te
                bepalen hoe de applicatie gebouwd gaat worden en worden meestal niet gebruikt om richting de
                opdrachtgever te communiceren, omdat technische kennis voor deze documenten vereist is.
                </p>
                <p> Voor deze opdracht ga je voor de te bouwen applicatie onderstaande onderdelen van een technisch
                ontwerp uitvoeren. </p>
                <ul>
                  <li> Database diagram van de te gebruiken data. </li>
                  <li> (bijgehouden) UML Klassendiagram van de te maken applicatie </li>
                  <li> UML sequentiediagram van één van de use cases binnen het project </li>
                </ul>
              `
            }

          ]
        },
        {
          kt: 1,
          wp: '1.4',
          naam: 'Bereidt de realisatie voor',
          beschrijving: `Ga voor een opdracht of project na wat je als ontwikkelomgeving
                        nodig denkt te hebben en maak hiervan documentatie. Is het bijvoorbeeld
                        in een wordpress omgeving, geef dan evt aan welke wordpress versie, welke starters thema er gebruikt
                        wordt en welke plugins gebruikt gaan worden. Wordt er gebruik gemaakt van front-end- en/of
                        back-end frameworks? Als je gebruik maakt van een package manager
                        zoals NPM of composer, geef dan aan welke packages en versies er gebruikt worden of
                        maak een goede documentatie in het daarbij behorende config bestand. Geef aan welke
                        softwaretools je nog meer nodig hebt om de opdracht af te ronden, zoals photoshop of
                        een videobewerker. Welke minimale systeemeisen heb je nodig voor de opdracht? Hoe zit het
                        met versiebeheer? ga je een git repository maken? heb je al plannen voor deployment?
                        op welke server gaat de applicatie draaien en wat zijn daar de configuraties van?`,
          resultaat: `Maak een handleiding voor jezelf en/of eventuele collega's waarin de benodigdheden
                      voor het bouwen van de applicatie staat gedocumenteerd. Het document moet zodanig opgebouwd
                      worden dat een collega in korte tijd dezelfde ontwikkelomgeving klaar heeft staan, inclusief
                      de juiste configuraties. De vorm hiervan kan een word-document zijn of een readme.md bestand waarin
                      stapsgewijs vermeld staat hoe de ontwikkelomgeving ingericht kan worden. Maak hierbij gebruik van
                      handigheidjes die je eventueel al kent, zoals bijvoorbeeld een goed ingerichte package.json bestand.`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Software lijst',
              'beschrijving':
              `
                Maak een overzicht van alle software die gebruikt gaat worden om de applicatie te realiseren. Maak onderscheid
                tussen wat een must is voor de applicatie en wat geadviseerd wordt om mee te werken. Geef per software item
                kort een beschrijving mee. Geef ook de versienummers aan van de te gebruiken software. Denk op het gebied van software
                dus ook aan Visual Studio extensies, Javascript/jQuery plugins, frameworks, cms systemen, plugins van cms systemen,
                welke software er gebruikt wordt om designs en diagrammen te gebruiken e.d.
              `
            },
            {
              'clicked': false,
              'document': '',
              'beschrijving': `

              `
            }
          ]
        },
        {
          kt: 2,
          wp: '2.1',
          naam: 'Realiseert (onderdelen van) een product',
          beschrijving: ``,
          resultaat: ``
        },
        {
          kt: 2,
          wp: '2.2',
          naam: 'Test het ontwikkelde product',
          beschrijving: ``,
          resultaat: ``
        },
        {
          kt: 3,
          wp: '3.1',
          naam: 'Optimaliseert het product',
          beschrijving: ``,
          resultaat: ``
        },
        {
          kt: 3,
          wp: '3.2',
          naam: 'Levert het product op',
          beschrijving: ``,
          resultaat: ``
        },
        {
          kt: 3,
          wp: '3.3',
          naam: 'Evalueert het opgeleverde product',
          beschrijving: ``,
          resultaat: ``
        },
        {
          kt: 4,
          wp: '4.1',
          naam: 'Onderhoudt een applicatie',
          beschrijving: ``,
          resultaat: ``
        },
        {
          kt: 4,
          wp: '4.2',
          naam: 'Beheert gegevens',
          beschrijving: ``,
          resultaat: ``
        }
      ],
      activeOpdracht: []
    }
  },

  methods: {
    setActive: function (opdracht) {
      this.activeOpdracht = opdracht
      this.modalOpen = true
    }
  }
}
</script>


<style scoped>


.boards {
  padding:40px 0;
}

.boards .board .box.is-gray {
  background-color: #F5F5F5;
}

.boards .board .box .items {
  padding: 20px 0;
}

.box .head .name {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #2C2C30;
}

.box .head .count {
  display: inline-block;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #AAAAAA;
}

.box .head .options {
  display: inline-block;
  float: right;
  padding-top:7px;
  color: #CCCCCC;
}

.items .box .title {
  font-size: 19px;
}

.items .box .meta img {
  border-radius: 30px;
  margin-right: 10px;
}

.items .box .meta .fa {
  margin: 3px 7px;
  color: #CCCCCC;
}

.items .add-card div {
  color: #AAAAAA;
  font-weight: bold;
  font-size: 16px;
}

.sub-title {
  height: 45px;
}

.panel-block {
  display: block;

}

.panel-block p {
  margin-bottom: 0px;
  padding: 10px;
}

.panel-block>p:hover {
  background: #eee;
  cursor: pointer;
}
</style>