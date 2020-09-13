let store;               
//80 + 18.018+2
     function summon() {
        let jutsu3 = ["https://i.imgur.com/hZagDsT.png" ,"https://i.imgur.com/lEvYztj.png" ,"https://i.imgur.com/zTN3Wci.jpg" ,"https://i.imgur.com/EdOseWZ.jpg","wanderingsasuke.jpg" ,"https://i.imgur.com/A60SxxH.jpg" ,"https://i.imgur.com/rLx33Im.jpg" ,"hiddenpowerofsixpaths.jpg" ,"https://i.imgur.com/kchO5Wh.jpg" ,"https://i.imgur.com/tHoq6Up.jpg" ,"fourthhokage.jpg" ,"https://i.imgur.com/Q2OCWgn.png","https://i.imgur.com/0r50znN.jpg" ,"itbegins.jpg" ,"https://i.imgur.com/hEStSbQ.png" ,"https://i.imgur.com/GO0YxHd.png","daruipace.jpg" ,"https://i.imgur.com/hOcHTE3.png" ,"https://i.imgur.com/U033uBL.png" ,"lightanddarkness.jpg","https://i.imgur.com/q7mCXB3.png" ,"https://i.imgur.com/g3ZuZTf.png" ,"youarenotsoyoung.jpg" ,"https://i.imgur.com/HOEAXdV.jpg","https://i.imgur.com/wxrAadK.png" ,"signsofcounterattack.jpg" ,"https://i.imgur.com/eJNmvhS.jpg" ,"https://i.imgur.com/mo8XWNw.jpg","torestoretheuchiha.jpg" ,"https://i.imgur.com/vEMV7r9.jpg" ,"https://i.imgur.com/4X2ua48.jpg" ,"piecesontheboard.jpg","https://i.imgur.com/1jLxcab.jpg" ,"https://i.imgur.com/73pou7N.jpg" ,"strategymeeting.jpg" ,"https://i.imgur.com/m6CHOTF.jpg","https://i.imgur.com/vSsDhfe.jpg" ,"withfieryspirit.jpg" ,"https://i.imgur.com/CLeywlL.jpg" ,"https://i.imgur.com/POdtpQy.jpg"];
        let jutsu4 = ["https://i.imgur.com/PRtw2GF.png" ,"https://i.imgur.com/svt0P9I.jpg" ,"https://i.imgur.com/NoeTFUL.jpg" ,"https://i.imgur.com/jBByfsX.png" ,"https://i.imgur.com/3cCEYup.png" ,"https://i.imgur.com/CkV4tmG.jpg" ,"https://i.imgur.com/rKgR0v7.jpg" ,"https://i.imgur.com/ZwF2gT9.jpg" ,"https://i.imgur.com/q9LGXCa.png" ,"https://i.imgur.com/Lx9UGsa.png" ,"https://i.imgur.com/QR02Zho.jpg" ,"https://i.imgur.com/sxWk7N9.jpg" ,"https://i.imgur.com/5yeidWb.jpg" ,"https://i.imgur.com/SEMS5CJ.jpg" ,"https://i.imgur.com/yUBL69W.jpg" ,"https://i.imgur.com/ZBczzwF.jpg" ,"https://i.imgur.com/rRTgT8t.jpg" ,"https://i.imgur.com/iypd3b4.jpg" ,"https://i.imgur.com/orgngJE.jpg" ,"https://i.imgur.com/yrgJty0.jpg" ,"https://i.imgur.com/Okte0Ex.png" ,"https://i.imgur.com/hGbsa7s.png" ,"https://i.imgur.com/63fHGDk.jpg" ,"https://i.imgur.com/YjjiMM3.png" ,"https://i.imgur.com/p4OBL8H.jpg" ,"https://i.imgur.com/ulpCfoJ.jpg" ,"https://i.imgur.com/rEmEP26.jpg" ,"https://i.imgur.com/9d4Ojcm.jpg" ,"https://i.imgur.com/DU8MWvW.jpg" ,"https://i.imgur.com/j7G4K4I.jpg" ,"https://i.imgur.com/yBdBMwm.png" ,"https://i.imgur.com/qlwmOuT.png" ,"https://i.imgur.com/k2T7atZ.jpg" ,"https://i.imgur.com/ypjcU1X.jpg" ,"https://i.imgur.com/hsaFhcf.jpg" ,"https://i.imgur.com/IjffuZz.jpg",
    "https://i.imgur.com/0sl7Q40.jpg" ,"https://i.imgur.com/14xPstD.jpg" ,"https://i.imgur.com/CpotEIF.png" ,"https://i.imgur.com/5eu8dXs.png" ,"https://i.imgur.com/5NMxUll.jpg" ,"https://i.imgur.com/uFNM1z7.jpg" ,"https://i.imgur.com/79BXCa1.jpg" ,"https://i.imgur.com/YfnR8x6.png" ,"https://i.imgur.com/qCyv5ZX.png" ,"https://i.imgur.com/WVJauOx.jpg" ,"https://i.imgur.com/umHBdeu.png" ,"https://i.imgur.com/8KFYYBl.jpg" ,"https://i.imgur.com/qPxJkMF.jpg" ,"https://i.imgur.com/TIC7SbS.png" ,"https://i.imgur.com/wAcEAFY.jpg" ,"https://i.imgur.com/qxGaGGV.jpg" ,"https://i.imgur.com/7MWfVQB.jpg" ,"https://i.imgur.com/IdDhWTh.jpg" ,"https://i.imgur.com/GTWvx8G.png" ,"https://i.imgur.com/23eqzxl.jpg" ,"https://i.imgur.com/ixr2NWT.jpg" ,"https://i.imgur.com/wYGO847.jpg" ,"https://i.imgur.com/s0H0JDc.jpg" ,"https://i.imgur.com/dNvkjBk.jpg" ,"https://i.imgur.com/5cOAOtY.jpg" ,"https://i.imgur.com/MYCamJE.jpg" ,"https://i.imgur.com/0pBuAYf.jpg" ,"https://i.imgur.com/PI5cddZ.jpg" ,"https://i.imgur.com/i4Z5rsN.jpg" ];
    let jutsu5 = ["https://i.imgur.com/yWQtO1a.png" ,"https://i.imgur.com/fmJ6yzc.png" ,"https://i.imgur.com/fx9d8fF.png" ,"https://i.imgur.com/4ssM44d.jpg" ,"https://i.imgur.com/RaGYlk5.jpg" ,"https://i.imgur.com/ykenv2o.png" ,"https://i.imgur.com/tJm5EA0.jpg" ,"https://i.imgur.com/Ny48cbx.jpg" ,"https://i.imgur.com/Cc515qV.jpg" ,"https://i.imgur.com/ahDIv5z.jpg" ,"https://i.imgur.com/JSLlIbb.jpg" ,"https://i.imgur.com/OnHiEI6.jpg" ,"https://i.imgur.com/JnF1BD8.png" ,"https://i.imgur.com/kVXVW2a.png" ,"https://i.imgur.com/txNpInt.png" ,"https://i.imgur.com/56TH37E.jpg" ,"https://i.imgur.com/t6oxLyj.jpg" ,"https://i.imgur.com/K9rPLsH.jpg" ,"https://i.imgur.com/T1bFSEG.jpg" ,"https://i.imgur.com/DIC6HfL.jpg" ,"https://i.imgur.com/0B4qbmB.png" ,"https://i.imgur.com/acbIILG.jpg" ,"https://i.imgur.com/XBh8NjY.png" ,"https://i.imgur.com/ozNaqxS.jpg" ,"https://i.imgur.com/IbOVUCk.png" ,"https://i.imgur.com/WaAaYSD.jpg" ,"https://i.imgur.com/Kz2ngp2.jpg" ,"https://i.imgur.com/L5gbwPR.jpg" ,"https://i.imgur.com/weioVCZ.jpg" ,"https://i.imgur.com/TVZiTHE.png"
    ,"https://i.imgur.com/yw2h17r.jpg" ,"https://i.imgur.com/EBq8Eit.jpg" ,"https://i.imgur.com/WZ28k8H.jpg" ,"https://i.imgur.com/0jRfGiw.jpg" ,"https://i.imgur.com/o05LemY.png" ,"https://i.imgur.com/0iN0800.jpg" ,"https://i.imgur.com/coGDgj4.jpg" ,"https://i.imgur.com/ZweFqzo.jpg" ,"https://i.imgur.com/tbEt1lo.jpg" ,"https://i.imgur.com/xPsejld.jpg"];
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
        }, i * 700);

    }
}