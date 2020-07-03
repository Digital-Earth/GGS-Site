<template>
  <div class="main" v-on:keyup.esc="closePopup()">
    <modal name="contact-form" height="auto">
      <div class="contact-form">
        <h1>Let's Talk...</h1>
        <div class="form-row" v-bind:class="{'empty': nameMissing}">
          <input type="text" placeholder="Name" name="name" v-model="contact.name" required v-bind:class="{'empty': nameMissing}">
        </div>
        <div class="form-row" v-bind:class="{'empty': emailMissing}">
          <input type="email" placeholder="Email" name="email" v-model="contact.email" required v-bind:class="{'empty': emailMissing}">
        </div>
        <div class="form-row">
          <input type="tel" placeholder="Phone" name="phone" v-model="contact.phone">
        </div>
        <div class="form-row">
          <textarea type="tel" placeholder="Whats on your mind..." name="phone" v-model="contact.body"></textarea>
        </div>
        <div class="center">
          <button class="small action green" v-on:click="sendContact()" v-bind:disabled="!formValid">Send</button>
          <button class="small action" v-on:click="closePopup()">Cancel</button>
        </div>
      </div>
    </modal>

    <modal name="thank-you">
      <div class="contact-form">
        <h1>Thank you</h1>
        <p>Talk to you soon</p>
        <div class="center">
          <button class="small action" v-on:click="closePopup()">Close</button>
        </div>
      </div>
    </modal>

    <modal name="failed">
      <div class="contact-form">
        <h1>Failed to send request</h1>
        <p>please try again later</p>
        <div class="center">
          <button class="small action" v-on:click="closePopup()">Close</button>
        </div>
      </div>
    </modal>

    <page-section theme="dark">
      <div class="logo">
        <img src="src/assets/ggs-logo.png">
      </div>

      <div class="message">
        <!-- <div class="center tag-line">
          <p>Leading the revolution from</p>
          <div class="compare-table">
            <div>GIS</div>
            <div>to</div>
            <div>GGS</div>

            <div>Slow</div>
            <div></div>
            <div>Faster</div>

            <div>Painful</div>
            <div></div>
            <div>Better</div>

            <div>Expensive</div>
            <div></div>
            <div>Cheaper</div>
          </div>
        </div>

        <div class="center">
          <button class="action" v-on:click="contactPopup()">Lets Talk</button>
        </div> -->

        
       
        <div class="slogan">
          World Leader in Discrete Global Grid Systems DGGS
        </div>
         <div class="space">
          <button class="action" v-on:click="contactPopup()">Let's Talk</button>
        </div>
      </div>
    </page-section>
  
    <page-section theme="light">
      <h1 slot="header">Leading the DGGS Revolution</h1>

      <div class="text-justify">
        <p>Our founder, Perry Peterson, had a vision to build Digital Earth and become a world leader in predictive geospatial analysis.</p>
        <p>To realise the vision, Perry was the driving force behind the new OGC DGGS standard that was announced globally in Q3 2017. He is the co-chairperson of the standard committee.</p>
        <p>Perry was honored as Fellow of the Royal Canadian Geographical Society for this effort of moving the Digital Earth vision forward.</p>
        <p>Global Grid Systems has been developing the DGGS technology since 2003.</p>
      </div>

      <div class="cliped-dggs" >
        <img src="src/assets/DGGS.png">
      </div>
    </page-section>

    <page-section theme="dark">
      <h1 slot="header">What we do</h1>

      <div class="text-justify space">
        <p>We provide predictive geospatial analytics to organizations around the world for the purposes of driving new opportunities and managing their risk.</p>
        <p>The revolution of DGGS is here, let us help your organization embrace it.</p>

        <div class="space">
        </div>
        <div class="center">
          <button class="action" v-on:click="contactPopup()">Let's Talk</button>
        </div>
      </div>
    </page-section>

    <page-section theme="light" v-bind:class="'no-margin'">
      <h1 slot="header">How it works</h1>

      <div class="center space">
        <div class="drawing">
          <div class="space-left"></div>
          <div class="element"><div class="text">Public Data</div>
            <div style="position:absolute;right:-10px;top:80px;color:white">
              <i class="fa fa-circle animate-left"></i>
            </div>
            <div style="position:absolute;right:-10px;top:80px;color:white">
              <i class="fa fa-circle animate-left second"></i>
            </div>
            <div style="position:absolute;right:-10px;top:80px;color:white">
              <i class="fa fa-circle animate-left third"></i>
            </div>
          </div>
          <div class="element tall one"><div class="text">GGS Crawler&trade;</div>
            <i style="position:absolute;left:35px;top:-32px;color:white" class="fa fa-cog fa-spin fa-2x"></i>
            <i style="position:absolute;left:90px;top:-50px;color:white" class="fa fa-flip-vertical"><i class="fa fa-cog fa-spin fa-3x"></i></i>
            <div style="position:absolute;right:-10px;top:200px;color:white">
              <i class="fa fa-circle animate-left"></i>
            </div>
            <div style="position:absolute;right:-10px;top:200px;color:white">
              <i class="fa fa-circle animate-left second"></i>
            </div>
            <div style="position:absolute;right:-10px;top:200px;color:white">
              <i class="fa fa-circle animate-left third"></i>
            </div>
          </div>
          <div class="element tall two"><div class="text">GGS Insight&trade;</div>
            <i style="position:absolute;left:30px;top:-50px;color:white" class="fa fa-cog fa-spin fa-3x"></i>
            <i style="position:absolute;left:110px;top:-32px;color:white" class="fa fa-flip-vertical"><i class="fa fa-cog fa-spin fa-2x"></i></i>
          </div>
          <div class="element"><div class="text">3D Dashboard</div>
            <div style="position:absolute;left:-70px;top:80px;color:white">
              <i class="fa fa-circle animate-left"></i>
            </div>
            <div style="position:absolute;left:-70px;top:80px;color:white">
              <i class="fa fa-circle animate-left second"></i>
            </div>
            <div style="position:absolute;left:-70px;top:80px;color:white">
              <i class="fa fa-circle animate-left third"></i>
            </div>
          </div>
          <div class="element"><div class="text">Private Data</div>
            <div style="position:absolute;right:-10px;top:80px;color:white">
              <i class="fa fa-circle animate-left"></i>
            </div>
            <div style="position:absolute;right:-10px;top:80px;color:white">
              <i class="fa fa-circle animate-left second"></i>
            </div>
            <div style="position:absolute;right:-10px;top:80px;color:white">
              <i class="fa fa-circle animate-left third"></i>
            </div>
          </div>
          <div class="element"><div class="text">Automation</div>
            <div style="position:absolute;left:-70px;top:80px;color:white">
              <i class="fa fa-circle animate-left"></i>
            </div>
            <div style="position:absolute;left:-70px;top:80px;color:white">
              <i class="fa fa-circle animate-left second"></i>
            </div>
            <div style="position:absolute;left:-70px;top:80px;color:white">
              <i class="fa fa-circle animate-left third"></i>
            </div>
          </div>
          <div class="space-right"></div>
        </div>
      </div> 

      <div class="text-justify margin">
        <p>GGS Crawler&trade; can discover public domain and private enterprise data</p>
        <p>GGS Insight&trade; can then fuse and analyze the data to identify risk at a glance</p>
      </div>
    </page-section>

    

    <page-section theme="dark">
      <h1 slot="header">Contact Us</h1>

      <div class="float-right">
          <button class="action" v-on:click="contactPopup()">Let's Talk</button>
      </div>
      <div class="contact-us-details">
        <p><strong>Phone</strong><br> 1.403.648.3930</p>
        <p><strong>Business Hours</strong><br>Monday to Friday<br>8:00 to 17:00 MT<br>(14:00 to 22:00 GMT)</p>
        <p><strong>Address</strong><br> Suite 1680, 700 6th Avenue SW Calgary, AB T2P 0T8</p>
        <div></div>
      </div>
    </page-section>
  </div>
