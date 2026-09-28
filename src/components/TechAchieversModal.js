"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

const TechAchieversModal = ({ isOpen, onClose, program }) => {
  const [formData, setFormData] = useState({
    title: `${program} Application`,
    name: "",
    email: "",
    phone: "",
    state: "",
    status: "",
    institution: "",
    fieldOfStudy: "",
    cohort: "",
    canCommit: "",
    techInterests: "",
    techSkills: "",
    projectExperience: "",
    whyJoin: "",
    goals: "",
    africanImpact: "",
    confirmAccurate: false,
    confirmContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
versModal;TechAchiefault  de

export>
  );
};sition   </Tranlog>
 Dia    </iv>
      </d</div>
            .Child>
  sition </Tran
           >.Panel</Dialog   
           >orm </f         
      iv>     </d          utton>
   </b                    ation"}
icmit Applubg..." : "SSubmittin ? "isSubmitting        {              >
                   0"
 d:opacity-5 disableoffset-2ble:ring-focus-visi] ing-[#E26015ible:r focus-visng-2e:riblfocus-visie-none tlin6] focus:oug-[#04192over:bite hum text-whsm font-medi py-2 text-px-4015] #E26arent bg-[ansper border-trd bordnded-menter roustify-cx juline-fleName="in    class                 ng}
 ubmittisabled={isS         di   
          "mite="sub  typ          
             <button               n>
  tto   </bu                l
        Cance            >
                     2"
  ng-offset--visible:ri-500 focusg-grayinle:rus-visib-2 focisible:ringe focus-vutline-nons:oocu-200 fgrayg-:ber-900 hovm text-gray font-mediusmtext- py-2 0 px-4ay-10-grarent bgtransper border-d bordnded-mroucenter fy-lex justine-fame="inliclassN                      bmitting}
d={isSu disable               se}
      ={onClo     onClick            "
     "buttonype=   t                button
         <      >
        space-x-3"justify-end ex -6 fl"mtclassName=iv           <d    v>

            </di    
      iv>         </d   
        iv></d              
             </div>                  el>
        </lab               an>
    00">*</spxt-red-5ame="teclassN. <span view it          re                  be used to
l ormation wil inft mystand thaer   und                      and
    onlicati my appoutntacted abe co to b   I agree                  
       gray-700">xt-m te-s-2 textme="mllassNal cabe    <l                  />
                             rounded"
 gray-300 5] border--[#E2601cus:ring015] fo26#Etext-[-4 w-4 "mt-1 h className=                           required
                          }
                                })
                        ecked,
    .target.chmContact: e     confir                           rmData,
    ...fo                         ata({
   rmD    setFo                      (e) =>
    hange={     onC                   t}
    mContac.confired={formDatacheck                         t"
   ontacconfirmCe="       nam                     "
ckboxhe="c       type                 
    input        <              rt">
    ex items-stassName="flv cla   <di                       </div>

                   
      </label>                  pan>
     /sd-500">*<-reName="textpan classrate. <sis accu                           ication
 in this appln atioformat the in confirm th        I                  700">
  ext-gray-xt-sm tme="ml-2 tessNa  <label cla                    
        />                    
  00 rounded"-3rder-gray26015] bo-[#Eingus:r15] foct-[#E260ex w-4 t h-4t-1="mssName      cla                      quired
         re               
           }                      })
                        
     ecked,charget..tte: efirmAccura         con                ta,
          ...formDa                            ta({
 etFormDa     s               
          (e) =>onChange={                       
     ccurate}nfirmAmData.coorked={f        chec               "
     rateconfirmAccu     name="                 "
      heckbox"c  type=                      input
               <        
       ">startflex items-assName="cl <div                       y-3">
 ="space-classNamev         <di           
   4>
  </h               ation
     irm Conf       4.                 00 mb-3">
-gray-9textemibold t-sssName="fon  <h4 cla                     <div>
                 v>

     </di        
              </div>           
      iv></d                      />
                      m"
      ext-sE26015] sm:ts:ring-[#015] focurder-[#E26sm focus:bo-300 shadow-rder-grayder boed-md borndou-full rpy-2 block wt-1 px-3 ="massName        cl                    00}
{13  maxLength=                          ={4}
ows       r                   
     required                        
 ge}anleChhandhange={     onC                      
 icanImpact}ata.afrmD value={for                         "
  ricanImpacte="af  nam                         rea
 texta  <                         </p>
                     rds.
     to 200 wo    Up                    1">
    500 mt-ext-gray-xt-xs t"telassName=<p c                         label>
         </                  /span>
00">*<d-5-retextName="sspan cla Africa? <s                    
       e inor elsewhera Nigeriin unity opportge or llen   cha                   
      o address arn tu leawhat youse ould you  How w                         
  gray-700">edium text-t-m fontext-smlock e="blassNam c     <label                   iv>
            <d          

    v>di   </                 
        />                  "
     sm:text-smng-[#E26015]5] focus:rier-[#E2601focus:borddow-sm ray-300 shar-ger bordemd bord rounded-w-fullck  blopx-3 py-2-1 mtlassName="           c       
          th={1000}axLeng         m                   
3}ws={ro                       d
       require                     
     hange}nge={handleConCha                        ls}
    ata.goae={formD     valu                       "goals"
      name=                    extarea
          <t                
  </p>                          150 words.
to Up                            ">
 0 mt-1xt-gray-50 texsext-Name="t<p class                       l>
        </labe                  n>
   /spa500">*<ed-"text-rlassName= <span c     months?             
          threef the  end oheeve by thi acope toat do you h Wh                       ">
    700-gray-ext t font-mediumt-smexock t"blme=Naclass <label                   iv>
          <d                  /div>

              <       />
                         "
       text-sm26015] sm::ring-[#E] focusr-[#E26015focus:bordehadow-sm gray-300 ser-ordrder bunded-md boull ro-2 block w-fpy-3  px-1mtame="     classN                      300}
 maxLength={1                          4}
  ws={   ro                   
        required                        Change}
  andleange={h      onCh                  Join}
    whyData.lue={form   va                "
         "whyJoine=        nam                    textarea
           <                 </p>
                    words.
    0     Up to 20                        0 mt-1">
-gray-50xt"text-xs te className=       <p                label>
          </                   >
0">*</spanxt-red-50"tee=Nam <span class                 
          am?{" "}erator ProgrAccel                      rs
      hieveTech Ace n th joiu want toWhy do yo                         0">
   ray-70 text-gmediumt-sm font-lock tex="bassNameabel cl        <l            v>
              <di              

  >      </div                 >
  /                        sm"
  sm:text-6015][#E2ing-us:r5] focrder-[#E2601cus:boadow-sm foay-300 shborder-grder d bor-ml roundedk w-fuloc3 py-2 bl-1 px-me="mt     classNa                    00}
   {10axLength=           m                ows={3}
        r                   
  nge}dleChanChange={han     o                      erience}
 ojectExpormData.pre={flu   va                       
  ience"Experjectproame="          n                  tarea
tex      <            >
        /p    <                      50 words.
  Up to 1                 >
         -1"y-500 mtrat-gext-xs texme="tNaclass  <p                         </label>
                   ?
       ontintribuas your co. What wve worked on          ha        
          ou activity yge, orallenect, chprojout a Tell us ab                       ">
     -gray-700dium textmefont-k text-sm sName="blocabel clas      <l                         <div>
                 
  v>
</di              
                />                   xt-sm"
 6015] sm:teing-[#E2] focus:rer-[#E26015 focus:bord0 shadow-smgray-30er-border bordded-md rounk w-full blocx-3 py-2 t-1 p"me=    classNam                        rows={3}
                           nge}
 dleChaange={han  onCh                      ls}
    chSkilata.teformDvalue={                           
 "chSkills   name="te                       
  reaexta<t                      /p>
        <              r.
         so faplored    ex                      have
   at theyscribe whelcome to dere winners a Beg                          1">
 mt-gray-500 ext- tme="text-xsassNa    <p cl                      l>
abe       </l                ve?
      ha                        already
 o you perience dexy skills or technolog   What                    >
      0"ay-70dium text-gr font-meock text-smame="bll classN     <labe                   
    <div>                     iv>

      </d          
                   />                
"xt-sm] sm:te-[#E26015:ring26015] focusder-[#Esm focus:bor-300 shadow-ayr-grborder borderounded-md ock w-full blpx-3 py-2 me="mt-1 lassNa        c                   }
  rows={2                         equired
         r             e}
        angeChandlange={h  onCh                          sts}
techInterermData.foue={        val          
          rests"chInteme="te         na           
        reaxta  <te               
             </p>                      m.
ly name theand briefto three  up  Select                        >
    mt-1"t-gray-500t-xs texexe="tssNamla     <p c                    abel>
   </l                        *</span>
d-500">"text-ressName=g? <span clain learn                          in
  erestedntst iu moyoareas are ogy hich technol           W                 -700">
m text-grayfont-mediuk text-sm me="blocclassNael lab         <       
          v>       <di        
         space-y-4">lassName="div c        <        4>

        </h                    ce
ien experests and inter   3. Your                    -3">
 mbt-gray-900 emibold tex"font-same=classN        <h4            4">
   order-b pb-ame="b <div classN             

            </div>              v>
/di         <         div>
          </        
          lect>/se           <          tion>
     /op <                           
tyabiliavailiscuss my ike to dwould l         I                 ty">
     li availabi discuss my like to would value="I<option                 
           /option>"No">No< value=    <option                    ion>
    /optYes<">Yesue="on val      <opti                    option>
  </...">Select"ion value=    <opt                        >
                      "
    :text-sm26015] smcus:ring-[#Efo[#E26015] order-m focus:b0 shadow-sy-30der-grarder borded-md boull rounck w-fy-2 blot-1 px-3 pme="mNaclass                            d
   require                 
        ge}eChan={handlnChange o                       }
    nCommit.camDataor  value={f                         ommit"
 anCname="c                           <select
                 
          /label>          <       
         ">*</span>red-500Name="text-<span classort? onth coh        m               ee
      the thrthroughouticipating mit to partCan you com                            y-700">
m text-grant-mediu text-sm fo="blocklassName<label c                     <div>
                          div>

       </                 ect>
          </sel          >
          </option                     er
      embember–Novept         S                     ovember">
tember–N"Sepalue=tion v  <op                        /option>
  ">May–July<ly="May–Juption value  <o                     >
     onMarch</optiy–">Januarhy–Marce="Januar valu  <option                        ion>
  t...</opt="">Selecaluen v      <optio                   >
                         m"
    -ssm:text015] #E26us:ring-[15] foc60der-[#E2ocus:bordow-sm fgray-300 shaorder-d border bll rounded-mock w-fu3 py-2 bl-1 px-Name="mt      class                   ired
       requ                        eChange}
ange={handl onCh                         }
  .cohorttaue={formDaal   v                     ort"
    ="coh   name                   
      lect      <se             
       l>abe </l              
           an>-500">*</sp="text-redameassNn cl<spa                          " "}
   for?{ngapplyie you t ar Which cohor                           >
t-gray-700" texumm font-medixt-sk telocssName="bbel cla     <la                       <div>
               ">
       ace-y-4"spssName=cla <div               

       /h4>  <                 
   rtur coho       2. Yo                 mb-3">
 ray-900d text-gsemibole="font-ssNam cla     <h4            ">
     der-b pb-4Name="borlass <div c                   </div>

                   /div>
       <          iv>
              </d                />
                    "
      ] sm:text-sm#E26015s:ring-[] focu6015border-[#E2cus:fom shadow-say-300 grorder-der bd borunded-m w-full ropy-2 block1 px-3 mt-ame="     classN                 
      nge}dleChae={hanhang     onC                      tudy}
 fSata.fieldO={formD       value             "
        StudydOfel="fi name                           ext"
ype="t          t           
           <input                     label>
          </          ine
       r disciplof study oeld    Fi                         
y-700">t-graium texm font-medext-se="block tamssNel cla<lab                     
     iv>   <d                 
      </div>
                    >
    /                    t-sm"
    texsm:E26015] ocus:ring-[#5] f#E2601er-[s:bordocuow-sm f shad-gray-300er borderorded-md bw-full roundlock  py-2 bmt-1 px-3ssName="la          c               Change}
   ange={handlenCh   o                        tion}
 Data.instituvalue={form                          
  titution"ame="ins       n                   t"
  ex   type="t                       <input
                         bel>
         </la              
      nt  assignme                      mary
     of priplaceution or institour  Name of y                    ">
       0text-gray-70m ont-mediuck text-sm fbloName=" class      <label           
              <div>                v>

        </di                   
elect>      </s                    n>
ember</optiober">NYSC m="NYSC memoption value       <            
           </option>                     
     duate Recent gra                            ">
 duatent gravalue="Receon opti <                      on>
     opti   </                      
   studentnt    Curre                         nt">
  studerrent "Cuue=option val       <                    /option>
 .<">Select..e="tion valu        <op                          >
              m"
      :text-ssmE26015] ocus:ring-[#015] forder-[#E26focus:badow-sm -300 shrder-grayboborder rounded-md l ock w-ful3 py-2 bl1 px-mt-ssName="     cla                 red
      requi                     ge}
       Chan={handle onChange                       s}
    ta.statu={formDa  value                    "
      usame="stat  n                  
        <select                        bel>
  </la                         /span>
 d-500">*<-re"textassName=pan cl          <s           "}
       {" es you?scribhich best de     W                      ">
 -700xt-grayedium tet-msm font-k texme="bloclassNa <label c                 
            <div>                    div>

       </                   />
                "
        ext-sm] sm:t-[#E26015:ringocus15] fer-[#E260:bordow-sm focusshadr-gray-300  bordemd bordernded-ull rou block w-fx-3 py-2="mt-1 pclassName                     ed
          requir                        nge}
 hange={handleC  onCha                         .state}
 rmData   value={fo                    "
     "stateme=      na            
          "e="text        typ          
               <input                l>
     abe     </l                  an>
   ">*</sp0-red-50sName="text <span clas                           }
idence{" "tate of res           S                ">
 00ext-gray-7ium tmedfont-ext-sm me="block tNaassbel cl    <la               
       div>       <              iv>

        </d               />
                           "
   ] sm:text-sm[#E26015ring-focus:15] 260:border-[#E-sm focusow300 shady-grar- bordederd bornded-mrou w-full -2 blockpx-3 py="mt-1   className               
            required                      
     hange}handleC={onChange                        ne}
    .photaue={formDa   val                       
  e="phone"        nam                  l"
  te   type="                       put
      <in                     l>
 be      </la                 /span>
   ">*<red-500xt-ame="te classN   <span                         " "}
rred){efe prWhatsAppone number (          Ph             
     ">gray-700medium text-xt-sm font-e="block telassNam clabel   <                    
        <div>                 
  div>
        </                     />
                 "
    xt-smsm:te[#E26015] ng-focus:rir-[#E26015]  focus:bordeshadow-smray-300 border-grder d bo rounded-mw-fullock py-2 blt-1 px-3 lassName="m        c               ired
           requ                   
   dleChange}hange={han         onC                   email}
a.={formDat     value                      
 il"mame="e     na                      
 ""emailpe=       ty              ut
          <inp                    
       </label>                  n>
    ">*</spaext-red-500assName="t <span clil address     Ema                      ">
 -700-gray textdium-sm font-metext"block Name=bel class     <la                iv>
             <d          
      >
       </div             />
                          
    sm"15] sm:text--[#E260ng:ricus[#E26015] focus:border-m foow-sadgray-300 shder- bored-md borderl roundck w-ful-3 py-2 blo"mt-1 pxassName=  cl                          equired
        r                  Change}
  ange={handle   onCh                       
  me}a.naDatue={form       val                    "name"
    name=                
         e="text"         typ                  input
  <                        
  </label>                     span>
    >*</xt-red-500"="te classNameme <spanl na    Ful                     -700">
   aydium text-gr-sm font-melock textme="blassNa  <label c                  >
        <div              
        -y-4">ame="space classNiv   <d                   

/h4>  <               
     t you    1. Abou           
         00 mb-3">t-gray-9mibold texe="font-selassNamh4 c        <    
          4">der-b pb-="bormediv classNa    <        >
         pr-2"toverflow-y-auvh] o-h-[60-5 maxe-yName="spac <div class                >

 itle} /={formData.t" valueme="title na"hidden"ut type=      <inp          "mt-4">
  lassName=Submit} cit={handleubm onS   <form           

            )}div>
             </           ain.
se try agon. Pleaatig applicttinsubmir Erro            
        d">00 roundext-red-7100 tered--2 p-2 bg-="mtssNameiv cla   <d              (
  or" &&s === "errStatu     {submit        )}

                  v>
      </di        
     sfully!cesmitted sucon subtiplica Ap                  ">
  roundedeen-7000 text-gren-102 p-2 bg-greName="mt- class        <div
          ess" && ("succ== Status =submit          {e>

      Dialog.Titl  </            }
  am{progror Apply f                       >
       
    00"-gray-9g-6 text leadint-mediumext-lg foname="t  classN               h3"
       as="      itle
      log.T    <Dia           
 ion-all">w-xl transitle shadot align-middt-lef p-6 tex2xl bg-whiteded-dden rounow-hiorm overfl-2xl transfx-ww-full maassName="l clalog.Pane        <Di>
                  cale-95"
 s"opacity-0eaveTo=      l       00"
 ale-1acity-100 scrom="opeaveF          l"
    200duration-in ve="ease-         lea
     e-100"100 scalty-rTo="opaci ente        
     cale-95"0 s"opacity-rom=      enterF
        n-300"out duratio"ease-er=        ent
      gment} as={Fra           n.Child
   <Transitio    ">
       enterp-4 text-c-center r justifycenteems-h-full itin-e="flex mNam class       <div>
   "y-autoerflow-ov-0 etixed insme="fassNa    <div cl    .Child>

ion  </Transit />
      acity-25"ck bg-op-0 bg-bla insetme="fixedassNa <div cl
         "
        >acity-0op="    leaveTo
      100"="opacity-From   leave    00"
   ation-2ase-in dure="e     leav  100"
   y-="opacit    enterTo
      ity-0"opac="om    enterFr     
 n-300"t duratior="ease-ou      enteent}
      as={Fragm     n.Child
   ansitio<Tr       >
 ={onClose}50" onClose"relative z-ame=lassNiv" cialog as="d    <Dment}>
  as={Fragpen} ={isOear showion app<Transit
     ( return;
  };

 e,
    })et.valu]: e.targmeget.naar
      [e.tata,...formD
      ormData({
    setF= (e) => {eChange t handl
  cons
  };  }
lse);
  mitting(faIsSub   set
    finally {
    }");edtion failcripp subs"Mailchimor(err   toast.
   err);ror:", mp er"Mailchi.error(    console
  h (err) {tc  } ca   });
     }),
     le,
   .titormDatatitle: f        cohort,
  : formData. cohort      tion,
   ata.institurmDion: fonstitut         i
 atus,.sttaDarm fo     status:     te,
Data.staate: form st
         hone,ata.pphone: formD         
 || "",: lastName   lastName      name,
  formData.ame || e: firstN    firstNaml,
      ormData.emai f    email:  {
    ngify(triSON.sody: J
        b },n/json"icatio"appl": t-Typenten"Co: { ders hea   OST",
    : "Phod  met{
      ams", grapi/protch("/it fewa  a   
 " ");rr.join( lastNameA lastName =onst");
      clit(" .spata.nameormDrr] = f...lastNameAirstName,  [f    const  try {
    }

  );
  s("error"SubmitStatuet      s) {
tch (error}
    } ca      
");s("errorubmitStatuetS  s      } else {
 00);
     }, 20        });
         : false,
 tactirmCon        confalse,
    rate: fAccunfirm        co  t: "",
  fricanImpac    a      s: "",
         goal,
     in: ""whyJo          ",
  ce: "jectExperien        pro",
    hSkills: "  tec
          ,rests: ""nte  techI     ",
     "mmit:  canCo       
    ohort: "",          c
  udy: "", fieldOfSt    
       "",tution:    insti
         ",atus: "        st"",
    ate:   st     ",
     "    phone:        
 email: "",          ",
  e: "     nam     ion`,
  } Applicatrogramle: `${p      tita({
      at    setFormD
      ;(null)ubmitStatus  setS
         onClose();
          {meout(() =>      setTiess");
  ucctatus("submitS      setSse.ok) {
   if (respon

        });
   ,a)y(formDatngify: JSON.stri      bod      },
  n",
  on/jso "applicatie":nt-Typte      "Con   ders: {
 ea     h
   "POST",od:       methg", {
  xjkywanpree.io/f/://formshttps"wait fetch(se = aconst respon
        try {ue);

  ing(trmittsSub);
    setIault(entDef
    e.prev