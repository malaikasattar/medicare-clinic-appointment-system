// MediCare - Clinic Appointment System (demo logic using localStorage)
const seedDoctors = [
  {id:1,name:"Dr. Ahmed Raza",spec:"Cardiologist",days:"Monday",fee:3000,timing:"Monday 10:00 AM - 2:00 PM",qual:"MBBS, FCPS Cardiology",email:"ahmed.raza@medicare.com"},
  {id:2,name:"Dr. Sara Khan",spec:"Cardiologist",days:"Thursday",fee:3000,timing:"Thursday 10:00 AM - 2:00 PM",qual:"MBBS, FCPS Cardiology",email:"sara.khan@medicare.com"},
  {id:3,name:"Dr. Bilal Hussain",spec:"Neurologist",days:"Saturday",fee:2800,timing:"Saturday 11:00 AM - 3:00 PM",qual:"MBBS, FCPS Neurology",email:"bilal.hussain@medicare.com"},
  {id:4,name:"Dr. Fatima Noor",spec:"Neurologist",days:"Wednesday",fee:2800,timing:"Wednesday 11:00 AM - 3:00 PM",qual:"MBBS, FCPS Neurology",email:"fatima.noor@medicare.com"},
  {id:5,name:"Dr. Usman Tariq",spec:"Nephrologist",days:"Monday",fee:2600,timing:"Monday 9:00 AM - 1:00 PM",qual:"MBBS, FCPS Nephrology",email:"usman.tariq@medicare.com"},
  {id:6,name:"Dr. Ayesha Malik",spec:"Nephrologist",days:"Sunday",fee:2600,timing:"Sunday 9:00 AM - 1:00 PM",qual:"MBBS, FCPS Nephrology",email:"ayesha.malik@medicare.com"},
  {id:7,name:"Dr. Hassan Raza",spec:"Orthopedic",days:"Mon-Sat",fee:2200,timing:"Mon-Sat 10:00 AM - 2:00 PM",qual:"MBBS, MS Orthopedics",email:"hassan.raza@medicare.com"},
  {id:8,name:"Dr. Maryam Shahid",spec:"Orthopedic",days:"Mon-Sat",fee:2200,timing:"Mon-Sat 3:00 PM - 7:00 PM",qual:"MBBS, MS Orthopedics",email:"maryam.shahid@medicare.com"},
  {id:9,name:"Dr. Ali Hamza",spec:"Ophthalmologist",days:"Mon-Sat",fee:2000,timing:"Mon-Sat 9:00 AM - 1:00 PM",qual:"MBBS, MS Ophthalmology",email:"ali.hamza@medicare.com"},
  {id:10,name:"Dr. Zainab Fatima",spec:"Ophthalmologist",days:"Mon-Sat",fee:2000,timing:"Mon-Sat 3:00 PM - 6:00 PM",qual:"MBBS, MS Ophthalmology",email:"zainab.fatima@medicare.com"},
  {id:11,name:"Dr. Muhammad Omar",spec:"Dentist",days:"Mon-Sat",fee:1500,timing:"Mon-Sat 9:00 AM - 1:00 PM",qual:"BDS, MDS",email:"omar@medicare.com"},
  {id:12,name:"Dr. Hira Shah",spec:"Dentist",days:"Mon-Sat",fee:1500,timing:"Mon-Sat 3:00 PM - 7:00 PM",qual:"BDS",email:"hira.shah@medicare.com"},
  {id:13,name:"Dr. Kamran Akhtar",spec:"General Physician",days:"Mon-Sat",fee:1200,timing:"Mon-Sat 9:00 AM - 1:00 PM",qual:"MBBS, FCPS",email:"kamran.akhtar@medicare.com"},
  {id:14,name:"Dr. Noor Ul Ain",spec:"General Physician",days:"Mon-Sat",fee:1200,timing:"Mon-Sat 4:00 PM - 8:00 PM",qual:"MBBS",email:"noor@medicare.com"},
  {id:15,name:"Dr. Saad Ahmed",spec:"Pediatrician",days:"Mon-Sat",fee:1300,timing:"Mon-Sat 9:00 AM - 1:00 PM",qual:"MBBS, DCH",email:"saad.ahmed@medicare.com"},
  {id:16,name:"Dr. Iqra Batool",spec:"Pediatrician",days:"Mon-Sat",fee:1300,timing:"Mon-Sat 3:00 PM - 6:00 PM",qual:"MBBS, DCH",email:"iqra.batool@medicare.com"},
  {id:17,name:"Dr. Faisal Mehmood",spec:"Dermatologist",days:"Mon-Fri",fee:1800,timing:"Mon-Fri 11:00 AM - 3:00 PM",qual:"MBBS, Dermatology",email:"faisal.mehmood@medicare.com"},
  {id:18,name:"Dr. Mahnoor Asif",spec:"Dermatologist",days:"Mon-Fri",fee:1800,timing:"Mon-Fri 4:00 PM - 7:00 PM",qual:"MBBS, Dermatology",email:"mahnoor.asif@medicare.com"},
  {id:19,name:"Dr. Waqas Ali",spec:"Gynecologist",days:"Tue,Thu,Sat",fee:2000,timing:"Tue,Thu,Sat 10:00 AM - 2:00 PM",qual:"MBBS, FCPS Gynecology",email:"waqas.ali@medicare.com"},
  {id:20,name:"Dr. Amna Tariq",spec:"Gynecologist",days:"Mon,Wed,Fri",fee:2000,timing:"Mon,Wed,Fri 10:00 AM - 2:00 PM",qual:"MBBS, FCPS Gynecology",email:"amna.tariq@medicare.com"},
  {id:21,name:"Dr. Shahid Mehmood",spec:"ENT Specialist",days:"Mon,Wed,Fri",fee:1600,timing:"Mon,Wed,Fri 11:00 AM - 3:00 PM",qual:"MBBS, MS ENT",email:"shahid.mehmood@medicare.com"},
  {id:22,name:"Dr. Laiba Tariq",spec:"ENT Specialist",days:"Tue,Thu,Sat",fee:1600,timing:"Tue,Thu,Sat 11:00 AM - 3:00 PM",qual:"MBBS, MS ENT",email:"laiba.tariq@medicare.com"},
  {id:23,name:"Dr. Hamza Qureshi",spec:"Psychiatrist",days:"Monday,Thursday",fee:2500,timing:"Monday,Thursday 4:00 PM - 7:00 PM",qual:"MBBS, FCPS Psychiatry",email:"hamza.qureshi@medicare.com"},
  {id:24,name:"Dr. Iqra Aslam",spec:"Psychiatrist",days:"Tuesday,Friday",fee:2500,timing:"Tuesday,Friday 4:00 PM - 7:00 PM",qual:"MBBS, FCPS Psychiatry",email:"iqra.aslam@medicare.com"},
  {id:25,name:"Dr. Talha Anwar",spec:"Gastroenterologist",days:"Wednesday,Saturday",fee:2400,timing:"Wednesday,Saturday 10:00 AM - 2:00 PM",qual:"MBBS, FCPS Gastroenterology",email:"talha.anwar@medicare.com"},
  {id:26,name:"Dr. Maryam Siddique",spec:"Gastroenterologist",days:"Monday,Thursday",fee:2400,timing:"Monday,Thursday 10:00 AM - 2:00 PM",qual:"MBBS, FCPS Gastroenterology",email:"maryam.siddique@medicare.com"},
  {id:27,name:"Dr. Imran Sheikh",spec:"Urologist",days:"Tuesday,Friday",fee:2300,timing:"Tuesday,Friday 9:00 AM - 1:00 PM",qual:"MBBS, MS Urology",email:"imran.sheikh@medicare.com"},
  {id:28,name:"Dr. Areeba Malik",spec:"Urologist",days:"Wednesday,Saturday",fee:2300,timing:"Wednesday,Saturday 9:00 AM - 1:00 PM",qual:"MBBS, MS Urology",email:"areeba.malik@medicare.com"}
];
const seedUsers = [
  {name:"Admin",email:"admin@medicare.com",password:"1234",role:"Admin",phone:"0300-0000000"},
  {name:"Dr. Ahmed Raza",email:"ahmed.raza@medicare.com",password:"1234",role:"Doctor",phone:"0300-2111111"},
  {name:"Dr. Sara Khan",email:"sara.khan@medicare.com",password:"1234",role:"Doctor",phone:"0300-2222222"},
  {name:"Dr. Bilal Hussain",email:"bilal.hussain@medicare.com",password:"1234",role:"Doctor",phone:"0300-2333333"},
  {name:"Dr. Fatima Noor",email:"fatima.noor@medicare.com",password:"1234",role:"Doctor",phone:"0300-2444444"},
  {name:"Dr. Usman Tariq",email:"usman.tariq@medicare.com",password:"1234",role:"Doctor",phone:"0300-2555555"},
  {name:"Dr. Ayesha Malik",email:"ayesha.malik@medicare.com",password:"1234",role:"Doctor",phone:"0300-2666666"},
  {name:"Dr. Hassan Raza",email:"hassan.raza@medicare.com",password:"1234",role:"Doctor",phone:"0300-2777777"},
  {name:"Dr. Maryam Shahid",email:"maryam.shahid@medicare.com",password:"1234",role:"Doctor",phone:"0300-2888888"},
  {name:"Dr. Ali Hamza",email:"ali.hamza@medicare.com",password:"1234",role:"Doctor",phone:"0300-2999999"},
  {name:"Dr. Zainab Fatima",email:"zainab.fatima@medicare.com",password:"1234",role:"Doctor",phone:"0300-3111110"},
  {name:"Dr. Muhammad Omar",email:"omar@medicare.com",password:"1234",role:"Doctor",phone:"0300-3222221"},
  {name:"Dr. Hira Shah",email:"hira.shah@medicare.com",password:"1234",role:"Doctor",phone:"0300-3333332"},
  {name:"Dr. Kamran Akhtar",email:"kamran.akhtar@medicare.com",password:"1234",role:"Doctor",phone:"0300-3444443"},
  {name:"Dr. Noor Ul Ain",email:"noor@medicare.com",password:"1234",role:"Doctor",phone:"0300-3555554"},
  {name:"Dr. Saad Ahmed",email:"saad.ahmed@medicare.com",password:"1234",role:"Doctor",phone:"0300-3666665"},
  {name:"Dr. Iqra Batool",email:"iqra.batool@medicare.com",password:"1234",role:"Doctor",phone:"0300-3777776"},
  {name:"Dr. Faisal Mehmood",email:"faisal.mehmood@medicare.com",password:"1234",role:"Doctor",phone:"0300-3888887"},
  {name:"Dr. Mahnoor Asif",email:"mahnoor.asif@medicare.com",password:"1234",role:"Doctor",phone:"0300-3999998"},
  {name:"Dr. Waqas Ali",email:"waqas.ali@medicare.com",password:"1234",role:"Doctor",phone:"0300-4111109"},
  {name:"Dr. Amna Tariq",email:"amna.tariq@medicare.com",password:"1234",role:"Doctor",phone:"0300-4222220"},
  {name:"Dr. Shahid Mehmood",email:"shahid.mehmood@medicare.com",password:"1234",role:"Doctor",phone:"0300-4333331"},
  {name:"Dr. Laiba Tariq",email:"laiba.tariq@medicare.com",password:"1234",role:"Doctor",phone:"0300-4444442"},
  {name:"Dr. Hamza Qureshi",email:"hamza.qureshi@medicare.com",password:"1234",role:"Doctor",phone:"0300-4555553"},
  {name:"Dr. Iqra Aslam",email:"iqra.aslam@medicare.com",password:"1234",role:"Doctor",phone:"0300-4666664"},
  {name:"Dr. Talha Anwar",email:"talha.anwar@medicare.com",password:"1234",role:"Doctor",phone:"0300-4777775"},
  {name:"Dr. Maryam Siddique",email:"maryam.siddique@medicare.com",password:"1234",role:"Doctor",phone:"0300-4888886"},
  {name:"Dr. Imran Sheikh",email:"imran.sheikh@medicare.com",password:"1234",role:"Doctor",phone:"0300-4999997"},
  {name:"Dr. Areeba Malik",email:"areeba.malik@medicare.com",password:"1234",role:"Doctor",phone:"0300-5111108"},
  {name:"Ali Raza",email:"ali.raza@gmail.com",password:"1234",role:"Patient",phone:"0321-3000000"},
  {name:"Fatima Bibi",email:"fatima.bibi@gmail.com",password:"1234",role:"Patient",phone:"0321-3012345"},
  {name:"Ahmed Nawaz",email:"ahmed.nawaz@gmail.com",password:"1234",role:"Patient",phone:"0321-3024690"},
  {name:"Sana Tariq",email:"sana.tariq@gmail.com",password:"1234",role:"Patient",phone:"0321-3037035"},
  {name:"Bilal Aslam",email:"bilal.aslam@gmail.com",password:"1234",role:"Patient",phone:"0321-3049380"},
  {name:"Hina Khalid",email:"hina.khalid@gmail.com",password:"1234",role:"Patient",phone:"0321-3061725"},
  {name:"Usama Iqbal",email:"usama.iqbal@gmail.com",password:"1234",role:"Patient",phone:"0321-3074070"},
  {name:"Maryam Aslam",email:"maryam.aslam@gmail.com",password:"1234",role:"Patient",phone:"0321-3086415"},
  {name:"Hamza Ali",email:"hamza.ali@gmail.com",password:"1234",role:"Patient",phone:"0321-3098760"},
  {name:"Areeba Khan",email:"areeba.khan@gmail.com",password:"1234",role:"Patient",phone:"0321-3111105"},
  {name:"Shahid Anwar",email:"shahid.anwar@gmail.com",password:"1234",role:"Patient",phone:"0321-3123450"},
  {name:"Noor Fatima",email:"noor.fatima@gmail.com",password:"1234",role:"Patient",phone:"0321-3135795"},
  {name:"Talha Mehmood",email:"talha.mehmood@gmail.com",password:"1234",role:"Patient",phone:"0321-3148140"},
  {name:"Iqra Shahid",email:"iqra.shahid@gmail.com",password:"1234",role:"Patient",phone:"0321-3160485"},
  {name:"Waqar Younis",email:"waqar.younis@gmail.com",password:"1234",role:"Patient",phone:"0321-3172830"},
  {name:"Amna Bibi",email:"amna.bibi@gmail.com",password:"1234",role:"Patient",phone:"0321-3185175"},
  {name:"Fahad Mustafa",email:"fahad.mustafa@gmail.com",password:"1234",role:"Patient",phone:"0321-3197520"},
  {name:"Mahnoor Fatima",email:"mahnoor.fatima@gmail.com",password:"1234",role:"Patient",phone:"0321-3209865"},
  {name:"Danish Ali",email:"danish.ali@gmail.com",password:"1234",role:"Patient",phone:"0321-3222210"},
  {name:"Sara Ahmed",email:"patient@medicare.com",password:"1234",role:"Patient",phone:"0321-3234555"}
];
function getUsers(){let u=localStorage.getItem("medicare_users");if(!u){localStorage.setItem("medicare_users",JSON.stringify(seedUsers));return seedUsers;}let users=JSON.parse(u);users.forEach(x=>{if(x.name==="Test Patient")x.name="Sara Ahmed";});localStorage.setItem("medicare_users",JSON.stringify(users));return users;}
function saveUsers(u){localStorage.setItem("medicare_users",JSON.stringify(u));}
function getDoctors(){let d=localStorage.getItem("medicare_doctors");if(!d){localStorage.setItem("medicare_doctors",JSON.stringify(seedDoctors));return seedDoctors;}return JSON.parse(d);}
const seedAppts = [
  {id:1000,patientName:"Ali Raza",patientEmail:"ali.raza@gmail.com",doctorId:1,doctorName:"Dr. Ahmed Raza",date:"2026-11-23",time:"10:00 AM",reason:"Chest pain checkup",status:"Approved"},
  {id:1001,patientName:"Fatima Bibi",patientEmail:"fatima.bibi@gmail.com",doctorId:1,doctorName:"Dr. Ahmed Raza",date:"2026-11-23",time:"11:00 AM",reason:"BP follow-up",status:"Pending"},
  {id:1002,patientName:"Ahmed Nawaz",patientEmail:"ahmed.nawaz@gmail.com",doctorId:2,doctorName:"Dr. Sara Khan",date:"2026-11-26",time:"10:00 AM",reason:"Heart checkup",status:"Pending"},
  {id:1003,patientName:"Sana Tariq",patientEmail:"sana.tariq@gmail.com",doctorId:3,doctorName:"Dr. Bilal Hussain",date:"2026-11-21",time:"11:00 AM",reason:"Headache",status:"Approved"},
  {id:1004,patientName:"Bilal Aslam",patientEmail:"bilal.aslam@gmail.com",doctorId:4,doctorName:"Dr. Fatima Noor",date:"2026-11-25",time:"12:00 PM",reason:"Migraine",status:"Pending"},
  {id:1005,patientName:"Hina Khalid",patientEmail:"hina.khalid@gmail.com",doctorId:5,doctorName:"Dr. Usman Tariq",date:"2026-11-23",time:"9:00 AM",reason:"Kidney test review",status:"Approved"},
  {id:1006,patientName:"Usama Iqbal",patientEmail:"usama.iqbal@gmail.com",doctorId:6,doctorName:"Dr. Ayesha Malik",date:"2026-11-22",time:"10:00 AM",reason:"Dialysis consultation",status:"Pending"},
  {id:1007,patientName:"Maryam Aslam",patientEmail:"maryam.aslam@gmail.com",doctorId:9,doctorName:"Dr. Ali Hamza",date:"2026-11-21",time:"9:00 AM",reason:"Eye checkup",status:"Approved"},
  {id:1008,patientName:"Hamza Ali",patientEmail:"hamza.ali@gmail.com",doctorId:10,doctorName:"Dr. Zainab Fatima",date:"2026-11-21",time:"3:00 PM",reason:"Vision test",status:"Pending"},
  {id:1009,patientName:"Areeba Khan",patientEmail:"areeba.khan@gmail.com",doctorId:11,doctorName:"Dr. Muhammad Omar",date:"2026-11-21",time:"10:00 AM",reason:"Tooth pain",status:"Approved"},
  {id:1010,patientName:"Shahid Anwar",patientEmail:"shahid.anwar@gmail.com",doctorId:13,doctorName:"Dr. Kamran Akhtar",date:"2026-11-21",time:"9:00 AM",reason:"Fever",status:"Completed"},
  {id:1011,patientName:"Noor Fatima",patientEmail:"noor.fatima@gmail.com",doctorId:15,doctorName:"Dr. Saad Ahmed",date:"2026-11-21",time:"9:00 AM",reason:"Child vaccination",status:"Pending"},
  {id:1012,patientName:"Talha Mehmood",patientEmail:"talha.mehmood@gmail.com",doctorId:7,doctorName:"Dr. Hassan Raza",date:"2026-11-21",time:"10:00 AM",reason:"Knee pain",status:"Pending"},
  {id:1013,patientName:"Iqra Shahid",patientEmail:"iqra.shahid@gmail.com",doctorId:17,doctorName:"Dr. Faisal Mehmood",date:"2026-11-21",time:"11:00 AM",reason:"Skin allergy",status:"Approved"},
  {id:1014,patientName:"Waqar Younis",patientEmail:"waqar.younis@gmail.com",doctorId:25,doctorName:"Dr. Talha Anwar",date:"2026-11-21",time:"10:00 AM",reason:"Stomach pain",status:"Pending"}
];
function getAppts(){let a=localStorage.getItem("medicare_appts");if(!a){localStorage.setItem("medicare_appts",JSON.stringify(seedAppts));return seedAppts;}let appts=JSON.parse(a);appts.forEach(x=>{if(x.patientName==="Test Patient")x.patientName="Sara Ahmed";});localStorage.setItem("medicare_appts",JSON.stringify(appts));return appts;}
function saveAppts(a){localStorage.setItem("medicare_appts",JSON.stringify(a));}
function currentUser(){return JSON.parse(localStorage.getItem("medicare_current")||"null");}
function logout(){localStorage.removeItem("medicare_current");location.href="index.html";}
function nav(){
  const u=currentUser();const el=document.getElementById("navLinks");if(!el)return;
  if(!u){el.innerHTML='<a href="index.html">Home</a><a href="login.html">Login</a><a href="register.html">Register</a>';}
  else if(u.role==="Patient"){el.innerHTML='<a href="index.html">Home</a><a href="book-appointment.html">Book Appointment</a><a href="my-appointments.html">My Appointments</a><a href="#" onclick="logout()">Logout ('+u.name+')</a>';}
  else if(u.role==="Doctor"){el.innerHTML='<a href="index.html">Home</a><a href="doctor-dashboard.html">Doctor Dashboard</a><a href="#" onclick="logout()">Logout ('+u.name+')</a>';}
  else{el.innerHTML='<a href="index.html">Home</a><a href="admin-dashboard.html">Admin Dashboard</a><a href="#" onclick="logout()">Logout ('+u.name+')</a>';}
}
function doctorCard(d){
  return '<div class="card"><h3>'+d.name+'</h3><p class="spec">'+d.spec+'</p><p>'+d.qual+'</p><p>Fee: Rs '+d.fee+'</p><p>'+d.timing+'</p><a class="btn" href="book-appointment.html?doctor='+d.id+'">Book Appointment</a></div>';
}
function loadDoctors(){
  const q=(document.getElementById("search").value||"").toLowerCase();
  const spec=document.getElementById("specFilter").value;
  const list=getDoctors().filter(d=>(!spec||d.spec===spec)&&(d.name.toLowerCase().includes(q)||d.spec.toLowerCase().includes(q)));
  document.getElementById("doctorList").innerHTML=list.length?list.map(doctorCard).join(""):'<p>No doctor found.</p>';
}
function register(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim(),password=document.getElementById("password").value,phone=document.getElementById("phone").value.trim();
  if(phone.replace(/\D/g,"").length!==11){alert("Please enter a valid 11-digit phone number.");return;}
  const users=getUsers();
  if(users.find(u=>u.email===email)){alert("This email is already registered. Please login.");return;}
  users.push({name,email,password,role:"Patient",phone});saveUsers(users);
  alert("Account created successfully. Please login.");location.href="login.html";
}
function login(e){
  e.preventDefault();
  const email=document.getElementById("email").value.trim(),password=document.getElementById("password").value;
  const u=getUsers().find(x=>x.email===email&&x.password===password);
  if(!u){alert("Wrong email or password.");return;}
  localStorage.setItem("medicare_current",JSON.stringify(u));
  if(u.role==="Doctor")location.href="doctor-dashboard.html";
  else if(u.role==="Admin")location.href="admin-dashboard.html";
  else location.href="index.html";
}
function fillDoctorSelect(){
  const sel=document.getElementById("doctor");if(!sel)return;
  sel.innerHTML=getDoctors().map(d=>'<option value="'+d.id+'">'+d.name+' - '+d.spec+' (Rs '+d.fee+')</option>').join("");
  const p=new URLSearchParams(location.search).get("doctor");if(p)sel.value=p; fillSlots();
}

