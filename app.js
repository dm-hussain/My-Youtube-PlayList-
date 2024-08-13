let mainSection = document.querySelector('#main1');
let homeNavigationBtn = document.querySelector('.home-btn');
let topScrollBtn = document.querySelector('.top-btn');
let bottomScrollBtn = document.querySelector('.bottom-btn');

let courseJavaScriptBtn = document.querySelector('#course-javascript');
let learnJsSection = document.querySelector('.learn-js');

let anuragSirBtn = document.querySelector('#anurag');
let anuragSirSection = document.querySelector('.anurag-sir');

let shradhaMamBtn = document.querySelector('#shradha');
let shradhaMamSection = document.querySelector('.shradha-mam');

let videoBox = document.querySelector('.video-box');

let courseTypeScriptBtn = document.querySelector('#course-typescript');
let learnTsSection = document.querySelector('.learn-ts');

// course JavaScript Section

courseJavaScriptBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
  homeNavigationBtn.classList.remove('hide');
  learnJsSection.classList.remove('hide');
  mainSection.classList.add('hide');

  console.log('java script btn clicked');
});

// course TypeScript Section

courseTypeScriptBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
  homeNavigationBtn.classList.remove('hide');
  learnTsSection.classList.remove('hide');
  mainSection.classList.add('hide');

  console.log('java script btn clicked');
});

// Anurag Sir/JavaScript Btn***************************

anuragSirBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
  // location.reload();
  homeNavigationBtn.classList.remove('hide');
  anuragSirSection.classList.remove('hide');
  topScrollBtn.classList.remove('hide');
  bottomScrollBtn.classList.remove('hide');

  learnJsSection.classList.add('hide');
  mainSection.classList.add('hide');

  console.log(' anurag btn clicked');
});

// Shradha Mam/JavaSript Btn***************************

shradhaMamBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);

  homeNavigationBtn.classList.remove('hide');
  shradhaMamSection.classList.remove('hide');
  topScrollBtn.classList.remove('hide');
  bottomScrollBtn.classList.remove('hide');

  learnJsSection.classList.add('hide');
  mainSection.classList.add('hide');

  console.log(' shradha btn clicked');
});

// Home navigation Button

function homeNavigation() {
  window.scrollTo(0, 0);
  location.reload();
  homeNavigationBtn.classList.add('hide');
  topScrollBtn.classList.add('hide');
  bottomScrollBtn.classList.add('hide');
  mainSection.classList.remove('hide');
  learnJsSection.classList.add('hide');
  anuragSirSection.classList.add('hide');
  shradhaMamSection.classList.add('hide');
  console.log('home btn was clicked');
}

// Top navigation Button...............

function topScroll() {
  window.scrollTo(0, 0);

  console.log('top scroll btn was clicked');
}

// Bottom navigation Button...............

function bottomScroll() {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
  });

  console.log('bottom scroll btn was clicked');
}

// ++++++++++++++++++++++++++++

function loadIframe(box, videoUrl, videoTitle) {
  console.log('box clicked');
  box.classList.remove('bg-thumbnail');

  box.innerHTML = `
        <iframe width="560" height="315" src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p id="video-title">${videoTitle}</p>`;
}

function loadIframe_1(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/9P9h5h9kBmU?si=CN-DdzvGZspYxtct',
    'Ep-00 | Trailer'
  );
}

function loadIframe_2(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/5JFrFM3pj5s?si=VyU04IKZ01j7IPdC',
    'Ep.01 | Story of JavaScript | JavaScript History'
  );
}

function loadIframe_3(box) {
  loadIframe(
    box,
    '  https://www.youtube.com/embed/-lBfLogYtZk?si=arbSa-VtGqvTVLXd ',
    'Ep.02 | Introduction to JavaScript  '
  );
}

function loadIframe_4(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/-3H3XJHwzRI?si=wBaj7jIPZGS1LEXG ',
    'Ep.03 | Introduction to JavaScript  '
  );
}

