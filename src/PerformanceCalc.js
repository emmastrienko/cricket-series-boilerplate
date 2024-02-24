
const PerformanceCalculator=(runs,balls)=>{
      if(runs>30 && balls<15) {
        const res = runs / balls;
        return res + res * 0.01;
      } else if(runs>50 && balls<20) {
        const res = runs / balls;
        return res + res * 0.1;
      } else if(runs>100 && balls<50) {
        const res = runs / balls;
        return res + res * 0.2;
      } else {
        return runs / balls;
      }
}

module.exports={PerformanceCalculator}
