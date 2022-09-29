import { defineCustomElement } from "vue";
import InfoPanel from "./components/InfoPanel.ce.vue";
import "./styles/main.scss";

const InfoPanelElement = defineCustomElement(InfoPanel);
customElements.define("vrms-info-panel", InfoPanelElement);
