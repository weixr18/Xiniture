<template>
  <div class="info">
    <div class="background" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
      <div class="wrapper">
        <ul class="wrapper-ul">
          <ul>
            <li>
              <h1>Your Infomation</h1>
            </li>
          </ul>
          <ul>
            <li>Age</li>
            <li>
              <el-select v-model="ageValue" placeholder="请选择">
                <el-option
                  v-for="item in ages"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </li>
          </ul>
          <ul>
            <li>Country or District</li>
            <li>
              <el-select v-model="countryValue" placeholder="请选择">
                <el-option
                  v-for="item in countries"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </li>
          </ul>
          <ul>
            <li>
              <el-button type="primary" @click="go">Start Game</el-button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";

export default {
  name: "Info",
  data() {
    return {
      bg: require("../assets/images/Riot1.jpg"),
      ages: [
        { value: "<18", lable: "<18" },
        { value: 18, lable: 18 },
        { value: 19, lable: 19 },
        { value: 20, lable: 20 },
        { value: 21, lable: 21 },
        { value: 22, lable: 22 },
        { value: 23, lable: 23 },
        { value: 24, lable: 24 },
        { value: 25, lable: 25 },
        { value: 26, lable: 26 },
        { value: 27, lable: 27 },
        { value: 28, lable: 28 },
        { value: 29, lable: 29 },
        { value: 30, lable: 30 },
        { value: 31, lable: 31 },
        { value: 32, lable: 32 },
        { value: 33, lable: 33 },
        { value: 34, lable: 34 },
        { value: 35, lable: 35 },
        { value: 36, lable: 36 },
        { value: 37, lable: 37 },
        { value: 38, lable: 38 },
        { value: 39, lable: 39 },
        { value: 40, lable: 40 },
        { value: 41, lable: 41 },
        { value: 42, lable: 42 },
        { value: 43, lable: 43 },
        { value: 44, lable: 44 },
        { value: 45, lable: 45 },
        { value: 46, lable: 46 },
        { value: 47, lable: 47 },
        { value: 48, lable: 48 },
        { value: 49, lable: 49 },
        { value: 50, lable: 50 },
        { value: 51, lable: 51 },
        { value: 52, lable: 52 },
        { value: 53, lable: 53 },
        { value: 54, lable: 54 },
        { value: 55, lable: 55 },
        { value: 56, lable: 56 },
        { value: 57, lable: 57 },
        { value: 58, lable: 58 },
        { value: 59, lable: 59 },
        { value: 60, lable: 60 },
        { value: ">60", lable: ">60" },
      ],
      ageValue: "",
      countries: [
        { value: "Abkhazia", label: "Abkhazia" },
        { value: "Afghanistan", label: "Afghanistan" },
        { value: "Aland Islands", label: "Aland Islands" },
        { value: "Albania", label: "Albania" },
        { value: "Algeria", label: "Algeria" },
        { value: "American Samoa", label: "American Samoa" },
        { value: "Andorra", label: "Andorra" },
        { value: "Angola", label: "Angola" },
        { value: "Anguilla", label: "Anguilla" },
        { value: "Antarctica", label: "Antarctica" },
        { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
        { value: "Argentina", label: "Argentina" },
        { value: "Armenia", label: "Armenia" },
        { value: "Aruba", label: "Aruba" },
        { value: "Ascension", label: "Ascension" },
        { value: "Australia", label: "Australia" },
        { value: "Austria", label: "Austria" },
        { value: "Azerbaijan", label: "Azerbaijan" },
        { value: "Bahamas", label: "Bahamas" },
        { value: "Bahrain", label: "Bahrain" },
        { value: "Bangladesh", label: "Bangladesh" },
        { value: "Barbados", label: "Barbados" },
        { value: "Belarus", label: "Belarus" },
        { value: "Belgium", label: "Belgium" },
        { value: "Belize", label: "Belize" },
        { value: "Benin", label: "Benin" },
        { value: "Bermuda", label: "Bermuda" },
        { value: "Bhutan", label: "Bhutan" },
        { value: "Bolivia", label: "Bolivia" },
        { value: "Bonaire", label: "Bonaire" },
        { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
        { value: "Botswana", label: "Botswana" },
        { value: "Brazil", label: "Brazil" },
        { value: "British Virgin Islands", label: "British Virgin Islands" },
        { value: "Brunei", label: "Brunei" },
        { value: "Bulgaria", label: "Bulgaria" },
        { value: "Burkina Faso", label: "Burkina Faso" },
        { value: "Burundi", label: "Burundi" },
        { value: "Cambodia", label: "Cambodia" },
        { value: "Cameroon", label: "Cameroon" },
        { value: "Canada", label: "Canada" },
        { value: "Cape Verde", label: "Cape Verde" },
        {
          value: "Central African Republic",
          label: "Central African Republic",
        },
        { value: "Cayman Islands", label: "Cayman Islands" },
        { value: "Chad", label: "Chad" },
        { value: "Chile", label: "Chile" },
        { value: "China", label: "China" },
        { value: "Christmas Island", label: "Christmas Island" },
        { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
        { value: "Colombia", label: "Colombia" },
        { value: "Comoros", label: "Comoros" },
        { value: "Cook Islands", label: "Cook Islands" },
        { value: "Costa Rica", label: "Costa Rica" },
        { value: "Croatia", label: "Croatia" },
        { value: "Cuba", label: "Cuba" },
        { value: "Curacao", label: "Curacao" },
        { value: "Cyprus", label: "Cyprus" },
        { value: "Czech Republic", label: "Czech Republic" },
        { value: "Denmark", label: "Denmark" },
        { value: "Djibouti", label: "Djibouti" },
        { value: "Dominica", label: "Dominica" },
        { value: "Dominican Republic", label: "Dominican Republic" },
        { value: "Donetsk`s Republic", label: "Donetsk`s Republic" },
        { value: "DR Congo", label: "DR Congo" },
        { value: "Ecuador", label: "Ecuador" },
        { value: "Egypt", label: "Egypt" },
        { value: "El Salvador", label: "El Salvador" },
        { value: "Equatorial Guinea", label: "Equatorial Guinea" },
        { value: "Eritrea", label: "Eritrea" },
        { value: "Estonia", label: "Estonia" },
        { value: "Ethiopia", label: "Ethiopia" },
        { value: "Falkland Islands", label: "Falkland Islands" },
        { value: "Faroe Islands", label: "Faroe Islands" },
        { value: "Fiji", label: "Fiji" },
        { value: "Finland", label: "Finland" },
        { value: "France", label: "France" },
        { value: "FS Micronesia", label: "FS Micronesia" },
        { value: "French Guiana", label: "French Guiana" },
        { value: "French Polynesia", label: "French Polynesia" },
        { value: "Gabon", label: "Gabon" },
        { value: "Gambia", label: "Gambia" },
        { value: "Georgia", label: "Georgia" },
        { value: "Germany", label: "Germany" },
        { value: "Ghana", label: "Ghana" },
        { value: "Gibraltar", label: "Gibraltar" },
        { value: "Greece", label: "Greece" },
        { value: "Greenland", label: "Greenland" },
        { value: "Grenada", label: "Grenada" },
        { value: "Guam", label: "Guam" },
        { value: "Guadalupe", label: "Guadalupe" },
        { value: "Guatemala", label: "Guatemala" },
        { value: "Guernsey", label: "Guernsey" },
        { value: "Guinea", label: "Guinea" },
        { value: "Guinea-Bissau", label: "Guinea-Bissau" },
        { value: "Guyana", label: "Guyana" },
        { value: "Haiti", label: "Haiti" },
        { value: "Honduras", label: "Honduras" },
        { value: "Hong Kong", label: "Hong Kong" },
        { value: "Hungary", label: "Hungary" },
        { value: "Iceland", label: "Iceland" },
        { value: "India (Hindustan)", label: "India (Hindustan)" },
        { value: "Indonesia", label: "Indonesia" },
        { value: "Iran", label: "Iran" },
        { value: "Iraq", label: "Iraq" },
        { value: "Ireland", label: "Ireland" },
        { value: "Isle of Man", label: "Isle of Man" },
        { value: "Israel", label: "Israel" },
        { value: "Italy", label: "Italy" },
        { value: "Ivory Coast", label: "Ivory Coast" },
        { value: "Jamaica", label: "Jamaica" },
        { value: "Jan Mayen", label: "Jan Mayen" },
        { value: "Japan", label: "Japan" },
        { value: "Jersey", label: "Jersey" },
        { value: "Jordan", label: "Jordan" },
        { value: "Kazakhstan", label: "Kazakhstan" },
        { value: "Kenya", label: "Kenya" },
        { value: "Kiribati", label: "Kiribati" },
        { value: "Kosovo", label: "Kosovo" },
        { value: "Kuwait", label: "Kuwait" },
        { value: "Kyrgyzstan", label: "Kyrgyzstan" },
        { value: "Laos", label: "Laos" },
        { value: "Latvia", label: "Latvia" },
        { value: "Lebanon", label: "Lebanon" },
        { value: "Lesotho", label: "Lesotho" },
        { value: "Liberia", label: "Liberia" },
        { value: "Libya", label: "Libya" },
        { value: "Liechtenstein", label: "Liechtenstein" },
        { value: "Lithuania", label: "Lithuania" },
        { value: "Luhansk Republic", label: "Luhansk Republic" },
        { value: "Luxembourg", label: "Luxembourg" },
        { value: "Macau", label: "Macau" },
        { value: "Macedonia", label: "Macedonia" },
        { value: "Madagascar", label: "Madagascar" },
        { value: "Malawi", label: "Malawi" },
        { value: "Malaysia", label: "Malaysia" },
        { value: "Maldives", label: "Maldives" },
        { value: "Mali", label: "Mali" },
        { value: "Malta", label: "Malta" },
        { value: "Marshall Islands", label: "Marshall Islands" },
        { value: "Martinique", label: "Martinique" },
        { value: "Mauritania", label: "Mauritania" },
        { value: "Mauritius", label: "Mauritius" },
        { value: "Mayotte", label: "Mayotte" },
        { value: "Mexico", label: "Mexico" },
        { value: "Moldova", label: "Moldova" },
        { value: "Monaco", label: "Monaco" },
        { value: "Mongolia", label: "Mongolia" },
        { value: "Montserrat", label: "Montserrat" },
        { value: "Montenegro", label: "Montenegro" },
        { value: "Morocco", label: "Morocco" },
        { value: "Mozambique", label: "Mozambique" },
        { value: "Myanmar", label: "Myanmar" },
        { value: "Nagorno-Karabakh", label: "Nagorno-Karabakh" },
        { value: "Namibia", label: "Namibia" },
        { value: "Nauru", label: "Nauru" },
        { value: "Nepal", label: "Nepal" },
        { value: "Netherlands", label: "Netherlands" },
        { value: "New Caledonia", label: "New Caledonia" },
        { value: "New Zealand", label: "New Zealand" },
        { value: "Nicaragua", label: "Nicaragua" },
        { value: "Niger", label: "Niger" },
        { value: "Nigeria", label: "Nigeria" },
        { value: "Niue", label: "Niue" },
        { value: "Norfolk Island", label: "Norfolk Island" },
        { value: "North Korea", label: "North Korea" },
        { value: "Northern Cyprus", label: "Northern Cyprus" },
        {
          value: "Northern Mariana Islands",
          label: "Northern Mariana Islands",
        },
        { value: "Norway", label: "Norway" },
        { value: "Oman", label: "Oman" },
        { value: "Pakistan", label: "Pakistan" },
        { value: "Palau", label: "Palau" },
        { value: "Palestinian Territories", label: "Palestinian Territories" },
        { value: "Panama", label: "Panama" },
        { value: "Papua New Guinea", label: "Papua New Guinea" },
        { value: "Paraguay", label: "Paraguay" },
        { value: "Peru", label: "Peru" },
        { value: "Philippines", label: "Philippines" },
        { value: "Pitcairn Islands", label: "Pitcairn Islands" },
        { value: "Poland", label: "Poland" },
        { value: "Portugal", label: "Portugal" },
        { value: "Pridnestrovie", label: "Pridnestrovie" },
        { value: "Puerto Rico", label: "Puerto Rico" },
        { value: "Qatar", label: "Qatar" },
        { value: "Reunion", label: "Reunion" },
        { value: "Romania", label: "Romania" },
        { value: "Russia", label: "Russia" },
        { value: "Rwanda", label: "Rwanda" },
        { value: "Republic of the Congo", label: "Republic of the Congo" },
        { value: "Saba", label: "Saba" },
        { value: "Sahrawi Republic", label: "Sahrawi Republic" },
        { value: "Saint Barthelemy", label: "Saint Barthelemy" },
        { value: "Saint Helena", label: "Saint Helena" },
        { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
        { value: "Saint Lucia", label: "Saint Lucia" },
        { value: "Saint Martin", label: "Saint Martin" },
        {
          value: "Saint Pierre and Miquelon",
          label: "Saint Pierre and Miquelon",
        },
        {
          value: "Saint Vincent and the Grenadines",
          label: "Saint Vincent and the Grenadines",
        },
        { value: "Samoa", label: "Samoa" },
        { value: "San Marino", label: "San Marino" },
        { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
        { value: "Saudi Arabia", label: "Saudi Arabia" },
        { value: "Sealand", label: "Sealand" },
        { value: "Senegal", label: "Senegal" },
        { value: "Serbia", label: "Serbia" },
        { value: "Seychelles", label: "Seychelles" },
        { value: "Sierra Leone", label: "Sierra Leone" },
        { value: "Singapore", label: "Singapore" },
        { value: "Sint Eustatius", label: "Sint Eustatius" },
        { value: "Sint Maarten", label: "Sint Maarten" },
        { value: "Slovakia", label: "Slovakia" },
        { value: "Slovenia", label: "Slovenia" },
        { value: "Solomon Islands", label: "Solomon Islands" },
        { value: "Somalia", label: "Somalia" },
        { value: "Somaliland", label: "Somaliland" },
        { value: "South Africa", label: "South Africa" },
        {
          value: "South Georgia and the South Sandwich Islands",
          label: "South Georgia and the South Sandwich Islands",
        },
        { value: "South Korea", label: "South Korea" },
        { value: "South Ossetia", label: "South Ossetia" },
        { value: "South Sudan", label: "South Sudan" },
        { value: "Spain", label: "Spain" },
        { value: "Sri Lanka", label: "Sri Lanka" },
        { value: "Sudan", label: "Sudan" },
        { value: "Suriname", label: "Suriname" },
        { value: "Svalbard", label: "Svalbard" },
        { value: "Swaziland", label: "Swaziland" },
        { value: "Sweden", label: "Sweden" },
        { value: "Switzerland", label: "Switzerland" },
        { value: "Syria", label: "Syria" },
        { value: "Taiwan", label: "Taiwan" },
        { value: "Tajikistan", label: "Tajikistan" },
        { value: "Tanzania", label: "Tanzania" },
        { value: "Thailand", label: "Thailand" },
        { value: "Timor-Leste", label: "Timor-Leste" },
        { value: "Togo", label: "Togo" },
        { value: "Tokelau", label: "Tokelau" },
        { value: "Tonga", label: "Tonga" },
        { value: "Tibet", label: "Tibet" },
        { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
        { value: "Tristan da Cunha", label: "Tristan da Cunha" },
        { value: "Tunisia", label: "Tunisia" },
        { value: "Turkey", label: "Turkey" },
        { value: "Turkmenistan", label: "Turkmenistan" },
        { value: "Turks and Caicos", label: "Turks and Caicos" },
        { value: "Tuvalu", label: "Tuvalu" },
        { value: "Uganda", label: "Uganda" },
        { value: "Ukraine", label: "Ukraine" },
        { value: "United Arab Emirates", label: "United Arab Emirates" },
        { value: "United Kingdom", label: "United Kingdom" },
        {
          value: "United States of America",
          label: "United States of America",
        },
        { value: "Uruguay", label: "Uruguay" },
        { value: "US Virgin Islands", label: "US Virgin Islands" },
        { value: "Uzbekistan", label: "Uzbekistan" },
        { value: "Vanuatu", label: "Vanuatu" },
        { value: "Vatican City", label: "Vatican City" },
        { value: "Venezuela", label: "Venezuela" },
        { value: "Vietnam", label: "Vietnam" },
        { value: "Wallis and Futuna", label: "Wallis and Futuna" },
        { value: "Yemen", label: "Yemen" },
        { value: "Zambia", label: "Zambia" },
        { value: "Zimbabwe", label: "Zimbabwe" },
      ],
      countryValue: "",
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "info",
        newPost: true,
        target: "loading",
        userID: 0,
        ageValue: this.$data.ageValue,
        countryValue: this.$data.countryValue,
      };
      if (info.ageValue === "") {
        MessageBox.alert("Please choose your age.", "Notice", {
          confirmButtonText: "OK",
        });
      } else if (info.countryValue === "") {
        MessageBox.alert("Please Choose your nation.", "Notice", {
          confirmButtonText: "OK",
        });
      } else {
        this.$game.ge.buttonClick(this, info);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
  margin-top: 0%;
  margin-bottom: 0%;
  margin-left: 0%;
  margin-right: 0%;
  height: max-content;
}

.background {
  height: 100%;
  width: 100%;
  min-height: 500px;
  padding: 0px;
  margin: 0px;

  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}

.wrapper {
  height: auto;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0px;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;
  margin-bottom: 100px;
  border-right: 3px outset;
  border-top: 3px outset;
  border-left: 3px outset;
  border-bottom: 3px outset;
}
.wrapper-ul {
  margin: 0;
  padding: 0 0 20px 0;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
