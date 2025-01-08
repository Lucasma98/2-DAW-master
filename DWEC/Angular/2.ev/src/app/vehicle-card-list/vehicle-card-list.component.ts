import { Component } from '@angular/core';
import { VehicleCardComponent } from "../vehicle-card/vehicle-card.component";

@Component({
  selector: 'app-vehicle-card-list',
  imports: [VehicleCardComponent],
  templateUrl: './vehicle-card-list.component.html',
  styles: ``
})
export class VehicleCardListComponent {
  private vehicles = [
    {"id":"1","name":"A3 Sportback e-tron","image":"img\/Audi_A3_Sportback_e-tron.jpg","price":"38750","manufacturer":"1","technology":"3"},
    {"id":"2","name":"Q7 e-tron quattro","image":"img\/Audi_Q7_e-tron_quattro.jpg","price":"83970","manufacturer":"1","technology":"3"},
    {"id":"3","name":"i3","image":"img\/BMW-i3-60Ah.jpg","price":"35500","manufacturer":"2","technology":"1"},
    {"id":"4","name":"Serie 2 iPerformance","image":"img\/BMW_225xe_iPerformance.jpg","price":"39500","manufacturer":"2","technology":"3"},
    {"id":"5","name":"Serie 7 iPerformance","image":"img\/BMW_740e_iPerformance.jpg","price":"102500","manufacturer":"2","technology":"3"},
    {"id":"6","name":"C-Zero","image":"img\/Citroen_C-ZERO.jpg","price":"26190","manufacturer":"3","technology":"1"},
    {"id":"7","name":"Berlingo Electric","image":"img\/Citroen_Berlingo.jpg","price":"24900","manufacturer":"3","technology":"1"},
    {"id":"8","name":"Mondeo HEV","image":"img\/Ford_MondeoHEV.jpg","price":"34500","manufacturer":"4","technology":"2"},
    {"id":"9","name":"IONIQ","image":"img\/Hyundai_IONIQ_Hybrid.jpg","price":"21375","manufacturer":"6","technology":"2"},
    {"id":"10","name":"IONIQ","image":"img\/Hyundai_IONIQ_Electrico.jpg","price":"29725","manufacturer":"6","technology":"1"},
    {"id":"11","name":"IONIQ PHEV","image":"img\/Hyundai_IONIQ_PHEV.jpg","price":"27975","manufacturer":"6","technology":"3"},
    {"id":"12","name":"i-Pace","image":"img\/Jaguar-i-Pace.jpg","price":"79100","manufacturer":"7","technology":"1"},
    {"id":"13","name":"Niro","image":"img\/Kia_Niro.jpg","price":"25400","manufacturer":"8","technology":"2"},
    {"id":"14","name":"Niro PHEV","image":"img\/Kia_NiroPHEV.jpg","price":"29070","manufacturer":"8","technology":"3"},
    {"id":"15","name":"Soul EV","image":"img\/Kia_SoulEV.jpg","price":"32840","manufacturer":"8","technology":"1"},
    {"id":"16","name":"Optima PHEV","image":"img\/Kia_OptimaPHEV.jpg","price":"45750","manufacturer":"8","technology":"3"},
    {"id":"17","name":"CT","image":"img\/Lexus_CT.jpg","price":"22900","manufacturer":"9","technology":"2"},
    {"id":"18","name":"IS","image":"img\/Lexus_IS.jpg","price":"35900","manufacturer":"9","technology":"2"},
    {"id":"19","name":"GS","image":"img\/Lexus_GS.jpg","price":"45900","manufacturer":"9","technology":"2"},
    {"id":"20","name":"LS","image":"img\/Lexus_LS.jpg","price":"121500","manufacturer":"9","technology":"2"},
    {"id":"21","name":"NX","image":"img\/Lexus_NX.jpg","price":"39750","manufacturer":"9","technology":"2"},
    {"id":"22","name":"RX","image":"img\/Lexus_RX.jpg","price":"68400","manufacturer":"9","technology":"2"},
    {"id":"23","name":"Clase C","image":"img\/Mercedes-C.jpg","price":"50225","manufacturer":"10","technology":"3"},
    {"id":"24","name":"Clase E","image":"img\/Mercedes-E.jpg","price":"64800","manufacturer":"10","technology":"3"},
    {"id":"25","name":"GLC","image":"img\/Mercedes-GLC.jpg","price":"55850","manufacturer":"10","technology":"3"},
    {"id":"26","name":"Clase S","image":"img\/Mercedes-S.jpg","price":"114325","manufacturer":"10","technology":"3"},
    {"id":"27","name":"i-MiEV","image":"img\/Mitsubishi_i-MIEV.jpg","price":"24400","manufacturer":"11","technology":"1"},
    {"id":"28","name":"Outlander PHEV","image":"img\/Mitsubishi_Outlander.jpg","price":"47200","manufacturer":"11","technology":"3"},
    {"id":"29","name":"LEAF","image":"img\/Nissan_LEAF_24Ah.jpg","price":"29235","manufacturer":"12","technology":"1"},
    {"id":"30","name":"e-NV200","image":"img\/Nissan_E-NV200.jpg","price":"25342","manufacturer":"12","technology":"1"},
    {"id":"31","name":"iOn","image":"img\/Peugeot_iOn.jpg","price":"26190","manufacturer":"13","technology":"1"},
    {"id":"32","name":"508","image":"img\/Peugeot_508.jpg","price":"44880","manufacturer":"13","technology":"2"},
    {"id":"33","name":"Cayenne S E-Hybrid","image":"img\/Porsche_Cayenne_S.jpg","price":"89293","manufacturer":"14","technology":"3"},
    {"id":"34","name":"Twizy","image":"img\/Renault_Twizy.jpg","price":"7220","manufacturer":"15","technology":"1"},
    {"id":"35","name":"ZOE","image":"img\/Renault_ZOE.jpg","price":"21625","manufacturer":"15","technology":"1"},
    {"id":"36","name":"Kangoo Z.E.","image":"img\/Renault_Kangoo_ZE.jpg","price":"24800","manufacturer":"15","technology":"1"},
    {"id":"37","name":"Baleno","image":"img\/Suzuki_Baleno.jpg","price":"17225","manufacturer":"16","technology":"2"},
    {"id":"38","name":"Model S","image":"img\/Tesla_ModelS.jpg","price":"80100","manufacturer":"17","technology":"1"},
    {"id":"39","name":"Model X","image":"img\/Tesla_ModelX.jpg","price":"103100","manufacturer":"17","technology":"1"},
    {"id":"40","name":"Model 3","image":"img\/Tesla_Model3.jpg","price":"45000","manufacturer":"17","technology":"1"},
    {"id":"41","name":"Auris","image":"img\/Toyota_Auris.jpg","price":"22020","manufacturer":"18","technology":"2"},
    {"id":"42","name":"Auris Touring Sports","image":"img\/Toyota_Auris_Touring.jpg","price":"23020","manufacturer":"18","technology":"2"},
    {"id":"43","name":"Prius","image":"img\/Toyota_Prius.jpg","price":"32250","manufacturer":"18","technology":"2"},
    {"id":"44","name":"Prius+","image":"img\/Toyota_Prius+.jpg","price":"31200","manufacturer":"18","technology":"2"},
    {"id":"45","name":"RAV 4","image":"img\/Toyota_RAV4.jpg","price":"31950","manufacturer":"18","technology":"2"},
    {"id":"46","name":"Yaris","image":"img\/Toyota_Yaris.jpg","price":"18100","manufacturer":"18","technology":"2"},
    {"id":"47","name":"C-HR","image":"img\/Toyota_C-HR.jpg","price":"31900","manufacturer":"18","technology":"2"},
    {"id":"49","name":"S90 T8 Twin Engine","image":"img\/Volvo_S90_TS_T8_Twin.jpg","price":"72150","manufacturer":"19","technology":"3"},
    {"id":"50","name":"e-Up!","image":"img\/VW_e-Up.jpg","price":"27720","manufacturer":"20","technology":"1"},
    {"id":"51","name":"e-Golf","image":"img\/VW_e-Golf.jpg","price":"36850","manufacturer":"20","technology":"1"},
    {"id":"52","name":"Golf GTE","image":"img\/VW_Golf_GTE.jpg","price":"40090","manufacturer":"20","technology":"3"}
  ]

  getVehicles(){
    return this.vehicles
  }
}
