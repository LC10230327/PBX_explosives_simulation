import { defineStore } from "pinia";

interface SimulationData {
  yaotem?: string;
  chongtem?: string;
  mutem?: string;
  pressure1?: string;
  time1?: string;
  pressure2?: string;
  time2?: string;
  pressure3?: string;
  time3?: string;
}

const initialSimulationData: SimulationData = {
  yaotem: "",
  chongtem: "",
  mutem: "",
  pressure1: "",
  time1: "",
  pressure2: "",
  time2: "",
  pressure3: "",
  time3: ""
};

export const constraintStore = defineStore({
  id: "consform",
  state: () => ({
    simulationData: { ...initialSimulationData }
  }),
  actions: {
    saveFormData(data: SimulationData) {
      this.simulationData = data;
    },
    getFormData() {
      return this.simulationData;
    },
    resetFormData() {
      this.simulationData = { ...initialSimulationData };
    }
  }
});
