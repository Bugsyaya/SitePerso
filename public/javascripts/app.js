var app = angular.module("myScrollBar", ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    ABOUTMEINDEX : 'About me',
    SCHOOLPROJECT : 'School project',
    DRAW : 'Draw',
    DEVWEB : 'Web developer',
    TEST : '<p>Welcome to my website !<br><br></p>' + 
            '<p>I\'m currently a student in Computer Science in Nantes.<br/><br/>' +
            'Next semptember I will follow the training <a href="">Concepteur développeur</a> at ENI in Nantes.<br/><br/>' +
            'You can find my <a href="/cv">CV</a> and some <a href="/projetEtude">projects</a> make in school. One part are my <a href="/dessinTravauxManuels">draw</a>.<br/><br/></p>'+
            '<p class="center">If you have any questions, don\'t hesitate to <a href="mailto:marina.blin@@free.fr">contact</a> me !<br/><br/></p><p class="right">Have a good visit !</p>',
    PRICE: 'Price',
    SYMBOL : "$",
    PUBO : 'Yes',
    PUBN : 'No',
    PUBLICITE: 'Ads',
    SERVER: 'Server',
    SERVERS: 'server',
    SERVERP: 'servers',
    TITRE: 'Slider',
    BUTTON_LANG_EN : "English",
    BUTTON_LANG_FR : "French"
  });
  $translateProvider.translations('fr', {
    ABOUTMEINDEX : 'A propos de moi',
    SCHOOLPROJECT : 'Projets d\'étude',
    DRAW : 'Dessin',
    DEVWEB : 'Développeur web',
    TEST : '<p>Bienvenue sur mon site !<br><br></p>' + 
            '<p>Je suis actuellement en licence professionel SIL en alternance à l\'IUT de Nantes.<br/><br/>' +
            'A la prochaine rentrée je suivrai la formation <a href="">Concepteur développeur</a> en alternance à l\'ENI de Nantes.<br/><br/>' +
            'Vous trouverez mon <a href="/cv">CV</a> ainsi que différents <a href="/projetEtude">projets</a> réalisés durant mes études. Une partie de mon site est entièrement consacrée à ma passion pour le <a href="/dessinTravauxManuels">dessin</a>.<br/><br/></p>'+
            '<p class="center">Pour toute question, n\'hésitez pas à me <a href="mailto:marina.blin@@free.fr">contacter</a> !<br/><br/></p><p class="right">Bonne visite à tous !</p>',
    PRICE: 'Prix',
    SYMBOL : "€",
    PUBO : 'Oui',
    PUBN : 'Non',
    PUBLICITE: 'Publicite',
    SERVER: 'Serveur',
    SERVERS: 'serveur',
    SERVERP: 'serveurs',
    TITRE: 'Curseur',
    BUTTON_LANG_EN : "Anglais",
    BUTTON_LANG_FR : "Francais"
  });
  $translateProvider.preferredLanguage('fr');
//  $translateProvider.useMessageFormatInterpolation(); // à ajouter
}); 