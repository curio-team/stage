<template>
  <div class="root-element content">
    <h1> Stagekaarten</h1>
    <div class="notification is-info" style="font-weight: bold">
    Voor iedere stagekaart maak je gebruik van de "stagekaart template", te vinden onder "downloads"
    </div>
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
                  <p>Werkproces {{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>
                  <p class="meta">
                    <button @click="setActive(opdracht)" class="button is-info"> <i class="fa fa-eye"></i> Open stagekaart  </button>
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
                  <p>Werkproces {{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>

                  <p class="meta">
                    <button  @click="setActive(opdracht)" class="button is-info"><i class="fa fa-eye"></i> Open stagekaart  </button>
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
                  <p>Werkproces {{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>

                  <p class="meta">
                    <button @click="setActive(opdracht)"  class="button is-info"><i class="fa fa-eye"></i> Open stagekaart  </button>
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
              <div class="name">Profieldeel 1</div>
              <h4>Beheer en Optimalisatie</h4>
              <p class="sub-title">Onderhoudt en beheert de applicatie.</p>
            </div>
            <div class="items">
              <div class="box" id="b4c1" v-if="opdracht.kt == 4" v-for="opdracht in opdrachten">
                  <p>Werkproces {{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>

                  <p class="meta">
                    <button @click="setActive(opdracht)"  class="button is-info"><i class="fa fa-eye"></i> Open stagekaart  </button>
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


          <h3>Op te leveren documenten</h3>
          <nav class="panel">

            <div v-if="activeOpdracht.oplevering">
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
            </div>
            <div v-else> Momenteel geen opdrachten beschikbaar </div>



          </nav>

          <h3>Resultaat</h3>
          <p v-html="activeOpdracht.resultaat"> </p>

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
          beschrijving: `Je gaat op basis van een gekregen (deel)opdracht na wat je als ontwikkelomgeving
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
          resultaat: `Een handleiding voor jezelf en/of eventuele collega's waarin de benodigdheden
                      voor het bouwen van de applicatie staan gedocumenteerd. Het document is zodanig opgebouwd
                      dat een collega in korte tijd dezelfde ontwikkelomgeving klaar heeft staan, inclusief
                      de juiste configuraties. De vorm hiervan is een word-document zijn of een readme.md bestand waarin
                      stapsgewijs vermeld staat hoe de ontwikkelomgeving ingericht wordt. Hierbij is gebruik van
                      handigheidjes die je eventueel al kent, zoals bijvoorbeeld een goed ingerichte package.json bestand.`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Ontwikkelomgeving op stage',
              'beschrijving':
              `
                Beschrijf (in een half a4tje) wat je allemaal hebt moeten installeren en moeten configureren om bij jouw
                stageplaats optimaal aan de slag te kunnen gaan met ontwikkeling. Welke online accounts heb je moeten aanmaken,
                welke software heb je moeten installeren? Wellicht maakt je stage gebruik van containerization zoals docker?
              `
            },
            {
              'clicked': false,
              'document': 'Development requirements',
              'beschrijving':
              `
                Maak een overzicht van alle software en eventuele hardware die gebruikt gaat worden om de applicatie te realiseren. Maak onderscheid
                tussen wat een must is voor de applicatie en wat geadviseerd wordt om mee te werken. Geef per item
                kort een beschrijving mee. Geef ook de versienummers aan van de te gebruiken software. Denk op het gebied van software
                dus ook aan Visual Studio extensies, Javascript/jQuery plugins, frameworks, cms systemen, plugins van cms systemen,
                welke software er gebruikt wordt om designs en diagrammen te gebruiken e.d.
              `
            },
            {
              'clicked': false,
              'document': 'Realiseren ontwikkelomgeving',
              'beschrijving': `
                Je gaat een <a href="https://nl.wikipedia.org/wiki/Procedure"> procedure </a> maken die beschrijft hoe een ontwikkelomgeving ingericht dient te worden. Dit is handig voor als
                een collega developer snel aan de gang kan gaan met het project. Denk bij de procedure ook na over versiebeheer, en wat daarvoor
                lokaal ingesteld moet worden. Geef aan wat en op welke manier de software geïnstalleerd moet worden. Hoe dient de datastructuur lokaal opgezet te worden?
              `
            }
          ]
        },
        {
          kt: 2,
          wp: '2.1',
          naam: 'Realiseert (onderdelen van) een product',
          beschrijving: `
            Je gaat een (onderdeel) van een systeem ontwikkelen, gebruikmakend van gekregen of onderzochte informatie, zoals
            een interview met klant, of functioneel / technisc ontwerp. Dit kan een uitbreiding van functionaliteiten van een bestaande applicatie
            zijn, of een geheel nieuwe applicatie. Je respecteert daarbij de regels van het bedrijf waar je stage loopt op het gebied
            van het schrijven van code. Er wordt gewerkt met versiebeheer en geregeld worden er commits uitgevoerd. Deze commits zijn
            helder in de beschrijving en dienen zodoende als logboek voor het ontwikkelproces. De programmeertaal, conventies, versiebeheer en ontwikkelplatform worden daarbij in het oog gehouden. Je vraagt hierbij geregeld
            collega's om feedback te geven op je werk. Tijdens de realisatie heb je geregeld contactmomenten met je stagebegeleider
            of opdrachtgever.
          `,
          resultaat: `
            Een gebouwde (deel van) applicatie, goedgekeurd door jouw stagebegeleider en eventueel opdrachtgever. De applicatie hoeft
            nog niet geïmplementeerd te zijn op de omgeving van de klant. De code is volgens de normen van het stagebedrijf geschreven
            en goedgekeurd. De applicatie is binnen de gestelde tijd welke vooraf is vastgelegd door jouw stagebegeleider, afgerond.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': 'Ontwikkelverslag',
              'beschrijving': `
                Je gaat van (een gedeelte) wat je hebt gebouwd, een verslag maken. Je gaat screenshots maken van de front-end, en screenshots van de opgeleverde
                back-end code maken. Bij deze screenshots geef je duidelijke uitleg over wat er te zien is in de code/screenshots.
                Deze screenshots maak je met name van de opgeleverde stukken waar je trots op bent dat je dit hebt ontwikkeld.
              `
            },
            {
              'clicked': false,
              'document': 'Git Log',
              'beschrijving': `
                Je levert een document op waarin op een mooie overzichtelijke manier jouw commits te zien zijn.
                Daarbij is het belangrijk dat er per commit een datum, duidelijke titel, en eventuele beschrijving te zien is.
                Het resultaat is een logboek van de gemaakte code die jij hebt geschreven. Hierbij is het dus belangrijk dat je
                commit titels heel specifiek zijn voor de veranderingen die je in die commit hebt gedaan.
              `
            },
            {
              'clicked': false,
              'document': 'Reflectie rapport',
              'beschrijving': `
                Je schrijft (ca. 1 a4) een reflectie over de gerealiseerde applicatie. Welk aspect binnen het bouwen van de applicatie vond je lastig?
                Hoe kwam dat? Wat vond je van je eigen communicatie richting jouw collega's / opdrachtgever? Had je vaker hulp moeten vragen denk je?
                Als je eenzelfde applicatie nog eens zou bouwen, welke zaken had je nu dan anders aangepakt?
                Kwam de planning van je werkzaamheden overeen met de werkelijkheid? Zo niet, hoe kwam dit? Hoe heeft het ontwikkelen van deze applicatie
                er voor gezorgd dat je een betere ontwikkelaar bent geworden?
              `
            }
          ]
        },
        {
          kt: 2,
          wp: '2.2',
          naam: 'Test het ontwikkelde product',
          beschrijving: `
            Je bent gedurende het ontwikkelproces continu bezig met het testen van (onderdelen van) je applicatie. Je maakt gebruik van
            verschillende test-tools om er zeker van te zijn dat de applicatie goed werkt. Denk bijvoorbeeld aan Javascript linters, HTML
            validators, breakpoints in Visual Studio. Misschien ben je zelfs al bezig geweest met Unit Testing? Je stelt voordat je de applicatie gaat bouwen al een
            test op die na het bouwen (dus na realisatie, voor de oplevering) uitgevoerd wordt. Bij een (web)applicatie test je of de applicatie
            goed werkt op verschillende browsers, en of de site responsive is. Je test of eventuele berekeningen die gebruikt worden in de
            applicatie ook daadwerkelijk het goede resultaat geeft. Je checkt of de output klopt door data te loggen naar een logbestand, de console, of tijdelijk
            in de applicatie zelf. Je test of de zoekfuncties in de applicatie naar behoren werken. Je test of de routes van
            de applicatie juist zijn, je test of de data die in de applicatie als input wordt gegeven, op de juiste manier wordt afgehandeld. Je test of de sql queries correct
            zijn. Tijdens het testen zorg je er voor dat je voldoende (dummy) data hebt om zo realistisch mogelijk te testen. Daarnaast test je of alle vooraf vastgestelde
            requirements voor de applicatie gebouwd zijn en naar behoren werken.
          `,
          resultaat: `
            Een applicatie die zonder bugs of gebrek aan functionaliteiten klaar staat om te worden opgeleverd. Er zijn testrapporten
            opgesteld en uitgevoerd om zeker te weten dat de applicatie kwalitatief in orde is. Een collega developer heeft een door jou opgestelde
            functionele test uitgevoerd voor de applicatie. Er zijn verbetervoorstellen gemaakt om de applicatie te optimaliseren.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Testverslag`,
              'beschrijving': `
                Je beschrijft in verslagvorm (screenshots inclusief uitleg) hoe je tijdens het ontwikkelen aan de slag bent gegaan
                met testen. Wat heb je allemaal gebruikt om te testen en waarom? Noteer welke tools je hebt gebruikt om te testen, en laat
                met screenshots zien hoe je die tools hebt gebruikt.
              `
            },
            {
              'clicked': false,
              'document': `Uitgevoerde test`,
              'beschrijving': `
                Je levert een testrapport in waarin technische en functionele aspecten van de site zijn getest, liefst door een collega-developer.
                Het testrapport voldoet aan de eisen die je vanuit de opleiding hebt geleerd en je tijdens projecten al hebt moeten uitvoeren.
              `
            },
            {
              'clicked': false,
              'document': 'Verbetervoorstel',
              'beschrijving': `
                Aan de hand van de uitgevoerde test ga je conclusies trekken. Deze conclusies ga je vervolgens uitwerken tot een verbetervoorstel.
                Wellicht werk je met Github waar je issues kan melden in de repository. De verbetervoorstellen zijn realistisch en nog te verwerken
                in de applicatie voor de echte oplevering.
              `
            }
          ]
        },
        {
          kt: 3,
          wp: '3.1',
          naam: 'Optimaliseert het product',
          beschrijving: `
            Je gaat aan de hand van de verbetervoorstellen een nieuwe ontwikkelronde beginnen waarin je de verbetervoorstellen verwerkt.
            Aan het eind van deze fase bepaal je of de applicatie ook daadwerkelijk is verbeterd ten opzichte van de situatie hiervoor. Je
            maakt een acceptatietest voor de opdrachtgever, en ondersteunt deze in het uitvoeren van deze acceptatietest. Je maakt hierbij
            aantekeningen van de op/aanmerkingen van de opdrachtgever. Eventuele op/aanmerkingen in het gebruik van de applicatie worden nog
            verwerkt voordat de implementatie van start gaat.
          `,
          resultaat: `
            Een door de opdrachtgever geteste en goedgekeurde applicatie. Waar nodig is de al gemaakte documentatie bijgewerkt zodat
            deze up to date is. De applicatie is nu gereed om op de omgeving van de klant gezet te worden.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Optimalisatie verslag`,
              'beschrijving': `Je gaat in verslagvorm aangeven hoe je de verbetervoorstellen uit een al ontwikkelde situatie in de applicatie
              weet te verwerken. Maak hierbij gebruik van screenshots van de code en layout wat je hebt aangepast en geef hierbij uitleg. Geef hierbij
              duidelijk (meetbaar!) aan wat nu de verbetering is ten opzichte van de vorige situatie.
              `
            },
            {
              'clicked': false,
              'document': `Uitgevoerde acceptatietest`,
              'beschrijving': `Je gaat een acceptatie test maken volgens de eisen die je kent van je opleiding en laat deze
              uitvoeren door de opdrachtgever. Je ondersteunt daarbij de opdrachtgever en je maakt notities van de op/aanmerkingen
              van de klant tijdens de acceptatietest.`
            }
          ]
        },
        {
          kt: 3,
          wp: '3.2',
          naam: 'Levert het product op',
          beschrijving: `
            Je levert nadat de laatste testactiviteiten zijn afgerond je product af aan de klant of projectleider. Dit doe je volgens de afspraken die
            je hebt binnen jouw stagebedrijf. Wellicht heeft jouw stagebedrijf namelijk een vast proces als het gaat om het opleveren van een
            applicatie naar de klant. De ontwikkelaar levert een bijdrage aan de presentatie van de applicatie richting de klant of projectleider. Immers,
            niet overal wordt een ontwikkelaar direct in communicatie met een klant gesteld. Er wordt om een goedkeuring gevraagd richting de projectleider, stagebegeleider of klant.
          `,
          resultaat: `
            De applicatie is (door de opdrachtgever of projectleider) goedgekeurd en opgeleverd aan de klant, en de klant heeft nu toegang tot het gebruik van de applicatie.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': 'Implementatie',
              'beschrijving': `
                <h3>Maak een keuze:</h3>

                <h4> Implementatieplan </h4>
                <small><i> Als je zelf de implementatie verzorgt</i> </small>
                <p>
                  Je gaat een plan schrijven om de gebouwde applicatie op een optimale wijze te implementeren op de omgeving van de klant.
                  In het implementatieplan komen de volgende aspecten uitgebreid aan bod:
                  <ul>
                    <li> Tijdstip implementatie </li>
                    <li> Communicatie met betrokkenen </li>
                    <li> Wijze van bestandsoverdracht </li>
                    <li> Serverconfiguratie </li>
                    <li> Wijze van database migratie </li>
                    <li> Trainingen in applicatie </li>
                    <li> Eventuele inzet social media </li>
                  </ul>
                </p>
                <br>
                <h4> Implementatieverslag </h4>
                <small><i> als je niet zelf de implementatie verzorgt </i> </small>
                <p>
                Je gaat het proces van implementatie binnen jouw stagebedrijf uitgebreid beschrijven. Je maakt hierbij gebruik van afbeeldingen en
                beschrijvingen. Wordt er bijvoorbeeld gebruik gemaakt van continuous integration d.m.v. Jenkins? Wordt er gebruik gemaakt van Git om verschillende stages van oplevering te hebben?
                Maakt jouw stagebedrijf gebruik van OTAP? Hoe wordt eventuele bestaande data van de klant overgezet naar de nieuwe applicatie?
                Mocht je tijdens je stageplaats over implementatie niet veel mee kunnen krijgen om wat voor reden dan ook, kun je altijd een collega of
                je stagebegeleider interviewen om informatie hierover te achterhalen.
                </p>
              `
            }
          ]
        },
        {
          kt: 3,
          wp: '3.3',
          naam: 'Evalueert het opgeleverde product',
          beschrijving: `
            Je gaat de oplevering aan de hand van het oplever formulier bespreken met je opdrachtgever/leidinggevende/stagebegeleider.
            Je gaat samen met hen na wat er goed is gegaan en waar verbeterpunten liggen over het hele proces.
          `,
          resultaat: `
            Het opgeleverde product is geëvalueerd en je hebt voor jezelf doelstellingen opgelegd waar je bij je volgende ontwikkel klus
            rekening mee kan houden.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Evaluatieformulier`,
              'beschrijving': `Maak een evaluatieformulier die ingevuld wordt door je opdrachtgever waarin verschillende punten van de oplevering
              van de applicatie in naar boven komen. Stel minimaal 10 vragen op die je graag beantwoord zou willen zien. Een aantal voorbeelden zijn: "Wat vond je van het aantal
              contactmomenten die we hebben gehad tijdens het ontwikkelen en opleveren van de applicatie?" en "Hoe waardeer je de kwaliteit van de opgeleverde applicatie?"`
            },
            {
              'clicked': false,
              'document': `Reflectieverslag`,
              'beschrijving': `Maak op basis van het gesprek met je opdrachtgever/stagebegeleider een reflectieverslag waarin je terugkijkt
              op de volgende items:
              <ul>
                <li> (Ondersteuning bij) de acceptatie test </li>
                <li> De presentatie richting opdrachtgever/klant </li>
                <li> Eventueel de ondersteuning bij de implementatie </li>
              </ul>
              Per item geef je antwoord op de volgende vragen: Heb ik me voldoende voorbereid voor deze taak? Wat waren knelpunten
              bij het uitvoeren van deze taak? Wat zou je een volgende keer anders doen?
              `
            }

          ]
        },
        {
          kt: 4,
          wp: 'P 1.1',
          naam: 'Onderhoudt een applicatie',
          beschrijving: `Tijdens je stage komen er vast meldingen van bestaande klanten die support nodig hebben in het
          gebruik van hun applicatie. Je handelt eventuele incident meldingen professioneel af volgens de richtlijnen van jouw stagebedrijf.
          Eventuele aanpassingen van de applicatie worden op een professionele manier uitgevoerd volgens de gangbare richtlijnen van jouw stagebedrijf. Daarnaast worden deze aanpassingen
          getoetst of deze doorgevoerd kunnen worden zonder dat er andere systeemkritieke werkingen in gevaar komen. Ook toets je
          altijd of de aangevraagde aanpassing in lijn ligt met de geldende afspraken met deze klant.`,
          resultaat: `
            Incidentmeldingen m.b.t. de applicatie (vragen, bugs, aanpassingsverzoeken) worden op correcte manier afgehandeld.
          `
        },
        {
          kt: 4,
          wp: 'P 1.2',
          naam: 'Beheert gegevens',
          beschrijving: `Gedurende je stage bouw je (mee aan) verschillende applicaties. Van alles wat je hebt gemaakt en beheert is het
          belangrijk dat de daarvoor benodigde data (denk aan inloggegevens, databasegegevens, specificaties, git repository e.d.) op een gestructureerde wijze
          beschikbaar is en niet onvindbaar is op het moment dat jij met je stage stopt. Ook is het belangrijk dat alle gemaakte wijzigingen binnen een applicatie
          dmv versiebeheer (git) wordt bijgehouden.`,
          resultaat: `
            Het stagebedrijf heeft alle documentatie en data met betrekking tot de door jouw gebouwde en beheerde applicaties tot zijn beschikking
            en kan hierin snel zijn weg vinden.
          `
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