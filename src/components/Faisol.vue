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
        <v-card-media src="https://firebasestorage.googleapis.com/v0/b/fir-2a108.appspot.com/o/17434557_1193445314111151_273850217299413123_o.jpg?alt=media&token=d32cec72-a7af-4baf-9100-40a6467ca058" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">ประวัติส่วนตัวของฉัน</h1>
            <div class="subheading mb-3 text-xs-center">ไฟศอล หะยี รหัส 5735512151 CoE</div>
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
                      ชื่อนายไฟศอล หะยี (ศอล)
                      เกิดเมื่อวันที่ 13 พฤษจิกายน 2538
                      ที่อยู่บ้านเลขที่ 92/1 ม.6 ต.ตันหยงมัส อ.ระแงะ จ.นราธิวาส 96130
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
                      ช่วงมัธยมศึกษาปี 1-6 
                      โรงเรียนนราธิวาส.ตั้งอยู่เลขที่ 143/45 หมู่ที่ 13 ถนน โคกเคียน ตำบลโคกเคียน อำเภอเมือง จังหวัดนราธิวาส รหัสไปรษณีย์ 96000 สังกัดสำนักงานเขตพื้นที่การศึกษามัธยมศึกษา เขต 15
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
        <v-card-media src="https://firebasestorage.googleapis.com/v0/b/fir-2a108.appspot.com/o/15727186_1104369753018708_1430189975782241193_n.jpg?alt=media&token=e0f069f4-da45-4522-a56c-ad4b9c698c88" height="380">
          <v-layout column align-center justify-center >
            <div class="headline white--text mb-3 text-xs-center">คติประจำใจ</div>
            <em class=" white--text">" ชีวิต คือ การดิ้นรนสู่ชัยชนะ "</em>
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
                  ออกแบบโปสเตอร์ ร่วมกับ Youcare เพื่อตอบคำถามปัญหาคาใจของผู้ถามจากหลายๆระดับในสังคมเพื่อร่วมกันแก้ไขและช่วยเหลือในการแก้ปัญหาไปด้วยกัน เพราะ "เราคือพี่น้องกัน 
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
                      <v-list-tile-title>093-732-0604</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>ตันหยังมัส, นราธิวาส</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>faisolhayee135@gmail.com.com</v-list-tile-title>
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