function parseHour(s){const m=s.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);if(!m)return null;let h=+m[1]%12;if(m[3].toUpperCase()==="PM")h+=12;return h;}
function fmtHour(h){const ap=h>=12?"PM":"AM";const hh=h%12===0?12:h%12;return hh+":00 "+ap;}
function doctorSlots(doc){
  const m=(doc.timing||"").match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  let start=600,end=840;
  if(m){let sh=+m[1]%12; if(m[3].toUpperCase()==="PM")sh+=12; start=sh*60+ +m[2];
        let eh=+m[4]%12; if(m[6].toUpperCase()==="PM")eh+=12; end=eh*60+ +m[5];}
  const slots=[];
  for(let t=start;t<end;t+=30){const h=Math.floor(t/60),mm=t%60;const ap=h>=12?"PM":"AM";const hh=h%12===0?12:h%12;slots.push(hh+":"+(mm===0?"00":"30")+" "+ap);}
  return slots.length?slots:["10:00 AM","10:30 AM","11:00 AM","11:30 AM"];
}

function availableOn(doc,dateStr){
  if(!dateStr) return true;
  const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(dateStr+"T00:00:00").getDay()];
  const d=(doc.days||"").trim()||(((doc.timing||"").match(/^[^0-9]+/)||[""])[0]||"").trim();
  if(!d) return true;
  if(d==="Mon-Sat") return day!=="Sunday";
  if(d==="Mon-Fri") return !["Saturday","Sunday"].includes(day);
  const map={Mon:"Monday",Tue:"Tuesday",Wed:"Wednesday",Thu:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"};
  return d.split(",").map(x=>map[x.trim()]||x.trim()).includes(day);
}

