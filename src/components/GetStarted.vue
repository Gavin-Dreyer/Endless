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
$xlarge: 1500px;
$large: 1008px;
$medium: 640px;

#get-started {
  width: 100%;
  height: 100%;

  #logo-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background: #36454f;

    @media (min-width: $medium) {
      justify-content: flex-start;
      padding-left: 10%;
    }

    @media (min-width: $xlarge) {
      padding-left: 12.5%;
    }

    img {
      height: 2rem;
    }
  }

  #display {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    color: #fff;
    background: #36454f;

    @media (min-width: $medium) {
      justify-content: flex-start;
      align-items: flex-end;
    }

    @media (min-width: $xlarge) {
      justify-content: center;
    }

    img {
      z-index: 0;
      max-width: 100%;
      height: auto;
    }

    #info {
      position: absolute;
      width: 90%;
      text-align: center;
      z-index: 1;

      @media (min-width: 500px) {
        width: 60%;
      }

      @media (min-width: $medium) {
        width: 65%;
        text-align: left;
        padding-left: 10%;
        padding-bottom: 5%;
      }

      @media (min-width: $large) {
        width: 50%;
      }

      @media (min-width: $xlarge) {
        width: 75%;
        padding-left: 0;
      }

      p:first-child {
        font-size: 1.5rem;

        @media (min-width: $large) {
          font-size: 2rem;
        }
      }

      p:nth-child(2) {
        font-family: Lato-Light;
        font-size: 2rem;

        @media (min-width: $medium) {
          font-size: 3rem;
        }
      }

      p:nth-child(3) {
        font-size: 1rem;

        @media (min-width: $medium) {
          font-size: 1.5rem;
        }

        @media (min-width: $xlarge) {
          width: 33%;
        }
      }

      button {
        color: #000;
        background: #8bd6bb;
        border-radius: 2rem;
        padding: 0.75rem 1.5rem;
        outline: 0;
        border: 0;
        transition: background 0.25s ease;
      }

      button:hover {
        background: #43bc91;
        transition: background 0.5s ease;
      }

      button:active {
        background: #297459;
        transition: background 0.25s ease;
      }
    }

    #info > * {
      padding-bottom: 1.5rem;

      @media (min-width: 450px) {
        padding-bottom: 2rem;
      }

      @media (min-width: $medium) {
        padding-bottom: 1.5rem;
      }
    }
  }
}
</style>