function loadIframe_5(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/RFx0PnTqxfI?si=uDumZnMErcwv1jmF',
    'Ep.04 | Introduction to JavaScript '
  );
}

// ***************************************

function loadIframe_6(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/FMhPjmO0ziE?si=hYCA-fyTACxvoR0q',
    'Ep.05 | Watch Your Code Running Line by Line in Dev Tools'
  );
}

function loadIframe_7(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/aHayyIbxIAo?si=gstXIem8E4uYdmk3',
    ' Ep.06 | Dialog Boxes in JavaScript | Alert, Confirm, & Prompt '
  );
}

function loadIframe_8(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/Z4x2EgRkJ1g?si=QA46lctRPzFjzygq',
    'Ep.07 | Template Literals | String Methods & Properties '
  );
}

function loadIframe_9(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/H3-1EQW2evA?si=sTeVAyu7fq4TkcqO',
    'Ep.08 | Math Object in JavaScript'
  );
}

function loadIframe_10(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/UPARgGhfb5E?si=g4ygtJJI57_dQQ0y',
    'Ep.09 | Most Used Concept in JavaScript | Truthy and Falsy Values '
  );
}

function loadIframe_11(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/HVhD13U5Bh0?si=Ji8YW6B6IbvD-ZTM',
    'Ep.10 | Comparison Operators in JavaScript Explained in Hindi'
  );
}

function loadIframe_12(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/hjSSoCRU_nc?si=MJjrA23PDyCZfc0l',
    'Ep.11 | Logical Operators in JavaScript | And, Or, Not, Operators'
  );
}

function loadIframe_13(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/6-dv7UETgJg?si=3lEahIq-tReGOwmi',
    'Ep.12 | Decision Making in JavaScript Using IF Statement '
  );
}

function loadIframe_14(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/7lld3Xk5usQ?si=G3xi_XNPeWLAlyzW',
    'Ep.13 | Optimize Decision Making Using Else If and Else '
  );
}

function loadIframe_15(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/Hc0O0u9C_u4?si=ztQ6IbwbVSRVMFUy',
    'Ep.14 | Nested IF ELSE Statement in JavaScript'
  );
}

function loadIframe_16(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/ebJVbq6BDFI?si=LcSlqdtT30rj1FDp',
    'Ep.15 | Switch Statement in JavaScript | Switch Case'
  );
}

function loadIframe_17(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/uO0RRCBsEIY?si=s2UHcGim_yd1YO2f ',
    'Ep.16 | Ternary Operator Explained  '
  );
}

function loadIframe_18(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/Gqlv6inCZqI?si=gFx30aYsqCYkHgot',
    ' Ep.17 | How to See Variable Address in Dev Tools? | Memory Location'
  );
}

function loadIframe_19(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/1Rhdtq5pYoY?si=ylp1kTEEUKOCukSH ',
    'Ep.18 | Objects in JavaScript Explained in Depth '
  );
}

function loadIframe_20(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/K2v08vu-tK0?si=HdiZlvLh4CVl3ZjI ',
    ' Ep.19 | Object.freeze( ) vs Object.seal( ) in JavaScript'
  );
}
function loadIframe_21(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/xerUjcKdA0o?si=igL69GIzFxP-Yp9w',
    'Ep.20 | Arrays Explained in Depth '
  );
}
function loadIframe_22(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/RTfNjbqQokI?si=AUb6hodjtlYUuqDL',
    ' Ep.21 | Most Common Array Methods in JavaScript '
  );
}

function loadIframe_23(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/hhO8aiDgN9A?si=DUHpHLw8NZ_TZLIc',
    'Ep.22 | Multidimensional Arrays are Easier Than You Might Think  '
  );
}

function loadIframe_24(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/l_YFa0SKqtY?si=Ze7Za626gPccIvag ',
    ' Ep.23 | Right Way to Copy Objects and Arrays | Deep Vs Shallow Copy '
  );
}

