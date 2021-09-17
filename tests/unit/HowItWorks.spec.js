import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";

import HowItWorks from "../../src/components/HowItWorks.vue";

const mockData = [
  {
    id: "d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
    stepNumber: "2",
    versionContent: [
      {
        title: "Request A Delivery",
        body:
          "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
        effectiveDate: "2019-05-04T03:04:05.000Z",
      },
      {
        title: "We Deliver",
        body:
          "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
        effectiveDate: "2019-04-04T05:04:05.000Z",
      },
    ],
  },
  {
    id: "dce2554e-00dc-45c1-99c1-93a554d7eba7",
    stepNumber: "4",
    versionContent: [
      {
        title: "Request Another Delivery",
        body:
          "Get your next gaming fix by updating your profile then initiating your next shipment.",
        effectiveDate: "2019-05-20T03:04:05.000Z",
      },
    ],
  },
  {
    id: "422e6b50-9c5a-43d5-90cb-839f4678cb75",
    stepNumber: "3",
    versionContent: [
      {
        title: "Keep What You Like",
        body:
          "Tell us “no” by returning any unwanted products in the enclosed packaging.",
        effectiveDate: "2019-04-04T03:04:05.000Z",
      },
      {
        title: "Keep What You Want",
        body:
          "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
        effectiveDate: "2019-04-04T05:04:05.000Z",
      },
      {
        title: "Keep Everything",
        body:
          "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
        effectiveDate: "2019-02-04T08:04:05.000Z",
      },
    ],
  },
  {
    id: "d9a439d0-8dbf-4bab-8e08-626f8194a075",
    stepNumber: "1",
    versionContent: [
      {
        title: "Fill Out a Profile",
        body:
          "We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.",
        effectiveDate: "2019-05-20T03:04:05.000Z",
      },
    ],
  },
];

jest.mock("axios", () => ({
  get: jest.fn(() => {
    return {
      data: mockData,
    };
  }),
}));

describe("HowItWorks", () => {
  it("Checks that axios gets called and to the right endpoint", async () => {
    await mount(HowItWorks);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    );
  });

  it("Checks that the correct number of steps are being rendered", async () => {
    const wrapper = await mount(HowItWorks);

    await flushPromises();

    expect(wrapper.findAll(".step").length).toBe(mockData.length);
  });

  it("Checks that the steps are sorted correctly", async () => {
    const wrapper = await mount(HowItWorks);

    await flushPromises();

    const stepNumbers = await wrapper.findAll(".step-number");

    for (const [i, number] of stepNumbers.entries()) {
      await expect(number.text()).toBe(`0${i + 1}`);
    }
  });
});