function fillSlots(){
  const sel=document.getElementById("time"); if(!sel) return;
  const docId=+document.getElementById("doctor").value;
  const date=document.getElementById("date").value;
  const doc=getDoctors().find(d=>d.id===docId); if(!doc){sel.innerHTML="";return;}
  if(date&&!availableOn(doc,date)){sel.innerHTML='<option value="" disabled selected>Doctor not available on this day ('+(doc.days||doc.timing||"")+')</option>';return;}
  const booked=getAppts().filter(a=>a.doctorId===docId&&a.date===date&&a.status!=="Cancelled"&&a.status!=="Rejected").map(a=>a.time);
  sel.innerHTML=doctorSlots(doc).map(s=> booked.includes(s)
    ? '<option value="'+s+'" disabled>'+s+' (Booked)</option>'
    : '<option value="'+s+'">'+s+'</option>').join("");
}

function book(e){
  e.preventDefault();
  const u=currentUser();if(!u||u.role!=="Patient"){alert("Please login as Patient first.");location.href="login.html";return;}
  const doctorId=+document.getElementById("doctor").value,date=document.getElementById("date").value,time=document.getElementById("time").value,reason=document.getElementById("reason").value.trim();
  const appts=getAppts();
  if(appts.find(a=>a.doctorId===doctorId&&a.date===date&&a.time===time&&a.status!=="Cancelled"&&a.status!=="Rejected")){alert("This time slot is already booked for this doctor. Please choose another time.");return;}
  const doc=getDoctors().find(d=>d.id===doctorId);
  if(!availableOn(doc,date)){alert(doc.name+" is only available on: "+(doc.days||doc.timing||"")+". Please choose another date.");return;}
  if(!doctorSlots(doc).includes(time)){alert(doc.name+" is only available "+doc.timing+". Please choose a time slot within doctor hours.");return;}
  appts.push({id:Date.now(),patientEmail:u.email,patientName:u.name,doctorId,doctorName:doc.name,date,time,reason,status:"Pending"});
  saveAppts(appts);alert("Appointment booked successfully. Status: Pending");location.href="my-appointments.html";
}
function myAppts(){
  const u=currentUser();if(!u){location.href="login.html";return;}
  const list=getAppts().filter(a=>a.patientEmail===u.email);
  document.getElementById("apptList").innerHTML=list.length?list.map(a=>'<div class="card"><h3>'+a.doctorName+'</h3><p>Date: '+a.date+' | Time: '+a.time+'</p><p>Reason: '+(a.reason||"-")+'</p><p>Status: <b>'+a.status+'</b></p>'+(a.status==="Pending"?'<button class="btn danger" onclick="cancelAppt('+a.id+')">Cancel</button>':"")+'</div>').join(""):'<p>No appointments yet.</p>';
}
function cancelAppt(id){const a=getAppts();const x=a.find(v=>v.id===id);if(x)x.status="Cancelled";saveAppts(a);myAppts();}
function doctorAppts(){
  const u=currentUser();if(!u||u.role!=="Doctor"){location.href="login.html";return;}
  const doc=getDoctors().find(d=>d.email===u.email);
  const list=getAppts().filter(a=>doc&&a.doctorId===doc.id);
  document.getElementById("apptList").innerHTML=list.length?list.map(a=>'<div class="card"><h3>'+a.patientName+'</h3><p>Date: '+a.date+' | Time: '+a.time+'</p><p>Reason: '+(a.reason||"-")+'</p><p>Status: <b>'+a.status+'</b></p><button class="btn" onclick="setStatus('+a.id+',\'Approved\')">Approve</button> <button class="btn danger" onclick="setStatus('+a.id+',\'Rejected\')">Reject</button> <button class="btn" onclick="setStatus('+a.id+',\'Completed\')">Completed</button></div>').join(""):'<p>No appointments yet.</p>';
}
function setStatus(id,s){const a=getAppts();const x=a.find(v=>v.id===id);if(x)x.status=s;saveAppts(a);doctorAppts();}
function adminPanel(){ renderPatients(); renderDoctors(); renderDoctors();
  const u=currentUser();if(!u||u.role!=="Admin"){location.href="login.html";return;}
  const appts=getAppts(),docs=getDoctors();
  document.getElementById("stats").innerHTML='<div class="card"><h3>Total Doctors</h3><p class="big">'+docs.length+'</p></div><div class="card"><h3>Total Appointments</h3><p class="big">'+appts.length+'</p></div><div class="card"><h3>Pending</h3><p class="big">'+appts.filter(a=>a.status==="Pending").length+'</p></div><div class="card"><h3>Approved</h3><p class="big">'+appts.filter(a=>a.status==="Approved").length+'</p></div>';
  document.getElementById("apptList").innerHTML=appts.length?appts.map(a=>'<div class="card"><h3>'+a.patientName+' → '+a.doctorName+'</h3><p>Date: '+a.date+' | Time: '+a.time+'</p><p>Status: <b>'+a.status+'</b></p></div>').join(""):'<p>No appointments yet.</p>';
}