function loadIframe_25(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/AnVdRB2n7kg?si=6L6EeggdPgufPODI ',
    'Ep.24 | Combined Assignment Operators in JS | Increment and Decrement Operator '
  );
}

function loadIframe_26(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/IoDfreDgTgM?si=N6hJEsbNa06ZE0vR ',
    'Ep.25 |  While Loop in JavaScript | Explained in Depth '
  );
}

function loadIframe_27(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/jsttBfsjIWc?si=aqm2RpJa6NvOlSNz ',
    'Ep.26 |  For Loop in JavaScript  '
  );
}

function loadIframe_28(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/XSevUMHPC3o?si=XsddTgrYO3vaUu81',
    'Ep.27 | Do While Loop in JavaScript  '
  );
}

function loadIframe_29(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/htufr8nVeu4?si=daOX_12A3gnUwxfe',
    'Ep.28 | Introduction to Functions '
  );
}

function loadIframe_30(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/hz9Zpv36jAM?si=QyU7L85Qpt3hW5SJ',
    'Ep.29 |  Return Keyword in JavaScript Explained in Depth '
  );
}

function loadIframe_31(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/JfW1fBRCeLU?si=TFPm3c6HVJ82lrWk ',
    ' Ep.30 | Execution Context in JavaScript Explained in Depth'
  );
}

function loadIframe_32(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/kfxITcxEsG0?si=LSkZSgqO6q5vJXI9 ',
    'Ep.31 |  Call Stack in JavaScript  '
  );
}

function loadIframe_33(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/E5af3VAaGCs?si=gWkyCMfmcrduJZ71',
    'Ep.32 |  What is Hoisting? | Most Asked JS Interview Question '
  );
}

function loadIframe_34(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/7QhMQRRBpZ0?si=4KZqcd370ZoK0ZQH',
    ' Ep.33 |  Global Scope vs Local Scope in Javascript'
  );
}

function loadIframe_35(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/dvNqTN_nokg?si=7Lb1noNoh1bs3SVJ',
    ' Ep.34 | Lexical and Block Scope Explained in Depth'
  );
}

function loadIframe_36(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/P6G0ucf2nSw?si=id934yfPhPj0RJa2 ',
    ' Ep.35 |  Higher Order Functions and Callbacks in JavaScript '
  );
}

function loadIframe_37(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/fn9FjfV7rxA?si=RwAB5s7xVgkCE_Kn',
    ' Ep.36 |  setTimeout and setInterval in JavaScript'
  );
}

function loadIframe_38(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/JMeT-Uskm7M?si=KeZ4zdLHxbJeGOU9 ',
    ' Ep.37 |  Event Loop and Callback Queue in JavaScript'
  );
}

function loadIframe_39(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/w_-fVsa6qns?si=E8N4R9kgQOg_Irjj ',
    'Ep.38 | Returning Functions with Closures in JavaScript '
  );
}

function loadIframe_40(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/xzTmgO-toMg?si=GPVYuTXPUYdeQTB8 ',
    'Ep.39 | Difference between Methods and Functions in JavaScript '
  );
}

function loadIframe_41(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/EDnmuuBTbHw?si=vY6b0xYGatLqkpxR ',
    ' Ep.40 |  Arrow Functions in JavaScript | ES6'
  );
}

function loadIframe_42(box) {
  loadIframe(box, 'https://www.youtube.com/embed/SSe6XCOcW0A?si=2Zg-PRYXnmhEOiOs ', ' Ep.41 | for of vs for in Loop in JavaScript | ES6  ');
}

function loadIframe_43(box) {
  loadIframe(box, ' src="https://www.youtube.com/embed/ZCJtWCSZ5p8?si=XJOnKIygRLJ4ozgB  ', 'Ep.42 | forEach Array Method in JavaScript ');
}

function loadIframe_44(box) {
  loadIframe(box, ' https://www.youtube.com/embed/Kc3kSIpL6x8?si=oEqsVDYkfYZZEwhz', ' Ep.43 | Map, Filter, Reduce in JavaScript ');
}

