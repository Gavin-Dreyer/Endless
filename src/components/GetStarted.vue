<template>
  <section id="get-started">
    <div id="logo-wrap">
      <img alt="Endless logo" src="@/assets/logo-endless.svg" />
    </div>
    <div id="display">
      <img src="@/assets/photo-couch.jpg" />
      <div id="info">
        <p>New Games & Accessories</p>
        <p>
          Monthly packages.
          <br />
          Excitement delivered daily.
        </p>
        <p>
          What's the best way to shop for the latest video games and
          peripherals? How about never shopping at all? You'll get new stuff on
          your doorstep - every month.
        </p>
        <button>GET STARTED</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
#get-started {
  width: 100%;
  height: 100%;

  #logo-wrap {
    display: flex;
    align-items: center;
    height: 3rem;
    padding-left: 10%;

    img {
      height: 2rem;
    }
  }

  #display {
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 100%;
    height: 50vh;
    color: #fff;

    img {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: auto;
    }

    #info {
      width: 90%;
      padding-left: 10%;
      padding-bottom: 5%;
      z-index: 1;

      p:first-child {
        font-size: 2rem;
      }

      p:nth-child(2) {
        font-family: Lato-Light;
        font-size: 3.5rem;
      }

      p:nth-child(3) {
        font-size: 1.5rem;
      }

      button {
        color: #000;
        background: #98fb98;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        outline: 0;
        border: 0;
        transition: background 0.5s ease;
      }

      button:hover {
        background: #3cd070;
      }
    }

    #info > * {
      padding-bottom: 1.5rem;
    }
  }
}
</style>