function addPatient(e){
  e.preventDefault();
  const name=document.getElementById("pname").value.trim(),email=document.getElementById("pemail").value.trim(),password=document.getElementById("ppassword").value,phone=document.getElementById("pphone").value.trim();
  if(phone.replace(/\D/g,"").length!==11){alert("Please enter a valid 11-digit phone number.");return;}
  const users=getUsers();
  if(users.find(u=>u.email===email)){alert("This email is already registered.");return;}
  users.push({name,email,password,role:"Patient",phone});saveUsers(users);
  alert("Patient added successfully: "+name);adminPanel();
}
function renderPatients(){
  const box=document.getElementById("patientList"); if(!box) return;
  const patients=getUsers().filter(u=>u.role==="Patient");
  box.innerHTML=patients.map(u=>'<div class="card"><h3>'+u.name+'</h3><p>'+u.email+'</p><p>'+(u.phone||"")+'</p></div>').join("")||"<p>No patients yet.</p>";
}

function addDoctor(e){
  e.preventDefault();
  const name=document.getElementById("dname").value.trim(),spec=document.getElementById("dspec").value,fee=+document.getElementById("dfee").value,timing=document.getElementById("dtiming").value.trim(),qual=document.getElementById("dqual").value.trim(),email=document.getElementById("demail").value.trim();
  const days=(((timing.match(/^[^0-9]+/)||[""])[0]||"").trim())||"Mon-Sat";
  const docs=getDoctors();docs.push({id:Date.now(),name,spec,days,fee,timing,qual,email});localStorage.setItem("medicare_doctors",JSON.stringify(docs));
  const users=getUsers();users.push({name,email,password:"1234",role:"Doctor",phone:""});saveUsers(users);
  alert("Doctor added successfully.");adminPanel();
}
document.addEventListener("DOMContentLoaded",nav);

function renderDoctors(){
  const box=document.getElementById("adminDoctorList"); if(!box) return;
  box.innerHTML=getDoctors().map(d=>'<div class="card"><h3>'+d.name+'</h3><p>'+d.spec+' | Rs '+d.fee+'</p><p>'+d.timing+'</p><button class="btn danger" onclick="deleteDoctor('+d.id+')">Delete</button></div>').join("")||"<p>No doctors yet.</p>";
}
function deleteDoctor(id){
  if(!confirm("Delete this doctor?")) return;
  localStorage.setItem("medicare_doctors",JSON.stringify(getDoctors().filter(d=>d.id!==id)));
  adminPanel();
}
