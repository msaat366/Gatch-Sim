let store;               
//80 + 18.018+2
     function summon() {
        let jutsu3 = ["https://i.imgur.com/hZagDsTl.png" ,"https://i.imgur.com/lEvYztjl.png" ,"https://i.imgur.com/zTN3Wcil.jpg" ,"https://i.imgur.com/EdOseWZl.jpg","wanderingsasuke.jpg" ,"https://i.imgur.com/A60SxxHl.jpg" ,"https://i.imgur.com/rLx33Iml.jpg" ,"hiddenpowerofsixpaths.jpg" ,"https://i.imgur.com/kchO5Whl.jpg" ,"https://i.imgur.com/tHoq6Upl.jpg" ,"fourthhokage.jpg" ,"https://i.imgur.com/Q2OCWgnl.png","https://i.imgur.com/0r50znNl.jpg" ,"itbegins.jpg" ,"https://i.imgur.com/hEStSbQl.png" ,"https://i.imgur.com/GO0YxHdl.png","daruipace.jpg" ,"https://i.imgur.com/hOcHTE3l.png" ,"https://i.imgur.com/U033uBLl.png" ,"lightanddarkness.jpg","https://i.imgur.com/q7mCXB3l.png" ,"https://i.imgur.com/g3ZuZTfl.png" ,"youarenotsoyoung.jpg" ,"https://i.imgur.com/HOEAXdVl.jpg","https://i.imgur.com/wxrAadKl.png" ,"signsofcounterattack.jpg" ,"https://i.imgur.com/eJNmvhSl.jpg" ,"https://i.imgur.com/mo8XWNwl.jpg","torestoretheuchiha.jpg" ,"https://i.imgur.com/vEMV7r9l.jpg" ,"https://i.imgur.com/4X2ua48l.jpg" ,"piecesontheboard.jpg","https://i.imgur.com/1jLxcabl.jpg" ,"https://i.imgur.com/73pou7Nl.jpg" ,"strategymeeting.jpg" ,"https://i.imgur.com/m6CHOTFl.jpg","https://i.imgur.com/vSsDhfel.jpg" ,"withfieryspirit.jpg" ,"https://i.imgur.com/CLeywlLl.jpg" ,"https://i.imgur.com/POdtpQyl.jpg"];
        let jutsu4 = ["https://i.imgur.com/PRtw2GFl.png" ,"https://i.imgur.com/svt0P9Il.jpg" ,"https://i.imgur.com/NoeTFULl.jpg" ,"https://i.imgur.com/jBByfsXl.png" ,"https://i.imgur.com/3cCEYupl.png" ,"https://i.imgur.com/CkV4tmGl.jpg" ,"https://i.imgur.com/rKgR0v7l.jpg" ,"https://i.imgur.com/ZwF2gT9l.jpg" ,"https://i.imgur.com/q9LGXCal.png" ,"https://i.imgur.com/Lx9UGsal.png" ,"https://i.imgur.com/QR02Zhol.jpg" ,"https://i.imgur.com/sxWk7N9l.jpg" ,"https://i.imgur.com/5yeidWbl.jpg" ,"https://i.imgur.com/SEMS5CJl.jpg" ,"https://i.imgur.com/yUBL69Wl.jpg" ,"https://i.imgur.com/ZBczzwFl.jpg" ,"https://i.imgur.com/rRTgT8tl.jpg" ,"https://i.imgur.com/iypd3b4l.jpg" ,"https://i.imgur.com/orgngJEl.jpg" ,"https://i.imgur.com/yrgJty0l.jpg" ,"https://i.imgur.com/Okte0Exl.png" ,"https://i.imgur.com/hGbsa7sl.png" ,"https://i.imgur.com/63fHGDkl.jpg" ,"https://i.imgur.com/YjjiMM3l.png" ,"https://i.imgur.com/p4OBL8Hl.jpg" ,"https://i.imgur.com/ulpCfoJl.jpg" ,"https://il.imgur.com/rEmEP26l.jpg" ,"https://i.imgur.com/9d4Ojcml.jpg" ,"https://i.imgur.com/DU8MWvWl.jpg" ,"https://i.imgur.com/j7G4K4Il.jpg" ,"https://i.imgur.com/yBdBMwml.png" ,"https://i.imgur.com/qlwmOuTl.png" ,"https://i.imgur.com/k2T7atZl.jpg" ,"https://i.imgur.com/ypjcU1Xl.jpg" ,"https://i.imgur.com/hsaFhcfl.jpg" ,"https://i.imgur.com/IjffuZzl.jpg",
    "https://i.imgur.com/0sl7Q40l.jpg" ,"https://i.imgur.com/14xPstDl.jpg" ,"https://i.imgur.com/CpotEIFl.png" ,"https://i.imgur.com/5eu8dXsl.png" ,"https://i.imgur.com/5NMxUlll.jpg" ,"https://i.imgur.com/uFNM1z7l.jpg" ,"https://i.imgur.com/79BXCa1l.jpg" ,"https://i.imgur.com/YfnR8x6l.png" ,"https://i.imgur.com/qCyv5ZXl.png" ,"https://i.imgur.com/WVJauOxl.jpg" ,"https://i.imgur.com/umHBdeul.png" ,"https://i.imgur.com/8KFYYBll.jpg" ,"https://i.imgur.com/qPxJkMFl.jpg" ,"https://i.imgur.com/TIC7SbSl.png" ,"https://i.imgur.com/wAcEAFYl.jpg" ,"https://i.imgur.com/qxGaGGVl.jpg" ,"https://i.imgur.com/7MWfVQBl.jpg" ,"https://i.imgur.com/IdDhWThl.jpg" ,"https://i.imgur.com/GTWvx8Gl.png" ,"https://i.imgur.com/23eqzxll.jpg" ,"https://i.imgur.com/ixr2NWTl.jpg" ,"https://i.imgur.com/wYGO847l.jpg" ,"https://i.imgur.com/s0H0JDcl.jpg" ,"https://i.imgur.com/dNvkjBkl.jpg" ,"https://i.imgur.com/5cOAOtYl.jpg" ,"https://i.imgur.com/MYCamJEl.jpg" ,"https://i.imgur.com/0pBuAYfl.jpg" ,"https://i.imgur.com/PI5cddZl.jpg" ,"https://i.imgur.com/i4Z5rsNl.jpg" ];
    let jutsu5 = ["https://i.imgur.com/yWQtO1al.png" ,"https://i.imgur.com/fmJ6yzcl.png" ,"https://i.imgur.com/fx9d8fFl.png" ,"https://i.imgur.com/4ssM44dl.jpg" ,"https://i.imgur.com/RaGYlk5l.jpg" ,"https://i.imgur.com/ykenv2ol.png" ,"https://i.imgur.com/tJm5EA0l.jpg" ,"https://i.imgur.com/Ny48cbxl.jpg" ,"https://i.imgur.com/Cc515qVl.jpg" ,"https://i.imgur.com/ahDIv5zl.jpg" ,"https://i.imgur.com/JSLlIbbl.jpg" ,"https://i.imgur.com/OnHiEI6l.jpg" ,"https://i.imgur.com/JnF1BD8l.png" ,"https://i.imgur.com/kVXVW2al.png" ,"https://i.imgur.com/txNpIntl.png" ,"https://i.imgur.com/56TH37El.jpg" ,"https://i.imgur.com/t6oxLyjl.jpg" ,"https://i.imgur.com/K9rPLsHl.jpg" ,"https://i.imgur.com/T1bFSEGl.jpg" ,"https://i.imgur.com/DIC6HfLl.jpg" ,"https://i.imgur.com/0B4qbmBl.png" ,"https://i.imgur.com/acbIILGl.jpg" ,"https://i.imgur.com/XBh8NjYl.png" ,"https://i.imgur.com/ozNaqxSl.jpg" ,"https://i.imgur.com/IbOVUCkl.png" ,"https://i.imgur.com/WaAaYSDl.jpg" ,"https://i.imgur.com/Kz2ngp2l.jpg" ,"https://i.imgur.com/L5gbwPRl.jpg" ,"https://i.imgur.com/weioVCZl.jpg" ,"https://i.imgur.com/TVZiTHEl.png"
    ,"https://i.imgur.com/yw2h17rl.jpg" ,"https://i.imgur.com/EBq8Eitl.jpg" ,"https://i.imgur.com/WZ28k8Hl.jpg" ,"https://i.imgur.com/0jRfGiwl.jpg" ,"https://i.imgur.com/o05LemYl.png" ,"https://i.imgur.com/0iN0800l.jpg" ,"https://i.imgur.com/coGDgj4l.jpg" ,"https://i.imgur.com/ZweFqzol.jpg" ,"https://i.imgur.com/tbEt1lol.jpg" ,"https://i.imgur.com/xPsejldl.jpg"];
    let i, j ,k=0;
    let num = Math.random() * 100 + 0.018;
    console.log(num);
    if (num <= 80) {
        for (i = 2; i <= 80; i += 2) {
            for (j = 0; j < i; j += 2) {
                if (num > j && num <= i) {
                    store = jutsu3[k];  
                    console.log(k);
                    break;
                } 
            }
            k++;
            if (num > j && num <= i) {
                break;
            }
        }
    }
    else if (num > 80 && num <= 98.018) {
        for (i = 80.273; i <= 98.018; i += 0.273) {
            for (j = 80; j < i; j += 0.273) {
                if (num > j && num <= i) {
                    store = jutsu4[k];  
                    console.log(k);
                    break;
                } 
            }
            k++;
            if (num > j && num <= i) {
                break;
            }
        }
    }
    else {
        for (i = 98.068; i < 100.018; i += 0.050) {
            for (j = 98.018; j < i; j += 0.050) {
                if (num > j && num <= i) {
                    store = jutsu5[k];  
                    console.log(k);
                    break;
                } 
            }
            k++;
            if (num > j && num <= i) {
                break;
            }
        }
    }
}

function summon1()
{   
    img = document.getElementById("summon1t"); 
    summon();
    img.src = store;
}

function summon10()
{
    let display = document.getElementsByClassName("same");
    for(let i = 0 ;i < display.length ;i++)
    {
        setTimeout(() => {
            console.log(i);
            summon();
            display[i].style.backgroundImage = `url(${store})`;
        }, i * 500);

    }
}