function loadIframe_45(box) {
  loadIframe(box, ' https://www.youtube.com/embed/UkbmmtvxpXA?si=VBPZQ-gJnZVUVQbT', ' Ep.44 | Some and Every Array Method in JavaScript');
}

function loadIframe_46(box) {
  loadIframe(box, ' https://www.youtube.com/embed/E59DytaXTio?si=1FHqbUkGLhbPoZiT', ' Ep.45 | Arguments Keyword in JavaScript ');
}

function loadIframe_47(box) {
  loadIframe(box, ' https://www.youtube.com/embed/r7I1ViZR08o?si=HMgNg0ezS1mPniY0 ', 'Ep.46 | Default Parameters in JavaScript | ES6');
}

function loadIframe_48(box) {
  loadIframe(box, 'https://www.youtube.com/embed/AK5XHPZgfUg?si=Lk1qjebIPia1GJiZ ', ' Ep.47 | Spread Operator');
}

function loadIframe_49(box) {
  loadIframe(box, 'https://www.youtube.com/embed/-DZmZq2hyCY?si=l6h7X1ohrB6KNbPY ', 'Ep.48 | Rest Parameters in JavaScript ');
}

function loadIframe_50(box) {
  loadIframe(box, 'https://www.youtube.com/embed/9dQ38beIC-M?si=56JE7CHlPmgEjwWE ', 'Ep.49 | Destructuring in JavaScript ');
}

function loadIframe_51(box) {
  loadIframe(box, 'https://www.youtube.com/embed/hyIBB48aAws?si=Uc-gWhbi8euMRK6o ', 'Ep.50 | What is BOM in JavaScript? | Window Object  ');
}

function loadIframe_52(box) {
  loadIframe(box, ' https://www.youtube.com/embed/m2TpNXtT4Cs?si=XyQpe7SmVfasKhIA ', 'Ep.51 | Introduction to DOM | Document Object Model  ');
}

function loadIframe_53(box) {
  loadIframe(box, 'https://www.youtube.com/embed/fOKfCNk7TMA?si=j_3WohBaWgriIAjF ', 'Ep.52 | Selecting Elements in JavaScript | DOM Manipulation ');
}

function loadIframe_54(box) {
  loadIframe(box, ' https://www.youtube.com/embed/83u35YfNE1w?si=UlNoOlF2eAChnxPr', 'Ep.53 | Difference between innerText and textContent in JavaScript ');
} 

function loadIframe_55(box) {
  loadIframe(box, ' https://www.youtube.com/embed/38mNZls3lUU?si=hCP_dTMnI2kcJxkQ', 'Ep.54 | getAttribute and setAttribute in JavaScript  ');
}

function loadIframe_56(box) {
  loadIframe(box, 'https://www.youtube.com/embed/KW9DiBSVC_c?si=WzqyI8cODuYjh9XD ', 'Ep.55 | How to apply styles in JavaScript ');
}

function loadIframe_57(box) {
  loadIframe(box, ' ', 'Ep.56 |  ');
} 

function loadIframe_58(box) {
  loadIframe(box, ' ', 'Ep.57 |  ');
}

function loadIframe_59(box) {
  loadIframe(box, ' ', 'Ep.58 |  ');
}

function loadIframe_60(box) {
  loadIframe(box, ' ', 'Ep.59 |  ');
} 

function loadIframe_61(box) {
  loadIframe(box, ' ', 'Ep.60 |  ');
}

function loadIframe_62(box) {
  loadIframe(box, ' ', 'Ep.61 |  ');
}

function loadIframe_63(box) {
  loadIframe(box, ' ', 'Ep.62 |  ');
} 

function loadIframe_64(box) {
  loadIframe(box, ' ', 'Ep.63 |  ');
}

function loadIframe_65(box) {
  loadIframe(box, ' ', 'Ep.64 |  ');
}

