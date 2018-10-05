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
        <v-card-media src="https://firebasestorage.googleapis.com/v0/b/fir-2a108.appspot.com/o/43201638_428764240862187_8288950950412943360_n.jpg?alt=media&token=59a2665e-3096-44d4-817d-59cfacaa993f" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Computer Engineer</h1>
            <div class="subheading mb-3 text-xs-center">Riduwan Sooleah</div>
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
              <h2 class="headline">เกี่ยวกับฉัน</h2>
              <span class="subheading">
                มารู้จักฉันให้มากกว่าเดิมกันเถอะ
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">book</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">ประวัติส่วนตัว</div>
                    </v-card-title>
                    <v-card-text>
                      ชื่อนายรีดูวัน ซูและ (ริด)
                      เกิดเมื่อวันที่ 9 มิถุนายน 2539
                      ที่อยู่บ้านเลขที่ 130/1 ม.5 ต.ปะลุกาสาเมาะ อ.บาเจาะ จ.นราธิวาส 96710
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">book</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">ประวัติการศึกษา </div>
                    </v-card-title>
                    <v-card-text>
                      ช่วงมัธยมศึกษาปี 1-3 23  ตำบลบาเจาะ อำเภอบาเจาะ จังหวัดนราธิวาส รหัสไปรษณีย์ 9ุ6170
                      ช่วงมัธยมศึกษาปี 4-6 265 ท่าเสด็จ ตำบลตะลุบัน อำเภอสายบุรี จังหวัดปัตตานี รหัสไปรษณีย์ 94110  
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">book</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">ปัจจุบันกำลังศึกษา</div>
                    </v-card-title>
                    <v-card-text>
                      มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต.คณะวิศวกรรมศาสตร์ สาขา วิศวกรรมคอมพิวเตอร์ ตั้งอยู่เลขที่ 80 หมู่ 1 ถนนวิชิตสงคราม ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต 83120
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-card-media src="https://firebasestorage.googleapis.com/v0/b/fir-2a108.appspot.com/o/43145774_542374836206930_3085229447150829568_n.jpg?alt=media&token=2abb15fa-3625-4434-8c90-8831cd8c885e" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">คติประจำใจ</div>
            <em class=" white--text ">" เดินหน้าต่อไป อนาคตอยู่ข้างหน้า"</em>
          </v-layout>
        </v-card-media>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">ความชอบส่วนตัว</div>
                </v-card-title>
                <v-card-text>
                  Design Graphic ออกแบบงานโพสเตอร์ งานไวนิล logo และtemplateต่างๆ 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">ติดต่อสอบถามเพิ่มเติมได้ที่</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>0925105863</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>บาเจาะ, นราธิวาส</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>s5835512044@phuket.psu.ac.th</v-list-tile-title>
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