import Component, { tracked } from '@glimmer/component';

const TRILLION_USD = 1000000000000;

// https://www.weforum.org/agenda/2018/04/the-worlds-biggest-economies-in-2018/
const economies = [
  {name: 'united states', size: 20.4, ownedPercentage: 0},
  {name: 'china', size: 14, ownedPercentage: 0},
  {name: 'japan', size: 5.1, ownedPercentage: 0},
  {name: 'germany', size: 4.2, ownedPercentage: 0},
  {name: 'united kingdom', size: 2.94, ownedPercentage: 0},
  {name: 'france', size: 2.93, ownedPercentage: 0},
  {name: 'india', size: 2.85, ownedPercentage: 0},
  {name: 'italy', size: 2.18, ownedPercentage: 0},
  {name: 'brazil', size: 2.14, ownedPercentage: 0},
  {name: 'canada', size: 1.8, ownedPercentage: 0}
];

export default class BtcPercent extends Component {

  @tracked btcAmount:number = 1;
  @tracked fiatAmount:number = 1;

  @tracked('fiatAmount')
  get economies() {
    const result = []; 
    for (const e of economies) {
      const obj = Object.assign({}, e);
      const size = e.size * TRILLION_USD;
      obj.ownedPercentage = (this.fiatAmount * 100) / size;
      result.push(obj);
    }

    return result;
  }

  fiatAmountKeyUp(event) {
    this.fiatAmount = event.target.value.trim();
  }

}
