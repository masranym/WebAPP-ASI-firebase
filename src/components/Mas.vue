<template>
 <!DOCTYPE html>
<html>
<head>
  <title>Vuetify Parallax Starter</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
</head>
<body>
 <div id="app">
   <v-app light>
    <v-content>
      <section>
        <v-card-media src="https://firebasestorage.googleapis.com/v0/b/fir-2a108.appspot.com/o/Muslim_OnTour-157.jpg?alt=media&token=40ca2a3e-4b4d-44dc-abe9-a5bd44228d0e" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="black--text"
          >
            <h1 class="black--text mb-2 display-1 text-xs-center">welcome to my profile</h1>
            <div class="subheading mb-3 text-xs-center">Masran Yaming CoE#14</div>
          </v-layout>
        </v-card-media>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">About me</h2>
              <span class="subheading">
                Student Id 5835512083
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">list</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Story</div>
                    </v-card-title>
                    <v-card-text>
                      My name is Masran Yaming. I can use that skill and continue to development my analytical skill and knowledge. I am hard worker and always learn faster.I have a responsibilityin duty assigned and i have a leader.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">edit</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Education </div>
                    </v-card-title>
                    <v-card-text class="text-md-center">
                     Prince of songkla university 2014 - 2018                    
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">computer</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Liking</div>
                    </v-card-title>
                    <v-card-text>
                     My passion for Application and web developer began when I was young, and I have developed my skills since then. I have create application projects for convenience in daily life.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-card-media src="
https://firebasestorage.googleapis.com/v0/b/fir-2a108.appspot.com/o/Muslim_OnTour-234.jpg?alt=media&token=49811c08-5b4d-407e-bd81-49cbfbf1fc1c" height="380">
          <v-layout column align-center justify-center>
            <div class="headline black--text mb-3 text-xs-center">Somtimes you need to fall before you can fly.</div>
            <em>" บางครั้งคุณจำเป็นต้องล้มก่อนที่จะลุก "</em>
          </v-layout>
        </v-card-media>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">S K I L L S</div>
                </v-card-title>
                <v-card-text>
                  C ,   JavaScript ,  HTML ,   Java ,   Photoshop , Lightroom
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile >
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title >097-3530088</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Budi , Yala</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>mr.masym@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

    </v-content>
  </v-app>
 </div>
</body>
</html>
</template>