function loadIframe_66(box) {
  loadIframe(box, ' ', 'Ep.65 |  ');
} 


function loadIframe_67(box) {
  loadIframe(box, ' ', 'Ep.66 |  ');
}

function loadIframe_68(box) {
  loadIframe(box, ' ', 'Ep.67 |  ');
}

function loadIframe_69(box) {
  loadIframe(box, ' ', 'Ep.68 |  ');
} 

function loadIframe_70(box) {
  loadIframe(box, ' ', 'Ep.69 |  ');
} 

function loadIframe_71(box) {
  loadIframe(box, ' ', 'Ep.70 |  ');
} 



 



// Learn JS By Shradha Mam****************************************

function loadIframe_s1(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/ajdRvxDWH4w?si=ipSLjqWSpm0QUI5r ',
    'Lecture 1 :  Variables & Data Types '
  );
}

function loadIframe_s2(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/Zg4-uSjxosE?si=TkLiqg_y9qmdFHZ3',
    ' Lecture 2 : Operators and Conditional Statements'
  );
}

function loadIframe_s3(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/UmRtFFSDSFo?si=NlHnIg94vshvuxV-',
    'Lecture 3: Loops and Strings '
  );
}

function loadIframe_s4(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/gFWhbjzowrM?si=8LSJwjtF8Z6lZkhx ',
    'Lecture 4: Arrays '
  );
}

function loadIframe_s5(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/P0XMXqDGttU?si=mXDsobfGaIxSu8rf',
    'Lecture 5: Functions & Methods '
  );
}

function loadIframe_s6(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/7zcXPCt8Ck0?si=vFRT4esCm1pkuSDL',
    ' Lecture 6 : DOM - Document Object Model'
  );
}

function loadIframe_s7(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/fXAGTOZ25H8?si=1aZG-5-xneElJB1n ',
    'Lecture 7 : DOM (Part 2) | Document Object Model '
  );
}

function loadIframe_s8(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/_i-uLJAh79U?si=Nrfzi3sH6qopRrjL ',
    ' Lecture 8 : Events in JavaScript '
  );
}
function loadIframe_s9(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/SqrppLEljkY?si=DhwdSBIm8U8va9pS',
    ' Lecture 9 : Tic Tac Toe Game in JavaScript '
  );
}

function loadIframe_s10(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/_V33HCZWLDQ?si=gSMknegvs1Aa1m7H ',
    ' Lecture 10 : MiniProject - Stone, Paper & Scissors Game'
  );
}

function loadIframe_s11(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/N-O4w6PynGY?si=mJfn-bXriucskyrw',
    ' Lecture 11 : Classes & Objects'
  );
}

function loadIframe_s12(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/d3jXofmQm44?si=D9NBJdKI9b-ZaBHG',
    'Lecture 12 : Callbacks, Promises & Async Await  '
  );
}

function loadIframe_s13(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/CyGodpqcid4?si=N1BP93Jz1QVSLamf',
    ' Last Lecture : Fetch API with Project '
  );
}

// Thapa Technical/......................................................

function loadIframeThapaTs_1(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/Xciunyug99U?si=S4Vm6sfOB1sWLKI3 ',
    ' Lecture 1 : Introduction to Typescript with Advantages & Disadvantages  '
  );
}

function loadIframeThapaTs_2(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/JXiGf9eazvc?si=_7lMKoQOJ0nCovfG ',
    ' Lecture 2 : Prerequisites, Installation and First Program in Typescript  '
  );
}

function loadIframeThapaTs_3(box) {
  loadIframe(
    box,
    '  https://www.youtube.com/embed/Ek0LMDfTupE?si=Fze0eSMkM5i3fyTe',
    ' Lecture 3: Deep Dive into TS Code, Catching Errors & Solving & TS Config File'
  );
}

function loadIframeThapaTs_4(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/gCv2Fyth33A?si=zM-cWKLq-uUNfAAZ ',
    ' Lecture 4: Mastering Type Annotations in TS with Practical Examples and In-depth Q&A '
  );
}

