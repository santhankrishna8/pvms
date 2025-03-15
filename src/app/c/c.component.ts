import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Define interfaces

interface Advisor {
name: string;
}
interface Member {
  position: string;
  name: string;
}

interface ECMember {
  name: string;
  location: string;
}
interface ECMember1 {
  name: string;
  // location: string;
}
@Component({
  selector: 'app-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {

  
  // Define the data as an array
   members: Member[] = [
    { position: "గౌరవ అధ్యక్షులు", name: "వైద్య శ్రీశ్రీ శివస్వామి" },
    { position: "అధ్యక్షులు", name: "వైద్య B.ఆనందయ్య" },
    { position: "ఉపాధ్యక్షులు", name: "వైద్య జమాల్ ఖాన్" },
    { position: "ప్రధాన కార్యదర్శి", name: "వైద్య L.శ్రీనివాసులు" },
    { position: "సహాయ కార్యదర్శి", name: "వైద్య S.రమేష్" },
    { position: "కోశాధికారి", name: "వైద్య సోమశేఖర్" }
  ];
  
   ecMembers: ECMember[] = [
    { name: "వైద్య ప్రదీప్ వడియార్", location: "కేరళ" },
    { name: "వైద్య సునీల్ బాబు", location: "కేరళ" },
    { name: "వైద్య విశ్వనాథ్", location: "కర్ణాటక" },
    { name: "వైద్య మంజునాథ రెడ్డి", location: "కర్ణాటక" },
    { name: "వైద్య అయ్యాదొరై", location: "తమిళనాడు" },
    { name: "వైద్య ఆర్మోగ పాండే", location: "తమిళనాడు" }
  ];



// Define data using arrays
smembers: Member[] = [
  { position: "గౌరవ అధ్యక్షులు", name: "వైద్య S. చంద్రశేఖర్ రాజు" },
  { position: "అధ్యక్షులు", name: "వైద్య M. వేణుగోపాల రెడ్డి" },
  { position: "ఉపాధ్యక్షులు", name: "వైద్య A. ప్రసాద రావు" },
  { position: "ప్రధాన కార్యదర్శి", name: "వైద్య L. శ్రీనివాసులు" },
  { position: "సహాయ కార్యదర్శి", name: "వైద్య రఘునాథ రెడ్డి" },
  { position: "సహాయ కార్యదర్శి", name: "వైద్య జయగోపాల్" },
  { position: "కోశాధికారి", name: "వైద్య V. బాల కృష్ణ" }
];

secMembers: ECMember1[] = [
  { name: "వైద్య D. పద్మావతి" },
  { name: "వైద్య Y. ప్రమీల" },
  { name: "వైద్య C.B. సుధా రాణి" },
  { name: "వైద్య V. శ్రీనివాసులు" },
  { name: "వైద్య S.K. ఖలీమ్ బాషా" },
  { name: "వైద్య G.B. సత్యనారాయాణ" },
  { name: "వైద్య N. సంపూర్ణమ్మ" }
];

advisors: Advisor[] = [
  { name: "వైద్య Dr. సురభి ప్రసాద్" },
  { name: "వైద్య K. విజయకుమార్" },
  { name: "వైద్య T. మధుసూధన్" }
];

// Log to verify the structure

}
