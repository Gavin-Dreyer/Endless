<template>
  <section id="how-it-works">
    <h2>How It Works</h2>
    <div id="step-wrap">
      <transition-group name="list">
        <div
          class="step"
          v-for="(step, idx) in sortedSteps"
          :key="idx"
          :style="{ transitionDelay: '0' + (idx / 5).toString() + 's' }"
        >
          <div class="step-number">0{{ step.stepNumber }}</div>
          <div class="spacer"></div>
          <p>{{ step.versionContent[0].title }}</p>
          <p>{{ step.versionContent[0].body }}</p>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import axios from "axios";

interface Content {
  title: string;
  body: string;
  effectiveDate: string;
}

interface Step {
  id: string;
  stepNumber: string;
  versionContent: Content[];
}

const validateSteps = (data: any): data is Step[] => {
  if (!data) throw new Error("No data!");

  let bool = true;

  data.forEach((item: any) => {
    Object.keys(item).forEach((key) => {
      if (item[key as keyof Step] === undefined) bool = false;
    });
  });

  if (!bool) {
    throw new Error("Invalid data!");
  } else {
    return true;
  }
};

onBeforeMount(async () => {
  try {
    const res = await axios.get(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    );

    if (res.data) {
      if (validateSteps(res.data)) {
        steps.value = res.data;
      }
    } else {
      throw new Error("Missing data from request");
    }

    steps.value = res.data;
  } catch (e) {
    console.log(e);
  }
});

const steps = ref<Step[]>([]);
const sortedSteps = computed<Step[]>(() =>
  [...steps.value]
    .sort((a, b) => {
      if (a.stepNumber < b.stepNumber) {
        return -1;
      } else if (a.stepNumber < b.stepNumber) {
        return 1;
      } else {
        return 0;
      }
    })
    .map((step) => {
      if (step.versionContent.length > 1) {
        const extractedIdx = getRecentContentIdx(step.versionContent);
        step.versionContent = [step.versionContent[extractedIdx]];

        return step;
      } else {
        return step;
      }
    })
);

const getRecentContentIdx = (content: Content[]): number => {
  let parsedTime = 0;
  let index = 0;

  content.forEach((item, idx) => {
    if (Date.parse(item.effectiveDate) > parsedTime) {
      index = idx;
      parsedTime = Date.parse(item.effectiveDate);
    }
  });

  return index;
};
</script>

<style lang="scss">
$xlarge: 1500px;
$large: 1008px;
$medium: 640px;

#how-it-works {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ededed;

  h2 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  #step-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: $large) {
      flex-direction: row;
      width: 90%;
      padding: 2rem;
    }

    .list-enter-active,
    .list-leave-active {
      transition: all 1s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(-1000px);

      @media (min-width: $large) {
        transform: translateX(1000px);
      }
    }

    .step {
      width: 75%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (min-width: $medium) {
        width: 50%;
      }

      @media (min-width: $large) {
        width: 25%;
        justify-content: space-evenly;
        height: 200px;
      }

      .step-number {
        font-size: 3.5rem;
        line-height: 3.5rem;

        @media (min-width: $medium) {
          font-size: 4rem;
        }
      }

      .spacer {
        width: 4rem;
        height: 3px;
        background: #8bd6bb;
        margin-bottom: 0.75rem;
      }

      p:nth-child(3) {
        font-size: 1.5rem;

        @media (min-width: $medium) {
          font-size: 1.75rem;
        }
      }

      p:nth-child(4) {
        font-size: 1.25rem;
        font-family: Lato-Light;

        @media (min-width: $medium) {
          font-size: 1.5rem;
        }
      }

      .step-number,
      p {
        padding-bottom: 0.75rem;
      }
    }
  }
}
</style>
