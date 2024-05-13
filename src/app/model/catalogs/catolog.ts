export class Catolog {

    constructor(
       public id:number,
       readonly nom: string,
       public prix: number|undefined = undefined,
       public enPromo:boolean = false,
      ) {} 
}