</template>

<script>
import Section from "@/components/Section";

export default {
  components: {
    "page-section": Section
  },
  name: "Main",
  data() {
    return {
      entities: [
        "entity risk",
        "marketing opportunities",
        "corporate assets",
        "goverment agencies",
        "infrastructure",
        "mobile assets",
        "electrical grid",
        "pipelines",
        "security details"
      ],
      entity: "entity risk",
      nextEntity: "",
      entityIndex: 0,
      alive: true,
      contact: {
        name: "",
        email: "",
        phone: "",
        body: ""
      }
    };
  },
  computed: {
    nameMissing() {
      return this.contact.name === "";
    },
    emailMissing() {
      return this.contact.email === "";
    },
    formValid() {
      return !this.nameMissing && !this.emailMissing;
    }
  },
  methods: {
    contactPopup() {
      this.$modal.show("contact-form");
    },
    closePopup() {
      this.$modal.hide("contact-form");
      this.$modal.hide("thank-you");
      this.$modal.hide("failed");
    },
    sendContact() {
      this.$http.post("/contact", this.contact).then(
        function success() {
          this.$modal.hide("contact-form");
          this.$modal.show("thank-you");
        },
        function error() {
          this.$modal.hide("contact-form");
          this.$modal.show("failed");
        }
      );
    }
  },
  mounted() {
    const self = this;
    function nextWord() {
      self.entityIndex = (self.entityIndex + 1) % self.entities.length;
      self.nextEntity = self.entities[self.entityIndex];
      function addLetter() {
        if (self.entity.length < self.nextEntity.length) {
          self.entity += self.nextEntity[self.entity.length];
          window.setTimeout(addLetter, 100);
        } else if (self.alive) {
          self.id = setTimeout(nextWord, 2000);
        }
      }
      function removeLetter() {
        if (self.entity.length > 0) {
          self.entity = self.entity.slice(0, -1);
          window.setTimeout(removeLetter, 50);
        } else {
          addLetter();
        }
      }
      removeLetter();
    }

    self.id = setTimeout(nextWord, 2000);
  },
  destoryed() {
    this.alive = false;
    window.clearTimeout(this.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
$main-color = #ffffff;
$secondery-color = #000000;
$border-color = #ccc;
$highlight-color = #00ceff;
$font-size = 32px;
$font-size-big = 42px;
$logo-font-size = $font-size-big + 36;
$circle-size = 250;
$logo-width = 600;

px(a) {
  return unit(a, 'px');
}

.main {
  position: relative;
  height: 100%;
  width: 100%;
  font-size: $font-size;
}

h1, h2 {
  font-size: $font-size-big;
}

.logo {
  font-size: $logo-font-size;
  position: relative;
  top: -40px;
  height: px($circle-size);
  line-height: px($circle-size);
  left: 50%;
  width: px($logo-width);
  margin-left: px(0 - $logo-width / 2);
  font-weight: bold;
  color: $main-color;

  img {
    width: 100%;
  }
}

.message {
  font-size: $font-size-big;
  margin-top: 100px;
  margin-right: 10 0px;
  line-height: $font-size-big + 12;

  .entity {
    display: inline;
    width: 270px;
    text-align: left;
    border-bottom: 1px solid $highlight-color;
    color: $highlight-color;
  }

  .slogan {
    color: $highlight-color;
  }

  .small {
    font-size: $font-size-big - 24;
    line-height: $font-size-big - 12;
  }

}


.space {
  margin-top: 50px;
}

.float-right {
  float: right;
}

button.action {
  font-size: $font-size-big;
  background-color: transparent;
  border-radius: 10px;
  padding: 20px 40px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.section.dark button.action {
  border: 2px solid $main-color;
  color: $main-color;
}

.section.light button.action {
  border: 2px solid $secondery-color;
  color: $secondery-color;
}

.section.dark button.action:hover {
  color: $secondery-color;
  background: $main-color;
}

.section.light button.action:hover {
  color: $main-color;
  background: $secondery-color;
}

button.action.small {
  padding: 10px 20px;
  border: 2px solid $main-color;
}

button.action.small:hover {
  background-color: $secondery-color;
  color: $main-color;
}

button.action.small.green {
  border: 2px solid #57c43c;
  color: #57c43c;
}

button.action.small.green:hover {
  background-color: #57c43c;
  color: $main-color;
}

.cliped-dggs {
  height: 400px;
  margin-bottom: -200px;
  overflow: hidden;
}

.center {
  text-align: center;
  align-content: center;
  display: block;
}

.text-justify {
  text-align: justify;
}


.compare-table {
  display: grid;
  align-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 50px 50px 50px;
}

.drawing {
  display: grid;
  align-content: center;
  width: 100%;
  grid-template-columns: auto 400px 200px 200px 400px auto;
  grid-template-rows: 200px 200px;
  grid-gap: 50px;
  grid-template-areas: 'sl a b1 b2 c sr' 'sl d b1 b2 e sr';

  .element {
    background-color: $main-color;
    color: $secondery-color;
    position: relative;
    border-radius: 10px;

    .text {
      top: 50%;
      margin-top: -($font-size / 2);
      position: relative;
    }
  }

  .element.tall {
    .text {
      margin-top: -($font-size);
    }
  }

  .element.tall.one {
    grid-area: b1;
  }

  .element.tall.two {
    grid-area: b2;
  }

  .space-left {
    grid-area: sl;
  }

  .space-right {
    grid-area: sr;
  }
}

.animate-left {
  font-size: 20px;
  animation: myleft 1s linear infinite;
  position: relative;
}

.animate-left.second {
  animation-delay: 0.33s;
}

.animate-left.third {
  animation-delay: 0.66s;
}

.animate-right {
  font-size: 20px;
  animation: myleft 1s linear infinite;
  animation-direction: reverse;
  position: relative;
}

.animate-right.second {
  animation-delay: 0.33s;
}

.animate-right.third {
  animation-delay: 0.66s;
}

@keyframes myleft {
  0% {
    left: -10px;
  }

  100% {
    left: 70px;
  }
}

.contact-us-details {
  text-align: left;
  font-size: $font-size-big - 24;
  line-height: $font-size-big - 12;
}

.contact-form {
  padding: 20px;

  .form-row {
    position: relative;
    width: 100%;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 24px;

    input, textarea {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      outline: none;
      border: 1px solid $border-color;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
    }

    textarea {
      resize: none;
      height: 200px;
    }

    input:required {
      border-width: 2px;
    }

    input:focus, textarea:focus {
      border-color: $highlight-color;
    }

    input:not(.empty):not(:focus):invalid {
      border-color: #d18383;
      background-color: #f4dfdf;
      color: #9d0909;
    }
  }

  .form-row.empty::after {
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 24px;
    font-family: 'Times New Roman', Times, serif;
    color: $highlight-color;
    content: '*';
  }
}


@media screen and (max-width: 1000px) {
  .drawing {
    transform: scale(0.55) translate(-310px, 0);
    height: 260px;
  }
}

@media screen and (max-width: 750px) {
  .drawing {
    transform: scale(0.5) translate(-350px,0);
  }
}

@media screen and (max-width: 650px) {
  .message  {
    font-size: 32px;
  }
  
  .drawing {
    transform: scale(0.5) translate(-270px,0);
  }

  .cliped-dggs img {
    width: 100%;
  }
}
</style>