function loadIframeThapaTs_5(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/6iZJiJH8CPU?si=uyZi_0Y4xVDkYHH- ',
    ' Lecture 5: Typescript Boolean and Bigint Types with Practical Examples '
  );
}

function loadIframeThapaTs_6(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/A8djjeABV-4?si=GQq4rPWQz8P-0urq ',
    ' Lecture 6 : Differences ANY vs UNKOWN Types with Practical Examples '
  );
}

function loadIframeThapaTs_7(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/yYgLCHSyw7Q?si=vpDGlcNDu2df8a8O ',
    ' Lecture 7 : TypeScript Function Mastery: Understanding Invocation, Declaration, and Return Types '
  );
}

function loadIframeThapaTs_8(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/QJLMZyZt89c?si=ngC3RLC-MsuZusd ',
    '  Lecture 8 : TypeScript Type Inference: Ask in Interview Question with Best Practices'
  );
}
function loadIframeThapaTs_9(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/GJlAshOHMA8?si=KZv-IxhS6UEzA_8Z ',
    '  Lecture 9 : Understanding Optional and Default Parameters in TypeScript Functions  '
  );
}

function loadIframeThapaTs_10(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/dX_Z5DMkZ8Q?si=kWsfyFqLW0WXDwc4 ',
    ' Lecture 10 : Initializing, Accessing, and Checking Length of an Array '
  );
}

function loadIframeThapaTs_11(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/RRaZzF6xIOU?si=KB3rcoiimooOSfi0 ',
    ' Lecture 11 : Methods and Iterations Explained with Practical Examples '
  );
}

function loadIframeThapaTs_12(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/BSBc8EMlzdE?si=mWqlyQgMxAPSoWG3 ',
    ' Lecture 12 :  TypeScript Array Map and Filter Methods Explained with Examples  '
  );
}

function loadIframeThapaTs_13(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/IA1KlkmeqmA?si=i6qULcWui_GaixpB ',
    ' Lecture 13: TypeScript Objects Explained  '
  );
}

// ................

function loadIframeThapaTs_14(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/fVSW3N6Oobw?si=0J7CvE42qLsIByZM',
    'Lecture 14: TypeScript Type Aliases: Making Your Code Easier to Read & Maintain'
  );
}

function loadIframeThapaTs_15(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/cA7Pqw72LAQ?si=jsUCE2MS3CPqgaA0 ',
    'Lecture 15: Call Signatures in TypeScript with Real-life Examples & Best Practices  '
  );
}

function loadIframeThapaTs_16(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/J3DcFIFE7SE?si=TerGs6xSMMFxWmfE ',
    ' Lecture 16 : Enums in Typescript Explained with Real-life Examples 👉 Used in Thapa Technical Website'
  );
}

function loadIframeThapaTs_17(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/Rlz01xQFWUc?si=XFFOdjE_DRv9AWWd ',
    ' Lecture 17 : TypeScript Tuples🔥Mastering Data Structures| Best Practices & Examples '
  );
}

function loadIframeThapaTs_18(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/GDQhJtDOa64?si=L12sKELLpBDd5O4X',
    '  Lecture 18 :  Unions and Intersections'
  );
}
function loadIframeThapaTs_19(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/Gw-0ZlFkvFI?si=NKwIORcpjhinrlwV  ',
    ' Lecture 19 : Generics in Typescript  '
  );
}

function loadIframeThapaTs_20(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/MorYwVBb-b0?si=ur4lh4UiKlrJVBOK',
    ' Lecture 20 : Solving Function Overloading with TS Generics: Mastering Multiple Type Variables like a Pro  '
  );
}

function loadIframeThapaTs_21(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/VjWNfPF0nwY?si=F-dO13h-Q9JcqLTW',
    ' Lecture 21 :TypeScript Interface - Defining Contracts for Objects & Classes '
  );
}

