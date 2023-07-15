import { defineStore } from "pinia";

interface RuleForm {
  shape: string;
  pbxheight?: number;
  pbxdia?: number;
  mutaoheight?: number;
  mndia?: number;
  mwdia?: number;
  upheigh?: number;
  updia?: number;
  downheight?: number;
  downdia?: number;
  pbxupdia?: number;
  pbxdowndia?: number;
  pbxheight1?: number;
  pbxheight2?: number;
  mutaoheight1?: number;
  mutaoheight2?: number;
}

export const useGeoFormStore = defineStore({
  id: "form",
  state: (): { form: RuleForm } => ({
    form: {
      shape: "YZT",
      pbxheight: undefined,
      pbxdia: undefined,
      mutaoheight: undefined,
      mndia: undefined,
      mwdia: undefined,
      upheigh: undefined,
      updia: undefined,
      downheight: undefined,
      downdia: undefined,
      pbxupdia: undefined,
      pbxdowndia: undefined,
      pbxheight1: undefined,
      pbxheight2: undefined,
      mutaoheight1: undefined,
      mutaoheight2: undefined
    }
  }),
  actions: {
    saveForm(form: RuleForm) {
      this.form = form;
    }
  }
});