function loadIframeThapaTs_22(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/t1orwXRZ-7k?si=0gCHy_Ny_dL7hYaD ',
    ' Lecture 22 :  TypeScript Compiler & Project Configuration Explained 🚀 Watch Mode, rootDir, Lib, and More! '
  );
}

function loadIframeThapaTs_23(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/XeW_FHbxzT4?si=djZiHgUkb0T6S0mT ',
    ' Lecture 23: Create a TypeScript Website with GitHub API & Search Functionality  '
  );
}

// ......................

function loadIframeThapaTs_24(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/UhFvPzq7isQ?si=c6e80GioRzUG61Ac ',
    ' Lecture 24: TypeScript Object-Oriented Programming Tutorial👉 Understanding Classes and Constructors  '
  );
}

function loadIframeThapaTs_25(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/oFTbcECOaVk?si=E_3GDsF88dKNgtx9 ',
    ' Lecture 25: Inheritance in TypeScript in Hindi | Extends & Super Keyword with Real Life Example '
  );
}

function loadIframeThapaTs_26(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/bC_-FIRUOpw?si=I5AvRCTpm2nws3Jl ',
    'Lecture 26 : Public, Protected & Private🔒Access Modifiers in Object-Oriented Programming in TypeScript '
  );
}

function loadIframeThapaTs_27(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/Gs1ICYpRRSU?si=SuZQk4Nd1IHYumeP ',
    ' Lecture 27 :  Shorthand Properties in Classes You are Waiting For | OOPs in TypeScript '
  );
}

function loadIframeThapaTs_28(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/2P4Y2D64rY4?si=rcKOT9idocjDM0SW',
    '  Lecture 28 : Mastering Getter and Setter Methods in TypeScript Classes | Explained with Examples'
  );
}
function loadIframeThapaTs_29(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/tnFK1stXQ2U?si=p7bF4mN7n2gornya  ',
    '  Lecture 29 : Building Bank Account & Temperature Converter Apps in TypeScript | Practice Time  '
  );
}

function loadIframeThapaTs_30(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/ecWEgoAtWcA?si=47WEO7XG79_a6gyo',
    ' Lecture 30 : Static Properties and Methods in TypeScript Explained with Real-Life Examples   '
  );
}

function loadIframeThapaTs_31(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/uHtK7YILpSo?si=FqOTd301Xfq6iwyE',
    ' Lecture 31 : Abstract Classes in TypeScript in Hindi 👉 with Real-life Examples '
  );
}

function loadIframeThapaTs_32(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/iV1LeuJQGwE?si=EbXgQpfsBwZ-CL15',
    ' Lecture 32 :  Types vs. Interfaces in TypeScript 👉 When & Where to Use Differences with Examples  '
  );
}

function loadIframeThapaTs_33(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/-pRUnmZqPQI?si=qOUcioVNBwpyVTGT ',
    ' Lecture 33:  Type Safety with Typeof Guards: Understanding Type Narrowing in TypeScript '
  );
}

function loadIframeThapaTs_34(box) {
  loadIframe(
    box,
    'https://www.youtube.com/embed/wTHgCvHEOCk?si=WeCmbO5wc7qR_mUJ ',
    ' Lecture 34:  Should I use Functions or Classes in TypeScript for MERN & Front-End Projects '
  );
}

function loadIframeThapaTs_35(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/LvUlBl5uetE?si=nDCwKV57b6WwS0f_',
    ' Lecture 35: Create Website using HTML, CSS & TypeScript with Parcel in Hindi🔥 Beginners Complete Guide '
  );
}

function loadIframeThapaTs_36(box) {
  loadIframe(
    box,
    ' https://www.youtube.com/embed/HyYBveoqTIM?si=GV46bKfP4oCMeZTP ',
    ' Lecture 36 :VS Code Best Hidden Feature You Dont know Exists 🚀To Boost Your Coding Skills - Inlay Hints   '
  );
}




// practise


 